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
import type Stream from "@wayward/goodstream";
import type { SfxType } from "audio/IAudio";
import type Doodad from "game/doodad/Doodad";
import type { DoodadType } from "game/doodad/IDoodad";
import type Corpse from "game/entity/creature/corpse/Corpse";
import type Creature from "game/entity/creature/Creature";
import type Entity from "game/entity/Entity";
import type Human from "game/entity/Human";
import type { AttackType, EntityType } from "game/entity/IEntity";
import type { EquipType, RestType, SkillType } from "game/entity/IHuman";
import type NPC from "game/entity/npc/NPC";
import type { TurnType } from "game/entity/player/IPlayer";
import type Player from "game/entity/player/Player";
import type { Quality } from "game/IObject";
import type Island from "game/island/Island";
import type { IContainer, ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type { RecipeType } from "game/item/recipe/RecipeRegistry";
import type { Milestone } from "game/milestones/IMilestone";
import type TileEvent from "game/tile/TileEvent";
import type { IRGB } from "utilities/Color";
import type { Direction } from "utilities/math/Direction";
import type { IVector2, IVector3 } from "utilities/math/IVector";
export declare enum ActionType {
    Disassemble = 0,
    Pickup = 1,
    Throw = 2,
    Attack = 3,
    StartFire = 4,
    Butcher = 5,
    SetDown = 6,
    Eat = 7,
    DrinkItem = 8,
    Rest = 9,
    Sleep = 10,
    Heal = 11,
    Dig = 12,
    Paddle = 13,
    GatherLiquid = 14,
    Cast = 15,
    Lockpick = 16,
    Repair = 17,
    ReadMap = 18,
    Learn = 19,
    Reinforce = 20,
    Gather = 21,
    StokeFire = 22,
    Pour = 23,
    Plant = 24,
    CopyMap = 25,
    Ignite = 26,
    Build = 27,
    OpenContainer = 28,
    Preserve = 29,
    OpenBottle = 30,
    Cure = 31,
    TellTime = 32,
    SailToCivilization = 33,
    Transmogrify = 34,
    Fire = 35,
    Teleport = 36,
    Extinguish = 37,
    DrawMap = 38,
    Dismantle = 39,
    PourOnYourself = 40,
    Squeeze = 41,
    Pet = 42,
    Tame = 43,
    Release = 44,
    HealOther = 45,
    RubClockwise = 46,
    RubCounterclockwise = 47,
    OpenDoor = 48,
    CloseDoor = 49,
    AddFuel = 50,
    Grasp = 51,
    PickupItem = 52,
    PickupAllItems = 53,
    Offer = 54,
    Drop = 55,
    Jump = 56,
    Move = 57,
    MoveTo = 58,
    UpdateDirection = 59,
    Idle = 60,
    DrinkInFront = 61,
    UseItem = 62,
    Equip = 63,
    Unequip = 64,
    MoveItem = 65,
    Craft = 66,
    Till = 67,
    Rename = 68,
    Harvest = 69,
    Read = 70,
    CloseContainer = 71,
    SmotherFire = 72,
    Trade = 73,
    PlaceDown = 74,
    Apply = 75,
    Hitch = 76,
    Unhitch = 77,
    AttachContainer = 78,
    DetachContainer = 79,
    Refine = 80,
    PickupExcrement = 81,
    TestDepth = 82,
    Enchant = 83,
    Navigate = 84,
    Melee = 85,
    GrabAll = 86,
    Respawn = 87,
    ProtectItem = 88,
    UnProtectItem = 89,
    UpdateItemOrder = 90,
    InterruptResponse = 91,
    Upgrade = 92,
    Enhance = 93,
    Shoot = 94,
    Alter = 95,
    SailToIsland = 96,
    UpdateItemQuickSlot = 97,
    RenameIsland = 98,
    Chop = 99,
    Mine = 100,
    ToggleHitch = 101,
    ToggleDoor = 102,
    ToggleContainer = 103,
    UpdateOption = 104
}
export declare enum ActionUsability {
    Paused = 0,
    Resting = 1,
    Moving = 2,
    Ghost = 3,
    Delayed = 4
}
export declare enum ActionFlag {
    OperatorMilestone = 0,
    /**
     * Allows multiple of these actions to run at once when in multiplayer
     */
    AllowPacketConcurrency = 1
}
export interface IActionDescription<A extends Array<ActionArgument | ActionArgument[]> = Array<ActionArgument | ActionArgument[]>, E extends Entity = Entity, R = void, AV extends any[] = ActionArgumentTupleTypes<A>> {
    type?: number;
    argumentTypes: A;
    usability: {
        [key in ActionUsability]?: boolean;
    };
    flags: {
        [key in ActionFlag]?: boolean;
    };
    validExecutors: EntityType[];
    hasFlag(flag: ActionFlag): boolean;
    execute(actionApi: IActionApi<E>, ...args: AV): R;
    execute(executor: E, ...args: AV): R;
    /**
     * Called internally during `execute`
     */
    preExecutionHandler?(actionApi: IActionApi<E>, ...args: AV): any;
    /**
     * Called internally during `execute`
     */
    handler(actionApi: IActionHandlerApi<E>, ...args: AV): R;
    /**
     * Called internally during `execute`
     */
    confirmer?(actionApi: IActionConfirmerApi<E>, ...args: AV): Promise<boolean>;
    clone(): IActionDescription<A, E, R, AV>;
}
export interface IActionApi<E extends Entity = Entity> {
    readonly executor: E;
    readonly type: ActionType;
    readonly actionStack: readonly ActionType[];
    readonly lastAction: ActionType;
    isArgumentType<A extends ActionArgument>(argument: any, index: number, argumentType: A): argument is ActionArgumentTypeMap<A>;
    setDelay(delay: number, replace?: boolean): this;
    setPassTurn(turnType?: TurnType): this;
    setUpdateView(updateFov?: boolean): this;
    setUpdateRender(): this;
    setUpdateTablesAndWeight(): this;
    setUpdateWeight(): this;
    setStaminaReduction(skill?: SkillType, actionTier?: number): this;
    addSkillGains(...skills: Array<[skill: SkillType, multiplier?: number, actionTier?: number, bypass?: true]>): this;
    addSkillGains(skill: SkillType, multiplier?: number, actionTier?: number, bypass?: true): this;
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
    Float64 = 3,
    Integer32 = 4,
    String = 5,
    Array = 6,
    Object = 7,
    ActionType = 8,
    AttackType = 9,
    Container = 10,
    Corpse = 11,
    Creature = 12,
    Direction = 13,
    Doodad = 14,
    DoodadType = 15,
    Entity = 16,
    EquipType = 17,
    Human = 18,
    Island = 19,
    Item = 20,
    ItemArray = 21,
    ItemArrayInventory = 22,
    ItemArrayNearby = 23,
    ItemInventory = 24,
    ItemNearby = 25,
    ItemType = 26,
    NPC = 27,
    NPCNearby = 28,
    OptionalItemArrayNearby = 29,
    Player = 30,
    Quality = 31,
    RecipeType = 32,
    RestType = 33,
    TileEvent = 34,
    UnsignedInteger32NumberArray = 35,
    Vector2 = 36,
    Vector3 = 37
}
export declare type ActionArgumentTypeMap<X extends ActionArgument> = {
    [ActionArgument.Undefined]: undefined;
    [ActionArgument.Null]: null;
    [ActionArgument.Boolean]: boolean;
    [ActionArgument.Float64]: number;
    [ActionArgument.Integer32]: number;
    [ActionArgument.String]: string;
    [ActionArgument.Array]: any[];
    [ActionArgument.Object]: any;
    [ActionArgument.ActionType]: ActionType;
    [ActionArgument.AttackType]: AttackType;
    [ActionArgument.Container]: IContainer;
    [ActionArgument.Corpse]: Corpse;
    [ActionArgument.Creature]: Creature;
    [ActionArgument.Direction]: Direction.Cardinal | Direction.None;
    [ActionArgument.Doodad]: Doodad;
    [ActionArgument.DoodadType]: DoodadType;
    [ActionArgument.Entity]: Entity;
    [ActionArgument.EquipType]: EquipType;
    [ActionArgument.Human]: Human;
    [ActionArgument.Island]: Island;
    [ActionArgument.Item]: Item;
    [ActionArgument.ItemArray]: Item[];
    [ActionArgument.ItemArrayInventory]: Item[];
    [ActionArgument.ItemArrayNearby]: Item[];
    [ActionArgument.ItemInventory]: Item;
    [ActionArgument.ItemNearby]: Item;
    [ActionArgument.ItemType]: ItemType;
    [ActionArgument.NPC]: NPC;
    [ActionArgument.NPCNearby]: NPC;
    [ActionArgument.OptionalItemArrayNearby]: Array<Item | undefined>;
    [ActionArgument.Player]: Player;
    [ActionArgument.Quality]: Quality;
    [ActionArgument.RecipeType]: RecipeType;
    [ActionArgument.RestType]: RestType;
    [ActionArgument.TileEvent]: TileEvent;
    [ActionArgument.UnsignedInteger32NumberArray]: number[];
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
export declare type ActionArguments<A extends IActionDescription<any, any, any, any>> = A extends IActionDescription<any, any, any, infer AA> ? AA : never;
export declare type ActionEntities<A extends IActionDescription<any, any>> = A extends IActionDescription<any, infer E> ? E : never;
export declare type ActionApi<A extends IActionDescription<any, any>> = IActionApi<ActionEntities<A>>;
export {};
