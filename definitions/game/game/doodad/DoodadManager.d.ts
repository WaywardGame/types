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
import Doodad from "game/doodad/Doodad";
import type { IDoodadOptions } from "game/doodad/IDoodad";
import { DoodadType, DoodadTypeGroup } from "game/doodad/IDoodad";
import type Creature from "game/entity/creature/Creature";
import type Human from "game/entity/Human";
import { CreationId } from "game/IGame";
import { ObjectManager } from "game/ObjectManager";
import type { TerrainType } from "game/tile/ITerrain";
import Translation from "language/Translation";
import type Vector3 from "utilities/math/Vector3";
export interface IDoodadManagerEvents {
    /**
     * Called when a doodad is about to be spawned
     * @param type The type of doodad
     * @param x The x coordinate where the doodad will be spawned
     * @param y The y coordinate where the doodad will be spawned
     * @param z The z coordinate where the doodad will be spawned
     * @param options The doodad spawn options
     * @returns False if the dooodad cannot spawn, or undefined to use the default logic
     */
    canSpawn(type: DoodadType, x: number, y: number, z: number, options: IDoodadOptions): boolean | undefined;
    /**
     * Called when a doodad is created.
     */
    create(doodad: Doodad, creator?: Human): any;
    /**
     * Called when a doodad is removed.
     */
    remove(doodad: Doodad): any;
}
export default class DoodadManager extends ObjectManager<Doodad, IDoodadManagerEvents> {
    protected readonly creationId: CreationId;
    private static cachedBestDoodadForTier;
    private static cachedGroups;
    private static cachedDoodadSpawns;
    private readonly scarecrows;
    static getBestDoodadForTier(doodad: DoodadType | DoodadTypeGroup): DoodadType | undefined;
    static generateLookups(): void;
    static clearCaches(): void;
    static isGroup(doodadType: DoodadType | DoodadTypeGroup): doodadType is DoodadTypeGroup;
    static isInGroup(doodadType: DoodadType, doodadGroup: DoodadTypeGroup | DoodadType): boolean;
    static getGroupDoodads(doodadGroup: DoodadTypeGroup): Set<DoodadType>;
    static getDoodadTypeGroupName(doodadType: DoodadType | DoodadTypeGroup, article?: false | "definite" | "indefinite", count?: number): Translation;
    delete(): void;
    /**
     * Note: This can be called multiple times in the same game depending on loading/unloading of islands
     */
    load(): void;
    isGroup(doodadType: DoodadType | DoodadTypeGroup): doodadType is DoodadTypeGroup;
    isInGroup(doodadType: DoodadType, doodadGroup: DoodadTypeGroup | DoodadType): boolean;
    getBestDoodadForTier(doodad: DoodadType | DoodadTypeGroup): DoodadType | undefined;
    createFake(type: DoodadType, options?: IDoodadOptions, x?: number, y?: number, z?: number): Doodad;
    create(type: DoodadType, x: number, y: number, z: number, options?: IDoodadOptions, creator?: Human): Doodad | undefined;
    /**
     * Removes a doodad from the world.
     * @param doodad The doodad to remove
     * @param removeItems Whether to remove items.
     *
     * Note: This method will remove any items in them whether the `removeItems` parameter is provided or not. If the parameter is not
     * provided, the assumption is that it will only be called on empty doodads. Therefore, if there *are* items, it will log a warning.
     */
    remove(doodad: Doodad, removeItems?: boolean): void;
    /**
     * Runs a full gamut of updates on doodads including decaying items inside containers, spreading/growing plants/mushrooms, water distillation/desenation and more.
     */
    updateAll(ticks: number, playingHumans: Human[], updatesPerTick?: number): void;
    /**
     * Runs a full gamut of updates on doodads including decaying items inside containers, spreading/growing plants/mushrooms, water distillation/desenation and more.
     */
    updateAllAsync(ticks: number, playingHumans: Human[], updatesPerTick: number | undefined, onProgress: (progess: number) => Promise<void>): Promise<void>;
    verifyAndFixItemWeights(allowFixesInMultiplayer?: boolean): void;
    /**
     * Used to spawn a random doodad on the current biome type and at a set location (and terrain type) based on spawnOnWorldGen properties in doodad descriptions.
     * @param terrainType The terrain type to check.
     * @param x The x coordinate to check.
     * @param y The y coordinate to check.
     * @param z The z coordinate to check.
     */
    spawn(terrainType: TerrainType, x: number, y: number, z: number): void;
    getScarecrowInRange(position: Vector3, range: number): Doodad | undefined;
    getScarecrowInLineOfSight(creature: Creature, isClientside: boolean): Doodad | undefined;
    private addScarecrow;
    private removeScarecrow;
}
