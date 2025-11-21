/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Quality } from "@wayward/game/game/IObject";
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import Doodad from "@wayward/game/game/doodad/Doodad";
import EntityManager from "@wayward/game/game/entity/EntityManager";
import Human from "@wayward/game/game/entity/Human";
import type { DamageType } from "@wayward/game/game/entity/IEntity";
import type { IActionHandlerApi, IActionNotUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type ActionContext from "@wayward/game/game/entity/action/IActionContext";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type Player from "@wayward/game/game/entity/player/Player";
import type { ContainerReference, IContainable, IContainer, IItemDescription, IItemWeightComponent, IRecipe, IUncastableContainer } from "@wayward/game/game/item/IItem";
import { ContainerType, CraftResult, ItemType, ItemTypeExtra, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type { IAddToContainerResult, IContainerSort, IDoodadsUsed, IGetBestItemsOptions, IGetItemOptions, IGetItemsOptions, IItemRemoveOptions, IMoveItemOptions, IRequirementInfo } from "@wayward/game/game/item/IItemManager";
import { ContainerReferenceSource, CraftStatus, ICraftResultChances, WeightType } from "@wayward/game/game/item/IItemManager";
import Item from "@wayward/game/game/item/Item";
import type { MagicalLootType } from "@wayward/game/game/item/MagicalLoot";
import type { ITileContainer } from "@wayward/game/game/tile/ITerrain";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type { ListEnder } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
import { Article } from "@wayward/game/language/ITranslation";
import Message from "@wayward/game/language/dictionary/Message";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IRGB } from "@wayward/utilities/Color";
import type { ISorter } from "@wayward/utilities/collection/sort/Sorter";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import WorldZ from "@wayward/utilities/game/WorldZ";
import type { Random } from "@wayward/utilities/random/Random";
import type { DeityReal } from "@wayward/game/game/deity/Deity";
import type { IRange } from "@wayward/utilities/math/Range";
export interface IItemManagerEvents extends Events<EntityManager<Item>> {
    /**
     * Called before moving items to another container
     */
    canMoveItems(human: Human | undefined, itemsToMove: Item[], fromContainer: IContainer | undefined, toContainer: IContainer, options?: IMoveItemOptions, mover?: Human): boolean | undefined;
    /**
     * Called when items are removed from a container.
     * @param items The items.
     * @param container The container object the item was removed from.
     * @param containerTile The tile of that container when the remove occurred.
     */
    containerItemRemove(items: Item[], container: IContainer | undefined, containerTile: Tile | undefined, mover?: Human): any;
    /**
     * Called when items are moved from one container to another.
     * @param items The items.
     * @param containerFrom The container object the items were moved from. This container might be inventory or a container within the inventory.
     * @param containerFromTile The tile of containerFrom when the update occurred.
     * @param containerTo The container object the items were moved to. This container might be inventory or a container within the inventory.
     */
    containerItemUpdate(items: Item[], containerFrom: IContainer | undefined, containerFromTile: Tile | undefined, containerTo: IContainer, mover?: Human): any;
    /**
     * Called when items are added to a container.
     * @param items The items.
     * @param container The container object the items were added to. This container might be inventory or a container within the inventory.
     * @param index The position the items were inserted at
     * @param options Move item options.
     */
    containerItemAdd(items: Item[], container: IContainer, index: number, options?: IMoveItemOptions, mover?: Human): any;
    /**
     * Called when the container order is updated.
     */
    containerUpdateOrder(container: IContainer): any;
    containerStack(container: IContainer, type: ItemType): any;
    containerUnstack(container: IContainer, type: ItemType): any;
    /** Called at the end of inserting new items into a container, specifically when sorting the container was not necessary. */
    containerItemAddDidNotSort(container: IContainer): any;
    /** Called when the weight of the container changes. */
    containerWeightUpdate(container: IContainer): any;
    /**
     * Called when an item is crafted
     * @param human The human object
     * @param item The item that was crafted
     */
    craft?(human: Human, item: Item): void;
}
export default class ItemManager extends EntityManager<Item, IItemRemoveOptions> {
    readonly static: typeof ItemManager;
    protected readonly name = "ItemManager";
    event: IEventEmitter<this, IItemManagerEvents>;
    /**
     * Tiles can be containers and they will always be contained within this container
     */
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
    private static readonly cachedItemsThatAreUsedInRecipeWhenBuilt;
    private static readonly cachedWeights;
    private static readonly cachedMostCommonItemColors;
    private static readonly cachedItemsThatCanBeRelic;
    private static readonly cachedRuneChanceRanges;
    static readonly cachedItemSpawns: Map<BiomeType, Map<WorldZ, Map<TerrainType, ItemType[]>>>;
    static getItemTypes(): readonly ItemType[];
    static getRuneChanceRange(deity: DeityReal): IRange;
    static getItemsWithRecipes(): readonly ItemType[];
    static getBestItemForTier(item: ItemType | ItemTypeGroup): ItemType | undefined;
    static getHighestItemActionTierForAction(action: ActionType): number;
    static isItemAcceptedAsOffer(item: ItemType): boolean;
    static isItemUsedInRecipe(item: ItemType): boolean;
    static isItemUsedInRecipeWhenBuilt(item: ItemType): boolean;
    static canItemBeRelic(item: ItemType): boolean;
    static isItemUsedForGrowingPlants(item: ItemType): boolean;
    static getMostCommonItemColor(item: ItemType): IRGB | undefined;
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
    static cacheDoodadsForItemRecipes(): void;
    private static cacheItemTypes;
    private static cacheItemWeights;
    private static cacheCreatureOfferingsAndResources;
    private static cacheRuneChanceRanges;
    static cacheAsync(): Promise<void>;
    private static cacheRelicItems;
    private static getDisassemblyAndBurnItemTypes;
    private static cacheRemainingItemStuff;
    static clearCaches(): void;
    static getUseItemActions(): ReadonlySet<ActionType>;
    private static getDefaultWeightRange;
    /**
     * Partitions the containables by their container
     */
    getContainers<CONTAINABLE extends IContainable = IContainable>(containable: CONTAINABLE[]): Map<IContainer | undefined, CONTAINABLE[]>;
    /**
     * Gets the tile the item/container is on
     * @param itemOrContainer Item or container
     * @returns Tile or undefined
     */
    getTile(itemOrContainer?: Item | IContainer): Tile | undefined;
    resolveContainer(container?: IContainer | ContainerReference): Tile | Player | Item | Doodad | NPC | IContainer | undefined;
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
    moveItemsToContainer(human: Human | undefined, items: readonly Item[], toContainer: IContainer, options?: IMoveItemOptions): IAddToContainerResult;
    setStacked(human: Human, container: IContainer, itemType: ItemType, stacked?: boolean, atIndex?: number): void;
    ensureContainerSorted(container?: IContainer, sorter?: ISorter<Item | undefined> | undefined): boolean;
    private ensureStacksStacked;
    createSorter(container?: IContainer): ISorter<Item | undefined> | undefined;
    tryMoveItemsToContainer(human: Human | undefined, items: readonly Item[], toContainer: IContainer, options?: IMoveItemOptions): IAddToContainerResult | IActionNotUsable;
    /**
     * Return `number` to insert the item at a specific index. Return `undefined` to push the item to the end.
     * Defaults to `0` or `undefined` if sort is `ContainerSort.Recent`, or polling the sorting algorithm otherwise
     */
    getItemInsertIndexInContainer(container: IContainer, item: Item, sorter?: ISorter<Item | undefined>): number | undefined;
    removeContainerItems(container: IContainer, options?: IItemRemoveOptions): void;
    exists(item: Item): boolean;
    remove(item: Item, options?: IItemRemoveOptions): void;
    /**
     * No need to run special logic when loading items
     */
    protected loadEntity: undefined;
    /**
     * For entity manager compat
     */
    protected onRemove(): boolean;
    getDisassemblyComponents(description: IItemDescription, quality: Quality | undefined): Item[];
    static getDisassemblyComponentsAsItemTypes(description: IItemDescription): Array<ItemType | ItemTypeGroup>;
    getWeightCapacity(container?: IContainer, includeMagic?: boolean): number | undefined;
    create(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, container: IContainer | undefined, quality?: Quality, human?: Human, context?: ActionContext, magicalLootType?: MagicalLootType): Item;
    createFake(itemType: ItemType | ItemTypeGroup | Array<ItemType | ItemTypeGroup>, quality?: Quality, human?: Human, magicalLootType?: MagicalLootType): Item;
    getContainedContainers(container: IContainer): IContainer[];
    computeContainerWeight(container: IContainer): number;
    getMagicalWeightCapacity(container: IContainer): number;
    hasRoomInContainer(targetContainer: IContainer, itemToMove: Item): boolean;
    getTopLevelContainerWhenThereIsNoRoom(targetContainer: IContainer, itemToMove: Item): IContainer | undefined;
    /**
     * Gets the name of a container
     * @param debug This is for debug context (ie, include tile information, world container, etc)
     * @returns Name of the container or undefined if it's ending up on the ground
     */
    getContainerName(container?: IContainer, debug?: boolean, secondPerson?: boolean): Translation | undefined;
    /**
     * Will break a container item on a tile, and remove it after (whether or not if it's a container)
     */
    breakContainerOnTile(itemContainer: Item, tile: Tile, damageType?: DamageType): void;
    /**
     * Drop items in a 3x3 square around the location.
     * This will ensure all items in the container are removed
     */
    placeItemsAroundTile(container: IContainer, tile: Tile, skipMessage?: boolean, skipCurrentTile?: boolean): void;
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
    isItemUsedInRecipeWhenBuilt(item: ItemType): boolean;
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
    getRandomQuality(bonusQuality?: number, relicChance?: boolean, tile?: Tile): Quality;
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
    updateItems(ticks: number, playerIds: Set<number>, skipHumanItems?: boolean): boolean;
    updateItem(ticks: number, item: Item, isInInventory?: boolean): boolean;
    getPlayerWithItemInInventory(containable: IContainable): Player | undefined;
    getAbsentPlayerWithItemInInventory(containable: IContainable): Player | undefined;
    getNPCWithItemInInventory(containable: IContainable): NPC | undefined;
    countItemsInContainer(containers: IContainer | IContainer[], itemTypeSearch: ItemType, ignoreItem?: Item, includeProtectedItemsThatWillNotBreak?: true): number;
    countItemsInContainerByGroup(containers: IContainer | IContainer[], itemTypeGroupSearch: ItemTypeGroup, ignoreItem?: Item, includeProtectedItemsThatWillNotBreak?: true): number;
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
    isInInventory(containable: IContainable, human?: Human): boolean;
    /**
     * Check if a container is a container that's on a tile
     */
    isTileContainer(container: IContainable | undefined): container is Tile & ITileContainer;
    /**
     * Returns ordered items for the containers
     * Note: If not filtered, it will return the real containedItems array!
     */
    getOrderedContainerItems(container: IUncastableContainer, options?: Partial<IGetItemsOptions>): readonly Item[];
    capWeightOfItems(createdItems: Item[], itemWeight: number): void;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count: number): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, article: Article): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count: number, article: Article): Translation;
    getItemTypeTranslation(itemType: ItemType | ItemTypeGroup, count?: number, article?: Article): Translation;
    getItemTypeListTranslation(itemTypes: Array<ItemType | ItemTypeGroup>, ender?: ListEnder | false): TranslationImpl;
    /**
     * Maps each item in the given array to its name translation.
     * @param article Whether the item name translation should include an article
     * @param formatter A formatting translation that should be used for each item translation
     */
    getItemTranslations(items: Item[], article?: Article, formatter?: Translation): TranslationImpl[];
    static list: import("../../language/utility/TranslationListBuilder").TranslationListBuilder<Item, string, Quality>;
    readonly list: import("../../language/utility/TranslationListBuilder").TranslationListBuilder<Item, string, Quality>;
    /**
     * Formats a list translation out of an array of items.
     * @param listEnder The way the list should end (ie `and`, `or`, etc)
     */
    getItemListTranslation(items: Item[], listEnder?: ListEnder | false): TranslationImpl;
    saveTileReferences(): void;
    getDefaultDurability(human: Human | undefined, weight: number, itemType: ItemType, getMax?: boolean): number;
    updateItemOrder(container: IContainer, itemOrder: number[] | IContainerSort): void;
    /**
     * Used in cases where we break items down from their base form like in dismantling or burning items.
     * @param itemQuality Quality of the base item.
     * @param bonusValue A number that we likely will be passing to getQualityBasedOnSkill and can be based on a skill or some arbitrary value.
     * @returns number That is distributed from the quality/value.
     */
    getBreakingQualityBonus(itemQuality: Quality | undefined, bonusValue: number): number;
    getQualityBasedOnSkill(itemQuality: Quality | undefined, skillValue: number, allowIncreasedQuality?: boolean, bonusChance?: number, tile?: Tile): Quality | undefined;
    getNPCFromInventoryContainer(containable: IContainable): NPC | undefined;
    getItemsByWeight(a: number, b: number): number;
    getItemsWeight(items: Item[]): number;
    /**
     * Returns `true` if the item type or item is filtered out from inventory/crafting/container dialogs.
     * @param item The ItemType or Item to check.
     * @param filterText The string of text in which to filter for.
     * @param craftingFilter True if we are filtering the crafting dialog.
     */
    static isFiltered(item: ItemType | Item, filterText: string, craftingFilter?: boolean, dismantleFilter?: boolean): boolean;
    /**
     * Returns `true` if the item type or item is filtered out from inventory/crafting/container dialogs.
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
    summonVoidDweller(item: Item, human: Human | undefined, tile: Tile): boolean;
    /**
     * Note: don't print items to the console because the console will hold the item indefinitely
     */
    loadReference(allowFixes: boolean, container: IContainer, loadChildReferences?: boolean, parentContainer?: IContainer): boolean;
    private removeFromContainerInternal;
    private onItemMoveOrRemove;
    computeCraftQualityBonus(itemType: ItemType, itemsToRequire: Item[], itemsToConsume: Item[], doodadsUsed: IDoodadsUsed[] | undefined): number;
    getCraftChance(human: Human, recipe: IRecipe, qualityBonus: number, returnQuality?: boolean): number;
    getCraftResultChances(human: Human, recipe: IRecipe, qualityBonus: number): Readonly<ICraftResultChances>;
    isCraftSuccessful(human: Human, recipe: IRecipe, qualityBonus: number): CraftResult;
    /**
     * Gets the chance of crafting a mastercrafted item (provided a CraftResult.CritSuccess is reached and rolls on exceptional).
     * @param skill Must be atleast 50% to get a mastercraft.
     * @param magicItemsUsed Must be set to at least 1 to get a mastercraft.
     * @param efficacyPercentage Must be set to atleast 40% to get a mastercraft.
     * @returns A number equal to the chance.
     */
    getMastercraftChance(skill: number, magicItemsUsed: number, efficacyPercentage: number): number;
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
     * Empties a container (on to ground or main inventory) until it has a valid contained weight in the case of verifying doodads/items.
     * @param object The Item or Doodad to check.
     */
    emptyUntilValidWeight(object: Item | Doodad): void;
    /**
     * Runs a thing the container + parent containers
     */
    private forEachContainer;
    getAncestorContainers(container: IContainer | undefined, includeCurrent?: boolean): Set<IContainer>;
}
