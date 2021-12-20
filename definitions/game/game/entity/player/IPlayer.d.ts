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
import type { IDamageInfo } from "game/entity/creature/ICreature";
import type Human from "game/entity/Human";
import type { EquipType, HairColor, HairStyle, IRestData, SkinColor } from "game/entity/IHuman";
import type NPC from "game/entity/npc/NPC";
import type { IMessage } from "game/entity/player/IMessageManager";
import type MessageManager from "game/entity/player/MessageManager";
import type { INote } from "game/entity/player/note/NoteManager";
import type Player from "game/entity/player/Player";
import type { IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { IContainer } from "game/item/IItem";
import { ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type { Prompt } from "game/meta/prompt/IPrompt";
import type InterruptChoice from "language/dictionary/InterruptChoice";
import type { IOptions } from "save/data/ISaveDataGlobal";
import { Direction } from "utilities/math/Direction";
import type { IVector2, IVector3 } from "utilities/math/IVector";
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
     * Called when a turn is starting
     */
    turnStart(): any;
    /**
     * Called when a turn is ending
     */
    turnEnd(): any;
    /**
     * Called when the player is spawned. (At the end of `Player.setup`)
     */
    spawn(): any;
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
    interruptResponse(interrupt: Prompt, choice: boolean | InterruptChoice): any;
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
     * Called when the player equips an item to a slot
     * @param player The player object
     * @param item The item being equipped
     * @param slot The slot
     */
    equip?(item: Item, slot: EquipType): any;
    /**
     * Called when the players quickslots are updated
     * @param quickslot The quick slot
     * @param itemType The item type
     */
    updatedQuickslotInfo?(quickslot: number, itemType?: ItemType): any;
    /**
     * Called when input is being processed
     * @param player The player object
     * @returns False to prevent input processing or undefined to use the default logic
     */
    processInput(): boolean | undefined;
    /**
     * Called when the players x / y position changes
     * @param x The players x position
     * @param y The players y position
     */
    processMovement(x: number, y: number): any;
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
     * Called when the players weight is being updated
     * @param newWeight The new weight of the player
     * @returns A number to set the player weight to or undefined to use the default logic
     */
    updateWeight(newWeight: number): number | undefined;
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
    restStart(restData: IRestData): any;
    /**
     * Called when the player stops resting
     * @param restData The data related to the rest event
     */
    restEnd(restData: IRestData): any;
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
    pickupDoodad?(doodad: Doodad): any;
    /**
     * Called when a player sails to civilization.
     */
    sailToCivilization?(): any;
    /**
     * Used for registering events
     * This may be called more than once on the same player
     */
    reregister(): any;
    /**
     * Used for deregistering events
     */
    deregister(): any;
    /**
     * Called when the player is moving to another island
     * @param oldIsland The players old island
     * @param newIslandId The players new island
     */
    preMoveToIsland(oldIsland: Island, newIslandId: IslandId): any;
    /**
     * Called when the player is moving to another island
     * @param oldIsland The players old island
     * @param newIsland The players new island
     */
    moveToIsland(oldIsland: Island, newIsland: Island): any;
    /**
     * Called when the player is loaded onto an island
     * @param options Load island options
     */
    loadedOnIsland(island: Island, options?: Partial<ILoadOnIslandOptions>): any;
    /**
     * Called when the players id is changing
     * @param currentId The players current id
     * @param newId The new id for the player
     * @param isAbsentPlayer True if the player is absent
     */
    idChanged(currentId: number, newId: number, isAbsentPlayer: boolean): any;
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
export interface ILoadOnIslandOptions {
    spawnPosition: IVector2;
    startingGame: boolean;
}
