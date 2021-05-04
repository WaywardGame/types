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
import { BiomeTypes } from "game/biome/IBiome";
import Doodad from "game/doodad/Doodad";
import Corpse from "game/entity/creature/corpse/Corpse";
import Creature from "game/entity/creature/Creature";
import NPC from "game/entity/npc/NPC";
import { CreationId, IGameOld, ISeeds, IWaterContamination, IWell } from "game/IGame";
import Item from "game/item/Item";
import DrawnMap from "game/mapping/DrawnMap";
import { IReferenceable } from "game/reference/IReferenceManager";
import TemperatureManager from "game/temperature/TemperatureManager";
import { ITileContainer, ITileData } from "game/tile/ITerrain";
import TileEvent from "game/tile/TileEvent";
import TimeManager from "game/TimeManager";
import { IVector2 } from "utilities/math/IVector";
/**
 * Represents the worlds island
 * Items, Creatures, Npcs, etc.. all exist on the island
 */
export default class Island implements IReferenceable {
    biomeType: BiomeTypes;
    contaminatedWater: IWaterContamination[];
    corpses: SaferArray<Corpse>;
    creatures: SaferArray<Creature>;
    creatureSpawnTimer: number;
    doodads: SaferArray<Doodad>;
    items: SaferArray<Item>;
    lastCreationIds: SaferNumberIndexedObject<number>;
    loadCount: number;
    mapGenVersion: string;
    name?: string;
    npcs: SaferArray<NPC>;
    position: IVector2;
    referenceId?: number;
    saveVersion: string;
    tileContainers: ITileContainer[];
    tileData: SaferNumberIndexedObject<SaferNumberIndexedObject<SaferNumberIndexedObject<ITileData[]>>>;
    tileEvents: SaferArray<TileEvent>;
    time: TimeManager;
    treasureMaps: DrawnMap[];
    version: string;
    wellData: SaferNumberIndexedObject<IWell>;
    seeds: ISeeds;
    temperature: TemperatureManager;
    static positionToId(position: IVector2): string;
    static idToPosition(id: string): IVector2 | undefined;
    constructor(position?: IVector2, startingSeed?: number);
    get id(): string;
    get biome(): import("game/biome/IBiome").IBiomeDescription;
    registerEventBus(): void;
    unregisterEventBus(): void;
    hydrateFromOldGame(oldGame: IGameOld): void;
    findUnusedId<T>(creationId: CreationId, things: T[]): number;
    /**
     * Szudzik's function
     */
    private generatePositionHash;
}
