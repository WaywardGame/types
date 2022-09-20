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
import type { Events, IEventEmitter } from "event/EventEmitter";
import type { IEntityCanCreateOptions } from "game/entity/EntityManager";
import EntityManager from "game/entity/EntityManager";
import type { NPCType } from "game/entity/npc/INPCs";
import NPC from "game/entity/npc/NPC";
import { CreationId } from "game/IGame";
export interface INPCCanCreateOptions extends IEntityCanCreateOptions {
    uniqueNpcType?: string;
}
export interface INPCManagerEvents extends Events<EntityManager<NPC>> {
    /**
     * Called when a npc is about to be spawned
     * @param type The type of npc
     * @param x The x coordinate where the npc will be spawned
     * @param y The y coordinate where the npc will be spawned
     * @param z The z coordinate where the npc will be spawned
     * @returns False if the npc cannot spawn, or undefined to use the default logic
     */
    canSpawn(type: NPCType, x: number, y: number, z: number): boolean | undefined;
}
export default class NPCManager extends EntityManager<NPC> {
    protected readonly creationId: CreationId;
    readonly event: IEventEmitter<this, INPCManagerEvents>;
    readonly playerLikeNpcs: NPC[];
    load(): void;
    spawn(npcType: NPCType, x: number, y: number, z: number, options?: INPCCanCreateOptions): NPC | undefined;
    remove(npc: NPC): void;
    addPlayerLike(npc: NPC): void;
    removePlayerLike(npc: NPC): void;
    updateAll(): void;
}
