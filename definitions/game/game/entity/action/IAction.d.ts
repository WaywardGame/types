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
import type { IPackedMessage } from "game/entity/player/IMessageManager";
import type { TurnTypeFlag } from "game/entity/player/IPlayer";
import type Player from "game/entity/player/Player";
import type { Quality } from "game/IObject";
import type Island from "game/island/Island";
import type { IContainer, ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type { RecipeType } from "game/item/recipe/RecipeRegistry";
import type { IPromptDescriptionBase, PromptDescriptionArgs } from "game/meta/prompt/IPrompt";
import type { Milestone } from "game/milestones/IMilestone";
import type Tile from "game/tile/Tile";
import type TileEvent from "game/tile/TileEvent";
import type { IModdable } from "mod/ModRegistry";
import type { IRGB } from "utilities/Color";
import type { Direction } from "utilities/math/Direction";
import type { IVector2, IVector3 } from "utilities/math/IVector";
export declare enum ActionType {
    Disassemble = 0,
    PickUp = 1,
    Throw = 2,
    Attack = 3,
    StartFire = 4,
    Butcher = 5,
    SetDown = 6,
    Eat = 7,
    DrinkItem = 8,
    Rest = 9,
    RestCancel = 10,
    Sleep = 11,
    Heal = 12,
    Dig = 13,
    Ride = 14,
    GatherLiquid = 15,
    Cast = 16,
    Lockpick = 17,
    Repair = 18,
    ReadMap = 19,
    Learn = 20,
    Reinforce = 21,
    Gather = 22,
    StokeFire = 23,
    Pour = 24,
    Plant = 25,
    CopyMap = 26,
    Ignite = 27,
    Build = 28,
    OpenContainer = 29,
    Preserve = 30,
    OpenBottle = 31,
    Cure = 32,
    TellTime = 33,
    SailToCivilization = 34,
    Transmogrify = 35,
    Fire = 36,
    Teleport = 37,
    Extinguish = 38,
    DrawMap = 39,
    Dismantle = 40,
    PourOnYourself = 41,
    Squeeze = 42,
    Pet = 43,
    Tame = 44,
    Release = 45,
    HealOther = 46,
    RubClockwise = 47,
    RubCounterclockwise = 48,
    OpenDoor = 49,
    CloseDoor = 50,
    AddFuel = 51,
    Grasp = 52,
    PickUpItem = 53,
    PickUpAllItems = 54,
    Offer = 55,
    Drop = 56,
    Jump = 57,
    Move = 58,
    MoveTo = 59,
    UpdateDirection = 60,
    Idle = 61,
    DrinkInFront = 62,
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
    PickUpExcrement = 81,
    TestDepth = 82,
    Enchant = 83,
    Navigate = 84,
    Melee = 85,
    GrabAll = 86,
    Respawn = 87,
    ProtectItem = 88,
    UnProtectItem = 89,
    UpdateItemOrder = 90,
    PromptResponse = 91,
    Upgrade = 92,
    Enhance = 93,
    Shoot = 94,
    Alter = 95,
    SailToIsland = 96,
    Unused1 = 97,
    RenameIsland = 98,
    Chop = 99,
    Mine = 100,
    ToggleHitch = 101,
    ToggleVehicle = 102,
    ToggleDoor = 103,
    ToggleContainer = 104,
    UpdateOption = 105,
    UpdateGameOption = 106,
    UpdateWalkPath = 107,
    Unused2 = 108,
    Absorb = 109,
    Exude = 110,
    PackGround = 111,
    ToggleTilled = 112,
    DismountVehicle = 113,
    CreateControllableNPC = 114,
    RemoveControllableNPC = 115,
    PropOpenDoor = 116,
    DamageMap = 117,
    Noclip = 118,
    ShipToIsland = 119,
    CageCreature = 120,
    Summon = 121,
    SetCreatureAi = 122,
    SetTitle = 123,
    Uncage = 124,
    NPCInteract = 125
}
export declare const ACTIONS_RECOMMENDED: ActionType[];
export declare enum ActionUsability {
    Paused = 0,
    Resting = 1,
    Moving = 2,
    Ghost = 3,
    Delayed = 4
}
export declare enum ActionFlag {
    /**
     * Allows multiple of these actions to run at once when in multiplayer
     */
    AllowPacketConcurrency = 0
}
/**
 * Used for hiding actions that can't currently be used from context menus.
 */
export declare enum ActionDisplayLevel {
    Always = 0,
    Direct = 1,
    Never = 2
}
export interface IActionUsable {
    usable: true;
    /**
     * Whether this action is currently usable with the "use on move" feature. Defaults to `true`
     */
    usableOnMove?: boolean;
    displayLevel?: ActionDisplayLevel;
}
export interface IActionNotUsable extends Partial<IPackedMessage> {
    usable: false;
    alreadyUsing?: true;
    errorDisplayLevel?: ActionDisplayLevel;
    mobCheckTile?: Tile;
    arg?: never;
    source?: never;
}
export interface IProtectedItems {
    consumedItems?: Item[] | Item;
    damagedItems?: Item[] | Item;
    actionType?: ActionType;
}
export type AnyActionDescription = IActionDescription<Array<ActionArgument | ActionArgument[]>, Entity, any, IActionUsable, any[]>;
export interface IActionDescription<A extends Array<ActionArgument | ActionArgument[]> = Array<ActionArgument | ActionArgument[]>, E extends Entity = Entity, R = void, CU extends IActionUsable = IActionUsable, AV extends any[] = ActionArgumentTupleTypes<A>> extends IModdable {
    type?: number;
    argumentTypes: A;
    usability: {
        [key in ActionUsability]?: boolean;
    };
    flags: {
        [key in ActionFlag]?: boolean;
    };
    validExecutors: Set<EntityType>;
    hasFlag(flag: ActionFlag): boolean;
    execute(actionApiOrExecutor: IActionApi<E, CU> | E, ...args: AV): R | Promise<R>;
    executeConfirmer(actionApiOrExecutor: IActionApi<E, any> | E, args: AV, argumentTypes?: ActionArgument[]): Promise<boolean>;
    /**
     * Check if the action has setup CanUse logic
     */
    readonly hasSetCanUse: boolean;
    canUse(executor: E, ...args: AV): CU | IActionNotUsable;
    /**
     * Called internally during `execute`
     */
    preExecutionHandler?(actionApi: IActionApi<E, CU>, ...args: AV): any;
    /**
     * Called internally before `execute`
     */
    canUseHandler(actionApi: IActionHandlerApi<E, CU>, ...args: AV): CU | IActionNotUsable;
    /**
     * Called internally during `execute`
     */
    handler(actionApi: IActionHandlerApi<E, CU>, ...args: AV): R;
    /**
     * Called internally during `execute`
     */
    confirmer?(actionApi: IActionConfirmerApi<E, CU>, ...args: AV): Promise<boolean>;
    skipConfirmation(): this;
    clone(): IActionDescription<A, E, R, CU, AV>;
}
export interface IActionApi<E extends Entity = Entity, CU extends IActionUsable = IActionUsable> {
    readonly executor: E;
    readonly type: ActionType;
    readonly actionStack: readonly ActionType[];
    readonly lastAction: ActionType;
    readonly hasSetCanUse: boolean;
    isArgumentType<A extends ActionArgument>(argument: any, index: number, argumentType: A): argument is IActionArgumentTypeMap[A];
    canUse(): CU | IActionNotUsable;
    /**
     * Check if a creature on a tile and blocking the execution of the action
     * @returns
     * When checking before the action is being executed:
     * true if a creature is on a tile and that creature is not hidden, false otherwise
     *
     * When checking when the action is being execute
     * true if a creature is on a tile, false otherwise
     */
    isCreatureBlocking(tile: Tile): boolean;
    setDelay(delay: number, replace?: boolean): this;
    setPassTurn(turnType?: TurnTypeFlag): this;
    setUpdateView(updateFov?: boolean): this;
    setUpdateRender(): this;
    setUpdateTablesAndWeight(): this;
    setUpdateWeight(): this;
    setStaminaReduction(skill?: SkillType, actionTier?: number): this;
    addSkillGains(...skills: Array<[skill: SkillType, multiplier?: number, actionTier?: number, bypass?: true]>): this;
    addSkillGains(skill: SkillType, multiplier?: number, actionTier?: number, bypass?: true): this;
    setSoundEffect(soundEffect: IActionSoundEffect): this;
    setSoundEffect(type: SfxType, inFront?: boolean): this;
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
    getItems(): readonly Item[];
    /**
     * Removes all items added via `addItems`
     */
    removeItems(): this;
    /**
     * Removes specific items added by `addItems`
     */
    removeItems(...items: Array<Item | undefined>): this;
    /**
     * Checks to see if a protected item can be used
     */
    canProtectedItemBeUsed(items: IProtectedItems): IActionNotUsable | true;
}
export interface IActionHandlerApi<E extends Entity = Entity, CU extends IActionUsable = IActionUsable> extends IActionApi<E, CU> {
    /**
     * Sets that the items added to this action by `addItems` were "used" (so they will be damaged afterward).
     */
    setItemsUsed(): this;
    /**
     * Sets whether the items added to this action by `addItems` were "used" (IE, whether they will be damaged).
     */
    setItemsUsed(used?: boolean): this;
}
export interface IActionConfirmerApi<E extends Entity = Entity, CU extends IActionUsable = IActionUsable> extends IActionApi<E, CU> {
    /**
     * Prompts the user about something
     */
    prompt<PROMPT extends IPromptDescriptionBase<any[]>>(prompt: PROMPT, ...args: PromptDescriptionArgs<PROMPT>): Promise<boolean>;
}
export interface IActionSoundEffect {
    type: SfxType;
    inFront?: boolean;
    tile?: Tile;
    delay?: number;
    speed?: number;
    noPosition?: boolean;
}
export interface IActionParticle {
    color: IRGB;
    tile?: Tile;
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
    ItemNearbyIncludingTradeContainer = 26,
    ItemType = 27,
    NPC = 28,
    NPCNearby = 29,
    OptionalItemArrayNearby = 30,
    Player = 31,
    Quality = 32,
    RecipeType = 33,
    RestType = 34,
    Tile = 35,
    TileArray = 36,
    TileEvent = 37,
    UnsignedInteger32NumberArray = 38,
    Vector2 = 39,
    Vector2Array = 40,
    Vector3 = 41
}
export interface IActionArgumentTypeMap {
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
    [ActionArgument.ItemNearbyIncludingTradeContainer]: Item;
    [ActionArgument.ItemType]: ItemType;
    [ActionArgument.NPC]: NPC;
    [ActionArgument.NPCNearby]: NPC;
    [ActionArgument.OptionalItemArrayNearby]: Array<Item | undefined>;
    [ActionArgument.Player]: Player;
    [ActionArgument.Quality]: Quality;
    [ActionArgument.RecipeType]: RecipeType;
    [ActionArgument.RestType]: RestType;
    [ActionArgument.Tile]: Tile;
    [ActionArgument.TileArray]: Tile[];
    [ActionArgument.TileEvent]: TileEvent;
    [ActionArgument.UnsignedInteger32NumberArray]: number[];
    [ActionArgument.Vector2]: IVector2;
    [ActionArgument.Vector2Array]: IVector2[];
    [ActionArgument.Vector3]: IVector3;
}
type ActionArgumentEntryType<X extends ActionArgument | ActionArgument[]> = X extends ActionArgument ? IActionArgumentTypeMap[X] : X extends ActionArgument[] ? ({
    [INDEX in keyof X]: IActionArgumentTypeMap[X[INDEX] & ActionArgument];
}[number]) : never;
export type ActionArgumentTupleTypes<X extends Array<ActionArgument | ActionArgument[]>> = X["length"] extends 0 ? [] : X["length"] extends 1 ? Tuple1<ActionArgumentEntryType<X[0]>> : X["length"] extends 2 ? Tuple2<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>> : X["length"] extends 3 ? Tuple3<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>> : X["length"] extends 4 ? Tuple4<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>, ActionArgumentEntryType<X[3]>> : X["length"] extends 5 ? Tuple5<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>, ActionArgumentEntryType<X[3]>, ActionArgumentEntryType<X[4]>> : never;
export type Tuple1<X1> = undefined extends X1 ? [X1?] : [X1];
export type Tuple2<X1, X2> = undefined extends X2 ? (undefined extends X1 ? [X1?, X2?] : [X1, X2?]) : [X1, X2];
export type Tuple3<X1, X2, X3> = undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?] : [X1, X2?, X3?]) : [X1, X2, X3?]) : [X1, X2, X3];
export type Tuple4<X1, X2, X3, X4> = undefined extends X4 ? (undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?, X4?] : [X1, X2?, X3?, X4?]) : [X1, X2, X3?, X4?]) : [X1, X2, X3, X4?]) : [X1, X2, X3, X4];
export type Tuple5<X1, X2, X3, X4, X5> = undefined extends X5 ? (undefined extends X4 ? (undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?, X4?, X5?] : [X1, X2?, X3?, X4?, X5?]) : [X1, X2, X3?, X4?, X5?]) : [X1, X2, X3, X4?, X5?]) : [X1, X2, X3, X4, X5?]) : [X1, X2, X3, X4, X5];
export type ActionArguments<A extends IActionDescription<any, any, any, any, any>> = A extends IActionDescription<any, any, any, any, infer AA> ? AA : never;
export type ActionEntities<A extends IActionDescription<any, any>> = A extends IActionDescription<any, infer E> ? E : never;
export type ActionApi<A extends IActionDescription<any, any>> = IActionApi<ActionEntities<A>>;
export interface ActionExecutorEvents {
    /**
     * Called before an action is executed
     * This is called before the action result is used
     * @returns False to cancel the action
     */
    preExecuteAction<A extends Array<ActionArgument | ActionArgument[]> = Array<ActionArgument | ActionArgument[]>, E extends Entity = Entity, AV extends any[] = ActionArgumentTupleTypes<A>, CU extends IActionUsable = any>(actionType: ActionType, actionApi: IActionHandlerApi<E, CU>, args: AV): false | void;
    /**
     * Called after an action has been executed
     * This is called after the action result is used
     */
    postExecuteAction<A extends Array<ActionArgument | ActionArgument[]> = Array<ActionArgument | ActionArgument[]>, E extends Entity = Entity, AV extends any[] = ActionArgumentTupleTypes<A>, CU extends IActionUsable = any>(actionType: ActionType, actionApi: IActionHandlerApi<E, CU>, args: AV): any;
}
export {};
