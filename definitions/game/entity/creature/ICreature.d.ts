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
import { BiomeType } from "game/biome/IBiome";
import Doodad from "game/doodad/Doodad";
import Creature from "game/entity/creature/Creature";
import Human from "game/entity/Human";
import { AiType, DamageType, Defense, IEntityEvents, MoveType, StatusType } from "game/entity/IEntity";
import Player from "game/entity/player/Player";
import { ItemType, ItemTypeGroup } from "game/item/IItem";
import { LootGroupType } from "game/item/LootGroups";
import { ITemperatureDescription } from "game/temperature/ITemperature";
import { ITile } from "game/tile/ITerrain";
import { TileEventType } from "game/tile/ITileEvent";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IModdable } from "mod/ModRegistry";
import { IRGB } from "utilities/Color";
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
    Mammoth = 50
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
    CaveVoid = 9
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
    IceCap = 18,
    IceCapWithWater = 19,
    Void = 20
}
export interface ICreatureDescription extends IModdable, ITemperatureDescription {
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
    fishable?: boolean;
    blood?: IRGB;
    aberrantBlood?: IRGB;
    loot?: ICreatureLoot[];
    aberrantLoot?: ICreatureLoot[];
    spawnTiles: TileGroup;
    spawnGroup?: OptionalDescriptions<BiomeType, SpawnGroup[]>;
    makeNoise?: boolean;
    canCauseStatus?: StatusType[];
    lootGroup?: LootGroupType;
    jumpOver?: boolean;
    noCorpse?: boolean;
    respawn?: boolean;
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
    providesFire?: boolean;
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
}
export interface ICreatureEvents extends IEntityEvents {
    /**
     * Called before a creature attacks
     * @param enemy The enemy (player or creature)
     * @returns False if the creature cannot attack, or undefined to use the default logic
     */
    canAttack(enemy: Player | Creature): boolean | undefined;
    /**
     * Called when a creature tries to move
     * @param tile The tile the creature is trying to move to
     * @param x The x coordinate of the tile
     * @param y The y coordinate of the tile
     * @param z The z coordinate of the tile
     * @param moveType The creatures move type
     * @returns True if the creature can move, false if the creature cannot move, or undefined to use the default logic
     */
    canMove?(tile: ITile, x: number, y: number, z: number, moveType: MoveType): boolean | undefined;
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
}
