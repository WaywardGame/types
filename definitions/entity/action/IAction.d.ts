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
import { SfxType } from "audio/IAudio";
import Doodad from "doodad/Doodad";
import { DoodadType } from "doodad/IDoodad";
import ActionExecutor from "entity/action/ActionExecutor";
import actionDescriptions from "entity/action/Actions";
import { ICorpse } from "entity/creature/corpse/ICorpse";
import Creature from "entity/creature/Creature";
import Entity from "entity/Entity";
import Human from "entity/Human";
import { AttackType, EntityType } from "entity/IEntity";
import { EquipType, RestType, SkillType } from "entity/IHuman";
import NPC from "entity/npc/NPC";
import { TurnType } from "entity/player/IPlayer";
import Player from "entity/player/Player";
import { Quality } from "game/IObject";
import { Milestone } from "game/milestones/IMilestone";
import { IContainer, ItemType } from "item/IItem";
import Item from "item/Item";
import { RecipeType } from "item/recipe/RecipeRegistry";
import TileEvent from "tile/TileEvent";
import { IRGB } from "utilities/Color";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
export declare enum ActionType {
    Disassemble = 0,
    Pickup = 1,
    Throw = 2,
    Attack = 3,
    StartFire = 4,
    Carve = 5,
    SetDown = 6,
    Eat = 7,
    DrinkItem = 8,
    Rest = 9,
    Sleep = 10,
    Heal = 11,
    Dig = 12,
    Paddle = 13,
    GatherWater = 14,
    Shoot = 15,
    Cast = 16,
    LockPick = 17,
    Sling = 18,
    Repair = 19,
    Decode = 20,
    Learn = 21,
    Reinforce = 22,
    Gather = 23,
    StokeFire = 24,
    Pour = 25,
    Plant = 26,
    GatherTreasure = 27,
    Ignite = 28,
    Build = 29,
    OpenContainer = 30,
    Preserve = 31,
    OpenBottle = 32,
    DrinkCure = 33,
    TellTime = 34,
    SailToCivilization = 35,
    Transmogrify = 36,
    Fire = 37,
    Teleport = 38,
    Extinguish = 39,
    DrawMap = 40,
    Dismantle = 41,
    PourOnYourself = 42,
    Squeeze = 43,
    Pet = 44,
    Tame = 45,
    Release = 46,
    HealOther = 47,
    RubClockwise = 48,
    RubCounterclockwise = 49,
    OpenDoor = 50,
    CloseDoor = 51,
    AddFuel = 52,
    Grasp = 53,
    PickupItem = 54,
    PickupAllItems = 55,
    Offer = 56,
    Drop = 57,
    Jump = 58,
    Move = 59,
    MoveTo = 60,
    UpdateDirection = 61,
    Idle = 62,
    DrinkInFront = 63,
    UseItem = 64,
    Equip = 65,
    Unequip = 66,
    MoveItem = 67,
    Craft = 68,
    Till = 69,
    Rename = 70,
    Harvest = 71,
    GatherMilk = 72,
    Read = 73,
    CloseContainer = 74,
    SmotherFire = 75,
    Trade = 76,
    PlaceDown = 77,
    Apply = 78,
    Hitch = 79,
    Unhitch = 80,
    AttachContainer = 81,
    DetachContainer = 82,
    Refine = 83,
    PickupExcrement = 84,
    TestDepth = 85,
    Enchant = 86,
    Navigate = 87,
    Melee = 88,
    GrabAll = 89,
    Respawn = 90
}
export declare enum ActionUsability {
    Paused = 0,
    Resting = 1,
    Moving = 2,
    Ghost = 3,
    Delayed = 4
}
export interface IActionDescription<A extends Array<ActionArgument | ActionArgument[]> = Array<ActionArgument | ActionArgument[]>, E extends Entity = Entity, R = void> {
    type?: number;
    argumentTypes: A;
    usability: {
        [key in ActionUsability]?: boolean;
    };
    validExecutors: EntityType[];
    preExecutionHandler?(actionApi: IActionApi<E>, ...args: ActionArgumentTupleTypes<A>): any;
    handler(actionApi: IActionHandlerApi<E>, ...args: ActionArgumentTupleTypes<A>): R;
    confirmer?(actionApi: IActionConfirmerApi<E>, ...args: ActionArgumentTupleTypes<A>): Promise<boolean>;
    clone(): IActionDescription<A, E, R>;
}
export interface IActionApi<E extends Entity = Entity> {
    readonly executor: E;
    readonly type: ActionType;
    readonly actionStack: ReadonlyArray<ActionType>;
    readonly lastAction: ActionType;
    isArgumentType<A extends ActionArgument>(argument: any, index: number, argumentType: A): argument is ActionArgumentTypeMap<A>;
    get<D extends IActionDescription>(action: D): D extends IActionDescription<infer A, infer E2, infer R> ? ActionExecutor<A, E2, R> : never;
    get<T extends ActionType>(action: T): (typeof actionDescriptions)[T] extends IActionDescription<infer A, infer E2, infer R> ? ActionExecutor<A, E2, R> : never;
    setDelay(delay: number, replace?: boolean): this;
    setPassTurn(turnType?: TurnType): this;
    setUpdateView(updateFov?: boolean): this;
    setUpdateRender(): this;
    setUpdateTablesAndWeight(): this;
    setStaminaReduction(skill?: SkillType): this;
    addSkillGains(...skills: Array<[SkillType, number?]>): this;
    addSkillGains(skill: SkillType, amount?: number): this;
    setSoundEffect(soundEffect: IActionSoundEffect): this;
    setSoundEffect(type: SfxType, inFront?: boolean): this;
    cancelPaddling(item: Item): this;
    setReputationChange(amount: number): this;
    setMilestone(milestone: Milestone, data?: number): this;
    setParticle(color: IRGB, count?: number, inFront?: boolean): this;
    setParticle(color: IRGB, inFront?: boolean): this;
    setParticle(particle: IActionParticle): this;
    /**
     * The items passed to this method will be registered as items potentially to be damaged when the action completes.
     */
    addItems(...items: Array<Item | undefined>): this;
    /**
     * Returns the items registered for this action via `addItems`.
     */
    getItems(): Stream<Item>;
    /**
     * Removes all items added via `addItems`
     */
    removeItems(): this;
    /**
     * Removes specific items added by `addItems`
     */
    removeItems(...items: Array<Item | undefined>): this;
}
export interface IActionHandlerApi<E extends Entity = Entity> extends IActionApi<E> {
    /**
     * Sets that the items added to this action by `addItems` were "used" (so they will be damaged afterward).
     */
    setItemsUsed(): this;
    /**
     * Sets whether the items added to this action by `addItems` were "used" (IE, whether they will be damaged).
     */
    setItemsUsed(used?: boolean): this;
}
export interface IActionConfirmerApi<E extends Entity = Entity> extends IActionApi<E> {
    /**
     * If damaging any of the "used items" for this action will result in the item breaking, and this method is
     * called from the `confirmer` of the action, a confirmation dialog will be shown asking if you want to
     * proceed with the action.
     *
     * Note: This is called automatically if items are added in the `preExecutionHandler`. This should only be used in
     * a custom confirmer if new items are added to the action here, and items *aren't* added in the `preExecutionHandler`.
     * Otherwise the player could get two confirmations, and that's annoying.
     */
    confirmItemsBroken(): Promise<boolean>;
}
export interface IActionSoundEffect {
    type: SfxType;
    inFront?: boolean;
    position?: Partial<IVector3>;
    delay?: number;
    speed?: number;
    noPosition?: boolean;
}
export interface IActionParticle {
    color: IRGB;
    position?: Partial<IVector3>;
    count?: number;
    inFront?: boolean;
}
export declare function anyOf<A extends ActionArgument[]>(...actions: A): A;
export declare function optional<A extends ActionArgument[]>(...actions: A): AddHead<ActionArgument.Undefined, A>;
export declare enum ActionArgument {
    Undefined = 0,
    Null = 1,
    Boolean = 2,
    Number = 3,
    String = 4,
    Array = 5,
    Object = 6,
    ActionType = 7,
    AttackType = 8,
    Container = 9,
    Corpse = 10,
    Creature = 11,
    Direction = 12,
    Doodad = 13,
    DoodadType = 14,
    Entity = 15,
    EquipType = 16,
    Human = 17,
    Item = 18,
    ItemArray = 19,
    ItemArrayInventory = 20,
    ItemArrayNearby = 21,
    ItemInventory = 22,
    ItemNearby = 23,
    ItemType = 24,
    NPC = 25,
    Player = 26,
    Quality = 27,
    RecipeType = 28,
    RestType = 29,
    TileEvent = 30,
    Vector2 = 31,
    Vector3 = 32
}
export declare type ActionArgumentTypeMap<X extends ActionArgument> = {
    [ActionArgument.Number]: number;
    [ActionArgument.Undefined]: undefined;
    [ActionArgument.Null]: null;
    [ActionArgument.Boolean]: boolean;
    [ActionArgument.Number]: number;
    [ActionArgument.String]: string;
    [ActionArgument.Array]: any[];
    [ActionArgument.Object]: any;
    [ActionArgument.ActionType]: ActionType;
    [ActionArgument.AttackType]: AttackType;
    [ActionArgument.Container]: IContainer;
    [ActionArgument.Corpse]: ICorpse;
    [ActionArgument.Creature]: Creature;
    [ActionArgument.Direction]: Direction;
    [ActionArgument.Doodad]: Doodad;
    [ActionArgument.DoodadType]: DoodadType;
    [ActionArgument.Entity]: Entity;
    [ActionArgument.EquipType]: EquipType;
    [ActionArgument.Human]: Human;
    [ActionArgument.Item]: Item;
    [ActionArgument.ItemArray]: Item[];
    [ActionArgument.ItemArrayInventory]: Item[];
    [ActionArgument.ItemArrayNearby]: Item[];
    [ActionArgument.ItemInventory]: Item;
    [ActionArgument.ItemNearby]: Item;
    [ActionArgument.ItemType]: ItemType;
    [ActionArgument.NPC]: NPC;
    [ActionArgument.Player]: Player;
    [ActionArgument.Quality]: Quality;
    [ActionArgument.RecipeType]: RecipeType;
    [ActionArgument.RestType]: RestType;
    [ActionArgument.TileEvent]: TileEvent;
    [ActionArgument.Vector2]: IVector2;
    [ActionArgument.Vector3]: IVector3;
}[X];
declare type ActionArgumentEntryType<X extends ActionArgument | ActionArgument[]> = X extends ActionArgument ? ActionArgumentTypeMap<X> : X extends ActionArgument[] ? ExtractActionArgumentArray<X> : never;
declare type ExtractActionArgumentArray<X extends ActionArgument[]> = X extends [ActionArgument] ? ActionArgumentTypeMap<X[0]> : X extends [ActionArgument, ActionArgument] ? ActionArgumentTypeMap<X[0]> | ActionArgumentTypeMap<X[1]> : X extends [ActionArgument, ActionArgument, ActionArgument] ? ActionArgumentTypeMap<X[0]> | ActionArgumentTypeMap<X[1]> | ActionArgumentTypeMap<X[2]> : X extends [ActionArgument, ActionArgument, ActionArgument, ActionArgument] ? ActionArgumentTypeMap<X[0]> | ActionArgumentTypeMap<X[1]> | ActionArgumentTypeMap<X[2]> | ActionArgumentTypeMap<X[3]> : X extends [ActionArgument, ActionArgument, ActionArgument, ActionArgument, ActionArgument] ? ActionArgumentTypeMap<X[0]> | ActionArgumentTypeMap<X[1]> | ActionArgumentTypeMap<X[2]> | ActionArgumentTypeMap<X[3]> | ActionArgumentTypeMap<X[4]> : never;
export declare type ActionArgumentTupleTypes<X extends Array<ActionArgument | ActionArgument[]>> = X extends [] ? [] : X extends [ActionArgument | ActionArgument[]] ? Tuple1<ActionArgumentEntryType<X[0]>> : X extends [ActionArgument | ActionArgument[], ActionArgument | ActionArgument[]] ? Tuple2<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>> : X extends [ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[]] ? Tuple3<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>> : X extends [ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[]] ? Tuple4<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>, ActionArgumentEntryType<X[3]>> : X extends [ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[], ActionArgument | ActionArgument[]] ? Tuple5<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>, ActionArgumentEntryType<X[3]>, ActionArgumentEntryType<X[4]>> : never;
export declare type Tuple1<X1> = undefined extends X1 ? [X1?] : [X1];
export declare type Tuple2<X1, X2> = undefined extends X2 ? (undefined extends X1 ? [X1?, X2?] : [X1, X2?]) : [X1, X2];
export declare type Tuple3<X1, X2, X3> = undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?] : [X1, X2?, X3?]) : [X1, X2, X3?]) : [X1, X2, X3];
export declare type Tuple4<X1, X2, X3, X4> = undefined extends X4 ? (undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?, X4?] : [X1, X2?, X3?, X4?]) : [X1, X2, X3?, X4?]) : [X1, X2, X3, X4?]) : [X1, X2, X3, X4];
export declare type Tuple5<X1, X2, X3, X4, X5> = undefined extends X5 ? (undefined extends X4 ? (undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?, X4?, X5?] : [X1, X2?, X3?, X4?, X5?]) : [X1, X2, X3?, X4?, X5?]) : [X1, X2, X3, X4?, X5?]) : [X1, X2, X3, X4, X5?]) : [X1, X2, X3, X4, X5];
export declare type ActionArguments<A extends IActionDescription<any, any> | ActionType> = A extends ActionType ? (typeof actionDescriptions[A] extends IActionDescription<infer AA, any> ? ActionArgumentTupleTypes<AA> : never) : A extends IActionDescription<infer AA, any> ? ActionArgumentTupleTypes<AA> : never;
export declare type ActionEntities<A extends IActionDescription<any, any> | ActionType> = A extends ActionType ? (typeof actionDescriptions[A] extends IActionDescription<any, infer E> ? E : never) : A extends IActionDescription<any, infer E> ? E : never;
export declare type ActionApi<A extends IActionDescription<any, any> | ActionType> = IActionApi<ActionEntities<A>>;
export {};
