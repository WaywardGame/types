/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Doodad from "doodad/Doodad";
import Corpse from "entity/creature/corpse/Corpse";
import Creature from "entity/creature/Creature";
import NPC from "entity/npc/NPC";
import { IReferenceable } from "game/IReferenceManager";
import DrawnMap from "game/mapping/DrawnMap";
import TemperatureManager from "game/temperature/TemperatureManager";
import Item from "item/Item";
import { ITileContainer, ITileData } from "tile/ITerrain";
import TileEvent from "tile/TileEvent";
import { IVector2, IVector3 } from "utilities/math/IVector";
import { BiomeTypes } from "./IBiome";
import { CreationId, IGameOld, ISeeds, IWell } from "./IGame";
import TimeManager from "./TimeManager";
/**
 * Represents the worlds island
 * Items, Creatures, Npcs, etc.. all exist on the island
 */
export default class Island implements IReferenceable {
    biomeType: BiomeTypes;
    contaminatedWater: IVector3[];
    corpses: SaferArray<Corpse>;
    creatures: SaferArray<Creature>;
    creatureSpawnTimer: number;
    doodads: SaferArray<Doodad>;
    items: SaferArray<Item>;
    lastCreationIds: SaferNumberIndexedObject<number>;
    loadCount: number;
    mapGenVersion: string;
    name?: string;
    referenceId?: number;
    npcs: SaferArray<NPC>;
    position: IVector2;
    saveVersion: string;
    tileContainers: ITileContainer[];
    tileData: SaferNumberIndexedObject<SaferNumberIndexedObject<SaferNumberIndexedObject<ITileData[]>>>;
    tileEvents: SaferArray<TileEvent>;
    time: TimeManager;
    treasureMaps: DrawnMap[];
    version: string;
    wellData: SaferNumberIndexedObject<IWell>;
    seeds: ISeeds;
    temperature: TemperatureManager | undefined;
    static positionToId(position: IVector2): string;
    static idToPosition(id: string): IVector2 | undefined;
    constructor(position?: IVector2, startingSeed?: number);
    get id(): string;
    get biome(): import("./IBiome").IBiomeDescription;
    registerEventBus(): void;
    unregisterEventBus(): void;
    hydrateFromOldGame(oldGame: IGameOld): void;
    findUnusedId<T>(creationId: CreationId, things: T[]): number;
    /**
     * Szudzik's function
     */
    private generatePositionHash;
}
