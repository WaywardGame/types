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
import type { IActionHandlerApi, IActionNotUsable, IActionUsable } from "game/entity/action/IAction";
import { ActionType } from "game/entity/action/IAction";
import Human from "game/entity/Human";
import type { IEntityConstructorOptions } from "game/entity/IEntity";
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
import type TranslationImpl from "language/impl/TranslationImpl";
import Translation from "language/Translation";
export interface INPCEvents extends Events<Human> {
    /**
     * Called when a npc tries to move
     * @param tile The tile the npc is trying to move to
     * @param moveType The npcs move type
     * @returns True if the npc can move, false if the npc cannot move, or undefined to use the default logic
     */
    canNPCMove(tile: Tile, moveType: MoveType): boolean | undefined;
    /**
     * Called when a npc tries to attack
     * @returns True if the npc can attack, false if the npc cannot attack, or undefined to use the default logic
     */
    canNPCAttack(): boolean | undefined;
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
    talked?: Map<string, number>;
    interactions?: Map<string, Set<number>>;
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
    /**
     * Allow swapping with npcs
     */
    canSwapWith(human: Human, source: string | undefined): boolean;
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
     * Greets a human, if necessary, and sets the NPC as having been talked to them on the current turn.
     * @returns The time since the NPC was last talked to, or false if the human has never talked to the NPC.
     */
    talkTo(human: Human): number | false;
    /**
     * @returns The time since the NPC was last talked to, or false if the human has never talked to the NPC.
     */
    hasTalkedTo(human?: Human): number | false;
    /**
     * @param timeSinceLastChat The time it's been since the human last chatted with this NPC, or false if it's the first time.
     */
    getGreeting(human: Human, timeSinceLastChat: number | false): TranslationImpl | undefined;
    getDefaultInteraction(): number | undefined;
    isAlreadyInteracting(human: Human, interactType?: number): boolean;
    canInteract(human: Human, interactType?: number): IActionUsable | IActionNotUsable;
    confirmInteract(human: Human, interactType?: number): Promise<boolean>;
    /**
     * Don't call this directly, it's for implementation. @see {@link NPCInteract}
     */
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
    getName(asKnownBy?: Human): TranslationImpl;
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
    canMoveToTile(moveType: MoveType, tile: Tile, ignoreHuman?: Human): 0 | -1 | -2 | -5 | -4 | -6 | -3;
    getWeightOrStaminaMovementPenalty(): number;
    get asMerchant(): MerchantNPC | undefined;
    get asShipper(): ShipperNPC | undefined;
    get asNPC(): NPC;
    get asPlayer(): undefined;
    get asLocalPlayer(): undefined;
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
