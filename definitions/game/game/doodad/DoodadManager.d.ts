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
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import Doodad from "@wayward/game/game/doodad/Doodad";
import type { IDoodadOptions } from "@wayward/game/game/doodad/IDoodad";
import { DoodadType, DoodadTypeExtra, DoodadTypeGroup } from "@wayward/game/game/doodad/IDoodad";
import EntityManager from "@wayward/game/game/entity/EntityManager";
import type Human from "@wayward/game/game/entity/Human";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { TerrainType } from "@wayward/game/game/tile/ITerrain";
import Tile from "@wayward/game/game/tile/Tile";
import type { Article } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import type WorldZ from "@wayward/utilities/game/WorldZ";
export interface IDoodadManagerEvents extends Events<EntityManager<Doodad>> {
    /**
     * Called when a doodad is about to be spawned
     * @param type The type of doodad
     * @param tile The tile where the doodad will be spawned
     * @param options The doodad spawn options
     * @returns False if the dooodad cannot spawn, or undefined to use the default logic
     */
    canSpawn(type: DoodadType, tile: Tile, options: IDoodadOptions): boolean | undefined;
}
export default class DoodadManager extends EntityManager<Doodad> {
    readonly static: typeof DoodadManager;
    protected readonly name = "DoodadManager";
    event: IEventEmitter<this, IDoodadManagerEvents>;
    private static readonly cachedBestDoodadForTier;
    private static readonly cachedDoodadGroups;
    static readonly cachedDoodadSpawns: Map<BiomeType, Map<WorldZ, Map<TerrainType, DoodadType[]>>>;
    private static readonly cachedDoodadsInGroup;
    private static cachedMaximumGrowthTime;
    private readonly scarecrows;
    static getBestDoodadForTier(doodad: DoodadType | DoodadTypeGroup): DoodadType | undefined;
    static generateLookups(): void;
    static clearCaches(): void;
    static isGroup(doodadType: DoodadType | DoodadTypeGroup): doodadType is DoodadTypeGroup;
    static isInGroup(doodadType: DoodadType, doodadGroup: DoodadTypeGroup | DoodadType): boolean;
    static getGroups(doodadType: DoodadType): DoodadTypeGroup[];
    static getDoodadsInGroup(doodadTypeGroup: DoodadTypeGroup): DoodadType[];
    static getMaximumGrowthTime(): number;
    /**
     * Checks if a number is a DoodadType or DoodadTypeExtra.
     * @param type a number (DoodadType/DoodadTypeExtra enum).
     * @returns true or false depending on if the number is a DoodadType or DoodadTypeExtra.
     */
    static isDoodadExtra(type: number): type is DoodadTypeExtra;
    static getDoodadTypeGroupName(doodadType: DoodadType | DoodadTypeGroup, article?: Article, count?: number): Translation;
    /**
     * Note: This can be called multiple times in the same game depending on loading/unloading of islands
     */
    loadEntity(doodad: Doodad): void;
    isGroup(doodadType: DoodadType | DoodadTypeGroup): doodadType is DoodadTypeGroup;
    isInGroup(doodadType: DoodadType, doodadGroup: DoodadTypeGroup | DoodadType): boolean;
    getGroups(doodad: DoodadType): DoodadTypeGroup[];
    /**
     * Checks if a number is a DoodadType or DoodadTypeExtra.
     * @param type a number (DoodadType/DoodadTypeExtra enum).
     * @returns true or false depending on if the number is a DoodadType or DoodadTypeExtra.
     */
    isDoodadExtra(type: number): type is DoodadTypeExtra;
    getBestDoodadForTier(doodad: DoodadType | DoodadTypeGroup): DoodadType | undefined;
    createFake(type: DoodadType, options?: IDoodadOptions, tile?: Tile, id?: number): Doodad;
    create(type: DoodadType, tile: Tile, options?: IDoodadOptions, creator?: Human): Doodad | undefined;
    /**
     * Removes a doodad from the world.
     * @param doodad The doodad to remove
     */
    protected onRemove(doodad: Doodad): boolean;
    /**
     * Runs a full gamut of updates on doodads including decaying items inside containers, spreading/growing plants/mushrooms, water distillation/desenation and more.
     */
    updateAll(ticks: number, playingHumans: Human[], playerHumanTiles: Set<Tile>): void;
    /**
     * Runs a full gamut of updates on doodads including decaying items inside containers, spreading/growing plants/mushrooms, water distillation/desenation and more.
     */
    updateAllAsync(ticks: number, playingHumans: Human[], playerHumanTiles: Set<Tile>, onProgress: (progess: number) => Promise<void>): Promise<void>;
    verifyAndFixItemWeights(): void;
    getScarecrowInRange(tile: Tile, group?: DoodadTypeGroup): Doodad | undefined;
    getScarecrowInLineOfSight(creature: Creature, isClientside: boolean): Doodad | undefined;
    addScarecrow(doodad: Doodad): void;
    removeScarecrow(doodad: Doodad): void;
    /**
     * Handles doodad specific effects
     */
    private onSpawnOrRestore;
}
