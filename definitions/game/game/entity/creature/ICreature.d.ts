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
import type { SfxType } from "audio/IAudio";
import type { BiomeType } from "game/biome/IBiome";
import type Doodad from "game/doodad/Doodad";
import type Creature from "game/entity/creature/Creature";
import type { IEntityWithStatsEvents } from "game/entity/EntityWithStats";
import type Human from "game/entity/Human";
import type { DamageType, Defense, ICausesStatusEffect, IStatChangeInfo, MoveType } from "game/entity/IEntity";
import { AiType } from "game/entity/IEntity";
import type { IStat } from "game/entity/IStats";
import type { IPackedMessage } from "game/entity/player/IMessageManager";
import type StatusEffect from "game/entity/status/StatusEffect";
import type { ItemType, ItemTypeGroup } from "game/item/IItem";
import type Item from "game/item/Item";
import type { LootGroupType } from "game/item/LootGroups";
import type { ITemperatureDescription } from "game/temperature/ITemperature";
import type { TileEventType } from "game/tile/ITileEvent";
import type Tile from "game/tile/Tile";
import type { WorldZ } from "game/WorldZ";
import type Message from "language/dictionary/Message";
import type TranslationImpl from "language/impl/TranslationImpl";
import type Translation from "language/Translation";
import type { IModdable } from "mod/ModRegistry";
import type { StatNotificationType } from "renderer/notifier/INotifier";
import type { IRGB } from "utilities/Color";
import type { IRange } from "utilities/math/Range";
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
    BasaltGolem = 60
}
export interface ICreatureOld extends Creature {
    hp: number;
    maxhp: number;
    happiness?: number;
    chickenEggCounter?: number;
    goatMilkCounter?: number;
}
export declare enum SpawnGroup {
    Any = 0,
    Guardians = 1,
    Seawater = 2,
    CaveWater = 3,
    Cave = 4,
    Night = 5,
    StrongGuardians = 6,
    FreshWater = 7,
    EasyNight = 8,
    CaveVoid = 9,
    SwampWater = 10
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
    Lava = 11,
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
export interface ICreatureDescription extends IModdable, ITemperatureDescription, ICausesStatusEffect {
    minhp: number;
    maxhp: number;
    minatk: number;
    maxatk: number;
    defense: Defense;
    damageType: DamageType;
    ai: AiType;
    moveType: MoveType;
    /**
     * A percentage number for the amount of time the creature should skip movement
     * 100 means the creature always skips their movement
     */
    skipMovementChance?: number;
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
    spawnGroup?: OptionalDescriptions<BiomeType, SpawnGroup[]>;
    spawnAnimation?: boolean;
    makeNoise?: boolean;
    lootGroup?: LootGroupType;
    jumpOver?: boolean;
    noCorpse?: boolean;
    reputation: number;
    waterAnimations?: boolean;
    tamingDifficulty?: number;
    acceptedItems?: Array<ItemType | ItemTypeGroup>;
    lightSource?: boolean;
    lightColor?: IRGB;
    noStumble?: boolean;
    /**
     * If true, this creature will not create puddles when walking in water.
     */
    noSplash?: boolean;
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
    speed?: number;
    disableHitching?: boolean;
    tileMissChance?: OptionalDescriptions<TileGroup, number>;
    waste?: IWaste;
    passable?: boolean;
    texOffsetY?: number;
    isTall?: boolean;
    spawn?: OptionalDescriptions<BiomeType, ICreatureSpawn>;
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
     * Change ai to be scared when it's day in the overworld
     */
    scareDuringDayLight?: boolean;
    /**
     * If true, this creature will get the "produce" stat.
     * If it's a function, the result value will be the change timer.
     */
    hasProduce?: true | ((creature: Creature) => number);
    /**
     * The chance (for example, 0.25) it will be scared from a scarecrow (in a radius) when moving minus how close it is to the scarecrow (calculated in checkCreatureMove).
     * Also, the chance it will not spawn in the radius of one.
     * If set to 1, it will never move close to a scarecrow when visible to it and it will never spawn in view of one.
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
}
export interface ICreatureSpawn {
    /**
     * The reputation of the player or players (averaged) at which the creature spawns at
     */
    spawnsOnReputation?: number;
    /**
     * True if the creature's spawnsOnReputation is set <= 0 and you want the creature to spawn on any positive reputation value
     */
    spawnsOnPositiveReputation?: boolean;
}
export interface ICreatureLoot {
    item: ItemType;
    chance?: number;
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
    legacy?: boolean;
    damageMessage?: Message | Translation;
    soundDelay?: number;
    surpressAttackAnimation?: boolean;
    statusEffect?: StatusEffect;
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
export interface ICreatureEvents extends IEntityWithStatsEvents {
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
     */
    die?(): void;
    /**
     * Called when a creature is damaged
     * @param damageInfo The damage info object
     * @returns The amount of damage the creature should take (the creature will take this damage) or undefined to use the default logic
     */
    damage?(damageInfo: IDamageInfo): number | undefined;
}
export declare const CREATURE_FLEE_DISTANCE_SQ: number;
export declare const TAMED_CREATURE_FOLLOW_CLOSE_DISTANCE = 1;
export declare const TAMED_CREATURE_FOLLOW_FAR_DISTANCE = 6;
export declare const settableAiTypes: Set<AiType>;
export interface ICreatureAttackOutcomeBase {
    enemy?: Human | Creature;
    willAttack: boolean;
    breakAway: boolean;
    hidden: boolean;
    ai: AiType;
}
export interface ICreatureAttackOutcomeNoAttack extends ICreatureAttackOutcomeBase {
    willAttack: false;
    hidden: false;
}
export interface ICreatureAttackOutcomeHidden extends ICreatureAttackOutcomeBase {
    willAttack: true;
    hidden: true;
}
export interface ICreatureAttackOutcomeAttack extends ICreatureAttackOutcomeBase {
    enemy: Human | Creature;
    willAttack: true;
    hidden: false;
    ai: AiType;
    maxParryingMultiplier: number;
    damagedVehicle?: Item;
    combatNote?: any[];
    damageEquipment: boolean;
    creatureHitRange: IRange;
    enemyDefense: number;
    pityPointOfDamageChance: number;
    effectiveness: number;
    damageScale: number;
}
export type CreatureAttackOutcome = ICreatureAttackOutcomeNoAttack | ICreatureAttackOutcomeHidden | ICreatureAttackOutcomeAttack;
export interface ICreatureCheckMoveOptions {
    ignoreHuman: Human;
    ignoreScareCrow: boolean;
    ignoreMoveTypeNone: boolean;
}
