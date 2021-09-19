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
import { BiomeType } from "game/biome/IBiome";
import { TileTemplateType } from "game/tile/ITerrain";
import { IVector3 } from "utilities/math/IVector";
import { ITemplateOptions } from "./MapGenHelpers";
export declare type MapGenVersions<T> = Descriptions<number, T> & {
    latest: [string, T];
};
export interface IMapGen {
    generateWorld(generateNewWorld: boolean, biomeType: BiomeType, mapGenVersion: string): void;
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
    setTree(type: number): number;
    setTileVein(x: number, y: number, z: number, value: number, terrainType: number): void;
    setCaveOres(dValue: number, tileData: number, x: number, y: number, z: number): void;
}
export interface IMapGenPostProcessInput {
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
