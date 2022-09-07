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
import { CreationId } from "game/IGame";
import { Quality } from "game/IObject";
import type { ContainerReference, IContainable, IContainer, IItemDescription, IItemWeightComponent, IRecipe } from "game/item/IItem";
import { CraftResult, ItemType, ItemTypeGroup } from "game/item/IItem";
import type { IAddToContainerOptions, IDoodadsUsed, IGetBestItemsOptions, IGetItemOptions, IGetItemsOptions, IRequirementInfo } from "game/item/IItemManager";
import { ContainerReferenceSource, CraftStatus, WeightType } from "game/item/IItemManager";
import Item from "game/item/Item";
import type ItemRecipeRequirementChecker from "game/item/ItemRecipeRequirementChecker";
import { ObjectManager } from "game/ObjectManager";
import type { ITile } from "game/tile/ITerrain";
import { TerrainType } from "game/tile/ITerrain";
import Message from "language/dictionary/Message";
import type TranslationImpl from "language/impl/TranslationImpl";
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
    protected readonly creationId: CreationId;
    readonly worldContainer: IContainer;
    private static cachedBestItemForTier;
    private static cachedDefaultItemForGroup;
    private static cachedEquippables;
    private static cachedHighestItemActionTierForAction;
    private static cachedItemGroups;
    private static cachedItemSpawns;
    private static cachedItemsThatAreAcceptedAsOffer;
    private static cachedItemsThatAreUsedForGrowingPlants;
    private static cachedItemsThatAreUsedInRecipes;
    private static cachedItemTypes;
    private static cachedItemTypesWithRecipes;
    private static cachedWeights;
    private static readonly cachedGroupItems;
    private static readonly cachedUseItemActions;
    static getItemTypes(): readonly ItemType[];
    static getItemsWithRecipes(): readonly ItemType[];
    static getBestItemForTier(item: ItemType | ItemTypeGroup): ItemType | undefined;
    static getHighestItemActionTierForAction(action: ActionType): number | undefined;
    static isItemAcceptedAsOffer(item: ItemType): boolean | undefined;
    static isItemUsedInRecipe(item: ItemType): boolean | undefined;
    static isItemUsedForGrowingPlants(item: ItemType): boolean | undefined;
    static isGroup(item: ItemType | ItemTypeGroup): item is ItemTypeGroup;
    static isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup | ItemType): boolean;
    static getGroupItems(itemGroup: ItemType | ItemTypeGroup): Set<ItemType>;
    private static getGroupItemsWithoutCache;
    static getPlayerFromInventoryContainer(containable: IContainable): Player | undefined;
    static getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: false | "definite" | "indefinite", count?: number): Translation;
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
    static clearCaches(): void;
    static getUseItemActions(): ReadonlySet<ActionType>;
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
    hasRoomInContainer(targetContainer: IContainer, itemToMove: Item): boolean;
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
    isItemUsedForGrowingPlants(item: ItemType): boolean | undefined;
    isGroup(item: ItemType | ItemTypeGroup): item is ItemTypeGroup;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup | ItemType): boolean;
    getGroupItems(itemGroup: ItemType | ItemTypeGroup): Set<ItemType>;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: false | "definite" | "indefinite", count?: number): Translation;
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
    hasAdditionalRequirements(actionOrHuman: IActionHandlerApi<Human> | Human, craftType: ItemType, actionNotUsableMessage?: Message, isRepairOrDisassembly?: boolean): IRequirementInfo;
    /**
     * Gets the max quality bonus that can be applied to an item (using its recipe).
     * @param itemType The item to check for.
     * @returns A number for its max quality value.
     */
    getMaxQualityBonus(itemType: ItemType): number;
    craft(action: IActionHandlerApi<Human>, itemType: ItemType, itemsToRequire: Item[], itemsToConsume: Item[], baseItem: Item | undefined, requirementInfo: IRequirementInfo): CraftStatus;
    /**
     * Get the translation (either message or UI based) for the efficacy of a given recipe.
     * @param human The player/human to check for.
     * @param qualityBonus The current quality bonus (via computeCraftQualityBonus).
     * @param maxQualityBonus The maximum quality bonus (via getMaxQualityBonus).
     * @param recipe The item recipe to check.
     * @param ui If set to true, output the translation as a UiTranslation instead of Message.
     * @returns A traslantion for the efficacy or undefined if not enough skill
     */
    getEfficacyTranslation(human: Human, qualityBonus: number, maxQualityBonus: number, recipe: IRecipe, ui?: boolean): TranslationImpl | undefined;
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
     * Get the best items sorted by how good they are
     * Usability/custom (ie the sorting for melee/start fire) > Action tier (+quality if there's an action tier on both items) > quality > durability
     */
    getBestSafeItems(human: Human, container: IContainer, options?: Partial<IGetBestItemsOptions>): Item[];
    /**
     * Get the best item
     */
    getBestSafeItem(human: Human, container: IContainer, options?: Partial<IGetBestItemsOptions>): Item | undefined;
    /**
     * Gets the item's quality and action level (how good it is at doing the action).
     * @param action The ActionType you are trying to get the level for.
     * @returns A number (possibly 0 if no quality or action level).
     */
    getItemUseBonus(itemType: ItemType, action: ActionType, quality: Quality | undefined): number;
    getItemInContainer(container: IContainer, itemTypeSearch: ItemType, options?: Partial<IGetItemOptions>): Item | undefined;
    getItemForHuman(human: Human, search: ItemType | ItemTypeGroup, options?: Partial<IGetItemOptions>): Item | undefined;
    getItemInContainerByGroup(container: IContainer, itemTypeGroupSearch: ItemTypeGroup, options?: Partial<IGetItemOptions>): Item | undefined;
    getItemInAdjacentContainersByGroup(position: IVector3, itemTypeGroupSearch: ItemTypeGroup): Item | undefined;
    getItemsInContainer(container: IContainer, options?: Partial<IGetItemsOptions>): Item[];
    getItemsInContainerByType(container: IContainer, itemType: ItemType, options?: Partial<IGetItemsOptions>, filterText?: string): Item[];
    getItemsInContainerByGroup(container: IContainer, itemGroup: ItemTypeGroup, options?: Partial<IGetItemsOptions>): Item[];
    getItemInInventoryByGroup(human: Human, itemTypeGroupSearch: ItemTypeGroup, options?: Partial<IGetItemOptions>): Item | undefined;
    isItemInContainer(container: IContainer, itemTypeSearch: ItemType, options?: Partial<IGetItemOptions>): boolean;
    /**
     * @returns whether the given containable is, or is contained within, the given container
     */
    isContainableInContainer(containable: IContainable, container: IContainer): boolean;
    /**
     * @returns whether the given containable is, or is contained within, a trade container
     */
    isContainableInTradeContainer(containable: IContainable): boolean;
    getTradeContainerForContainer(containable: IContainer | undefined): IContainer | undefined;
    getAdjacentContainers(humanOrPosition: Human | IVector3, includeNpcs?: boolean, ignoreOptions?: boolean): IContainer[];
    isContainableInAdjacentContainer(human: Human, containable: IContainable, includeNpcs?: boolean, ignoreOptions?: boolean): boolean;
    isInInventory(containable: IContainable): boolean;
    isTileContainer(container: IContainer | undefined): boolean;
    /**
     * Returns ordered items for the containers
     * Note: It may return the real containedItems array!
     */
    getOrderedContainerItems(container: IContainer, options?: Partial<IGetItemOptions>): Item[];
    capWeightOfItems(createdItems: Item[], itemWeight: number): void;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count: number): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, article: false | "definite" | "indefinite"): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count: number, article: false | "definite" | "indefinite"): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count?: number, article?: false | "definite" | "indefinite"): Translation;
    getItemTypeListTranslation(itemTypes: Array<ItemType | ItemTypeGroup>): TranslationImpl;
    /**
     * Maps each item in the given array to its name translation.
     * @param article Whether the item name translation should include an article
     * @param formatter A formatting translation that should be used for each item translation
     */
    getItemTranslations(items: Item[], article?: false | "definite" | "indefinite", formatter?: Translation): TranslationImpl[];
    /**
     * Formats a list translation out of an array of items.
     * @param listEnder The way the list should end (ie `and`, `or`, etc)
     */
    getItemListTranslation(items: Item[], listEnder?: ListEnder | false): TranslationImpl;
    saveTileReferences(): void;
    checkMilestones(human: Human, item: Item): void;
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
     * @param human The human that is dropping the item.
     * @param point The point in which we are dropping the item.
     * @returns True or false based on if we get a message or not.
     */
    summonVoidDweller(item: Item, human: Human, point: IVector3): boolean;
    /**
     * Note: don't print items to the console because the console will hold the item indefinitely
     */
    loadReference(container: IContainer, loadChildReferences?: boolean): boolean;
    private removeFromContainerInternal;
    private onItemMoveOrRemove;
    private getCraftTierBonus;
    computeCraftQualityBonus(itemType: ItemType, itemsToRequire: Item[], itemsToConsume: Item[], doodadsUsed: IDoodadsUsed[] | undefined): number;
    getCraftChance(human: Human, recipe: IRecipe, qualityBonus: number, returnQuality?: boolean, alwaysReturn?: boolean): number;
    isCraftSuccessful(human: Human, recipe: IRecipe, qualityBonus: number): CraftResult;
}
