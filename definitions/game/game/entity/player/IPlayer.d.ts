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
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { HairColor, HairStyle, SkinColor } from "@wayward/game/game/entity/IHuman";
import type { SkillType } from "../skill/ISkills";
import type { TitleType } from "@wayward/game/game/entity/action/actions/SetTitle";
import type { IMessage } from "@wayward/game/game/entity/player/IMessageManager";
import type MessageManager from "@wayward/game/game/entity/player/MessageManager";
import type Player from "@wayward/game/game/entity/player/Player";
import type { INote } from "@wayward/game/game/entity/player/note/NoteManager";
import { ItemType } from "@wayward/game/game/item/IItem";
import type { Prompt } from "@wayward/game/game/meta/prompt/IPrompt";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { Reference, ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import type { FindPathRange } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type InterruptChoice from "@wayward/game/language/dictionary/InterruptChoice";
import { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import type { Events } from "@wayward/utilities/event/EventEmitter";
export interface IPlayerEvents extends Events<Human> {
    /**
     * Called when a message is being displayed for a player
     * @param message The message that will be displayed
     */
    displayMessage(message: IMessage): any;
    /**
     * Called when messages are cleared for this player
     */
    clearMessages(): any;
    /**
     * Called when a message is about to be displayed
     * @param message The message that will be displayed
     * @param messageId The `Message`, or `-1` if the message being displayed isn't a `Message`
     * @returns False to not display the message or undefined to use the default logic
     */
    shouldDisplayMessage(message: IMessage, messageId: number): boolean | undefined;
    /**
     * Called when a player responds to certain interrupts
     * @param interrupt The interrupt
     * @param choice The selected choice
     */
    promptResponse(interrupt: Prompt, choice: boolean | InterruptChoice): any;
    /**
     * Called when the player is killed.
     * @param showingGameEndScreen True if the game end screen will be shown
     */
    die(showingGameEndScreen?: boolean): any;
    /**
     * Called when the player will be respawned. If any handlers return `false` to stop the player from respawning,
     * no further handlers will be called.
     * @return `false` to stop the player from respawning
     */
    shouldRespawn(): false | void;
    /**
     * Called when the player is respawned.
     */
    respawn(): false | void;
    /**
     * Called when the player attempts to sail off the edge of the map
     */
    sailOffMapEdge(direction: Direction): any;
    /**
     * Called when a player's title changes. IE, John -> John, the Merchant
     */
    changeTitle(type?: TitleType, value?: Milestone | SkillType): any;
    /**
     * Called when the players quickslots are updated
     * @param quickslot The quick slot
     * @param itemType The item type
     */
    updatedQuickslotInfo?(quickslot: number, itemType?: ItemType): any;
    /**
     * Called when the player will write a note.
     * @param note The note that will be written.
     * @returns `false` if the note should be cancelled
     */
    writeNote(note: INote): false | void;
    /**
     * Called when the player has written a note.
     * @param id The id of the note that was written.
     */
    writtenNote(id: number): any;
    /**
     * Called when the player has read a note.
     * @param id The id of the note that was read.
     */
    readNote(id: number): any;
    /**
     * Called when notes are cleared. (Debug Tools)
     */
    clearNotes(): any;
    /**
     * Called when a player sails to civilization.
     */
    sailToCivilization?(): any;
    /**
     * Called when the players id is changing
     * @param currentId The players current id
     * @param newId The new id for the player
     * @param isAbsentPlayer True if the player is absent
     */
    idChanging(currentId: number, newId: number, isAbsentPlayer: boolean): any;
    /**
     * Called when the players id has changed
     * @param currentId The players current id
     * @param newId The new id for the player
     * @param isAbsentPlayer True if the player is absent
     */
    idChanged(currentId: number, newId: number, isAbsentPlayer: boolean): any;
    updateCraftTable(): any;
}
export declare enum TurnTypeFlag {
    CheckUnderPlayer = 1,
    Idle = 2,
    /**
     * Indicates the turn is passing due to a movement
     */
    Movement = 4,
    DontTickAnim = 8
}
export interface IAttackHand {
    mainHand: number;
    offHand: number;
}
export type IPlayerOld = Partial<Omit<Player, "customization">> & Partial<{
    gender: 0 | 1;
    talent: number;
    stamina: number;
    staminaRegen: number;
    staminaTimer: number;
    thirst: number;
    thirstRegen: number;
    thirstTimer: number;
    hunger: number;
    hungerRegen: number;
    hungerTimer: number;
    health: number;
    healthRegen: number;
    healthTimer: number;
    malignityPlus: number;
    malignityNegative: number;
    customization: {
        hairStyle: HairStyle;
        hairColor: HairColor;
        skinColor: SkinColor;
    };
    stats: Partial<IStatsOld>;
    strength: number;
    dexterity: number;
    starvation: number;
    dehydration: number;
    weight: number;
    attack: number;
    benignity: number;
    malignity: number;
    exploredMapEncodedData: number[][];
    messages: MessageManager;
    raft: number | undefined;
    tamedCreatures: number[];
    spawnPoint: IVector3;
    equipped: Record<number, number>;
    vehicleItemId: number | undefined;
    milestoneTitle?: Milestone;
}>;
export interface IStatsOld {
    health: IStatOld;
    stamina: IStatOld;
    hunger: IStatOld;
    thirst: IStatOld;
}
export interface IStatOld {
    value: number;
    timer: number;
    regen: number;
    regenBase: number;
}
export declare const setupSpawnItems: ItemType[];
export declare const setupWaterItems: ItemType[];
export declare const setupToolItems: ItemType[];
export declare const setupMiscItems: ItemType[];
export declare const setupBookItems: ItemType[];
export interface IInputMovement extends IVector2 {
    moveBind: Direction.Cardinal;
    direction: Direction.Cardinal;
}
export declare const gameMovement: IInputMovement[];
export type MovementIntent = Direction.Cardinal | Direction.None | "idle" | undefined;
export declare const movementIntents: MovementIntent[];
export interface IMovementIntent {
    /**
     * A cardinal direction, the tile location of a tile to move to, to idle, or undefined to do nothing.
     */
    intent?: MovementIntent;
    turnDelay?: number;
    shouldDisableTurnDelay?: true;
}
export interface IPlayerTravelData {
    itemId: number | undefined;
    state: PlayerState;
}
export declare enum PlayerState {
    None = 0,
    Dead = 1,
    Won = 2,
    Traveling = 3,
    Ghost = 4,
    Server = 5
}
export declare enum WeightStatus {
    None = 0,
    Encumbered = 1,
    Overburdened = 2
}
/**
 * The amount of extra weight the player can hold (added to max health)
 */
export declare const STRENGTH_BONUS = 25;
export type WalkTo = IWalkToTile | IWalkToEntity | IWalkToPath;
export type WalkToReference = Reference<ReferenceType.Player | ReferenceType.NPC | ReferenceType.Creature | ReferenceType.TileEvent | ReferenceType.Item | ReferenceType.Doodad>;
interface IWalkTo {
    force?: boolean;
}
export interface IWalkToTile extends IWalkTo {
    type: "tile";
    tile: Tile;
    range?: FindPathRange;
}
export interface IWalkToEntity extends IWalkTo {
    type: "entity";
    entity: Entity;
    range?: FindPathRange;
}
export interface IWalkToPath extends IWalkTo {
    type: "path";
    path: IVector2[];
}
export interface IWalkToPathInProgress extends IWalkToPath {
    trackedReference?: WalkToReference;
    trackedPosition?: IVector3;
    range?: FindPathRange;
}
export interface IPlayerTitleMilestone {
    milestone: Milestone;
    skill?: undefined;
}
export interface IPlayerTitleSkill {
    skill: SkillType;
    milestone?: undefined;
}
export type PlayerTitle = IPlayerTitleMilestone | IPlayerTitleSkill;
export declare enum PlayerTag {
    None = 0
}
export {};
