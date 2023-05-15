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
import type { BiomeTypes } from "game/biome/IBiome";
import type { ITemplateBiomeOptions } from "game/biome/template/Template";
import type { MapGenDoodadTrees } from "game/doodad/IDoodad";
import type Island from "game/island/Island";
import type MapGenHelpers from "game/mapgen/MapGenHelpers";
import type { Load, MultiplayerLoadingDescription } from "game/meta/Loading";
import type { ITemplate, TileTemplateType } from "game/tile/ITerrain";
import type { IVector3 } from "utilities/math/IVector";
export type MapGenVersions<T> = Descriptions<string, T>;
export interface IMapGenGenerateWorldOptions {
    island: Island;
    generateNewWorld: boolean;
    templateBiomeOptions?: ITemplateBiomeOptions;
    multiplayerLoadingDescription?: MultiplayerLoadingDescription;
    disableLoadingScreen?: boolean;
}
export interface IMapGen {
    generateWorld(options: IMapGenOptions): void;
}
export interface IMapGenOptions {
    island: Island;
    generateNewWorld: boolean;
    biomeType: BiomeTypes;
    templateBiomeOptions?: ITemplateBiomeOptions;
    mapGenVersion: string;
    load: Load | undefined;
    loadArgs: any[];
}
export interface IBiomeMapGen {
    /**
     * Generated the world tiles
     * Called within a WebWorker
     */
    generate(input: IMapGenGenerateInput): IMapGenGenerateOutput;
    /**
     * Called after generating the world for the first time
     */
    postProcess(input: IMapGenPostProcessInput): void;
}
export interface IMapGenGenerateInput {
    mapSize: number;
    templateBiomeOptions?: ITemplateBiomeOptions;
    tileTypeDoodadOffset: number;
    zMin: number;
    zMax: number;
    zNormal: number;
    zCave: number;
    isNewWorld: boolean;
    tileGenQualityArray: Uint16Array;
    getHeightMap(x: number, y: number): number;
    getBiomeHeightMap(x: number, y: number): number;
    getRandomQuality(tileType: number): number;
    getTileGen(x: number, y: number, z: number): number;
    setTileGen(x: number, y: number, z: number, value: number): void;
    setDoodad(type: MapGenDoodadTrees, compatOverride?: boolean): number;
    setTileVein(x: number, y: number, z: number, value: number, terrainType: number): void;
    setCaveOres(dValue: number, tileData: number, x: number, y: number, z: number): void;
}
export interface IMapGenPostProcessInput {
    island: Island;
    tileTypeDoodadOffset: number;
    tileGenArray: Uint16Array;
    tileGenQualityArray: Uint16Array;
    templateBiomeOptions?: ITemplateBiomeOptions;
}
export interface IMapGenGenerateOutput {
    spawnCoords: IVector3;
    caveSpawns: CaveSpawns;
    waterSpawns: WaterSpawns;
    templateSpawns: TemplateSpawns;
}
export type CaveSpawns = Array<[number, number]>;
export type WaterSpawns = Array<[number, number, number]>;
export type TemplateSpawn = [TileTemplateType | ITemplate, number, number, number, MapGenHelpers.ITemplateOptions?];
export type TemplateSpawns = TemplateSpawn[];
export declare const tileTypeDoodadOffset = 256;
export default IMapGen;
