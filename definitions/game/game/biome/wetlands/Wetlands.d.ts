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
import type { BiomeMapGen } from "@wayward/game/game/biome/IBiome";
import type { IBiomeTemperature } from "@wayward/game/game/temperature/ITemperature";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
declare const _default: {
    readonly defaultTerrainBackground: TerrainType.Mud;
    readonly defaultCaveEntranceFlooring: TerrainType.GraniteGround;
    readonly fog: {
        color: import("@wayward/utilities/Color").IRGB;
    };
    mapGen: BiomeMapGen;
    temperature: IBiomeTemperature;
};
export default _default;
