/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Doodad from "doodad/Doodad";
import { DoodadType, DoodadTypeGroup, IDoodadOptions } from "doodad/IDoodad";
import EventEmitter from "event/EventEmitter";
interface ICachedBestDoodadForTier {
    doodad?: DoodadType;
    value?: number;
}
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
}
export default class DoodadManager extends EventEmitter.Host<IDoodadManagerEvents> {
    cachedBestDoodadForTier: {
        [index: number]: ICachedBestDoodadForTier;
    };
    private cachedGroups;
    constructor();
    generateLookups(): void;
    createFake(type: DoodadType, options?: IDoodadOptions): Doodad;
    create(type: DoodadType, x: number, y: number, z: number, options?: IDoodadOptions): Doodad | undefined;
    /**
     * Removes a doodad from the world.
     * @param doodad The doodad to remove
     * @param removeItems Whether to remove items.
     *
     * Note: This method will remove any items in them whether the `removeItems` parameter is provided or not. If the parameter is not
     * provided, the assumption is that it will only be called on empty doodads. Therefore, if there *are* items, it will log a warning.
     */
    remove(doodad: Doodad, removeItems?: boolean): void;
    updateAll(): void;
    isGroup(doodadType: DoodadType | DoodadTypeGroup): doodadType is DoodadTypeGroup;
    isInGroup(doodadType: DoodadType, doodadGroup: DoodadTypeGroup | DoodadType): boolean;
    getGroupDoodads(doodadGroup: DoodadTypeGroup): Set<DoodadType>;
    verifyAndFixItemWeights(): void;
}
export {};
