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
import type { RuneChance } from "@wayward/game/game/deity/IDeities";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { IEntityWithStatsEvents } from "@wayward/game/game/entity/EntityWithStats";
import type Human from "@wayward/game/game/entity/Human";
import type { DamageType, Defense, EntityType, ICausesStatus, IStatChangeInfo, MoveType, SlippingSpeed } from "@wayward/game/game/entity/IEntity";
import type { IStat } from "@wayward/game/game/entity/IStats";
import type { AiMaskType, ChangeAiType } from "@wayward/game/game/entity/ai/AI";
import { AiType } from "@wayward/game/game/entity/ai/AI";
import type { IEntityAiEvents } from "@wayward/game/game/entity/ai/AiManager";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { IPackedMessage } from "@wayward/game/game/entity/player/IMessageManager";
import type Status from "@wayward/game/game/entity/status/Status";
import type { ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { LootGroupType } from "@wayward/game/game/item/LootGroups";
import type { MagicalLootType } from "@wayward/game/game/item/MagicalLoot";
import type { ITemperatureDescription } from "@wayward/game/game/temperature/ITemperature";
import type { TileEventType } from "@wayward/game/game/tile/ITileEvent";
import type Tile from "@wayward/game/game/tile/Tile";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type Translation from "@wayward/game/language/Translation";
import type Message from "@wayward/game/language/dictionary/Message";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type { StatNotificationType } from "@wayward/game/renderer/notifier/INotifier";
import type { IRGB } from "@wayward/utilities/Color";
import type WorldZ from "@wayward/utilities/game/WorldZ";
import type { IRange } from "@wayward/utilities/math/Range";
export declare enum CreatureType {
    Slime = 0,
    JellyCube = 1,
    GiantSpider = 2,
    Bear = 3,
    Rabbit = 4,
    Snake = 5,
    GiantRat = 6,
    Rat = 7,
    VampireBat = 8,
    GreyWolf = 9,
    Imp = 10,
    Bogling = 11,
    LivingRock = 12,
    Shark = 13,
    Zombie = 14,
    Skeleton = 15,
    PirateGhost = 16,
    TimeSkitter = 17,
    Chicken = 18,
    TrapdoorSpider = 19,
    FireElemental = 20,
    Cod = 21,
    Hobgoblin = 22,
    LivingMushroom = 23,
    Kraken = 24,
    Blindfish = 25,
    Harpy = 26,
    AcidSpitterDemon = 27,
    SkeletalMage = 28,
    ClawWorm = 29,
    Drake = 30,
    Sandcat = 31,
    LavaBeetle = 32,
    Goat = 33,
    SlitherSucker = 34,
    Mudskipper = 35,
    Scorpion = 36,
    Rattlesnake = 37,
    AntelopeJackrabbit = 38,
    RedSnapper = 39,
    Walleye = 40,
    Wisp = 41,
    ArcticWolf = 42,
    ArcticHare = 43,
    PolarBear = 44,
    Penguin = 45,
    IceElemental = 46,
    IceWitch = 47,
    VoidDweller = 48,
    SnowWalker = 49,
    Mammoth = 50,
    Pangolin = 51,
    Dryad = 52,
    Coyote = 53,
    KomodoMonitor = 54,
    BogBody = 55,
    WoodGolem = 56,
    ClayGolem = 57,
    GraniteGolem = 58,
    SandstoneGolem = 59,
    BasaltGolem = 60,
    ShadowCreature = 61,
    PirateSkeleton = 62
}
export declare enum CreatureTypeGroup {
    Golem = 0
}
export declare enum CreatureTag {
    None = 0,
    NoAlertIndicator = 1,
    NoRandomDespawn = 2,
    MoveWhenOutsideHumanBounds = 3
}
export interface ICreatureOld extends Creature {
    hp: number;
    maxhp: number;
    happiness?: number;
    chickenEggCounter?: number;
    goatMilkCounter?: number;
}
export interface ICreatureEntityTypeOld {
    id: number;
    owner?: {
        type: EntityType.Player;
        identifier: string;
    } | {
        type: EntityType.NPC;
        id: number;
    };
    tameTime?: number;
    enemy?: {
        type: EntityType;
        id: number;
        attacks: number;
        attempts: number;
        breakAway?: boolean;
    };
}
export declare enum TileGroup {
    None = 0,
    Default = 1,
    DefaultWithLava = 2,
    DefaultWithWater = 3,
    DeepSeawater = 4,
    DeepWater = 5,
    ShallowWater = 6,
    Water = 7,
    Flying = 8,
    Ghost = 9,
    Desert = 10,
    DesertWithLava = 11,
    Wet = 12,
    Ground = 13,
    All = 14,
    Seawater = 15,
    FreshWater = 16,
    Swamp = 17,
    FreshWaterSwampWater = 18,
    IceCap = 19,
    IceCapWithWater = 20,
    Void = 21,
    DesertWithDirt = 22
}
export interface IAiMaskChance {
    mask: AiMaskType;
    chance?: number;
}
export interface ICreatureDescription extends IModdable, ITemperatureDescription, ICausesStatus {
    minhp: number;
    maxhp: number;
    minatk: number;
    maxatk: number;
    defense: Defense;
    damageType: DamageType;
    ai: AiType.Neutral | AiType.Scared | AiType.Hostile | AiType.HostileFearless;
    aiMasks?: IAiMaskChance[];
    moveType: MoveType;
    /** The chance that the creature should skip movement. 0 = never, 1 = always */
    skipMovementChance?: number;
    /** A multiplier for the chance the creature has to start wandering (while idling) */
    wanderChanceMultiplier?: SupplierOr<number | undefined, [Creature, defaultChance: number]>;
    /** A multiplier for the chance the creature has to start idling (while wandering) */
    idleChanceMultiplier?: SupplierOr<number | undefined, [Creature, defaultChance: number]>;
    /** A multiplier for the chance the creature has to choose a new direction to wander */
    wanderNewDirectionChanceMultiplier?: SupplierOr<number | undefined, [Creature, defaultChance: number]>;
    /**
     * Prevents the creature from spawning for the provided WorldZ's
     */
    preventSpawnZs?: Set<WorldZ>;
    /**
     * Prevents release the creature from its tamed state
     */
    preventRelease?: boolean;
    fishable?: boolean;
    blood?: IRGB;
    aberrantBlood?: IRGB;
    loot?: ICreatureLoot[];
    aberrantLoot?: ICreatureLoot[];
    spawnTiles: TileGroup;
    spawnAnimation?: boolean;
    makeNoise?: boolean;
    lootGroup?: LootGroupType;
    jumpOver?: boolean;
    noCorpse?: boolean;
    /**
     * The deity associated with this creature, and the chance of receiving a rune for doing actions with it.
     * - Initial Tame: Gives rune of this creature's deity
     * - Kill: Gives rune of this creature's deity's enemy
     */
    runeChance?: RuneChance;
    waterAnimations?: boolean;
    /**
     * We set this for all creatures that are tamable through the the taming skill directly.
     * - Some creatures are exempt from this and tamed only through items (Living Rock, Time Skitters).
     */
    tamingDifficulty?: number;
    acceptedItems?: Array<ItemType | ItemTypeGroup>;
    lightSource?: boolean;
    lightColor?: IRGB;
    noStumble?: boolean;
    /**
     * If true, this creature will not create puddles when walking in water.
     */
    noPuddles?: boolean;
    particlesOnMove?: boolean;
    particlesOnSpawn?: boolean;
    providesFire?: boolean;
    /**
     * If true, creature burns you when you pet it
     */
    pettingCausesBurns?: boolean;
    /**
     * If true, creature takes damage when you pour water/milk on it
     */
    damageOnPour?: boolean;
    /**
     * If true, stoking restores the creatures hp a bit
     */
    stokingRestoresHealth?: boolean;
    canTrample?: boolean;
    helpPlants?: boolean;
    speed?: SupplierOr<number | undefined, [Creature]>;
    disableHitching?: boolean;
    tileMissChance?: OptionalDescriptions<TileGroup, number>;
    waste?: IWaste;
    passable?: boolean;
    texOffsetY?: number;
    isTall?: boolean;
    /**
     * True if the creature moves around by teleporting through time AND space
     */
    teleportMovement?: boolean;
    /**
     * True if the creature can open doors
     */
    canOpenDoors?: boolean;
    /**
     * Extra chance for random despawns
     */
    extraDespawnChance?: number;
    /**
     * Despawn the creature when it's day in the overworld
     */
    despawnInDayLight?: boolean;
    /**
     * If true, this creature will get the "produce" stat.
     * If it's a function, the result value will be the change timer.
     */
    hasProduce?: true | ((creature: Creature) => number);
    /**
     * The chance (for example, 0.25) it will be scared from a scarecrow (in a radius) when moving minus how close it is to the scarecrow (calculated in checkCreatureMove).
     * If set to 1, it will never move close to a scarecrow when visible to it.
     * All creatures will never spawn in the radius of a scarecrow regardless of this value.
     */
    chanceOfScarecrowScare?: number;
    /**
     * If set to true, they cannot be caged.
     */
    noCage?: boolean;
    /**
     * The weight of the creature when placed inside a cage (or something else in the future?).
     */
    weight: number;
    aberrantWeight: number;
    /**
     *
     * If set, creatures can slip at this speed.
     */
    slippingSpeed?: SlippingSpeed;
    /**
     * If set, creature will only listen to certain commands.
     */
    allowedCommands?: AiType[];
    /**
     * When true, the player will always be able to command the creature, regardless of their taming skill.
     */
    alwaysAllowCommands?: boolean;
    /**
     * Called when a stat changes
     */
    onStatChange?: (creature: Creature, stat: IStat, oldValue: number, info: IStatChangeInfo) => void;
    /**
     * Called when the creature dies
     */
    onDeath?: (creature: Creature, damageTile: Tile, damageInfo: IDamageInfo) => void;
    /**
     * Called when the creature is damaged
     */
    onDamaged?: (creature: Creature, damageInfo: IDamageInfo, attackOutcome: number) => void;
    /**
     * Called when performing special abilities
     * @returns True when an ability was performed
     */
    specialAbility?: (creature: Creature, enemy: Human | Creature | undefined, bypass?: boolean) => boolean;
    /**
     * Special attack stuff
     */
    specialAttack?: {
        /**
         * Called when checking if a special attack should be called
         * @returns True when special attack should be called
         */
        shouldSpecialAttack: (creature: Creature, specialAttackChanceMultiplier: number) => boolean;
        /**
         * Called when special attacking
         * @returns True when nothing else should be done after the special attack
         */
        doSpecialAttack: (creature: Creature, enemy: Creature | Human) => boolean;
    };
    /**
     * If true, creature will perform their special ability when killing a player or NPC with a bypass
     */
    doesSpecialAbilityOnKill?: boolean;
    /**
     * When a flying MoveType is set, by default, a shadow will appear under the creature, this will disable that feature when set to true;
     */
    noShadow?: boolean;
    noSpringForthMessage?: true;
    /**
     * The merchant credit value/worth of a creature when contained in another item (bottles/cages/etc.)
     */
    worth?: number;
    /**
     * Only used for golems currently, but we should use this for all true/false properties for creatures probably
     */
    group?: CreatureTypeGroup[];
    /**
     * Called when the creature changes AI types
     */
    onAiChange?: (creature: Creature, aiType: AiType, changeAiType: ChangeAiType) => void;
    /**
     * Called when a creature is spawned
     */
    onSpawn?: (creature: Creature) => void;
    /**
     * Set to PettingType.NotAllowed it they don't accept petting, or PettingType.Attack if they attack when petted
     */
    acceptsPets?: PettingType;
    /**
     * Defines the magical mote type this creature can drop. Aberrant creatures will always drop a magical mote of the given magical loot type.
     */
    magicalLoot?: MagicalLootType;
    /**
     * The radius within which the creature will be alerted to from a player.
     * Defaults to CREATURE_DEFAULT_ALERTED_DISTANCE_SQ
     */
    alertedRadius?: number;
    /**
     * Set to false if you want the creature to not be slowed by cobwebs
     * Defaults to true (or undefined, which is treated as true)
     */
    slowedByCobwebs?: boolean;
}
export interface ICreatureLoot {
    item: ItemType;
    chance?: number;
}
export declare enum PettingType {
    Allowed = 0,
    NotAllowed = 1,
    Attack = 2
}
export interface IWaste {
    event: TileEventType;
    timer: number;
}
export interface IHitch {
    inUse: boolean;
    doodad: Doodad | undefined;
}
export interface IDamageInfo {
    human?: Human;
    amount: number;
    type: DamageType;
    weaponName?: Message | Translation;
    creature?: Creature;
    doodad?: Doodad;
    skipMilestones?: boolean;
    noCalculation?: boolean;
    damageMessage?: Message | Translation;
    soundDelay?: number;
    surpressAttackAnimation?: boolean;
    status?: Status;
    tileEvent?: TileEvent;
}
export interface IDamageOutcomeInput {
    human?: Human;
    target: Human | Creature;
    damageAmount: number;
    damageType: DamageType;
    weaponName?: Message | TranslationImpl;
    yourWeaponName?: Translation;
    targetName?: Translation;
}
export interface IDamageOutcome {
    attackOutcome: number;
    resist: number;
    resistTypes: DamageType[];
    vulnerable: number;
    vulnerableTypes: DamageType[];
    immunities: DamageType[];
    noDamage: boolean;
    regenerate: number[];
    soundEffect?: SfxType;
    statNotifications: Array<[StatNotificationType, number]>;
    messages: IPackedMessage[];
}
export interface ICreatureEvents extends IEntityWithStatsEvents, IEntityAiEvents {
    /**
     * Called before a creature attacks
     * @param enemy The enemy (human or creature)
     * @returns False if the creature cannot attack, or undefined to use the default logic
     */
    canAttack(enemy: Human | Creature): boolean | undefined;
    /**
     * Called when a creature tries to move
     * @param tile The tile the creature is trying to move to
     * @param moveType The creatures move type
     * @returns True if the creature can move, false if the creature cannot move, or undefined to use the default logic
     */
    canMove?(tile: Tile, moveType: MoveType): boolean | undefined;
    /**
     * Called when a creature tries to face a new direction
     * @param x The x coordinate of the creature's facing direction
     * @param y The y coordinate of the creature's facing direction
     * @returns True if the creature can face a new direction, false if the creature can't face a new direction, or undefined to use the default logic
     */
    canFaceDirections?(x: number, y: number): boolean | undefined;
    /**
     * Called when a creature may attempt to do a special ability
     * @returns True if the creature can attempt to do a special ability, false if the creature can't perform special abilities, or undefined to use the default logic
     */
    canPerformSpecialAbilities?(): boolean | undefined;
    /**
     * Called when a creature despawns
     * @returns True if the creature can despawn, false if the creature can't despawn, or undefined to use the default logic
     */
    canDespawn?(): boolean | undefined;
    /**
     * Called when a creature becomes tamed
     * @param owner The human which the creature is tamed for
     */
    tame?(owner: Human): void;
    /**
     * Called when a creature dies
     * @param attacker The attacker who killed the creature
     */
    die?(attacker: Human | Creature | Doodad | undefined): void;
    /**
     * Called when a creature is damaged
     * @param damageInfo The damage info object
     * @returns The amount of damage the creature should take (the creature will take this damage) or undefined to use the default logic
     */
    damage?(damageInfo: IDamageInfo): number | undefined;
    getDefense(defense: Defense): Defense;
}
/** The chance to start wandering after being paused, if fearless */
export declare const CREATURE_WANDER_FEARLESS_CHANCE: number;
/** The chance to start wandering after being paused, if scared */
export declare const CREATURE_WANDER_SCARED_CHANCE: number;
export declare const CREATURE_DEFAULT_ALERTED_DISTANCE_SQ: number;
export declare const TAMED_CREATURE_FOLLOW_CLOSE_DISTANCE = 1;
export declare const TAMED_CREATURE_FOLLOW_FAR_DISTANCE = 6;
export declare const settableAiTypes: Set<AiType>;
export declare const CREATURE_MAX_HEALTH_BONUS_TAME = 1.1;
export declare const CREATURE_MAX_HEALTH_BONUS_OFFER = 1.05;
export declare const CREATURE_MAX_HEALTH_BONUS_PET = 1.01;
export declare const CREATURE_DEFAULT_TAME_DIFFICULTY_UNSET = 25;
export interface ICreatureAttackOutcomeBase {
    enemy?: Human | Creature;
    willAttack: boolean;
    breakAway: boolean;
    unhiding: boolean;
}
export interface ICreatureAttackOutcomeNoAttack extends ICreatureAttackOutcomeBase {
    willAttack: false;
    unhiding: false;
}
export interface ICreatureAttackOutcomeHidden extends ICreatureAttackOutcomeBase {
    willAttack: true;
    unhiding: true;
}
export interface ICreatureAttackOutcomeAttack extends ICreatureAttackOutcomeBase {
    enemy: Human | Creature;
    willAttack: true;
    unhiding: false;
    maxParryingMultiplier: number;
    damagedVehicle?: Item;
    combatNote?: any[];
    damageEquipment: boolean;
    creatureHitRange: IRange;
    enemyDefense: number;
    pityPointOfDamageChance: number;
    effectiveness: number;
    damageScale: number;
    enemyImmune: boolean;
    enemyRegen: boolean;
}
export type CreatureAttackOutcome = ICreatureAttackOutcomeNoAttack | ICreatureAttackOutcomeHidden | ICreatureAttackOutcomeAttack;
export interface ICreatureCheckMoveOptions {
    ignoreHuman: Human;
    ignoreScareCrow: boolean;
    ignoreMoveTypeNone: boolean;
}
export interface ICreatureSpawnOptions {
    /**
     * If set to true, the creature will ignore blocked or full tile checks as well as ignore spawnTiles definitions set on the creature.
     */
    bypassTiles?: boolean;
    /**
     * If provided, forces the spawned creature's aberrant state to be the passed boolean. True = aberrant, false = not aberrant. If not provided, the aberrant state is decided based on chance.
     */
    forceAberrant?: boolean;
    /**
     * If set, this will overwrite the creature's description for which tiles it can spawn on. This will also change which tiles it can path on to, differing from its set definitions.
     */
    spawnTiles?: TileGroup;
    /**
     * If set to true, this will bypass the current zone's creature limit and spawn it regardless.
     */
    bypassCreatureLimit?: boolean;
    /**
     * If set to true, the creatures will ignore scarecrows when spawning. Note that this does NOT ignore the chance of being scared by a scarecrow when moving, just the initial spawn checks.
     */
    bypassScarecrows?: boolean;
    /**
     * If set to true, all checks will be bypassed and the creature will spawn no matter what.
     */
    bypassAll?: boolean;
}
