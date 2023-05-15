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
import type { BiomeTypes } from "game/biome/IBiome";
import type { ITemplateBiomeOptions } from "game/biome/template/Template";
import type Island from "game/island/Island";
import type IMapGen from "game/mapgen/IMapGen";
import type { IMapGenGenerateOutput, IMapGenOptions } from "game/mapgen/IMapGen";
import type { Load } from "game/meta/Loading";
export default class MapGen2130 implements IMapGen {
    generateWorld({ island, generateNewWorld, biomeType, templateBiomeOptions, mapGenVersion, load, loadArgs }: IMapGenOptions): void;
    protected setupTiles(island: Island, generateNewWorld: boolean, biomeType: BiomeTypes, templateBiomeOptions: ITemplateBiomeOptions | undefined, load: Load | undefined, mapGenOutput: IMapGenGenerateOutput, tileGenArray: Uint16Array, tileGenQualityArray: Uint16Array, tileVariationArray: Uint16Array): void;
}
