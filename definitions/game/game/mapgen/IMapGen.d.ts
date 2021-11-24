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
import type Island from "game/island/Island";
import type { ITemplateOptions } from "game/mapgen/MapGenHelpers";
import type { Load } from "game/meta/Loading";
import type { TileTemplateType } from "game/tile/ITerrain";
import type { IVector3 } from "utilities/math/IVector";
export declare type MapGenVersions<T> = Descriptions<number, T> & {
    latest: [string, T];
};
export interface IMapGen {
    generateWorld(options: IMapGenOptions): void;
}
export interface IMapGenOptions {
    island: Island;
    generateNewWorld: boolean;
    biomeType: BiomeTypes;
    mapGenVersion: string;
    load: Load;
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
    zMin: number;
    zMax: number;
    zNormal: number;
    zCave: number;
    isNewWorld: boolean;
    tileGenQualityArray: Uint16Array;
    getHeightMap(x: number, y: number): number;
    getBiomeHeightMap(x: number, y: number): number;
    getRandomQuality(tileType: number): number;
    setTileGen(x: number, y: number, z: number, value: number): void;
    setTree(type: number, override?: number): number;
    setTileVein(x: number, y: number, z: number, value: number, terrainType: number): void;
    setCaveOres(dValue: number, tileData: number, x: number, y: number, z: number): void;
}
export interface IMapGenPostProcessInput {
    island: Island;
    tileGenArray: Uint16Array;
    tileGenQualityArray: Uint16Array;
}
export interface IMapGenGenerateOutput {
    spawnCoords: IVector3;
    caveSpawns: CaveSpawns;
    templateSpawns: TemplateSpawns;
}
export declare type CaveSpawns = Array<[number, number]>;
export declare type TemplateSpawn = [TileTemplateType, number, number, number, ITemplateOptions?];
export declare type TemplateSpawns = TemplateSpawn[];
export default IMapGen;
