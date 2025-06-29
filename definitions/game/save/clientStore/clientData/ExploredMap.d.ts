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
import type { IPreSerializeCallback } from "@wayward/game/save/serializer/ISerializer";
export interface IExploredMapClientDataOld {
    exploredMapEncodedData: number[][];
}
export default class ExploredMapClientData implements IPreSerializeCallback {
    exploredMapEncodedData: Map<string, Record<number, number[]>>;
    private readonly exploredMaps;
    preSerializeObject(): void;
    clear(): void;
    getExploreMap(island: Island, z: number): ExploreMap;
}
