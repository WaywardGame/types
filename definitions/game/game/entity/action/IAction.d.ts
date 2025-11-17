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
import type { SfxType } from "@wayward/game/audio/IAudio";
import type Deity from "@wayward/game/game/deity/Deity";
import type { DeityReal } from "@wayward/game/game/deity/Deity";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { EntityType } from "@wayward/game/game/entity/IEntity";
import type { SkillType } from "../skill/ISkills";
import type { Action } from "@wayward/game/game/entity/action/Action";
import type IActionContext from "@wayward/game/game/entity/action/IActionContext";
import type { INotUsableMessage } from "@wayward/game/game/entity/action/actions/helper/NotUsableMessage";
import type { ActionArgumentCustom } from "@wayward/game/game/entity/action/argument/ActionArgumentCustom";
import type ActionArgumentEnum from "@wayward/game/game/entity/action/argument/ActionArgumentEnum";
import type ActionArgumentObjectKey from "@wayward/game/game/entity/action/argument/ActionArgumentObjectKey";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type Corpse from "@wayward/game/game/entity/creature/corpse/Corpse";
import type NPC from "@wayward/game/game/entity/npc/NPC";
import type { IPackedMessage, Source } from "@wayward/game/game/entity/player/IMessageManager";
import type { TurnTypeFlag } from "@wayward/game/game/entity/player/IPlayer";
import type Player from "@wayward/game/game/entity/player/Player";
import type { INewIslandOverrides } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import type { Automation } from "@wayward/game/game/island/automation/Automation";
import type { IContainer } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { IPromptDescriptionBase, PromptDescriptionArgs } from "@wayward/game/game/meta/prompt/IPrompt";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { IFindPathRange } from "@wayward/game/game/tile/ITerrain";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type { TranslationArg } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import type Message from "@wayward/game/language/dictionary/Message";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import type { IRGB } from "@wayward/utilities/Color";
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
    Unused = 47,// this one must stay unused
    ClearMessages = 48,
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
    Unused3 = 86,
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
    Kneel = 97,
    RenameIsland = 98,
    Chop = 99,
    Mine = 100,
    ToggleHitch = 101,
    ToggleVehicle = 102,
    ToggleDoor = 103,
    ToggleContainer = 104,
    UpdateOption = 105,
    UpdateGameOption = 106,
    UpdateWalkTo = 107,
    Consecrate = 108,
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
    NPCInteract = 125,
    DisplayItem = 126,
    Invoke = 127,
    SwapWithArmorStand = 128,
    EquipFromArmorStand = 129,
    Rotate = 130,
    TakeFromArmorStand = 131,
    DumpItems = 132,
    Reshape = 133,
    Stack = 134,
    Unstack = 135,
    SetCreatureAiAll = 136,
    CraftingIngredient = 137,
    ViewItems = 138,
    AscendDescend = 139,
    DiscoverRecipe = 140,
    ExcavateCollapse = 141,
    AddItemDiscovered = 142,
    ResetItemDiscovered = 143,
    Squish = 144,
    RemovePlayer = 145
}
export declare const ACTIONS_RECOMMENDED: ActionType[];
export declare enum ActionUsability {
    Paused = 0,
    Resting = 1,
    Moving = 2,
    Ghost = 3,
    Delayed = 4,
    /**
     * This makes action.isUsableWhen(*) always return true
     */
    Always = 5
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
    /** This action is always displayed, whether usable or not. */
    Always = 0,
    /** When the action can't be used, it is not displayed, *unless* you are right clicking on an item that has the action. */
    Direct = 1,
    /** When the action can't be used, it is not displayed. */
    Never = 2
}
export interface IActionUsable {
    usable: true;
    /**
     * Whether this action is currently usable with the "auto-use" feature. Defaults to `true`
     */
    usableOnMove?: boolean;
    displayLevel?: ActionDisplayLevel;
}
export declare namespace IActionUsable {
    function usableOrPrintable(usability: IActionUsable | IActionNotUsable): boolean;
}
export interface IActionNotUsable {
    usable: false;
    alreadyUsing?: true;
    mobCheckTile?: Tile;
    message?: Message | INotUsableMessage;
    sources?: ArrayOr<Source>;
    /** Whether the action should display or not in context menus due to this error. */
    errorDisplayLevel?: ActionDisplayLevel;
    args?: never;
    arg?: never;
    source?: never;
}
export declare namespace IActionNotUsable {
    function packMessage(definition: IActionNotUsable): IPackedMessage | undefined;
}
export interface IProtectedItems {
    consumedItems?: Item[] | Item;
    damagedItems?: Item[] | Item;
    actionType?: ActionType;
}
export type AnyActionDescription = IActionDescription<ActionArguments, Entity, any, IActionUsable, any[]>;
export interface IActionDescription<A extends ActionArguments = ActionArguments, E extends Entity = Entity, R = void, CU extends IActionUsable = IActionUsable, AV extends any[] = ActionArgumentTupleTypes<A>> extends IModdable {
    type?: number;
    deities?: DeityReal[];
    argumentTypes: A;
    usability: Partial<Record<ActionUsability, boolean>>;
    flags: Partial<Record<ActionFlag, boolean>>;
    validExecutors: Set<EntityType>;
    hasFlag(flag: ActionFlag): boolean;
    execute(actionApiOrExecutor: IActionApi<E, CU> | E, ...args: AV): PromiseOr<R | undefined>;
    executeAt(actionApiOrExecutor: IActionApi<E, CU> | E, location: IActionTargetAdjacent, ...args: AV): PromiseOr<R | undefined>;
    executeOn(actionApiOrExecutor: IActionApi<E, CU> | E, entity: Entity | IActionTargetEntityRanged, ...args: AV): PromiseOr<R | undefined>;
    executeRanged(actionApiOrExecutor: IActionApi<E, CU> | E, target: IActionTargetTileRanged, ...args: AV): PromiseOr<R | undefined>;
    executeConfirmer(actionApiOrExecutor: IActionApi<E, any> | E, args: AV, argumentTypes?: ActionArgument[]): Promise<boolean>;
    /**
     * Check if the action has setup CanUse logic
     */
    readonly hasSetCanUse: boolean;
    getExample(executor: E, ...args: AV): IActionExample | undefined;
    canUse(executor: E, ...args: AV): CU | IActionNotUsable;
    canUseAt(executor: E, location: IActionTargetAdjacent, ...args: AV): CU | IActionNotUsable;
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
    /**
     * Called internally before `execute`
     */
    exampleHandler?(actionApi: IActionExampleApi<E, CU>, ...args: AV): IActionExample;
    skipConfirmation(): this;
    clone(): IActionDescription<A, E, R, CU, AV>;
}
export type SkillGain = [skill: SkillType, amount?: number, actionTier?: number, bypass?: true, times?: number];
export interface IActionApi<E extends Entity = Entity, CU extends IActionUsable = IActionUsable> {
    readonly executor: E;
    readonly type: ActionType;
    readonly actionStack: readonly ActionType[];
    readonly callingAction: ActionType;
    readonly hasSetCanUse: boolean;
    readonly targetTile?: Tile;
    isArgumentType<A extends ActionArgument>(argument: any, index: number, argumentType: A): argument is IActionArgumentTypeMap[A];
    canUse(): CU | IActionNotUsable;
    /**
     * Checks if stuff is blocking the tile
     */
    isTileBlocked(tile: Tile, ...blockFlags: BlockFlag[]): boolean;
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
    /**
     * Sets the contextual tool & target for an action. Exclusively used for translations atm
     */
    setContext(tool?: Item | Translation, target?: ArrayOr<Entity> | Tile | Translation, details?: Record<string, TranslationArg>): IActionContext | undefined;
    setDelay(delay: number, replace?: boolean): this;
    setPassTurn(turnType?: TurnTypeFlag): this;
    setUpdateView(updateFov?: boolean): this;
    setUpdateRender(): this;
    setUpdateTablesAndWeight(): this;
    setUpdateWeight(): this;
    setStaminaReduction(skill?: SkillType, actionTier?: number): this;
    addSkillGains(...skills: SkillGain[]): this;
    addSkillGains(skill: SkillType, multiplier?: number, actionTier?: number, bypass?: true, times?: number): this;
    setSoundEffect(soundEffect: IActionSoundEffect): this;
    setSoundEffect(type: SfxType, inFront?: boolean): this;
    /**
     * Sets the chance that this action will create a rune item in the player's inventory.
     */
    setRuneChance(chance: number): this;
    /**
     * Sets the chance that this action will create a rune item in the player's inventory.
     */
    setRuneChance(alignment: ArrayOr<Deity> | undefined, chance: number): this;
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
    get<A, T extends ActionType = A extends Action<infer _0, infer T extends ActionType, infer _1, infer _2, infer _3> ? T : never>(type: T): A;
}
export interface IActionHandlerApi<E extends Entity = Entity, CU extends IActionUsable = IActionUsable> extends IActionApi<E, CU> {
    /**
     * Result of a successful canUse check.
     */
    use: CU;
    /**
     * Sets that the items added to this action by `addItems` were "used" (so they will be damaged afterward).
     */
    setItemsUsed(): this;
    /**
     * Sets whether the items added to this action by `addItems` were "used" (IE, whether they will be damaged).
     */
    setItemsUsed(used?: boolean): this;
}
export interface IActionNotUsableHandlerApi<E extends Entity = Entity, CU extends IActionUsable = IActionUsable> extends IActionApi<E, CU> {
    /**
     * Result of a non-usable canUse check.
     */
    use: IActionNotUsable;
    /**
     * Disables sending a message to the executor for this action not being usable.
     */
    setSilent(silent?: boolean): any;
}
export interface IActionConfirmerApi<E extends Entity = Entity, CU extends IActionUsable = IActionUsable> extends IActionApi<E, CU> {
    /**
     * Result of a successful canUse check.
     */
    use: CU;
    /**
     * Prompts the user about something
     */
    prompt<PROMPT extends IPromptDescriptionBase<any[]>>(prompt: PROMPT, ...args: PromptDescriptionArgs<PROMPT>): Promise<boolean>;
}
export interface IActionExampleApi<E extends Entity = Entity, CU extends IActionUsable = IActionUsable> extends IActionApi<E, CU> {
    description: IActionDescription<ActionArguments, E, any, CU, any[]>;
}
export interface IActionExample {
    automation: Automation;
    island?: INewIslandOverrides;
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
export interface IActionTargetAdjacent {
    targetTile: Tile;
    fromTile: Tile;
}
export interface IActionTargetTileRanged {
    tile: Tile;
    range: IFindPathRange;
}
export interface IActionTargetEntityRanged {
    entity: Entity;
    range: IFindPathRange;
}
export type ActionArgumentArray = Array<ActionArgumentCustom<any> | ActionArgument>;
export type ActionArgumentsEntry = ActionArgumentCustom<any> | ActionArgument | ActionArgumentArray;
export type ActionArguments = ActionArgumentsEntry[];
export declare enum ActionArgument {
    Undefined = 0,
    Null = 1,
    Boolean = 2,
    Float64 = 3,
    Integer32 = 4,
    String = 5,
    Array = 6,
    Object = 7,
    Container = 8,
    Corpse = 9,
    Creature = 10,
    Direction = 11,
    /**
     * @deprecated This should only be used for debug tools/cheats/things that don't check that player is nearby
     */
    Doodad = 12,
    DoodadNearby = 13,
    Entity = 14,
    Human = 15,
    Island = 16,
    Item = 17,
    ItemArray = 18,
    ItemArrayInventory = 19,
    ItemArrayNearby = 20,
    ItemArrayNearbyIncludingTradeContainer = 21,
    ItemInventory = 22,
    ItemNearby = 23,
    ItemNearbyIncludingTradeContainer = 24,
    NPC = 25,
    NPCNearby = 26,
    OptionalItemArrayNearby = 27,
    Player = 28,
    Tile = 29,
    TileArray = 30,
    TileEvent = 31,
    UnsignedInteger32NumberArray = 32,
    Vector2 = 33,
    Vector2Array = 34,
    Vector3 = 35
}
export declare namespace ActionArgument {
    /**
     * An action argument which is any of the provided action argument types.
     */
    function ANY<A extends ActionArgumentArray>(...actions: A): A;
    /**
     * An action argument which can be "undefined". Identical to doing `ActionArgument.ANY(ActionArgument.Undefined, ...types)`
     */
    function OPTIONAL<A extends ActionArgumentArray>(...actions: A): AddHead<ActionArgument.Undefined, A>;
    /**
     * An action argument which is an entry from the given enum. Performs validation.
     */
    function ENUM<ENUM extends number, K extends string>(object: Record<K, ENUM>): ActionArgumentEnum<ENUM, K>;
    /**
     * An alias for `ActionArgument.OPTIONAL(ActionArgument.ENUM(enumObject))`
     */
    function OPTIONAL_ENUM<ENUM extends number, K extends string>(enumObject: Record<K, ENUM>): [ActionArgument.Undefined, ActionArgumentEnum<ENUM, K>];
    namespace ENUM {
        let ActionArgumentEnumClass: typeof ActionArgumentEnum;
    }
    /**
     * An action argument which is an entry from the given key in an object Performs validation when an object is passed
     */
    function OBJECT_KEY<T extends Record<string, any>>(object?: T): ActionArgumentObjectKey<T>;
    namespace OBJECT {
        let ActionArgumentObjectKeyClass: typeof ActionArgumentObjectKey;
    }
    /**
     * An action argument which is bit flags from the given enum. Performs validation.
     */
    function FLAGS<ENUM extends number, K extends string>(object: Record<K, ENUM>): ActionArgumentEnum<ENUM, K>;
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
    [ActionArgument.Container]: IContainer;
    [ActionArgument.Corpse]: Corpse;
    [ActionArgument.Creature]: Creature;
    [ActionArgument.Direction]: Direction.Cardinal | Direction.None;
    [ActionArgument.Doodad]: Doodad;
    [ActionArgument.DoodadNearby]: Doodad;
    [ActionArgument.Entity]: Entity;
    [ActionArgument.Human]: Human;
    [ActionArgument.Island]: Island;
    [ActionArgument.Item]: Item;
    [ActionArgument.ItemArray]: Item[];
    [ActionArgument.ItemArrayInventory]: Item[];
    [ActionArgument.ItemArrayNearby]: Item[];
    [ActionArgument.ItemArrayNearbyIncludingTradeContainer]: Item[];
    [ActionArgument.ItemInventory]: Item;
    [ActionArgument.ItemNearby]: Item;
    [ActionArgument.ItemNearbyIncludingTradeContainer]: Item;
    [ActionArgument.NPC]: NPC;
    [ActionArgument.NPCNearby]: NPC;
    [ActionArgument.OptionalItemArrayNearby]: Array<Item | undefined>;
    [ActionArgument.Player]: Player;
    [ActionArgument.Tile]: Tile;
    [ActionArgument.TileArray]: Tile[];
    [ActionArgument.TileEvent]: TileEvent;
    [ActionArgument.UnsignedInteger32NumberArray]: number[];
    [ActionArgument.Vector2]: IVector2;
    [ActionArgument.Vector2Array]: IVector2[];
    [ActionArgument.Vector3]: IVector3;
}
type ActionArgumentEntryType<X extends ActionArgumentsEntry> = X extends ActionArgumentCustom<infer T> ? T : X extends ActionArgument ? IActionArgumentTypeMap[X] : X extends ActionArgumentArray ? ({
    [INDEX in keyof X]: X[INDEX] extends infer A ? A extends ActionArgument ? IActionArgumentTypeMap[A] : A extends ActionArgumentCustom<infer T> ? T : never : never;
}[number]) : never;
export type ActionArgumentTupleTypes<X extends ActionArguments> = X["length"] extends 0 ? [] : X["length"] extends 1 ? Tuple1<ActionArgumentEntryType<X[0]>> : X["length"] extends 2 ? Tuple2<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>> : X["length"] extends 3 ? Tuple3<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>> : X["length"] extends 4 ? Tuple4<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>, ActionArgumentEntryType<X[3]>> : X["length"] extends 5 ? Tuple5<ActionArgumentEntryType<X[0]>, ActionArgumentEntryType<X[1]>, ActionArgumentEntryType<X[2]>, ActionArgumentEntryType<X[3]>, ActionArgumentEntryType<X[4]>> : never;
export type Tuple1<X1> = undefined extends X1 ? [X1?] : [X1];
export type Tuple2<X1, X2> = undefined extends X2 ? (undefined extends X1 ? [X1?, X2?] : [X1, X2?]) : [X1, X2];
export type Tuple3<X1, X2, X3> = undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?] : [X1, X2?, X3?]) : [X1, X2, X3?]) : [X1, X2, X3];
export type Tuple4<X1, X2, X3, X4> = undefined extends X4 ? (undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?, X4?] : [X1, X2?, X3?, X4?]) : [X1, X2, X3?, X4?]) : [X1, X2, X3, X4?]) : [X1, X2, X3, X4];
export type Tuple5<X1, X2, X3, X4, X5> = undefined extends X5 ? (undefined extends X4 ? (undefined extends X3 ? (undefined extends X2 ? (undefined extends X1 ? [X1?, X2?, X3?, X4?, X5?] : [X1, X2?, X3?, X4?, X5?]) : [X1, X2, X3?, X4?, X5?]) : [X1, X2, X3, X4?, X5?]) : [X1, X2, X3, X4, X5?]) : [X1, X2, X3, X4, X5];
export type ActionArgumentsOf<A extends IActionDescription<any, any, any, any, any>> = A extends IActionDescription<any, any, any, any, infer AA> ? AA : never;
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
export declare enum BlockFlag {
    Creature = 0,
    NPC = 1,
    Vehicle = 2,
    Player = 3,
    Corpses = 4,
    Doodad = 5,
    /**
     * Checks if the tile is on fire
     */
    OnFire = 6,
    /**
     * Checks if the tile has a blocking tile event
     */
    BlockingTileEvent = 7,
    /**
     * Checks if the tile has a doodad that blocks movement
     */
    BlockingDoodad = 8,
    /**
     * Checks if the tile has any items on it
     */
    AnyItems = 9,
    /**
     * Checks if the tile is full of items
     */
    FullOfItems = 10
}
/**
 * A sea of grass
 */
export declare const defaultExampleIslandTemplate: INewIslandOverrides;
export {};
