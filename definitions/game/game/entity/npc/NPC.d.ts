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
import { TileUpdateType } from "@wayward/game/game/IGame";
import type { RuneChance } from "@wayward/game/game/deity/IDeities";
import Human from "@wayward/game/game/entity/Human";
import type { IEntityConstructorOptions } from "@wayward/game/game/entity/IEntity";
import { EntityType, MoveType } from "@wayward/game/game/entity/IEntity";
import type { ICustomizations } from "@wayward/game/game/entity/IHuman";
import { EquipType } from "@wayward/game/game/entity/IHuman";
import type { IActionHandlerApi, IActionNotUsable, IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { AiType, ChangeAiType } from "@wayward/game/game/entity/ai/AI";
import type { IEntityAiEvents } from "@wayward/game/game/entity/ai/AiManager";
import AiManager from "@wayward/game/game/entity/ai/AiManager";
import type { INPCDescription, NPCTag } from "@wayward/game/game/entity/npc/INPC";
import { NPCType } from "@wayward/game/game/entity/npc/INPCs";
import type MerchantNPC from "@wayward/game/game/entity/npc/npcs/Merchant";
import type ShipperNPC from "@wayward/game/game/entity/npc/npcs/Shipper";
import { MessageManagerNoOp } from "@wayward/game/game/entity/player/MessageManager";
import type Player from "@wayward/game/game/entity/player/Player";
import { NoteManagerNoOp } from "@wayward/game/game/entity/player/note/NoteManager";
import { QuestManagerNoOp } from "@wayward/game/game/entity/player/quest/QuestManager";
import { StatusApplicability } from "@wayward/game/game/entity/status/IStatus";
import type { IContainer, ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type Tile from "@wayward/game/game/tile/Tile";
import type { Article } from "@wayward/game/language/ITranslation";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface INPCEvents extends Events<Human>, IEntityAiEvents {
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
export default abstract class NPC extends Human<INPCDescription, NPCType, ReferenceType.NPC, NPCTag> {
    protected static registrarId: number;
    get constructorFunction(): typeof NPC;
    readonly isPlayerLike: boolean;
    get entityType(): EntityType.NPC;
    get tileUpdateType(): TileUpdateType;
    event: IEventEmitter<this, INPCEvents>;
    private weightCapacity;
    ai: AiManager<this>;
    interactions?: Map<string, Set<number>>;
    seen: number;
    talked?: Map<string, number>;
    static getRegistrarId(): number;
    static setRegistrarId(id: number): void;
    constructor(entityOptions?: IEntityConstructorOptions<NPCType>);
    protected get typeEnum(): typeof NPCType;
    getDescription(): INPCDescription | undefined;
    getWeightCapacity(): number;
    getRegistrarId(): number;
    createNoteManager(): NoteManagerNoOp;
    createMessageManager(): MessageManagerNoOp;
    createQuestManager(): QuestManagerNoOp;
    addMilestone(): void;
    protected getStatusApplicability(): StatusApplicability | undefined;
    get isValid(): boolean;
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
    protected runCommonProcesses(inventoryItems: Item[]): number | undefined;
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
    protected moveToIsland(targetTile: Tile): void;
    /**
     * Sets the default weightCapacity of an NPC (based on their equipment and starting items).
     */
    generateWeightCapacity(): void;
    getName(asKnownBy?: Human): TranslationImpl;
    getName(article?: Article): TranslationImpl;
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
     * The rune granted on when killing the NPC.
     */
    protected giveRuneOnDeath(): RuneChance;
    protected attack(): boolean;
    findPath(target: Tile, moveType: MoveType, ignoreHuman: Human, maxNodesChecked?: number): Tile[] | undefined;
    /**
     * Check NPC move with a multiplayer sync check
     * @param source Provided when the check is running in a sync environment (NOT CLIENTSIDE)
     * @returns 0 if the NPC can move, otherwise an error code
     */
    private checkNPCSafeMove;
    protected move(): boolean;
    protected autoScaleStats(): void;
    protected changeZ(toZ: number, fromZ: number): boolean | void | undefined;
    protected onAiChange(ai: AiType, type: ChangeAiType): void;
    protected updateTileWhenMoving(fromTile: Tile, toTile: Tile): boolean;
    canMoveToTile(moveType: MoveType, tile: Tile, ignoreHuman?: Human, skipEventCheck?: boolean): 0 | -1 | -6 | -2 | -3 | -4 | -5;
    getWeightOrStaminaMovementPenalty(): number;
    get asMerchant(): MerchantNPC | undefined;
    get asShipper(): ShipperNPC | undefined;
    get asNPC(): NPC;
    get asPlayer(): undefined;
    get asLocalPlayer(): undefined;
    get isLocalPlayer(): boolean;
    isNPC(): this is NPC;
    isPlayer(): this is Player;
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
