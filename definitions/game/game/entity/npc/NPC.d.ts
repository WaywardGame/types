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
import type { IActionHandlerApi, IActionNotUsable, IActionUsable } from "game/entity/action/IAction";
import { ActionType } from "game/entity/action/IAction";
import Human from "game/entity/Human";
import type { IEntityConstructorOptions, IProperties, Property } from "game/entity/IEntity";
import { AiType, EntityType, MoveType, StatusType } from "game/entity/IEntity";
import type { ICustomizations } from "game/entity/IHuman";
import { EquipType } from "game/entity/IHuman";
import type { NPCType } from "game/entity/npc/INPCs";
import type MerchantNPC from "game/entity/npc/npcs/Merchant";
import type ShipperNPC from "game/entity/npc/npcs/Shipper";
import { MessageManagerNoOp } from "game/entity/player/MessageManager";
import { NoteManagerNoOp } from "game/entity/player/note/NoteManager";
import { QuestManagerNoOp } from "game/entity/player/quest/QuestManager";
import { TileUpdateType } from "game/IGame";
import type { IContainer, ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type Tile from "game/tile/Tile";
import Translation from "language/Translation";
export interface INPCEvents extends Events<Human> {
    /**
     * Called when a npc tries to move
     * @param tile The tile the npc is trying to move to
     * @param moveType The npcs move type
     * @returns True if the npc can move, false if the npc cannot move, or undefined to use the default logic
     */
    canNPCMove(tile: Tile, moveType: MoveType): boolean | undefined;
}
export default abstract class NPC extends Human<NPCType> {
    protected static registrarId: number;
    get constructorFunction(): typeof NPC;
    readonly isPlayerLike: boolean;
    get entityType(): EntityType.NPC;
    get tileUpdateType(): TileUpdateType;
    readonly event: IEventEmitter<this, INPCEvents>;
    ai: AiType;
    seen: number;
    weightCapacity: number;
    properties?: IProperties;
    talked?: Set<string>;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(entityOptions?: IEntityConstructorOptions<NPCType>);
    getRegistrarId(): number;
    createNoteManager(): NoteManagerNoOp;
    createMessageManager(): MessageManagerNoOp;
    createQuestManager(): QuestManagerNoOp;
    addMilestone(): void;
    protected getApplicableStatusEffects(): Set<StatusType> | undefined;
    isValid(): boolean;
    /**
     * Creates inventory, equips items, and scales stats
     */
    spawn(): void;
    update(): void;
    /**
     * Override in npcs for custom logic
     * @returns True if the npc is doing something that would prevent it from attacking/moving
     */
    protected runActions(): boolean;
    /**
     * Override in npcs for custom logic
     * @returns True if the npc can despawn due to not being seen for a while
     */
    protected canDespawn(): boolean;
    /**
     * Override in npcs for custom logic
     * @returns True if an npc can move / attack / do other things while not in anyones field of view
     */
    protected canUpdateOutsideFov(): boolean;
    protected runCommonProcesses(inventoryItems: Item[]): boolean;
    kill(): boolean;
    isHostile(): boolean;
    isWaiting(): boolean;
    getDamageModifier(): number;
    makeHostile(): void;
    getPublicContainer(): IContainer | undefined;
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
     * @returns true if this is the first time the NPC has been talked to
     */
    talkTo(human: Human): boolean;
    hasTalkedTo(human?: Human): boolean;
    getDefaultInteraction(): number | undefined;
    canInteract(human: Human, interactType?: number): IActionUsable | IActionNotUsable;
    confirmInteract(human: Human, interactType?: number): Promise<boolean>;
    interact(action: IActionHandlerApi<Human>, interactType?: number): void;
    /**
     * Closes container dialogs
     */
    closeContainerDialogs(): void;
    protected moveToIsland(targetTile: Tile): void;
    /**
     * Sets the default weightCapacity of an NPC (based on their equipment and starting items).
     */
    generateWeightCapacity(): void;
    getName(asKnownBy?: Human): import("../../../language/impl/TranslationImpl").default;
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
    protected getDefaultCustomization(): ICustomizations;
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
    protected changeZ(toZ: number, fromZ: number): boolean | void | undefined;
    protected updateTile(fromTile: Tile, toTile: Tile): boolean;
    protected postMove(): void;
    canMoveToTile(moveType: MoveType, tile: Tile): -1 | 0 | -2 | -3 | -4 | -5 | -6;
    getWeightOrStaminaMovementPenalty(): number;
    get asMerchant(): MerchantNPC | undefined;
    get asShipper(): ShipperNPC | undefined;
    get asNPC(): NPC;
    get asPlayer(): undefined;
    get asLocalPlayer(): undefined;
    /**
     * Properties system that is only used for merchants
     */
    hasProperty(property: Property): boolean;
    addProperty(property: Property, value: any): void;
    getProperty<T>(property: Property): T | undefined;
    removeProperty(property: Property): boolean;
    /**
     * Equip better things when available
     */
    private processEquipment;
    /**
     * Try to do something when health is below 20%
     */
    private processHealth;
    /**
     * Try to do something when hunger is below 20%
     */
    private processHunger;
    /**
     * Try to do something when thirst is below 20%
     */
    private processThirst;
    /**
     * Stop stat timers when they would kill
     */
    protected capStatTimers(): void;
    private calculateWeaponEquipItemScore;
    private calculateDefenseEquipItemScore;
}
