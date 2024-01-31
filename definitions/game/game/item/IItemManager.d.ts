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
import type { Quality } from "@wayward/game/game/IObject";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { DoodadType, DoodadTypeGroup } from "@wayward/game/game/doodad/IDoodad";
import type { ActionType, IActionNotUsable } from "@wayward/game/game/entity/action/IAction";
import type ActionContext from "@wayward/game/game/entity/action/IActionContext";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { ContainerSort, IContainer, IMoveToTileOptions, ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type { SortDirection } from "@wayward/game/save/ISaveManager";
import type { Direction } from "@wayward/game/utilities/math/Direction";
/**
 * Options when removing an item
 */
export interface IItemRemoveOptions {
    /**
     * Defaults to false
     */
    removeContainedItems?: boolean;
    /**
     * Defaults to false
     */
    skipExtinguishTorches?: boolean;
}
export declare enum GetItemProtectedItemExclusion {
    None = 0,
    Protected = 1,
    ProtectedOrWithinProtectedContainer = 2
}
/**
 * Includes all protected items by default
 */
export interface IGetItemOptions {
    /**
     * True to exclude protected items
     */
    excludeProtectedItems: true | GetItemProtectedItemExclusion;
    /**
     * True to only include protected items if they pass an item.willBreakOnDamage() check.
     * excludeProtectedItems must be set to true for this to work.
     */
    includeProtectedItemsThatWillNotBreak: ActionType | true;
    /**
     * Item will be ignored
     */
    ignoreItem?: Item;
    /**
     * Only get items matching this text
     */
    filterText?: string;
}
export interface IGetItemsOptions extends IGetItemOptions {
    /**
     * Include sub containers in the search
     */
    includeSubContainers: true;
}
export interface IGetBestItemsOptions extends IGetItemsOptions {
    action: ActionType;
    actionWith: Item | (() => Item | undefined);
    sort(itemA: Item, itemB: Item, options: Partial<IGetBestItemsOptions>): number | undefined;
    filterType: ItemType;
    filterQuality: ArrayOr<Quality>;
    filterGroup: ItemTypeGroup;
    filterConsumable: true;
    targetCreature: Creature;
    filter(item: Item): any;
}
export declare enum CraftStatus {
    Invalid = 0,
    Failed = 1,
    Success = 2
}
export declare enum WeightType {
    Normal = 0,
    Static = 1,
    Min = 2,
    Max = 3
}
export declare enum RequirementStatus {
    NotRequired = 0,
    Missing = 1,
    RequirementMet = 2
}
export interface IRequirementInfo {
    requirements: RequirementStatus;
    fireRequirement: RequirementStatus;
    doodadRequirement: RequirementStatus;
    doodadsRequired: Array<DoodadType | DoodadTypeGroup>;
    doodadsUsed: IDoodadsUsed[];
    missingDoodads?: Set<DoodadType | DoodadTypeGroup>;
    fireSourceDoodad?: Doodad;
    fireSourceTileEvent?: TileEvent;
    fireSourceLavaTile?: Tile;
    faceDirection?: Direction.Cardinal;
    actionNotUsable?: IActionNotUsable;
}
export interface IDoodadsUsed {
    doodad: Doodad;
    group: DoodadType | DoodadTypeGroup;
}
export interface IMoveItemOptions {
    onMoveItem?: (item: Item) => void;
    filter?: {
        itemType?: ItemType;
        itemQuality?: Quality;
        filterText?: string;
    };
    skipMessage?: boolean;
    skipSound?: boolean;
    skipTileUpdate?: boolean;
    skipUpdateTables?: boolean;
    skipWeightChecks?: boolean;
    suspendNotifier?: boolean;
    moveToTileOptions?: IMoveToTileOptions | true;
    dryRun?: true;
    index?: number;
    updateView?: true;
    isTrading?: boolean;
    revertFromDoodad?: boolean;
    context?: ActionContext;
}
export interface IPlaceOnTileOptions {
    force?: boolean;
    skipMessage?: boolean;
    skipTileUpdate?: boolean;
    animateMovement?: boolean | Partial<IMoveToTileOptions>;
}
export declare enum ContainerReferenceSource {
    ContainerWeightReduction = 0,
    GetDialogIndex = 1,
    GetPoint = 2,
    GetWeightCapacity = 3,
    HashContainer = 4,
    MoveItem = 5,
    OpenContainer = 6,
    OriginalContainerId = 7,
    OriginalContainerId2 = 8,
    ResolveContainer = 9,
    ScheduleContainerInvalidation = 10,
    Serializer = 11,
    WriteContainer = 12,
    GetContainerName = 13,
    Upgrade = 14,
    MoveItemOfTypeArgument = 15
}
export interface ICraftResultChances {
    success: number;
    quality: number;
}
export declare namespace ICraftResultChances {
    const NEVER: Readonly<ICraftResultChances>;
}
export interface IAddToContainerResult {
    usable?: true;
    itemsMoved: Item[];
    noMoreRoomForItems: Item[];
    topLevelContainer?: IContainer;
}
export interface IContainerOld extends Omit<IContainer, "addOrder"> {
    itemOrders?: number[];
}
export interface IContainerSort {
    sort?: ContainerSort;
    direction: SortDirection;
}
