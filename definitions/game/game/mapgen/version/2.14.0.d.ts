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
import type { BiomeTypes } from "@wayward/game/game/biome/IBiome";
import type Island from "@wayward/game/game/island/Island";
import type IMapGen from "@wayward/game/game/mapgen/IMapGen";
import type { IMapGenGenerateOutput, IMapGenOptions } from "@wayward/game/game/mapgen/IMapGen";
import type { Load } from "@wayward/game/game/meta/Loading";
export default class MapGen2140 implements IMapGen {
    generateWorld({ island, generateNewWorld, biomeType, biomeOptions, mapGenVersion, load, loadArgs }: IMapGenOptions): Promise<void>;
    protected setupTiles(island: Island, generateNewWorld: boolean, biomeType: BiomeTypes, biomeOptions: unknown, load: Load | undefined, mapGenOutput: IMapGenGenerateOutput, tileGenArray: Uint16Array, tileGenQualityArray: Uint16Array, tileVariationArray: Uint16Array): void;
}
