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
import type Island from "@wayward/game/game/island/Island";
import ExploreMap from "@wayward/game/renderer/exploreMap/ExploreMap";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import type { IPreSerializeCallback } from "@wayward/game/save/serializer/ISerializer";
export interface IExploredMapClientDataOld {
    exploredMapEncodedData: number[][];
}
export interface ICurseVisualExploredState {
    hiddenTiles: number[];
    fastHideStep?: number;
    fastRestoreStep?: number;
    hideOrigin?: IVector2;
    restoreOrigin?: IVector2;
    weightedRestoreStep?: number;
}
export interface ICurseVisualExploredStateUpdate {
    addHiddenTiles?: number[];
    removeHiddenTiles?: number[];
    replaceHiddenTiles?: number[];
    clearState?: true;
    fastHideStep?: number | null;
    fastRestoreStep?: number | null;
    hideOrigin?: IVector2 | null;
    restoreOrigin?: IVector2 | null;
    weightedRestoreStep?: number | null;
}
export interface ICurseVisualExploredStateIslandUpdates {
    clearAll?: true;
    updatesByZ?: Record<number, ICurseVisualExploredStateUpdate>;
}
export default class ExploredMapClientData implements IPreSerializeCallback {
    exploredMapEncodedData: Map<string, Record<number, number[]>>;
    curseVisualStates: Map<string, Record<number, ICurseVisualExploredState>>;
    private readonly exploredMaps;
    preSerializeObject(): void;
    clear(): void;
    getExploreMap(island: Island, z: number): ExploreMap;
    getCurseVisualState(island: Island | string, z: number, create?: boolean): ICurseVisualExploredState | undefined;
    clearCurseVisualState(island: Island | string, z?: number): void;
    applyCurseVisualStateUpdates(islandId: string, islandUpdates: ICurseVisualExploredStateIslandUpdates): void;
    private applyCurseVisualStateUpdate;
    private applyCurseVisualScalarUpdate;
}
