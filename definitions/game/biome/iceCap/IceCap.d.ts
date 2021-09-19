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
import { BiomeMapGen } from "game/biome/IBiome";
import { IBiomeTemperature } from "game/temperature/ITemperature";
import { TerrainType } from "game/tile/ITerrain";
declare const _default: {
    readonly defaultTerrainBackground: TerrainType.FreshWaterIce;
    readonly defaultCaveEntranceFlooring: TerrainType.Snow;
    mapGen: BiomeMapGen;
    temperature: IBiomeTemperature;
};
export default _default;
