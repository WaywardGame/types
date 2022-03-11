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
import type { ActionType } from "game/entity/action/IAction";
import type { IDamageInfo } from "game/entity/creature/ICreature";
import Human from "game/entity/Human";
import type { StatusType } from "game/entity/IEntity";
import { AiType, EntityType, MoveType } from "game/entity/IEntity";
import type { ICustomizations } from "game/entity/IHuman";
import { EquipType } from "game/entity/IHuman";
import type { NPCType } from "game/entity/npc/INPCs";
import { CreationId, TileUpdateType } from "game/IGame";
import type { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type { ITile } from "game/tile/ITerrain";
import Translation from "language/Translation";
export interface INPCEvents extends Events<Human> {
    /**
     * Called when a npc tries to move
     * @param tile The tile the npc is trying to move to
     * @param x The x coordinate of the tile
     * @param y The y coordinate of the tile
     * @param z The z coordinate of the tile
     * @param moveType The npcs move type
     * @returns True if the npc can move, false if the npc cannot move, or undefined to use the default logic
     */
    canMove(tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined;
    /**
     * Called when an npc is killed
     * @returns False to stop the npc from dying or undefined to use the default logic
     */
    die?(): boolean | undefined;
    /**
     * Called when an npc is damaged
     * @param damageInfo The damage info object
     * @returns The amount of damage the npc should take (the npc will take this damage) or undefined to use the default logic
     */
    damage?(damageInfo: IDamageInfo): number | undefined;
}
export default abstract class NPC extends Human {
    protected static registrarId: number;
    readonly objectType = CreationId.NPC;
    readonly event: IEventEmitter<this, INPCEvents>;
    readonly entityType: EntityType.NPC;
    readonly tileUpdateType = TileUpdateType.NPC;
    get constructorFunction(): typeof NPC;
    ai: AiType;
    seen: number;
    type: NPCType;
    weightCapacity: number;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(type?: NPCType, id?: number, islandId?: `${number},${number}`, x?: number, y?: number, z?: number);
    getRegistrarId(): number;
    /**
     * Creates inventory, equips items, and scales stats
     */
    spawn(): void;
    update(): void;
    kill(): boolean;
    isHostile(): boolean;
    isWaiting(): boolean;
    getDamageModifier(): number;
    makeHostile(): void;
    /**
     * The actions available to use with this npc
     */
    getActions(): ActionType[] | undefined;
    addAiType(ai: AiType): void;
    /**
     * Removes an AiType from an NPC.
     * @param ai The AiType to remove from the NPC.
     */
    removeAiType(ai: AiType): void;
    /**
     * Closes the merchant trading window for everybody.
     */
    closeInventory(): void;
    updateDirection(x: number, y: number): void;
    /**
     * Sets the default weightCapacity of an NPC (based on their equipment and starting items).
     */
    generateWeightCapacity(): void;
    getName(): import("../../../language/impl/TranslationImpl").default;
    protected getApplicableStatusEffects(): Set<StatusType>;
    /**
     * The name of the npc - called when created
     */
    protected getDefaultName(): Translation;
    /**
     * Initialize stats
     */
    protected abstract initializeStats(): void;
    /**
     * The customizations of the npc - called when created
     */
    protected abstract getDefaultCustomization(): ICustomizations;
    /**
     * The equip the npc spawns with - called for every equip type when the npc is created
     */
    protected abstract getDefaultEquipment(equipType: EquipType): Item | ItemType | undefined;
    /**
     * Items the npc should spawn with - called when created
     * This is in addition to the equipment
     */
    protected abstract getDefaultInventory(): Array<Item | ItemType>;
    /**
     * The ai type
     */
    protected abstract getDefaultAiType(): AiType;
    /**
     * The reputation change when the npc dies
     */
    protected getReputationChangeOnDeath(): number;
    protected attack(): boolean;
    protected move(): boolean;
    protected autoScaleStats(): void;
    protected preMove(fromX: number, fromY: number, fromZ: number, fromTile: ITile, toX: number, toY: number, toZ: number, toTile: ITile): boolean | void | undefined;
    protected postMove(): void;
    protected checkMove(moveType: MoveType, tileX: number, tileY: number, tileZ: number): 0 | -1 | -4 | -2 | -3 | -5;
    get asNPC(): NPC;
    get asPlayer(): undefined;
    get asLocalPlayer(): undefined;
}
