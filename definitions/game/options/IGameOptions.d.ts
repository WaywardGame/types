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
import { CreatureType, TileGroup } from "game/entity/creature/ICreature";
import { AttackType, StatusType } from "game/entity/IEntity";
import { SkillType } from "game/entity/IHuman";
import { Stat } from "game/entity/IStats";
import { Milestone } from "game/milestones/IMilestone";
import { ThreeStateButtonState } from "ui/component/IThreeStateButton";
import DefaultMap from "utilities/collection/map/DefaultMap";
import RandomItem from "utilities/random/generators/RandomItem";
import RandomRange from "utilities/random/generators/RandomRange";
import { RecursivePartial } from "utilities/types/Recursive";
export declare enum GameMode {
    Hardcore = 0,
    Casual = 1,
    Challenge = 2,
    Custom = 3
}
export declare const TIME_ETERNAL_NIGHT = 0.7;
export declare const TIME_ETERNAL_DAY = 0.3;
export declare enum TravelingEffectStrategy {
    AllPlayers = 0,
    OnlinePlayersOnly = 1,
    NoPlayers = 2
}
export interface IGameOptions {
    /**
     * Whether players respawn when they die
     */
    respawn: boolean;
    island: {
        /**
         * Biome type for the first island
         */
        startingBiomeType: BiomeType;
        /**
         * Traveling effect options
         */
        applyTravelingEffects: TravelingEffectStrategy;
    };
    creatures: {
        /**
         * Whether creatures attack when unprovoked
         */
        peaceful: boolean;
        /**
         * @param On Only aberrants can spawn
         * @param Off Only non-aberrants can spawn
         * @param Null Either aberrants or non-aberrants can spawn
         */
        aberrantSpawns: ThreeStateButtonState;
        /**
         * Custom options for each creature.
         */
        creature: DefaultMap<CreatureType, IGameOptionsCreature>;
        /**
         * Multiplier for damage of creatures
         */
        damageMultiplier: number;
        /**
         * Multiplier for health of creatures
         */
        healthMultiplier: number;
        /**
         * Chance for creature to spawn as scared (uses Random.chance)
         */
        chanceToSpawnScared: number;
        /**
         * Maximum number of creatures that can spawn in a world
         */
        spawnLimit: number;
    };
    time: {
        /**
         * A number between `0` and `1`, where `0` is the start of the day and `1` is the end.
         */
        initial: number;
        /**
         * Whether time never passes
         */
        frozen: boolean;
        /**
         * The number of turns/ticks in a day.
         */
        dayLength?: number;
        /**
         * A number between `0` and `1` representing how much of the day is "daytime" and how much of the day is "night time".
         */
        dayPercent?: number;
    };
    rest: {
        /**
         * How long to delay before resting begins
         */
        startDelay?: number;
        /**
         * Delay between rest ticks
         */
        tickInterval?: number;
    };
    player: IGameOptionsPlayer;
    npcs: {
        merchants: {
            /**
             * A multiplier for the price of each merchant item.
             */
            priceMultiplier: number;
            /**
             * The number of items a merchant spawns with.
             */
            initialItems: RandomRange[];
        };
    };
    /**
     * Whether mods should be disabled
     */
    disableMods: boolean;
    milestoneModifiers: Set<Milestone>;
    items: {
        /**
         * Multiplier for decay of items.
         */
        decayMultiplier: number;
    };
}
export declare enum UnlockedRecipesStrategy {
    StartWithNone = 0,
    UseUnlocks = 1,
    AllUnlocked = 2
}
export interface IGameOptionsPlayer {
    /**
     * Whether the player should use their globally unlocked recipes in this game.
     */
    unlockedRecipes: UnlockedRecipesStrategy;
    /**
     * A map of options for each stat.
     */
    stats: DefaultMap<Stat, IGameOptionsStat>;
    /**
     * A map of options for each status effect.
     */
    statusEffects: DefaultMap<StatusType, IGameOptionsStatusEffect>;
    skills: {
        /**
         * Amount of starting skills the player has (by default, 1 or 0, depending on mode)
         *
         * Note: Randomly generated skills can be overwritten by custom options in `skills`.
         */
        initial: RandomRange[];
        /**
         * Configuration that affects every skill which doesn't have its own configuration.
         */
        global: IGameOptionsSkill;
        /**
         * Custom options for each skill.
         */
        customs: DefaultMap<SkillType, IGameOptionsSkill>;
    };
    reputation: {
        /**
         * The initial malignity
         */
        initialMalignity: number;
        /**
         * The initial benignity
         */
        initialBenignity: number;
        /**
         * The rate at which malignity is gained
         */
        malignityMultiplier: number;
        /**
         * The rate at which benignity is gained
         */
        benignityMultiplier: number;
    };
    inventory: {
        /**
         * - Set to `false` to disable initial items
         * - Set to `true` to randomly generate initial items
         */
        randomItems: boolean;
        /**
         * An additional set of items the player should spawn with.
         */
        additionalItems: RandomItem[];
        /**
         * An additional set of items the player should spawn with that should be equipped.
         */
        equipment: Array<{
            type: RandomItem;
            priority?: number;
        }>;
    };
    crafting: {
        /**
         * A multiplier for the durability of each item.
         */
        durabilityMultiplier: number;
        /**
         * A multiplier for the difficulty of each level of craft.
         * TODO: Set to Map<RecipeLevel, number> when we can support maps in milestone modifier overrides?
         */
        difficultyMultiplier: number;
    };
    actions: {
        /**
         * Guardians to attempt to spawn after successful lockpicks.
         */
        additionalGuardiansSpawnedOnLockpick: number;
    };
    damage: {
        /**
         * Add player damage multiplier based on attack type (used within Attack action).
         */
        attackMultiplier: DefaultMap<AttackType, number>;
        /**
         * Add player damage multiplier based on attack type (used within Attack action).
         */
        trapMultiplier: number;
    };
}
/**
 * "Partial" difficulty options; used to apply options over top base options. Milestone modifiers can never exist on partial difficulty options.
 */
