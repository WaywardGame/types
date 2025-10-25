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
import type { IEntityCanCreateOptions } from "@wayward/game/game/entity/EntityManager";
import EntityManager from "@wayward/game/game/entity/EntityManager";
import type Human from "@wayward/game/game/entity/Human";
import { NPCType } from "@wayward/game/game/entity/npc/INPCs";
import NPC from "@wayward/game/game/entity/npc/NPC";
import type ShipperNPC from "@wayward/game/game/entity/npc/npcs/Shipper";
import type Island from "@wayward/game/game/island/Island";
import type Tile from "@wayward/game/game/tile/Tile";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface INPCCanCreateOptions extends IEntityCanCreateOptions {
    uniqueNpcType?: string;
    disablePlayerLike?: boolean;
}
export interface INPCManagerEvents extends Events<EntityManager<NPC>> {
    /**
     * Called when a npc is about to be spawned
     * @param type The type of npc
     * @param tile The tile where the npc will be spawned
     * @returns False if the npc cannot spawn, or undefined to use the default logic
     */
    canSpawn(type: NPCType, tile: Tile): boolean | undefined;
    /**
     * Called when a player-like human (player / special npc) is spawned
     */
    addPlayingEntity(entity: NPC): any;
    /**
     * Called when a player-like human (player / special npc) is removed
     */
    removePlayingEntity(entity: NPC): any;
    startInterval(spawnTracker: INPCManagerSpawnTracker): any;
    endInterval(spawnTracker: INPCManagerSpawnTracker): any;
    intervalSpawn(spawnTracker: INPCManagerSpawnTracker, npc: NPC): any;
}
export interface INPCManagerSpawnTracker {
    intervalEnd: number;
    length: number;
    potentialSpawnCount: number;
    spawned: number;
    chances: number[];
}
export default class NPCManager extends EntityManager<NPC> {
    readonly static: typeof NPCManager;
    protected readonly name = "NPCManager";
    protected readonly reregisterObjectsForMemoryLeaks = true;
    event: IEventEmitter<this, INPCManagerEvents>;
    readonly playerLikeNpcs: NPC[];
    private readonly spawnIntervals;
    private killCount;
    loadEntity(npc: NPC): void;
    create(npcType: NPCType, tile: Tile, options?: INPCCanCreateOptions): NPC | undefined;
    protected onRemove(npc: NPC): boolean;
    addPlayerLike(npc: NPC, addToIsland?: boolean): void;
    /**
     * Increases the number of kills by 1 (which affects the spawn rate of npcs)
     */
    increaseKillCount(): void;
    removePlayerLike(npc: NPC): void;
    updateAll(): void;
    /**
     * Get an array of shippers that are in the process of shipping things to another island
     */
    getPendingOutboundShippers(): ShipperNPC[];
    resetSpawnIntervals(): void;
    private getSpawnIntervalLengthRange;
    resetSpawnInterval(npcType: NPCType): void;
    runRandomEvents(island: Island, tile: Tile, human: Human): boolean | undefined | void;
    private getNPCTypeCount;
    private getNPCTypeTargetCount;
    private getNPCSpawnContext;
    private getNPCTypeIntervalSpawnCountChances;
    private canSpawnNPCType;
}
