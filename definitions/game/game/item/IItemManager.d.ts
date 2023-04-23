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
import type { DoodadType, DoodadTypeGroup } from "game/doodad/IDoodad";
import type { ActionType, IActionNotUsable } from "game/entity/action/IAction";
import type Creature from "game/entity/creature/Creature";
import type { Quality } from "game/IObject";
import type { IMoveToTileOptions, ItemType, ItemTypeGroup } from "game/item/IItem";
import type Item from "game/item/Item";
import type Tile from "game/tile/Tile";
import type TileEvent from "game/tile/TileEvent";
import type { Direction } from "utilities/math/Direction";
/**
 * Includes all protected items by default
 */
export interface IGetItemOptions {
    /**
     * True to exclude protected items
     */
    excludeProtectedItems: true;
    /**
     * True to only include protected items if they pass an item.willBreakOnDamage() check.
     * excludeProtectedItems must be set to true for this to work.
     */
    includeProtectedItemsThatWillNotBreak: ActionType;
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
    filterType: ItemType;
    filterQuality: Quality;
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
    moveToTileOptions?: IMoveToTileOptions;
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
    Upgrade = 14
}
export interface ICraftResultChances {
    success: number;
    quality: number;
}
export declare namespace ICraftResultChances {
    const NEVER: Readonly<ICraftResultChances>;
}
export interface IAddToContainerResult {
    itemsMoved: Item[];
    noMoreRoomForItems: Item[];
}
