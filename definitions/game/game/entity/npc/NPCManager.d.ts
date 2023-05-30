/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { Events, IEventEmitter } from "event/EventEmitter";
import type { IEntityCanCreateOptions } from "game/entity/EntityManager";
import EntityManager from "game/entity/EntityManager";
import type { NPCType } from "game/entity/npc/INPCs";
import NPC from "game/entity/npc/NPC";
import type ShipperNPC from "game/entity/npc/npcs/Shipper";
import type Tile from "game/tile/Tile";
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
}
export default class NPCManager extends EntityManager<NPC> {
    readonly event: IEventEmitter<this, INPCManagerEvents>;
    readonly playerLikeNpcs: NPC[];
    load(): void;
    spawn(npcType: NPCType, tile: Tile, options?: INPCCanCreateOptions): NPC | undefined;
    remove(npc: NPC): void;
    addPlayerLike(npc: NPC, addToIsland?: boolean): void;
    removePlayerLike(npc: NPC): void;
    updateAll(): void;
    /**
     * Get an array of shippers that are in the process of shipping things to another island
     */
    getPendingOutboundShippers(): ShipperNPC[];
}
