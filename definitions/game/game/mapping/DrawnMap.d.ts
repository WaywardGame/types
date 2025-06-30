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
import { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import type Human from "@wayward/game/game/entity/Human";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type Item from "@wayward/game/game/item/Item";
import type { IMapGenGenerateOutput } from "@wayward/game/game/mapgen/IMapGen";
import MapBackground from "@wayward/game/game/mapping/Background";
import type { DrawnMapTheme } from "@wayward/game/game/mapping/IMapRender";
import type { IMapTileData } from "@wayward/game/game/mapping/IMapTile";
import Obfuscation from "@wayward/game/game/mapping/Obfuscation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IPreSerializeCallback, IUnserializedCallback } from "@wayward/game/save/serializer/ISerializer";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import Sampler from "@wayward/game/utilities/math/Sampler";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import { IRange } from "@wayward/utilities/math/Range";
import type { Random } from "@wayward/utilities/random/Random";
import { LegacySeededGenerator } from "@wayward/utilities/random/generators/LegacySeededGenerator";
import { PCGSeededGenerator } from "@wayward/utilities/random/generators/PCGSeededGenerator";
export declare enum DrawnMapType {
    Treasure = 0,
    Drawn = 1
}
export interface ITreasure extends IVector2 {
    chest: DoodadType;
}
export interface ITreasureMapGenerationSettings {
    /**
     * The map's dimensions, x & y, will be `radius * 2 + 1`
     */
    radius: IRange;
    /**
     * The minimum distance from the edge of the world that a treasure can be at
     */
    islandPadding: number;
    /**
     * The minimum distance a treasure can be from the edge of a treasure map
     */
    mapPadding: number;
    /**
     * The number of treasures a map can contain. `extraTreasuresChance` determines the chance of subsequent treasures after
     * all required treasures have been placed, and is rerolled for each subsequent treasure
     */
    treasures: IRange;
    /**
     * A decimal chance of whether additional treasures should be generated. This chance is rolled for every additional treasure
     * in the `treasures` range
     */
    extraTreasuresChance: number;
    /**
     * The number of treasure maps an island can have
     */
    treasureMaps: IRange;
    /**
     * Configuration for how treasure maps should spawn in caves
     */
    caveTreasure: {
        /**
         * A number representing a distance from island 0,0 where the max amount of cave treasures spawn.
         */
        distanceForMaximumChance: number;
        /**
         * A range where the minimum is the cave treasure chance at island 0,0 and the maximum is the cave treasure chance at
         * a distance `>= maxDistance`
         */
        chance: IRange;
    };
}
export interface IDrawnMapEvents {
    /**
     * Emitted when this map is read by a human.
     * @param item The map `Item` that is being read
     * @param reader The `Human` reading this map
     */
    read(item: Item, reader: Human): any;
    /**
     * Emitted when a treasure on this map is discovered by a human.
     * @param treasure The `ITreasure` that is discovered
     * @param discoverer The `Human` that discovered the treasure
     */
    discoverTreasure(treasure: ITreasure, discoverer: Human): any;
}
export default class DrawnMap extends EventEmitter.Host<IDrawnMapEvents> implements IPreSerializeCallback, IUnserializedCallback {
    /**
     * Generates island treasure maps.
     *
     * This should only be called a single time, when a world is first generated. This first generation stores a list of
     * things that only get generated the first time, such as doodads. Subsequent loads of the maps will only re-initialise
     * them from the things that *are* regenerated on each load.
     */
    static generateIslandTreasureMaps(island: Island, generationSettings: ITreasureMapGenerationSettings): void;
    /**
     * Initialise an island's treasure maps.
     *
     * This should be called after island treasure map generation, every time the island is loaded.
     */
    static initializeIslandTreasureMaps(island: Island, generationSettings: ITreasureMapGenerationSettings, mapGenOutput: IMapGenGenerateOutput): void;
    static initializeIslandTreasureMapsDifferences(island: Island): void;
    static plotRegion(island: Island, x: number, y: number, z: number, random?: Random<PCGSeededGenerator | LegacySeededGenerator>, map?: DrawnMap, radius?: number): DrawnMap;
    private static plotTreasure;
    private static findValidTreasureLocation;
    private static getMapTile;
    tiles: Sampler<IMapTileData>;
    /**
     * The top-left position of this map
     */
    get position(): Readonly<IVector3>;
    get radius(): number;
    private _position;
    islandId: IslandId;
    drawnMapRadius?: number;
    private seed?;
    private readonly discoveredTreasures;
    readonly type: DrawnMapType;
    private readonly savedTilesSerializer;
    private readonly treasure;
    private saved;
    private _isValid;
    get isValid(): boolean;
    get island(): Island;
    private constructor();
    toString(): string;
    preSerializeObject(): void;
    onUnserialized(): void;
    getTreasure(): readonly ITreasure[];
    getUndiscoveredTreasure(): ITreasure[];
    isTreasureDiscovered(treasure: ITreasure): boolean;
    isTreasureDiscovered(x: number, y: number): boolean;
    hasDiscoveredAll(): boolean;
    hasDiscoveredAny(): boolean;
    addTreasure(x: number, y: number, chest: DoodadType): this;
    discoverTreasure(x: number, y: number, discoverer: Human): this;
    getCenterPosition(): IVector3;
    render(theme: DrawnMapTheme): Promise<HTMLCanvasElement | undefined>;
    getObfuscator(): Obfuscation;
    getBackground(): MapBackground;
    getRiddle(): TranslationImpl | undefined;
    private plot;
    private plotDifferences;
}
