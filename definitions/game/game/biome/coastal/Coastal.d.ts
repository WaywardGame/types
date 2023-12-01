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
import type { BiomeMapGen } from "@wayward/game/game/biome/IBiome";
import type { IBiomeTemperature } from "@wayward/game/game/temperature/ITemperature";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
declare const _default: {
    readonly defaultTerrainBackground: TerrainType.Dirt;
    readonly defaultCaveEntranceFlooring: TerrainType.Dirt;
    readonly fog: {
        color: import("@wayward/utilities/Color").IRGB;
    };
    readonly ferocity: {
        1: {
            1: number;
            2: number;
            3: number;
            4: number;
            5: number;
        };
        0: {
            1: number;
            2: number;
            3: number;
            4: number;
            5: number;
        };
    };
    mapGen: BiomeMapGen;
    temperature: IBiomeTemperature;
};
export default _default;
