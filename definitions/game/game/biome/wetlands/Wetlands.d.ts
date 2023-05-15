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
import type { BiomeMapGen } from "game/biome/IBiome";
import type { IBiomeTemperature } from "game/temperature/ITemperature";
import { TerrainType } from "game/tile/ITerrain";
declare const _default: {
    readonly defaultTerrainBackground: TerrainType.Mud;
    readonly defaultCaveEntranceFlooring: TerrainType.Mud;
    readonly fog: {
        color: import("utilities/Color").IRGB;
    };
    mapGen: BiomeMapGen;
    temperature: IBiomeTemperature;
};
export default _default;
