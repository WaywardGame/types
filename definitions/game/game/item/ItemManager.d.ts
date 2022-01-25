/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Doodad from "game/doodad/Doodad";
import type { IActionHandlerApi } from "game/entity/action/IAction";
import { ActionType } from "game/entity/action/IAction";
import Human from "game/entity/Human";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import { Quality } from "game/IObject";
import type { ContainerReference, IContainable, IContainer, IItemDescription, IItemWeightComponent } from "game/item/IItem";
import { ItemType, ItemTypeGroup } from "game/item/IItem";
import type { IAddToContainerOptions, IGetItemOptions, IGetItemsOptions, IRequirementInfo } from "game/item/IItemManager";
import { CraftStatus, WeightType, ContainerReferenceSource } from "game/item/IItemManager";
import Item from "game/item/Item";
import type ItemRecipeRequirementChecker from "game/item/ItemRecipeRequirementChecker";
import { ObjectManager } from "game/ObjectManager";
import type { ITile } from "game/tile/ITerrain";
import { TerrainType } from "game/tile/ITerrain";
import Message from "language/dictionary/Message";
import type { ListEnder } from "language/ITranslation";
import Translation from "language/Translation";
import type { IVector3 } from "utilities/math/IVector";
import Vector3 from "utilities/math/Vector3";
import type { Random } from "utilities/random/Random";
export interface IItemManagerEvents {
    create(item: Item): any;
    remove(item: Item): any;
    canMoveItem(human: Human | undefined, item: Item, toContainer: IContainer): boolean | undefined;
    canMoveItems(human: Human | undefined, fromContainer: IContainer, toContainer: IContainer, itemType: ItemType | undefined, ofQuality: Quality | undefined): boolean | undefined;
    /**
     * Called when an item is removed from a container.
     * @param item The item object.
     * @param container The container object the item was removed from.
     * @param containerPosition The psoition of that container when the remove occurred.
     */
    containerItemRemove(item: Item, container: IContainer | undefined, containerPosition: Vector3 | undefined): any;
    /**
     * Called when an item is moved from one container to another.
     * @param item The item object.
     * @param containerFrom The container object the item was moved to. This container might be inventory or a container within the inventory.
     * @param containerFromPosition The position of containerFrom when the update occurred.
     * @param containerTo The container object the item was moved to. This container might be inventory or a container within the inventory.
     */
    containerItemUpdate(item: Item, containerFrom: IContainer | undefined, containerFromPosition: Vector3 | undefined, containerTo: IContainer): any;
    /**
     * Called when an item is added to a container.
     * @param item The item object.
     * @param container The container object the item was added to. This container might be inventory or a container within the inventory.
     */
    containerItemAdd(item: Item, container: IContainer): any;
    /**
     * Called when a craft is "requested". This currently happens when clicking an item in the crafting dialog.
     * @param requirementsMet Whether the requirements are currently met. This hook is a `reduce` hook, so this will contain
     * whatever the result of the last hook host was, or the value of `checker.requirementsMet()`, by default.
     * @param item The item to be crafted.
     * @param checker The recipe requirement checker for this craft.
     */
    shouldCraft(requirementsMet: boolean, item: ItemType, checker: ItemRecipeRequirementChecker): boolean | undefined;
    /**
     * Called when an item is crafted
     * @param human The human object
     * @param item The item that was crafted
     */
    craft?(human: Human, item: Item): void;
}
export default class ItemManager extends ObjectManager<Item, IItemManagerEvents> {
    readonly worldContainer: IContainer;
    private static cachedWeights;
    private static cachedDefaultItemForGroup;
    private static cachedBestItemForTier;
    private static cachedHighestItemActionTierForAction;
    private static cachedItemGroups;
    private static cachedItemsThatAreAcceptedAsOffer;
    private static cachedItemsThatAreUsedInRecipes;
    private static cachedItemTypes;
    private static cachedItemTypesWithRecipes;
    private static cachedItemSpawns;
    static getItemTypes(): readonly ItemType[];
    static getItemsWithRecipes(): readonly ItemType[];
    static getBestItemForTier(item: ItemType | ItemTypeGroup): ItemType | undefined;
    static getHighestItemActionTierForAction(action: ActionType): number | undefined;
    static isItemAcceptedAsOffer(item: ItemType): boolean | undefined;
    static isItemUsedInRecipe(item: ItemType): boolean | undefined;
    static isGroup(item: ItemType | ItemTypeGroup): item is ItemTypeGroup;
    static isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup | ItemType): boolean;
    static getGroupItems(itemGroup: ItemType | ItemTypeGroup, ancestorGroups?: ItemTypeGroup[]): Set<ItemType>;
    static getPlayerFromInventoryContainer(containable: IContainable): Player | undefined;
    static getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: boolean, count?: number): Translation;
    static getGroupDefault(itemGroup: ItemTypeGroup, weightType?: WeightType, ancestorGroups?: ItemTypeGroup[]): ItemType;
    /**
     * Returns the "processed" weight of the given item.
     * - If the item is a "raw" item — ie, it was not created from other items, this is the `weightFraction` lerping the item's min & max weight.
     * - If the item is a "constructed" item — ie, it was created from other items, this is the processed weights of all component items added together.
     *
     * Processed item weights can also be "tweaked", such as weight additions or reductions.
     */
    /**
     * Uses the old system to get the weight of an item type.
     */
    static getWeight(itemType: ItemType | Item | IItemWeightComponent, random: Random | undefined, weightType?: WeightType): number;
    static weightTree(itemType: ItemType, random: Random | undefined, weightType?: WeightType, debug?: boolean, depth?: number): number;
    static getGroups(itemType: ItemType): ItemTypeGroup[];
    static generateLookups(): void;
    private static getDefaultWeightRange;
    load(): void;
    getPoint(itemOrContainer?: Item | IContainer): Vector3 | undefined;
    resolveContainer(container?: IContainer): Doodad | Item | Player | NPC | IContainer | ITile | undefined;
    getContainerReference(containable: IContainable | undefined, source: ContainerReferenceSource | undefined): ContainerReference;
    derefenceContainerReference(containerReference: ContainerReference, showWarnings?: boolean): IContainable | undefined;
    hashContainer(containable: IContainable): string;
    hashContainerReference(containerReference: ContainerReference): string;
    updateContainedWithin(containable: IContainable, containedWithin: IContainer | undefined): void;
    addToContainerInternal(item: Item, container: IContainer, options?: IAddToContainerOptions): boolean;
    removeContainerItems(container: IContainer, removeContainedItems?: boolean): void;
    exists(item: Item): boolean;
    remove(item: Item, removeContainedItems?: boolean): void;
    getDisassemblyComponents(description: IItemDescription, quality: Quality | undefined): Item[];
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup>;
    getWeightCapacity(container: IContainer, includeMagic?: boolean): number | undefined;
    create(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, container: IContainer | undefined, quality?: Quality, human?: Human, movingMultiple?: boolean, updateTables?: boolean): Item;
    createFake(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, quality?: Quality, human?: Human): Item;
    isContainer(obj: unknown): obj is IContainer;
    getContainedContainers(container: IContainer): IContainer[];
    moveAllFromContainerToInventory(human: Human, container: IContainer, ofQuality?: Quality): Item[];
    computeContainerWeight(container: IContainer): number;
    getMagicalWeightCapacity(container: IContainer): number;
    moveAllFromContainerToContainer(human: Human | undefined, fromContainer: IContainer, toContainer: IContainer, itemType?: ItemType | undefined, ofQuality?: Quality | undefined, checkWeight?: boolean, filterText?: string | undefined, onMoveItem?: (item: Item) => void): Item[];
    moveToContainer(human: Human | undefined, item: Item, container: IContainer): boolean;
    hasRoomInContainer(extraWeight: number, container: IContainer, itemToMove: Item): boolean;
    breakContainerOnTile(itemContainer: Item, x: number, y: number, z: number): void;
    /**
     * Drop items in a 3x3 square around the location
     */
    placeItemsAroundLocation(container: IContainer, x: number, y: number, z: number, skipMessage?: boolean): void;
    /**
     * Returns the "processed" weight of the given item.
     * - If the item is a "raw" item — ie, it was not created from other items, this is the `weightFraction` lerping the item's min & max weight.
     * - If the item is a "constructed" item — ie, it was created from other items, this is the processed weights of all component items added together.
     *
     * Processed item weights can also be "tweaked", such as weight additions or reductions.
     */
    /**
     * Uses the old system to get the weight of an item type.
     */
    getWeight(itemType: ItemType | Item | IItemWeightComponent, weightType?: WeightType): number;
    getItemTypes(): readonly ItemType[];
    getItemsWithRecipes(): readonly ItemType[];
    getBestItemForTier(item: ItemType | ItemTypeGroup): ItemType | undefined;
    isItemAcceptedAsOffer(item: ItemType): boolean | undefined;
    isItemUsedInRecipe(item: ItemType): boolean | undefined;
    isGroup(item: ItemType | ItemTypeGroup): item is ItemTypeGroup;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup | ItemType): boolean;
    getGroupItems(itemGroup: ItemType | ItemTypeGroup, ancestorGroups?: ItemTypeGroup[]): Set<ItemType>;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: boolean, count?: number): Translation;
    getGroupDefault(itemGroup: ItemTypeGroup, weightType?: WeightType, ancestorGroups?: ItemTypeGroup[]): ItemType;
    getGroups(itemType: ItemType): ItemTypeGroup[];
    getPlayerFromInventoryContainer(containable: IContainable): Player | undefined;
    /**
     * Used to spawn a random item on the current biome type and at a set location (and terrain type) based on spawnOnWorldGen properties in item descriptions.
     * @param terrainType The terrain type to check.
     * @param x The x coordinate to check.
     * @param y The y coordinate to check.
     * @param z The z coordinate to check.
     */
    spawn(terrainType: TerrainType, x: number, y: number, z: number): void;
    getTileContainer(x: number, y: number, z: number, tile?: ITile): IContainer;
    getRandomQuality(bonusQuality?: number, relicChance?: boolean): Quality;
    hasAdditionalRequirements(actionOrHuman: IActionHandlerApi<Player | NPC> | Human, craftType: ItemType, message?: Message, faceDoodad?: boolean, isRepairOrDisassembly?: boolean): IRequirementInfo;
    craft(action: IActionHandlerApi<Player | NPC>, itemType: ItemType, itemsToRequire: Item[], itemsToConsume: Item[], baseItem?: Item): CraftStatus;
    updateItems(pids: Set<number>, options: {
        skipPlayerItems?: boolean;
        skipUiUpdates?: boolean;
    }): boolean;
    updateItem(item: Item, isInInventory: boolean, skipUiUpdates?: boolean): boolean;
    getPlayerWithItemInInventory(containable: IContainable): Player | undefined;
    getAbsentPlayerWithItemInInventory(containable: IContainable): Player | undefined;
    getNPCWithItemInInventory(containable: IContainable): NPC | undefined;
    countItemsInContainer(containers: IContainer | IContainer[], itemTypeSearch: ItemType, ignoreItem?: Item): number;
    countItemsInContainerByGroup(containers: IContainer | IContainer[], itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: Item): number;
    /**
     * Get the best tier item
     */
    getBestSafeItemInContainerByUse(container: IContainer, action: ActionType, options?: Partial<IGetItemsOptions>, consumable?: boolean): Item | undefined;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, options?: Partial<IGetItemOptions>): Item | undefined;
    getItemForHuman(human: Human, search: ItemType | ItemTypeGroup, options?: Partial<IGetItemOptions>): Item | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, options?: Partial<IGetItemOptions>): Item | undefined;
    getItemInAdjacentContainersByGroup(position: IVector3, itemTypeGroupSearch: ItemTypeGroup): Item | undefined;
    getItemsInContainer(container: IContainer, options?: Partial<IGetItemsOptions>): Item[];
    getItemsInContainerByType(container: IContainer, itemType: ItemType, options?: Partial<IGetItemsOptions>, filterText?: string): Item[];
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, options?: Partial<IGetItemsOptions>): Item[];
    getItemInInventoryByGroup(human: Human, itemTypeGroupSearch: ItemTypeGroup, options?: Partial<IGetItemOptions>): Item | undefined;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, options?: Partial<IGetItemOptions>): boolean;
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    getAdjacentContainers(humanOrPosition: Human | IVector3, includeNpcs?: boolean, ignoreOptions?: boolean): IContainer[];
    isContainableInAdjacentContainer(player: Player, containable: IContainable, includeNpcs?: boolean, ignoreOptions?: boolean): boolean;
    isInInventory(containable: IContainable): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    /**
     * Returns ordered items for the containers
     * Note: It may return the real containedItems array!
     */
    getOrderedContainerItems(container: IContainer, options?: Partial<IGetItemOptions>): Item[];
    reduceDismantleWeight(createdItems: Item[], itemWeight: number): void;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count: number): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, article: boolean): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count: number, article: boolean): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count?: number, article?: boolean): Translation;
    getItemTypeListTranslation(itemTypes: Array<ItemType | ItemTypeGroup>): import("../../language/impl/TranslationImpl").default;
    /**
     * Maps each item in the given array to its name translation.
     * @param article Whether the item name translation should include an article
     * @param formatter A formatting translation that should be used for each item translation
     */
    getItemTranslations(items: Item[], article?: boolean, formatter?: Translation): import("../../language/impl/TranslationImpl").default[];
    /**
     * Formats a list translation out of an array of items.
     * @param listEnder The way the list should end (ie `and`, `or`, etc)
     */
    getItemListTranslation(items: Item[], listEnder?: ListEnder | false): import("../../language/impl/TranslationImpl").default;
    saveTileReferences(): void;
    checkMilestones(player: Player, item: Item): void;
    getDefaultDurability(human: Human | undefined, weight: number, itemType: ItemType, getMax?: boolean): number;
    updateItemOrder(container: IContainer, itemOrder: number[] | undefined): void;
    /**
     * Used in cases where we break items down from their base form like in dismantling or burning items.
     * @param itemQuality Quality of the base item.
     * @param bonusValue A number that we likely will be passing to getQualityBasedOnSkill and can be based on a skill or some arbitrary value.
     * @returns number That is distributed from the quality/value.
     */
    getBreakingQualityBonus(itemQuality: Quality | undefined, bonusValue: number): number;
    getQualityBasedOnSkill(itemQuality: Quality | undefined, skillValue: number, allowIncreasedQuality?: boolean, bonusChance?: number): Quality | undefined;
    getNPCFromInventoryContainer(containable: IContainable): NPC | undefined;
    getItemsByWeight(a: number, b: number): number;
    getItemsWeight(items: Item[]): number;
    copyProperties(item: Item, item2: Item): void;
    getCraftQualityBonus(item: Item, required?: boolean): number;
    /**
     * Checks if the item type or item is filtered from inventory/crafting/container dialogs.
     * @param item The ItemType or Item to check.
     * @param filterText The string of text in which to filter for.
     * @param craftingFilter True if we are filtering the crafting dialog.
     */
    isFiltered(item: ItemType | Item, filterText: string, craftingFilter?: boolean): boolean;
    /**
     * Summons a void dweller based on item worth and chance or provides a hint message.
     * @param item Item to get the worth of.
     * @param player The player that is dropping the item.
     * @param point The point in which we are dropping the item.
     * @returns True or false based on if we get a message or not.
     */
    summonVoidDweller(item: Item, player: Player | NPC, point: IVector3): boolean;
    /**
     * Note: don't print items to the console because the console will hold the item indefinitely
     */
    loadReference(container: IContainer, loadChildReferences?: boolean): boolean;
    private removeFromContainerInternal;
    private updateUiOnItemRemove;
    private getCraftTierBonus;
    private computeCraftQualityBonus;
    private isCraftSuccessful;
}
