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
import EntityManager from "entity/EntityManager";
import { NPCType } from "entity/npc/INPCs";
import NPC from "entity/npc/NPC";
import { Events, IEventEmitter } from "event/EventEmitter";
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
    readonly event: IEventEmitter<this, INPCManagerEvents>;
    getEntities(): SaferArray<NPC>;
    spawn(npcType: NPCType, x: number, y: number, z: number): NPC | undefined;
    remove(npc: NPC): void;
    updateAll(): void;
}
