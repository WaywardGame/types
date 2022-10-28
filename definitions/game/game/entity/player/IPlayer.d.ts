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
import type { Events } from "event/EventEmitter";
import type Doodad from "game/doodad/Doodad";
import type Creature from "game/entity/creature/Creature";
import type Human from "game/entity/Human";
import type { HairColor, HairStyle, SkinColor } from "game/entity/IHuman";
import type NPC from "game/entity/npc/NPC";
import type { IMessage } from "game/entity/player/IMessageManager";
import type MessageManager from "game/entity/player/MessageManager";
import type { INote } from "game/entity/player/note/NoteManager";
import type Player from "game/entity/player/Player";
import { ItemType } from "game/item/IItem";
import type { Prompt } from "game/meta/prompt/IPrompt";
import type InterruptChoice from "language/dictionary/InterruptChoice";
import { Direction } from "utilities/math/Direction";
import type { IVector2, IVector3 } from "utilities/math/IVector";
export interface IPlayerEvents extends Events<Human> {
    /**
     * Called when a message is being disaplyed for a player
     * @param message The message that will be displayed
     */
    displayMessage(message: IMessage): any;
    /**
     * Called when a message is about to be displayed
     * @param player The player object
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
    die(showingGameEndScreen: boolean): any;
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
     * Called when an doodad is picked up
     * @param doodad The doodad object
     */
    pickUpDoodad?(doodad: Doodad): any;
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
}
export declare enum TurnTypeFlag {
    CheckUnderPlayer = 1,
    DontEnterCaves = 2,
    Idle = 4,
    /**
     * Indicates the turn is passing due to a movement
     */
    Movement = 8
}
export interface IAttackHand {
    mainHand: number;
    offHand: number;
}
export declare type IPlayerOld = Partial<Omit<Player, "customization">> & Partial<{
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
export interface IMobCheck extends IVector3 {
    creature?: Creature;
    player?: Human;
    npc?: NPC;
    obstacle?: boolean;
    water?: boolean;
    freshWater?: boolean;
    shallowWater?: boolean;
    swampWater?: boolean;
    noTile?: boolean;
    waterTiles?: number;
    voidTiles?: number;
}
export declare const setupSpawnItems: ItemType[];
export declare const setupWaterItems: ItemType[];
export declare const setupToolItems: ItemType[];
export declare const setupMiscItems: ItemType[];
export declare const setupBookItems: ItemType[];
export declare function getDirectionFromMovement(x: number, y: number): Direction.East | Direction.North | Direction.West | Direction.South;
export interface IInputMovement extends IVector2 {
    moveBind: Direction.Cardinal;
    direction: Direction.Cardinal;
}
export declare const gameMovement: IInputMovement[];
export declare type MovementIntent = Direction.Cardinal | Direction.None | "idle" | undefined;
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
export interface IWalkPath {
    path: IVector2[];
    force?: boolean;
}
export interface ILoadOnIslandOptions {
    spawnPosition: IVector2;
    startingGame: boolean;
}
