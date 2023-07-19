/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { BiomeType } from "game/biome/IBiome";
import Doodad from "game/doodad/Doodad";
import type { IActionHandlerApi, IActionNotUsable } from "game/entity/action/IAction";
import { ActionType } from "game/entity/action/IAction";
import Human from "game/entity/Human";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import { Quality } from "game/IObject";
import type { ContainerReference, IContainable, IContainer, IItemDescription, IItemWeightComponent, IRecipe } from "game/item/IItem";
import { ContainerType, CraftResult, ItemType, ItemTypeExtra, ItemTypeGroup } from "game/item/IItem";
import type { IAddToContainerResult, IDoodadsUsed, IGetBestItemsOptions, IGetItemOptions, IGetItemsOptions, IMoveItemOptions, IRequirementInfo } from "game/item/IItemManager";
import { ContainerReferenceSource, CraftStatus, ICraftResultChances, WeightType } from "game/item/IItemManager";
import Item from "game/item/Item";
import { ObjectManager } from "game/ObjectManager";
import { TerrainType } from "game/tile/ITerrain";
import type Tile from "game/tile/Tile";
import { WorldZ } from "game/WorldZ";
import Message from "language/dictionary/Message";
import type TranslationImpl from "language/impl/TranslationImpl";
import type { ListEnder } from "language/ITranslation";
import Translation, { Article } from "language/Translation";
import type { Random } from "utilities/random/Random";
export interface IItemManagerEvents {
    create(item: Item): any;
    remove(item: Item): any;
    /**
     * Called before moving items to another container
     */
    canMoveItems(human: Human | undefined, itemsToMove: Item[], fromContainer: IContainer | undefined, toContainer: IContainer, options?: IMoveItemOptions): boolean | undefined;
    /**
     * Called when items are removed from a container.
     * @param items The items.
     * @param container The container object the item was removed from.
     * @param containerTile The tile of that container when the remove occurred.
     */
    containerItemRemove(items: Item[], container: IContainer | undefined, containerTile: Tile | undefined): any;
    /**
     * Called when items are moved from one container to another.
     * @param items The items.
     * @param containerFrom The container object the items were moved from. This container might be inventory or a container within the inventory.
     * @param containerFromTile The tile of containerFrom when the update occurred.
     * @param containerTo The container object the items were moved to. This container might be inventory or a container within the inventory.
     */
    containerItemUpdate(items: Item[], containerFrom: IContainer | undefined, containerFromTile: Tile | undefined, containerTo: IContainer): any;
    /**
     * Called when items are added to a container.
     * @param items The items.
     * @param container The container object the items were added to. This container might be inventory or a container within the inventory.
     * @param options Move item options.
     */
    containerItemAdd(items: Item[], container: IContainer, options?: IMoveItemOptions): any;
    /**
     * Called when an item is crafted
     * @param human The human object
     * @param item The item that was crafted
     */
    craft?(human: Human, item: Item): void;
}
export default class ItemManager extends ObjectManager<Item, IItemManagerEvents> {
    readonly worldContainer: IContainer;
    private static cachedItemTypeGroups;
    private static cachedItemTypes;
    private static cachedItemTypesWithRecipes;
    private static cachedUseItemActions;
    private static readonly cachedBestItemForTier;
    private static readonly cachedDefaultItemForGroup;
    private static readonly cachedEquippables;
    private static readonly cachedGroupItems;
    private static readonly cachedHighestItemActionTierForAction;
    private static readonly cachedItemGroups;
    private static readonly cachedItemGroupsUsedInRecipes;
    private static readonly cachedItemsThatAreAcceptedAsOffer;
    private static readonly cachedItemsThatAreUsedForGrowingPlants;
    private static readonly cachedItemsThatAreUsedInRecipes;
    private static readonly cachedWeights;
    static readonly cachedItemSpawns: Map<BiomeType, Map<WorldZ, Map<TerrainType, ItemType[]>>>;
    static getItemTypes(): readonly ItemType[];
    static getItemsWithRecipes(): readonly ItemType[];
    static getBestItemForTier(item: ItemType | ItemTypeGroup): ItemType | undefined;
    static getHighestItemActionTierForAction(action: ActionType): number;
    static isItemAcceptedAsOffer(item: ItemType): boolean;
    static isItemUsedInRecipe(item: ItemType): boolean;
    static isItemUsedForGrowingPlants(item: ItemType): boolean;
    static isContainer(obj: unknown): obj is IContainer;
    isContainer(obj: unknown): obj is IContainer;
    static isGroup(item: ItemType | ItemTypeGroup): item is ItemTypeGroup;
    static isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup | ItemType): boolean;
    static isItemExtra(type: number): type is ItemTypeExtra;
    static getGroupItems(itemGroup: ItemType | ItemTypeGroup): Set<ItemType>;
    /**
     * Gets a set of additional item types that belong to the specified group
     */
    private static getAdditionalGroupItemsWithoutCache;
    static getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: Article, count?: number): Translation;
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
    private static cacheEquippables;
    private static cacheGroupItems;
    private static cacheItemRecipes;
    private static cacheItemTypes;
    private static cacheItemWeights;
    private static cacheCreatureOfferingsAndResources;
    private static cacheRemainingItemStuff;
    static clearCaches(): void;
    static getUseItemActions(): ReadonlySet<ActionType>;
    private static getDefaultWeightRange;
    load(): void;
    /**
     * Gets the tile the item/container is on
     * @param itemOrContainer Item or container
     * @returns Tile or undefined
     */
    getTile(itemOrContainer?: Item | IContainer): Tile | undefined;
    resolveContainer(container?: IContainer): Doodad | Item | Player | NPC | IContainer | Tile | undefined;
    getContainerReference(containable: IContainable | undefined, source: ContainerReferenceSource | undefined): ContainerReference;
    derefenceContainerReference(containerReference: ContainerReference, showWarnings?: boolean): IContainable | undefined;
    hashContainer(containable: IContainable, containerReferenceSource?: ContainerReferenceSource): string;
    hashContainerReference(containerReference: ContainerReference): string;
    updateContainedWithin(containable: IContainable, containedWithin: IContainer | undefined): void;
    /**
     * Moves an item into a container
     * @param human Human causing the item movement
     * @param item Item to move
     * @param toContainer Container to move the item to
     * @param options Item move options
     * @returns Result that tells you what moved
     */
    moveItemToContainer(human: Human | undefined, item: Item, toContainer: IContainer, options?: IMoveItemOptions): IAddToContainerResult;
    /**
     * Moves items from one container into another container
     * @param human Human causing the item movement
     * @param fromContainer Source container
     * @param toContainer Destination container
     * @param options Item move options
     * @returns Result that tells you what moved
     */
    moveItemsFromContainer(human: Human | undefined, fromContainer: IContainer, toContainer: IContainer, options?: IMoveItemOptions): IAddToContainerResult;
    /**
     * Moves items to a container.
     * Note: All the items must be contained within the same container.
     * @param human Human causing the item movement
     * @param item Items to move
     * @param toContainer Destination container
     * @param options Item move options
     * @returns Result that tells you what moved
     */
    moveItemsToContainer(human: Human | undefined, items: Item[], toContainer: IContainer, options?: IMoveItemOptions): IAddToContainerResult;
    tryMoveItemsToContainer(human: Human | undefined, items: Item[], toContainer: IContainer, options?: IMoveItemOptions): IAddToContainerResult | IActionNotUsable;
    removeContainerItems(container: IContainer, removeContainedItems?: boolean): void;
    exists(item: Item): boolean;
    remove(item: Item, removeContainedItems?: boolean, extinguishTorches?: boolean): void;
    getDisassemblyComponents(description: IItemDescription, quality: Quality | undefined): Item[];
    getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup>;
    getWeightCapacity(container: IContainer, includeMagic?: boolean): number | undefined;
    create(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, container: IContainer | undefined, quality?: Quality, human?: Human, updateTables?: boolean): Item;
    createFake(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, quality?: Quality, human?: Human): Item;
    getContainedContainers(container: IContainer): IContainer[];
    computeContainerWeight(container: IContainer): number;
    getMagicalWeightCapacity(container: IContainer): number;
    hasRoomInContainer(targetContainer: IContainer, itemToMove: Item): boolean;
    /**
     * Gets the name of a container
     * @returns Name of the container or undefined if it's ending up on the ground
     */
    getContainerName(container: IContainer): Translation | undefined;
    /**
     * Will break a container item on a tile, and remove it after (whether or not if it's a container)
     */
    breakContainerOnTile(itemContainer: Item, tile: Tile): void;
    /**
     * Drop items in a 3x3 square around the location.
     * This will ensure all items in the container are removed
     */
    placeItemsAroundTile(container: IContainer, tile: Tile, skipMessage?: boolean): void;
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
    isItemAcceptedAsOffer(item: ItemType): boolean;
    isItemUsedInRecipe(item: ItemType): boolean;
    isItemUsedForGrowingPlants(item: ItemType): boolean;
    getHighestItemActionTierForAction(action: ActionType): number;
    isGroup(item: ItemType | ItemTypeGroup): item is ItemTypeGroup;
    isInGroup(itemType: ItemType, itemGroup: ItemTypeGroup | ItemType): boolean;
    isItemExtra(type: number): type is ItemTypeExtra;
    getGroupItems(itemGroup: ItemType | ItemTypeGroup): Set<ItemType>;
    getItemTypeGroupName(itemType: ItemType | ItemTypeGroup, article?: Article, count?: number): Translation;
    getGroupDefault(itemGroup: ItemTypeGroup, weightType?: WeightType, ancestorGroups?: ItemTypeGroup[]): ItemType;
    getGroups(itemType: ItemType): ItemTypeGroup[];
    getPlayerFromInventoryContainer(containable: IContainable): Player | undefined;
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
    getItemInAdjacentContainersByGroup(human: Human, itemTypeGroupSearch: ItemTypeGroup, options?: Partial<IGetItemsOptions>): Item | undefined;
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
    getTradeContainerForContainer(containable: IContainable | undefined): IContainable | undefined;
    getContainerTypeForContainer(containable: IContainable | undefined, containerType: ContainerType): IContainable | undefined;
    getAdjacentContainers(human: Human, includeNpcs?: boolean, ignoreOptions?: boolean): IContainer[];
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
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, article: Article): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count: number, article: Article): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count?: number, article?: Article): Translation;
    getItemTypeListTranslation(itemTypes: Array<ItemType | ItemTypeGroup>): TranslationImpl;
    /**
     * Maps each item in the given array to its name translation.
     * @param article Whether the item name translation should include an article
     * @param formatter A formatting translation that should be used for each item translation
     */
    getItemTranslations(items: Item[], article?: Article, formatter?: Translation): TranslationImpl[];
    /**
     * Formats a list translation out of an array of items.
     * @param listEnder The way the list should end (ie `and`, `or`, etc)
     */
    getItemListTranslation(items: Item[], listEnder?: ListEnder | false): TranslationImpl;
    saveTileReferences(): void;
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
    copyProperties(toItem: Item, fromItem: Item): void;
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
     * @param tile The tile in which we are dropping the item.
     * @returns True or false based on if we get a message or not.
     */
    summonVoidDweller(item: Item, human: Human, tile: Tile): boolean;
    /**
     * Note: don't print items to the console because the console will hold the item indefinitely
     */
    loadReference(allowFixes: boolean, container: IContainer, loadChildReferences?: boolean, parentContainer?: IContainer): boolean;
    private removeFromContainerInternal;
    private onItemMoveOrRemove;
    private getCraftTierBonus;
    computeCraftQualityBonus(itemType: ItemType, itemsToRequire: Item[], itemsToConsume: Item[], doodadsUsed: IDoodadsUsed[] | undefined): number;
    getCraftChance(human: Human, recipe: IRecipe, qualityBonus: number, returnQuality?: boolean): number;
    getCraftResultChances(human: Human, recipe: IRecipe, qualityBonus: number): Readonly<ICraftResultChances>;
    isCraftSuccessful(human: Human, recipe: IRecipe, qualityBonus: number): CraftResult;
    /**
     * Get the civilization score based on contained books/text
     * @returns number that corresponds to how much civilization score is contained within.
     */
    getCivilizationContentsScore(container: Item | Doodad): number;
    /**
     * Gets the item or doodad's weight based on disassembly.
     * @param itemDoodad An Item or Doodad to get the weight for.
     * @param itemType Pass an ItemType when checking for Doodads since reducedWeight is only available on item descriptions.
     * @returns number equal to the weight.
     */
    getDisassemblyWeight(itemDoodad: Item | Doodad, itemType?: ItemType): number;
    /**
     * Runs a thing the container + parent containers
     */
    private forEachContainer;
}
