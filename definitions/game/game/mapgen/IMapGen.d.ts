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
import type { MapGenDoodadTrees } from "@wayward/game/game/doodad/IDoodad";
import type Island from "@wayward/game/game/island/Island";
import type MapGenHelpers from "@wayward/game/game/mapgen/MapGenHelpers";
import type { Load, MultiplayerLoadingDescription } from "@wayward/game/game/meta/Loading";
import type { ITemplate, TileTemplateType } from "@wayward/game/game/tile/ITerrain";
import type Version from "@wayward/utilities/Version";
import type { IVector3 } from "@wayward/game/utilities/math/IVector";
import type WorldZ from "@wayward/utilities/game/WorldZ";
import type { Random } from "@wayward/utilities/random/Random";
export type MapGenVersions<T> = Descriptions<Version.String, T>;
export interface IMapGenGenerateWorldOptions {
    island: Island;
    generateNewWorld: boolean;
    biomeOptions?: unknown;
    multiplayerLoadingDescription?: MultiplayerLoadingDescription;
    disableLoadingScreen?: boolean;
}
export interface IMapGen {
    generateWorld(options: IMapGenOptions): Promise<void>;
}
export interface IMapGenOptions {
    island: Island;
    generateNewWorld: boolean;
    biomeType: BiomeTypes;
    biomeOptions: unknown;
    mapGenVersion: Version.String;
    load: Load | undefined;
    loadArgs: any[];
}
export interface IBiomeMapGen<BiomeOptionsType = unknown> {
    /**
     * Generated the world tiles
     * Called within a WebWorker
     */
    generate(input: IMapGenGenerateInput<BiomeOptionsType>): IMapGenGenerateOutput | Promise<IMapGenGenerateOutput>;
    /**
     * Called after generating the world for the first time
     */
    postProcess(input: IMapGenPostProcessInput<BiomeOptionsType>): void;
}
export interface IMapGenGenerateInput<BiomeOptionsType = unknown> {
    mapSize: number;
    biomeOptions: BiomeOptionsType;
    tileTypeDoodadOffset: number;
    zMin: number;
    zMax: number;
    zNormal: number;
    zCave: number;
    isNewWorld: boolean;
    tileGenQualityArray: Uint16Array;
    mapGenRandom: Random;
    getHeightMap(x: number, y: number): number;
    getBiomeHeightMap(x: number, y: number): number;
    getRandomQuality(tileType: number): number;
    getTileGen(x: number, y: number, z: number): number;
    setTileGen(x: number, y: number, z: number, value: number): void;
    setDoodad(type: MapGenDoodadTrees, compatOverride?: boolean): number;
    setTileVein(x: number, y: number, z: number, value: number, terrainType: number): void;
    setCaveOres(dValue: number, tileData: number, x: number, y: number, z: number): void;
}
export interface IMapGenPostProcessInput<BiomeOptionsType = unknown> {
    island: Island;
    tileTypeDoodadOffset: number;
    tileGenArray: Uint16Array;
    tileGenQualityArray: Uint16Array;
    biomeOptions?: BiomeOptionsType;
}
export interface IMapGenGenerateOutput {
    spawnCoords: IVector3;
    caveSpawns: CaveSpawns;
    waterSpawns: WaterSpawns;
    templateSpawns: TemplateSpawns;
    gemSpawns?: GemSpawns;
}
export type CaveSpawns = Array<[number, number]>;
export type WaterSpawns = Array<[number, number, number]>;
export type TemplateSpawn = [TileTemplateType | ITemplate, number, number, number, MapGenHelpers.ITemplateOptions?];
export type TemplateSpawns = TemplateSpawn[];
export type GemSpawns = OptionalDescriptions<WorldZ, number>;
export declare const tileTypeDoodadOffset = 256;
export default IMapGen;