export declare type IGameOptionsPartial = RecursivePartial<IGameOptions> & {
    milestoneModifiers?: never;
};
export interface IGameOptionsStat {
    /**
     * If the given value is a decimanl number less than or equal to `1`, sets the stat value to a percentage of the max.
     * Otherwise, sets the stat to the given value.
     */
    initialValue?: number;
    /**
     * The max value of the stat, or `undefined` if it should be generated randomly
     */
    maxValue?: number;
    /**
     * A float or number to multiply against the maxValue after being generated randomly or set via custom options.
     * Used specifically for milestone modifiers currently.
     */
    maxValueMultiplier?: number;
    /**
     * A multiplier for the speed at which the stat changes `1` is "default", `0` is "none", `2` is "two times speed"
     */
    changeTimerMultiplier: number;
    /**
     * A bonus value to apply to the stat.
     */
    bonus?: number;
    /**
     * The number that stats increase by each gain. By default, this is "1".
     */
    gainAmount: number;
}
export interface IGameOptionsStatusEffect {
    /**
     * Whether every player starts with this status effect.
     */
    startWith: boolean;
    /**
     * Whether this status effect is untreatable (IE: it must pass naturally)
     */
    untreatable: boolean;
    /**
     * A multiplier for the chance of this status effect to be passed each turn.
     */
    passChanceMultiplier: number;
    /**
     * A multiplier for the number of ticks between effect ticks.
     */
    effectRateMultiplier: number;
    /**
     * Decrease or increase the effect of the... effect.
     */
    effectMultiplier: number;
}
export interface IGameOptionsSkill {
    /**
     * The initial value of this skill.
     */
    initial?: number;
    /**
     * A multiplier for how fast the skill is gained.
     */
    gainMultiplier: number;
}
export interface IGameOptionsCreature {
    /**
     * Can spawn at all.
     */
    allowSpawning: boolean;
    /**
     * @param On Only aberrants can spawn
     * @param Off Only non-aberrants can spawn
     * @param Null Either aberrants or non-aberrants can spawn
     */
    aberrantSpawns: ThreeStateButtonState;
    /**
     * A multiplier for the chance of this creature executing a special attack.
     */
    specialAttackChanceMultiplier: number;
    /**
     * Chance for creature to spawn as tamed (uses Random.chance)
     */
    chanceToSpawnTamed: number;
    /**
     * Forces the creature to always be present in the spawn pool, overwriting allowSpawning.
     */
    alwaysSpawn: boolean;
    /**
     * Modifies the tiles the creature can spawn on.
     */
    spawnTiles: TileGroup;
}
