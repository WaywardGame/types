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
import type { ActionType } from "game/entity/action/IAction";
import type Item from "game/item/Item";
import type TileEvent from "game/tile/TileEvent";
import type { IVector3 } from "utilities/math/IVector";
/**
 * Includes all protected items by default
 */
export interface IGetItemOptions {
    /**
     * True to exclude protected items
     */
    excludeProtectedItems: boolean;
    /**
     * True to include protected items if they pass an item.willBreakOnDamage() check.
     * excludeProtectedItems must be set to false for this to work.
     */
    includeProtectedItemsThatWillNotBreak: ActionType;
    /**
     * Item will be ignored
     */
    ignoreItem?: Item;
}
export interface IGetItemsOptions extends IGetItemOptions {
    /**
     * Include sub containers in the search
     */
    includeSubContainers: boolean;
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
    fireSourceLavaPosition?: IVector3;
}
export interface IDoodadsUsed {
    doodad: Doodad;
    group: DoodadType | DoodadTypeGroup;
}
export interface IAddToContainerOptions {
    movingMultiple?: boolean;
    skipMessage?: boolean;
    skipUpdateTables?: boolean;
    skipTileUpdate?: boolean;
}
export interface IPlaceOnTileOptions {
    movingMultiple?: boolean;
    force?: boolean;
    skipMessage?: boolean;
    skipTileUpdate?: boolean;
}
export declare enum ContainerReferenceSource {
    ContainerWeightReduction = 0,
    GetContainerId = 1,
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
    WriteContainer = 12
}
