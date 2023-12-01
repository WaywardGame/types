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
import { type IDungeonBiomeOptions } from "@wayward/game/game/biome/dungeon/IDungeonOptions";
declare const _default: {
    readonly disableTravel: true;
    readonly disableHeightMaps: true;
    readonly disableWebWorker: true;
    readonly disableTreasureMaps: true;
    readonly loadIntoSpawnPoint: true;
    readonly defaultTerrainBackground: TerrainType.CobblestoneFlooring;
    readonly defaultCaveEntranceFlooring: TerrainType.CobblestoneFlooring;
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
    mapGen: BiomeMapGen<IDungeonBiomeOptions>;
    temperature: IBiomeTemperature;
    getDefaultOptions(): IDungeonBiomeOptions;
};
export default _default;
