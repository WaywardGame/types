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
import type { Events } from "event/EventEmitter";
import type Doodad from "game/doodad/Doodad";
import type { ActionType } from "game/entity/action/IAction";
import type { CreatureType, IDamageInfo } from "game/entity/creature/ICreature";
import type EntityWithStats from "game/entity/EntityWithStats";
import type Human from "game/entity/Human";
import type { AttackType, DamageType } from "game/entity/IEntity";
import type { IMovementIntent, WeightStatus } from "game/entity/player/IPlayer";
import type { ISkillEvents } from "game/entity/skill/SkillManager";
import type { IHasImagePath, Quality } from "game/IObject";
import type { IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import type { IContainer } from "game/item/IItem";
import { ItemType, ItemTypeGroup, RecipeLevel } from "game/item/IItem";
import type Item from "game/item/Item";
import { TempType } from "game/temperature/ITemperature";
import type Tile from "game/tile/Tile";
import Message from "language/dictionary/Message";
import type { IModdable } from "mod/ModRegistry";
import type { IOptions } from "save/data/ISaveDataGlobal";
import type { IRGB } from "utilities/Color";
import type { Direction } from "utilities/math/Direction";
import type { IVector2 } from "utilities/math/IVector";
import type { IRange } from "utilities/math/Range";
export interface IHumanEvents extends Events<EntityWithStats>, ISkillEvents {
    /**
     * Called when the human is spawned. (At the end of `Player.setup` / `NPC.spawn`)
     */
    spawn(): any;
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
     * Called when an item is added to the player's inventory
     * @param item The items
     * @param container The container object the items were added to. This container might be inventory or a container within the inventory.
     */
    inventoryItemAdd(items: Item[], container: IContainer): any;
    /**
     * Called when an item is removed from the players inventory
     * @param item The items
     * @param container The container object the items were moved to.
     */
    inventoryItemRemove(items: Item[], container: IContainer): any;
    /**
     * Called when an item is moved from one container to another, while still in the players inventory.
     * @param items The items
     * @param container The container object the items were moved to. This container might be inventory or a container within the inventory.
     * @param previousContainer The container object the items were moved from. This container might be inventory or a container within the inventory.
     */
    inventoryItemUpdate(items: Item[], container: IContainer, previousContainer?: IContainer): any;
    /**
     * Called when the human equips an item to a slot
     * @param item The item being equipped
     * @param slot The slot
     */
    equip?(item: Item, slot: EquipType): any;
    /**
     * Called when the human fails to equip an item to a slot
     * @param item The item being equipped
     * @param slot The slot
     */
    equipFailed?(item: Item, slot: EquipType): any;
    /**
     * Called when the human unequips an item from a slot
     * @param item The item being unequipped
     * @param slot The slot it was equipped in
     */
    unequip?(item: Item, slot: EquipType): any;
    /**
     * Called when the human faces a different direction
     * @param direction The direction the player is now facing
     */
    updateDirection?(direction: Direction): void;
    /**
     * Called before consuming an item
     * @param itemType The item type
     * @param actionType The action type
     * @returns True if the human can consume the item (default logic isn't called, should use your own code for consumption), false if the human cannot consume the item, or undefined to use the default logic
     */
    canConsumeItem(itemType: ItemType, actionType: ActionType): boolean | undefined;
    /**
     * @deprecated Use filterDroppable
     */
    canDropItem(item: Item, tile: Tile, dropAll: boolean, dropAllQuality: Quality | undefined): boolean | undefined;
    /**
     * Called in `Drop.canUse()`
     * @param items The items that will be dropped
     * @param tile The tile the items will be dropped on
     * @returns an `Item[]` if filtering, `undefined` to allow all of these items to be dropped
     */
    filterDroppable(items: Item[], tile: Tile): Item[] | undefined;
    /**
     * Called before an npc attacks
     * @param weapon The weapon used to attack
     * @param attackType The attack type
     * @returns False if the npc cannot attack, or undefined to use the default logic
     */
    canAttack(weapon: Item | undefined, attackType: AttackType): boolean | undefined;
    calculateEquipmentStats(): any;
    /**
     * Called when getting the player's maximum health
     * @param maxHealth The current max health of the player (after any other previous mods)
     */
    getMaxHealth(maxHealth: number): number;
    /**
     * Called when the players weight is being updated
     * @param newWeight The new weight of the player
     * @returns A number to set the player weight to or undefined to use the default logic
     */
    updateWeight(newWeight: number): number | undefined;
    /**
     * Called when getting the players weight or stamina movement penalty
     * @returns The weight/stamina movement penalty for the player or undefined to use the default logic
     */
    getWeightOrStaminaMovementPenalty(): number | undefined;
    /**
     * Called when getting the players weight status
     * @returns The weight status of the player or undefined to use the default logic
     */
    getWeightStatus(): WeightStatus | undefined;
    /**
     * Called when getting the player's maximum weight
     * @param maxWeight The current max weight of the player (after any other previous mods)
     */
    getMaxWeight(maxWeight: number): number;
    /**
     * Called when input is being processed on the server
     * @param player The player object
     * @returns False to prevent input processing or undefined to use the default logic
     */
    processInput(): false | undefined;
    /**
     * Called when movement is attempted on the server
     * @param player The player object
     * @param direction The direction to move
     * @returns False to prevent movement or undefined to use the default logic
     */
    canMove(direction: Direction.Cardinal): false | undefined;
    /**
     * Called when getting the players movement intent
     * @returns The movement intent of the player or undefined to use the default logic
     */
    getMovementIntent(): IMovementIntent | undefined;
    /**
     * Called when the walk path of the player changes.
     */
    walkPathChange(walkPath: IVector2[] | undefined): any;
    /**
     * Called when the human changes their layer (z position)
     */
    changeZ(z: number, oldZ: number): any;
    /**
     * Called when the player completes a movement
     */
    moveComplete(): any;
    /**
     * Called when no input is received
     */
    noInput(): any;
    /**
     * Called when a book is opened by a player
     * @param book The book that was opened
     */
    openBook?(item: Item): void;
    /**
     * Called when something is built on a tile
     * @param item The item used to build the object
     * @param tile The tile something was built on
     * @param doodad The doodad that was created on the tile
     */
    build?(item: Item, tile: Tile, doodad: Doodad): void;
    /**
     * Called when the human is damaged
     * @param damageInfo The damage info object
     * @returns The amount of damage the player should take (the player will take this damage)
     */
    damage(damageInfo: IDamageInfo): number | void;
    /**
     * Called when an doodad is picked up
     * @param doodad The doodad object
     */
    pickUpDoodad?(doodad: Doodad): any;
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
     * Called when checking if a human is swimming
     * @param isSwimming True if the human is swimming
     * @returns True if the human should be swimming, false if they should not be swimming, or undefined to use the default logic
     */
    isSwimming(isSwimming: boolean): boolean | undefined;
    /**
     * @param key The key of `IOptions` that was changed on this player
     * @param value The value this key was set to
     */
    updateOption<O extends keyof IOptions>(key: O, value: IOptions[O]): any;
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
     * Called when the human is moving to another island
     * @param oldIsland The humans old island
     * @param newIslandId The humans new island
     */
    preMoveToIsland(oldIsland: Island, newIslandId: IslandId): any;
    /**
     * Called when the human is moving to another island
     * @param oldIsland The humans old island
     * @param newIsland The humans new island
     */
    moveToIsland(oldIsland: Island, newIsland: Island): any;
    /**
     * Called when the human is loaded onto an island
     * @param options Load island options
     */
    loadedOnIsland(island: Island, options?: Partial<ILoadOnIslandOptions>): any;
    /**
     * Called when the human will be killed. If any handlers return `false` to stop the human from dying,
     * no further handlers will be called.
     * @return `false` to stop the human from dying
     */
    shouldDie(): false | void;
    /**
     * Called when the human position is set, from a teleport type of movement
     * @param tile Tile the human is now on
     */
    setPosition(tile: Tile): void;
    discoverVulnOrResist(creatureType: CreatureType, damageType: DamageType): any;
    hasDiscoveredVulnOrResist(creatureType: CreatureType, damageType: DamageType, defaultState: boolean): boolean | undefined;
    getDiscoveredVulnsAndResists(): Map<CreatureType, Set<DamageType>>;
}
export interface IHairstyleDescription extends IModdable, IHasImagePath {
    name: string;
}
export interface IColorDescription extends IModdable {
    color: IRGB;
}
export interface ICustomizations {
    hairStyle: keyof typeof HairStyle;
    hairColor: keyof typeof HairColor;
    skinColor: keyof typeof SkinColor;
}
export interface ICharacter {
    name: string;
    customization: ICustomizations;
}
export declare enum Delay {
    None = 0,
    LongPause = 25,
    Movement = 10,
    ShortPause = 13,
    Collision = 40,
    TurnDirection = 2,
    ReallyLongPause = 100,
    AttackAnimation = 30,
    Jump = 18
}
export declare enum EquipType {
    None = 0,
    Held = 1,
    Legs = 2,
    Chest = 3,
    Head = 4,
    Waist = 5,
    Feet = 6,
    Neck = 7,
    Hands = 8,
    Back = 9,
    MainHand = 10,
    OffHand = 11
}
export declare const EQUIP_SLOTS: EquipType[];
export declare const EQUIP_SLOTS_FREE: EquipType[];
export declare const EQUIP_SLOT_ITEM_GROUPS: Record<EquipType, ItemTypeGroup | undefined>;
export declare const equipmentRenderOrder: EquipType[];
export type InsulationWeight = number | [number, "onlyWhenEquipped"];
export declare const equipSlotInsulationWeights: Record<TempType, Record<EquipType, InsulationWeight>>;
export interface IExcludedWhenLowering {
    excludeIfLowering: true;
}
export declare function calculateEquipSlotInsulation(type: TempType, slot: EquipType, equipped?: Item): [number, number, IExcludedWhenLowering | undefined];
export declare const insulationRangeWhenSwimming: Record<TempType, IRange>;
export declare enum HairColor {
    "#e7c978" = 0,
    "#b9793d" = 1,
    "#b84627" = 2,
    "#7f3721" = 3,
    "#7e4b1c" = 4,
    "#422116" = 5,
    "#28222a" = 6,
    "#bfb0a8" = 7,
    "#ffffff" = 8
}
export declare enum SkinColor {
    "#fddcd4" = 0,
    "#d6be93" = 1,
    "#f0ceab" = 2,
    "#c7a077" = 3,
    "#d89a72" = 4,
    "#89623a" = 5,
    "#88563b" = 6,
    "#613429" = 7,
    "#361e1c" = 8
}
export declare enum HairStyle {
    None = 0,
    Spike = 1,
    Bun = 2,
    Ponytail = 3,
    Afro = 4,
    Bouncy = 5,
    Dreads = 6,
    Shaved = 7,
    Long = 8,
    Mohawk = 9
}
export declare enum RestCancelReason {
    CreatureNearby = 0,
    Damaged = 1,
    FullStamina = 2,
    NearbyCreatureDamagedDoodad = 3,
    CreatureDamaged = 4,
    Canceled = 5,
    Dying = 6,
    WaterPoured = 7
}
export declare const restCancelReasonMessageMap: Record<RestCancelReason, Message | undefined>;
export interface IRestData {
    type: RestType;
    startHealth: number;
    totalCycles: number;
    itemId?: number;
    doodadId?: number;
    cycle?: number;
    cancelReason?: Set<RestCancelReason>;
}
export declare enum RestType {
    Resting = 0,
    Sleeping = 1
}
export declare enum SkillType {
    None = 0,
    Chemistry = 1,
    Anatomy = 2,
    Marksmanship = 3,
    Blacksmithing = 4,
    Botany = 5,
    Camping = 6,
    Cartography = 7,
    Claythrowing = 8,
    Cooking = 9,
    Fishing = 10,
    Fletching = 11,
    Glassblowing = 12,
    Leatherworking = 13,
    Lockpicking = 14,
    Lumberjacking = 15,
    Mining = 16,
    Mycology = 17,
    Parrying = 18,
    Stonecrafting = 19,
    Swimming = 20,
    Tactics = 21,
    Tailoring = 22,
    Throwing = 23,
    Tinkering = 24,
    Trapping = 25,
    Woodworking = 26,
    Taming = 27,
    Gardening = 28,
    Bartering = 29,
    Seafaring = 30,
    Thaumaturgy = 31,
    DualWielding = 32
}
export interface ICrafted {
    unlockTime: number;
    newUnlock: boolean;
}
export interface ICheckUnderOptions {
    autoActions?: boolean;
    enterCave?: boolean;
    forcePickUp?: boolean;
    skipDoodadEvents?: boolean;
    burned?: boolean;
}
export declare const craftingChances: Descriptions<RecipeLevel, number>;
export declare const STAMINA_LOW_PENALTY_START = 15;
export interface IHumanOld extends Partial<Human> {
    skills?: Record<SkillType, {
        bonus: number;
        core: number;
    }>;
}
/**
 * At this weight or more, you are encumbered.
 * Defaults to 90% (0.9)
 */
export declare const WEIGHT_ENCUMBERED = 0.9;
export interface ILoadOnIslandOptions {
    spawnPosition: IVector2;
    startingGame: boolean;
    travelType?: "swimming" | "sailing";
}
export interface IVoyageInfo {
    time: number;
    boat?: Item;
    destination?: Island;
    direction?: Direction.Cardinal;
    usedItems?: Item[];
    wantedItems?: ItemType[];
}
export declare enum MovingClientSide {
    /**
     * NoInput = Idle
     */
    NoInput = 0,
    /**
     * Is actively moving
     */
    Moving = 1,
    /**
     * Just completed their movement.
     * They might be about to move again.
     */
    Moved = 2,
    /**
     * The game registered the end of the movement.
     * It's about to check if it will move again or finish (state change into Moving or NoInput)
     */
    PreNoInput = 3
}
/**
 * The swimming skill required to travel to another island
 *
 * **NOTE:** If you change this number, make sure to also rebalance `PLAYER_TRAVEL_SWIM_STAMINA_STAT_REDUCTION`,
 * as the amount of stamina used is based around swimming only first being available at 80% skill
 */
export declare const ISLAND_TRAVEL_SWIMMING_SKILL_THRESHOLD = 80;
/**
 *
 */
export declare const ISLAND_TRAVEL_STAMINA_THRESHOLD = 0.6;
/**
 * 100 ticks of travel time @ base
 */
export declare const DEFAULT_ISLAND_TRAVEL_TIME_BASE = 100;
/**
 * A multiplier for how much travel time is added by the distance travelled, variable based on the player's seafaring skill.
 */
export declare const DEFAULT_ISLAND_TRAVEL_TIME_MULTIPLIER: IRange;
/**
 * The amount of travel time it takes to travel to civilisation
 */
export declare const DEFAULT_TRAVEL_TIME_CIVILIZATION = 2000;
/**
 * 0 == no reduction, higher is more. The travel time is divided by `Math.log(skill) * multiplier + 1`
 */
export declare const ISLAND_TRAVEL_TIME_SEAFARING_SKILL_REDUCTION_MULTIPLIER = 0.3;
/**
 * Metabolic stat loss is `travelTime * this multiplier`
 */
export declare const PLAYER_TRAVEL_METABOLIC_STAT_REDUCTION_MULTIPLIER = 0.2;
/**
 * Stamina loss is `this reduction / Math.log2(boat tier)`
 */
export declare const PLAYER_TRAVEL_BOAT_STAMINA_STAT_REDUCTION = 40;
/**
 * Stat loss is `this reduction / Math.log2(boat tier)`
 */
export declare const PLAYER_TRAVEL_CIVILIZATION_STAT_REDUCTION = 5;
/**
 * Stamina loss is `lerp(this range, skill percentage)`
 * This works out to:
 * - 80% skill (required for swimming to another island) = ~108 stamina lost
 * - 100% skill = 60 stamina lost
 * - 125% skill = 0 stamina lost
 */
export declare const PLAYER_TRAVEL_SWIM_STAMINA_STAT_REDUCTION: IRange;
/**
 * The minimum remaining stamina the player should have after swimming
 */
export declare const PLAYER_TRAVEL_SWIM_STAMINA_STAT_MIN = 10;
/**
 * A multiplier for travel time when the player is swimming
 */
export declare const PLAYER_TRAVEL_TIME_SWIMMING_MULTIPLIER = 2;
/**
 * A multiplier for travel time when the player is using an item
 */
export declare const PLAYER_TRAVEL_TIME_REDUCTION_ITEM_MULTIPLIER = 0.75;
/**
 * A list of items that reduce the travel time, when in the player's inventory
 */
export declare const PLAYER_TRAVEL_TIME_REDUCTION_ITEMS: ItemType[];
