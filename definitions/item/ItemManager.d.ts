/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Human from "entity/Human";
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import { Quality } from "game/IObject";
import Island from "game/Island";
import { ContainerReference, IContainable, IContainer, IItemDescription, IItemWeightComponent, ItemType, ItemTypeGroup } from "item/IItem";
import { CraftStatus, RequirementInfo, WeightType } from "item/IItemManager";
import Item from "item/Item";
import Message from "language/dictionary/Message";
import Translation, { TextContext } from "language/Translation";
import { ITile, TerrainType } from "tile/ITerrain";
export interface IItemManagerEvents {
    create(item: Item): any;
    remove(item: Item): any;
    canMoveItem(human: Human | undefined, item: Item, toContainer: IContainer): boolean | undefined;
    canMoveItems(human: Human | undefined, fromContainer: IContainer, toContainer: IContainer, itemType: ItemType | undefined, ofQuality: Quality | undefined): boolean | undefined;
    /**
     * Called when an item is removed from a container.
     * @param item The item object
     * @param previousContainer The container object the item was removed from.
     */
    containerItemRemove(item: Item, previousContainer: IContainer): any;
    /**
     * Called when an item is moved from one container to another.
     * @param item The item object
     * @param containerFrom The container object the item was moved to. This container might be inventory or a container within the inventory.
     * @param containerTo The container object the item was moved to. This container might be inventory or a container within the inventory.
     */
    containerItemUpdate(item: Item, containerFrom: IContainer | undefined, containerTo: IContainer): any;
    /**
     * Called when an item is added to a container.
     * @param item The item object
     * @param container The container object the item was added to. This container might be inventory or a container within the inventory.
     */
    containerItemAdd(item: Item, container: IContainer): any;
}
export default class ItemManager extends EventEmitter.Host<IItemManagerEvents> {
    private readonly worldContainer;
    private cachedWeights;
    private cachedDefaultItemForGroup;
    private cachedBestItemForTier;
    private cachedItemGroups;
    private cachedItemTypes;
    private cachedItemTypesWithRecipes;
    private cachedItemSpawns;
    constructor();
    getItemTypes(): readonly ItemType[];
    getItemsWithRecipes(): readonly ItemType[];
    getBestItemForTier(item: ItemType | ItemTypeGroup): ItemType | undefined;
    getContainerReference(container: IContainer | undefined, parentObject?: any, showWarnings?: boolean): ContainerReference;
    derefenceContainerReference(containerRef: ContainerReference): object | undefined;
    addToContainerInternal(item: Item, container: IContainer, movingMultiple?: boolean, skipMessage?: boolean, updateTables?: boolean): boolean;
    removeContainerItems(container: IContainer, removeContainedItems?: boolean): void;
    exists(item: Item): boolean;
    remove(item: Item, removeContainedItems?: boolean): void;
    getDisassemblyComponents(description: IItemDescription, quality: Quality | undefined): Item[];
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup>;
    /**
     * Returns the "processed" weight of the given item.
     * - If the item is a "raw" item — ie, it was not created from other items, this is the `weightFraction` lerping the item's min & max weight.
     * - If the item is a "constructed" item — ie, it was created from other items, this is the processed weights of all component items added together.
     *
     * Processed item weights can also be "tweaked", such as weight additions or reductions.
     *
     * @deprecated This method currently shouldn't be used in production code, as it's to do with the new crafting system. Stay tuned.
     */
    getWeight(item: Item | IItemWeightComponent): number;
    /**
     * Uses the old system to get the weight of an item type.
     */
    getWeight(itemType: ItemType, weightType?: WeightType): number;
    weightTree(itemType: ItemType, weightType?: WeightType, debug?: boolean, depth?: number): number;
    create(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, container: IContainer | undefined, quality?: Quality, human?: Human, movingMultiple?: boolean, updateTables?: boolean): Item;
    createFake(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, quality?: Quality, human?: Human): Item;
    isContainer(obj: unknown): obj is IContainer;
    moveAllFromContainerToInventory(human: Human, container: IContainer, ofQuality?: Quality): Item[];
    computeContainerWeight(container: IContainer, player?: Player): number;
    getLegendaryWeightCapacity(container: IContainer): number;
    moveAllFromContainerToContainer(human: Human | undefined, fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType | undefined, ofQuality?: Quality | undefined, checkWeight?: boolean, filterText?: string | undefined, onMoveItem?: (item: Item) => void): Item[];
    moveToContainer(human: Human | undefined, item: Item, container: IContainer): boolean;
    hasRoomInContainer(extraWeight: number, container: IContainer, itemToMove?: Item): boolean;
    breakContainerOnTile(itemContainer: Item, x: number, y: number, z: number): void;
    /**
     * Drop items in a 3x3 square around the location
     */
    placeItemsAroundLocation(container: IContainer, x: number, y: number, z: number, skipMessage?: boolean): void;
    /**
     * Used to spawn a random item on the current biome type and at a set location (and terrain type) based on spawnOnWorldGen properties in item descriptions.
     * @param terrainType The terrain type to check.
     * @param x The x coordinate to check.
     * @param y The y coordinate to check.
     * @param z The z coordinate to check.
     */
    spawn(terrainType: TerrainType, x: number, y: number, z: number): void;
    getTileContainer(x: number, y: number, z: number, tile?: ITile): IContainer;
    getRandomQuality(bonusQuality?: number): Quality;
    hasAdditionalRequirements(human: Human, craftType: ItemType, message?: Message, faceDoodad?: boolean, isRepairOrDisassembly?: boolean): RequirementInfo;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: boolean, count?: number): Translation;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup | ItemType): boolean;
    craft(human: Human, itemType: ItemType, itemsToRequire: Item[], itemsToConsume: Item[], baseItem?: Item): CraftStatus;
    decayItems(pids: Set<number>): boolean;
    getPlayerWithItemInInventory(containable: IContainable): Player | undefined;
    getAbsentPlayerWithItemInInventory(containable: IContainable): Player | undefined;
    getNPCWithItemInInventory(containable: IContainable): NPC | undefined;
    countItemsInContainer(containers: IContainer | IContainer[], itemTypeSearch: ItemType, ignoreItem?: Item): number;
    countItemsInContainerByGroup(containers: IContainer | IContainer[], itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: Item): number;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: Item, allowProtectedItems?: boolean): Item | undefined;
    getItemForHuman(human: Human, search: ItemType | ItemTypeGroup, allowProtectedItems?: boolean): Item | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number, allowProtectedItems?: boolean): Item | undefined;
    getItemsInContainer(container: IContainer, includeSubContainers?: boolean, allowProtectedItems?: boolean): Item[];
    getItemsInContainerByType(container: IContainer, itemType: ItemType, includeSubContainers?: boolean, filterText?: string): Item[];
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, includeSubContainers?: boolean): Item[];
    getItemInInventoryByGroup(human: Human, itemTypeGroupSearch: ItemTypeGroup, ignoreItemId?: number): Item | undefined;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, ignoreItem?: Item): boolean;
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    getAdjacentContainers(human: Human, includeNpcs?: boolean, ignoreOptions?: boolean): IContainer[];
    isContainableInAdjacentContainer(player: Player, containable: IContainable, includeNpcs?: boolean, ignoreOptions?: boolean): boolean;
    isInInventory(containable: IContainable): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    getOrderedContainerItems(container: IContainer, allowProtectedItems?: boolean): Item[];
    reduceDismantleWeight(createdItems: Item[], itemWeight: number, mod?: number): void;
    getItemTranslations(items: Item[], article?: boolean, context?: TextContext): import("@wayward/goodstream/Stream").default<Translation>;
    getItemListTranslation(items: Item[], article?: boolean, context?: TextContext): Translation;
    loadReferences(generatedNewWorld: boolean, isTraveling: boolean): void;
    saveTileReferences(): void;
    loadTileReferences(): void;
    isGroup(item: ItemType | ItemTypeGroup): item is ItemTypeGroup;
    getGroupItems(itemGroup: ItemType | ItemTypeGroup, ancestorGroups?: ItemTypeGroup[]): Set<ItemType>;
    getGroupDefault(itemGroup: ItemTypeGroup, weightType?: WeightType, ancestorGroups?: ItemTypeGroup[]): ItemType;
    getGroups(itemType: ItemType): ItemTypeGroup[];
    checkMilestones(player: Player, item: Item): void;
    getDefaultDurability(human: Human | undefined, weight: number, itemType: ItemType, getMax?: boolean): number;
    generateLookups(): void;
    updateItemOrder(container: IContainer, itemOrder: number[] | undefined): void;
    getQualityBasedOnSkill(itemQuality: Quality | undefined, skillValue: number, allowIncreasedQuality?: boolean, bonusChance?: number): Quality | undefined;
    getNPCFromInventoryContainer(container: IContainer): NPC | undefined;
    getItemsByWeight(a: number, b: number): number;
    getItemsWeight(items: Item[]): number;
    copyProperties(item: Item, item2: Item): void;
    getPlayerFromInventoryContainer(container: IContainer): Player | undefined;
    /**
     * Moves all player items to the target island
     * This should be called before switching islands
     */
    movePlayerItemsToIsland(targetIsland: Island): void;
    getCraftQualityBonus(item: Item, required?: boolean): number;
    /**
     * Checks if the item type or item is filtered from inventory/crafting/container dialogs.
     * @param item The ItemType or Item to check.
     * @param filterText The string of text in which to filter for.
     * @param craftingFilter True if we are filtering the crafting dialog.
     */
    isFiltered(item: ItemType | Item, filterText: string, craftingFilter?: boolean): boolean;
    private getDefaultWeightRange;
    private updateItemOrderInternal;
    private loadReference;
    private removeFromContainerInternal;
    private updateUiOnItemRemove;
    private getCraftTierBonus;
    private computeCraftQualityBonus;
    private isCraftSuccessful;
    private getAbsentPlayerFromInventoryContainer;
}
