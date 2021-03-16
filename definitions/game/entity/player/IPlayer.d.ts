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
import { Events } from "event/EventEmitter";
import Creature from "game/entity/creature/Creature";
import { IDamageInfo } from "game/entity/creature/ICreature";
import Human from "game/entity/Human";
import { HairColor, HairStyle, IRestData, SkinColor } from "game/entity/IHuman";
import NPC from "game/entity/npc/NPC";
import { IMessage } from "game/entity/player/IMessageManager";
import MessageManager from "game/entity/player/MessageManager";
import { INote } from "game/entity/player/note/NoteManager";
import Player from "game/entity/player/Player";
import { IContainer, ItemType } from "game/item/IItem";
import Item from "game/item/Item";
import Interrupt from "language/dictionary/Interrupt";
import InterruptChoice from "language/dictionary/InterruptChoice";
import { IOptions } from "save/data/ISaveDataGlobal";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
export interface IPlayerEvents extends Events<Human> {
    /**
     * Called when the player tick starts
     */
    tickStart(): any;
    /**
     * Called when the player tick ends
     */
    tickEnd(): any;
    /**
     * Called when the player is spawned. (At the end of `Player.setup`)
     */
    spawn(): any;
    /**
     * Called when the player is restored from the absent state.
     * This means the player previously stopped playing on the server but is now playing again.
     */
    restored(): void;
    /**
     * @param key The key of `IOptions` that was changed on this player
     * @param value The value this key was set to
     */
    updateOption<O extends keyof IOptions>(key: O, value: IOptions[O]): any;
    /**
     * Called when a message is being disaplyed for a player
     * @param message The message that will be displayed
     */
    displayMessage(message: IMessage): any;
    /**
     * Called when a player responds to certain interrupts
     * @param interrupt The interrupt
     * @param choice The selected choice
     */
    interruptResponse(interrupt: Interrupt, choice: boolean | InterruptChoice): void;
    /**
     * Called when getting the player's maximum health
     * @param maxHealth The current max health of the player (after any other previous mods)
     */
    getMaxHealth(maxHealth: number): number;
    /**
     * Called when getting the player's maximum weight
     * @param maxWeight The current max weight of the player (after any other previous mods)
     */
    getMaxWeight(maxWeight: number): number;
    /**
     * Called when the player is damaged
     * @param damageInfo The damage info object
     * @returns The amount of damage the player should take (the player will take this damage)
     */
    damage(damageInfo: IDamageInfo): number | void;
    /**
     * Called when the player will be killed. If any handlers return `false` to stop the player from dying,
     * no further handlers will be called.
     * @return `false` to stop the player from dying
     */
    shouldDie(): false | void;
    /**
     * Called when the player is killed.
     */
    die(): any;
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
     * Called when an item is added to the player's inventory
     * @param item The item object
     * @param container The container object the item was added to. This container might be inventory or a container within the inventory.
     */
    inventoryItemAdd(item: Item, container: IContainer): any;
    /**
     * Called when an item is removed from the players inventory
     * @param item The item object
     * @param container The container object the item was moved to.
     */
    inventoryItemRemove(item: Item, container: IContainer): any;
    /**
     * Called when an item is moved from one container to another, while still in the players inventory.
     * @param item The item object
     * @param container The container object the item was moved to. This container might be inventory or a container within the inventory.
     * @param previousContainer The container object the item was moved from. This container might be inventory or a container within the inventory.
     */
    inventoryItemUpdate(item: Item, container: IContainer, previousContainer?: IContainer): any;
    /**
     * Called when the players x / y position changes
     * @param x The players x position
     * @param y The players y position
     */
    processMovement(x: number, y: number): void;
    /**
     * Called when getting the players movement intent
     * @returns The movement intent of the player or undefined to use the default logic
     */
    getMovementIntent(): IMovementIntent | undefined;
    /**
     * Called when no input is received
     */
    noInput(): any;
    /**
     * Called when the walk path of the player changes.
     */
    walkPathChange(walkPath: IVector2[] | undefined): any;
    /**
     * Called when the player completes a movement
     */
    moveComplete(): any;
    changeZ(z: number, oldZ: number): any;
    /**
     * Called when getting the players weight status
     * @returns The weight status of the player or undefined to use the default logic
     */
    getWeightStatus(): WeightStatus | undefined;
    /**
     * Called when getting the players weight or stamina movement penalty
     * @returns The weight/stamina movement penalty for the player or undefined to use the default logic
     */
    getWeightOrStaminaMovementPenalty(): number | undefined;
    /**
     * Called when the player starts resting
     * @param restData The data related to the rest event
     */
    restStart(restData: IRestData): void;
    /**
     * Called when the player stops resting
     * @param restData The data related to the rest event
     */
    restEnd(restData: IRestData): void;
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
    writtenNote(id: number): void;
    /**
     * Called when the player has read a note.
     * @param id The id of the note that was read.
     */
    readNote(id: number): void;
    reregister(): any;
}
export declare enum TurnType {
    CheckUnderPlayer = 0,
    DontEnterCaves = 1,
    Idle = 2
}
export interface IAttackHand {
    leftHand: number;
    rightHand: number;
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
    player?: Player;
    npc?: NPC;
    obstacle?: boolean;
    water?: boolean;
    freshWater?: boolean;
    shallowWater?: boolean;
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
/**
 * At this weight or more, you are encumbered.
 * Defaults to 90% (0.9)
 */
export declare const WEIGHT_ENCUMBERED = 0.9;
export interface IWalkPath {
    path: IVector2[];
    force?: boolean;
}
