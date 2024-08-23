/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { BiomeMapGen } from "@wayward/game/game/biome/IBiome";
import type { TemplateSpawns } from "@wayward/game/game/mapgen/IMapGen";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
export interface ITemplateBiomeOptions {
    spawnCoords: IVector3;
    defaultTerrain: TerrainType;
    templates: TemplateSpawns;
}
declare const _default: {
    readonly disableTravel: true;
    readonly disableHeightMaps: true;
    readonly disableWebWorker: true;
    readonly disableTreasureMaps: true;
    readonly disableLoadingScreen: true;
    readonly defaultTerrainBackground: TerrainType.Dirt;
    readonly defaultCaveEntranceFlooring: TerrainType.Dirt;
    readonly fog: {
        color: import("@wayward/utilities/Color").IRGB;
    };
    mapGen: BiomeMapGen<ITemplateBiomeOptions>;
};
export default _default;
