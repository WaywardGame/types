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
import type { TemplateSpawns } from "game/mapgen/IMapGen";
import { TerrainType } from "game/tile/ITerrain";
import type { IVector3 } from "utilities/math/IVector";
export interface ITemplateBiomeOptions {
    spawnCoords: IVector3;
    defaultTerrain: TerrainType;
    templates: TemplateSpawns;
}
declare const _default: {
    readonly disableTravel: true;
    readonly defaultTerrainBackground: TerrainType.Dirt;
    readonly defaultCaveEntranceFlooring: TerrainType.Dirt;
    readonly fog: {
        color: import("utilities/Color").IRGB;
    };
    mapGen: BiomeMapGen;
};
export default _default;
