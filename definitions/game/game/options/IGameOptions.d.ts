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
import type { Quality, QualityNatural } from "@wayward/game/game/IObject";
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import type { DeityReal } from "@wayward/game/game/deity/Deity";
import type { AttackType } from "@wayward/game/game/entity/IEntity";
import type { SkillType } from "../entity/skill/ISkills";
import type { Stat } from "@wayward/game/game/entity/IStats";
import type { CreatureType, TileGroup } from "@wayward/game/game/entity/creature/ICreature";
import type { NPCType } from "@wayward/game/game/entity/npc/INPCs";
import type { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type { ItemType } from "@wayward/game/game/item/IItem";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { ThreeStateButtonState } from "@wayward/game/ui/component/IThreeStateButton";
import type DefaultMap from "@wayward/game/utilities/collection/map/DefaultMap";
import type RandomItem from "@wayward/game/utilities/random/generators/specific/RandomItem";
import type RandomRange from "@wayward/game/utilities/random/generators/specific/RandomRange";
import type { RecursivePartial } from "@wayward/game/utilities/types/Recursive";
import type { IRange } from "@wayward/utilities/math/Range";
export declare enum GameMode {
    Hardcore = 0,
    Casual = 1,
    Challenge = 2,
    Custom = 3
}
export declare const TIME_ETERNAL_NIGHT = 0.7;
export declare const TIME_ETERNAL_DAY = 0.3;
export declare const TIME_SUNSET = 0.625;
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
        applyTravelingEffects: boolean;
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
         * Maximum number of creatures that can spawn in a zone
         */
        spawnLimit: number;
        /**
         * Multiplier for changing the creature spawn rate
         */
        spawnRateMultiplier: number;
        /**
         * Multiplier for how much max/min HP bonus is given on each tame/offer/pet
         */
        tameHealthMultiplier: number;
        /**
         * Multiplier for how long each tame lasts
         */
        tameTimeMutiplier: number;
        /**
         * Whether creatures can be scared (run away from players)
         */
        disableScared: boolean;
        zones: {
            /**
             * A global tier modifier to apply to every zone
             */
            globalTierModifier: number;
        };
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
        spawning: DefaultMap<NPCType, IGameOptionsNPCSpawning>;
        merchants: {
            /**
             * A multiplier for the price of each merchant item.
             */
            priceMultiplier: number;
            /**
             * A multiplier in price of an item for sale (and divisor in the credit they offer for an item)
             * for each time an item has already been traded with a merchant.
             */
            alreadyTradedMultiplier: number;
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
         * Whether tile containers should be allowed.
         */
        tileContainersEnabled: boolean;
        /**
         * A multiplier for the durability of each item globally.
         */
        durabilityMultiplier: number;
        /**
         * Multiplier for decay of items.
         */
        decayMultiplier: number;
        /**
         * Changes item quality properties.
         */
        qualities: DefaultMap<Quality, IGameOptionsItemQuality>;
    };
    /**
     * Controls random island events (excluding curse events).
     */
    randomEvents: boolean;
    /**
     * Controls curse events
     */
    curse: {
        stat: boolean;
        events: boolean;
        cooldownRangeOverride?: IRange;
        eventsRangeOverride?: IRange;
    };
}
export declare enum UnlockedRecipesStrategy {
    StartWithNone = 0,
    UseUnlocks = 1,
    AllUnlocked = 2
}
export interface IGameOptionsPlayer {
    /**
     * A multiplier for some chance checks. 1 = default chances. 0.5 = chances are halved. 2 = chances are doubled. Etc.
     */
    luckMultiplier: number;
    /**
     * Starting curse value, added to the calculated value.
     */
    initialCurse: number;
    /**
     * A multiplier for the cooldown of curse events. The multiplier used is the average of all players on the island.
     */
    curseCooldownMultiplier: number;
    /**
     * Whether the player should use their globally unlocked recipes in this game.
     */
    unlockedRecipes: UnlockedRecipesStrategy;
    /**
     * A map of options for each stat.
     */
    stats: DefaultMap<Stat, IGameOptionsStat>;
    /**
     * A global multiplier for stat gain chance.
     */
    statGainChanceGlobalMultiplier: number;
    /**
     * Whether to enable stat gain type lockout. (IE, preventing gaining the same stat twice in a row.)
     */
    statGainTypeLockout: boolean;
    /**
     * A map of options for each status.
     */
    statuses: DefaultMap<StatusType, IGameOptionsStatus>;
    skills: {
        /**
         * Amount of starting skills the player has (by default, 1 or 0, depending on mode)
         *
         * Note: Randomly generated skills can be overwritten by custom options in `skills`.
         */
        initial: RandomRange[];
        /**
         * Initial value range for starting skills.
         */
        initialValue: IRange;
        /**
         * Configuration that affects every skill which doesn't have its own configuration.
         */
        global: IGameOptionsSkill;
        /**
         * Custom options for each skill.
         */
        customs: DefaultMap<SkillType, IGameOptionsSkill>;
    };
    runes: {
        /**
         * Upon the player receiving a rune, they will not be able to receive runes of the same type,
         * until receiving a rune of another type.
         */
        typeLockout: boolean;
        /**
         * A multiplier for the chance of the player being given a rune.
         */
        globalChanceMultiplier: number;
        /**
         * A multiplier for the chance of the player being given a rune, for each deity.
         */
        deityChanceMultiplier: Record<DeityReal, number>;
        /**
         * Options for the sacrifice action.
         */
        sacrifice: {
            points: Record<QualityNatural, IRange>;
            thresholds: Record<QualityNatural, number>;
        };
    };
    inventory: {
        /**
         * - Set to `false` to disable initial items
         * - Set to `true` to randomly generate initial items
         */
        randomItems: boolean;
        /**
         * An additional set of items the player should spawn with.
         *
         * **Note that respawning on a Hardcore multiplayer server with Hardcore Respawns enabled will give the player these items.**
         */
        additionalItems: RandomItem[];
        /**
         * An additional set of items the player should spawn with.
         *
         * These items will not be given to the player if they are respawning on a Hardcore multiplayer server with Hardcore Respawns enabled.
         */
        additionalItemsNonRespawn: RandomItem[];
        /**
         * An additional set of items the player should spawn with that should be equipped.
         *
         * **Note that respawning on a Hardcore multiplayer server with Hardcore Respawns enabled will give the player these items.**
         */
        equipment: Array<{
            type: RandomItem;
            priority?: number;
        }>;
        /**
         * An additional set of items the player should spawn with that should be equipped.
         *
         * These items will not be given to the player if they are respawning on a Hardcore multiplayer server with Hardcore Respawns enabled.
         */
        equipmentNonRespawn: Array<{
            type: RandomItem;
            priority?: number;
        }>;
    };
    crafting: {
        /**
         * A multiplier for the durability of each item (not specifically for crafting).
         */
        durabilityMultiplier: number;
        /**
         * A multiplier for the difficulty of each level of craft.
         * TODO: Set to Map<RecipeLevel, number> when we can support maps in milestone modifier overrides?
         */
        difficultyMultiplier: number;
        /**
         * A multiplier for the chance of magical properties being generated on crafted items.
         *
         * Multiplied with the island's chance for any item being generated with magical properties (which is per-quality.)
         */
        magicChanceMultiplier: number;
        /**
         * Allow default crafting recipe discovery.
         */
        unlockRecipesWithComponents: boolean;
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
         * Add player trap damage multiplier.
         */
        trapMultiplier: number;
        /**
         * Add player base defense multiplier.
         */
        baseDefenseMultiplier: number;
    };
}
/**
 * "Partial" difficulty options; used to apply options over top base options. Milestone modifiers can never exist on partial difficulty options.
 */
export type IGameOptionsPartial = RecursivePartial<IGameOptions> & {
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
export interface IGameOptionsStatus {
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
    intervalMultiplier: number;
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
    /**
     * If set, skill cannot be raised past 100 even with bonuses.
     */
    noBonuses: boolean;
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
    /**
     * Adds additional loot with chance using decimal number.
     */
    addedLoot: Array<{
        type: ItemType;
        chance: number;
    }>;
}
export interface IGameOptionsNPCSpawning {
    /**
     * A multiplier for the spawning interval duration for this NPC type
     */
    intervalMultiplier: number;
    /**
     * A multiplier for the spawn chance for this NPC type
     */
    chanceMultiplier: number;
    /**
     * The number of NPCs of this type that each have a separate chance to spawn in this interval
     */
    count: number;
    /**
     * A multiplier for the merchant spawn cap (which is based on civilization score)
     */
    capMultiplier: number;
}
export interface IGameOptionsItemQuality {
    /**
     * Modifies the spawning chance of the quality.
     */
    spawnChance: number;
    magicalProperties: IGameOptionsItemMagic;
}
export interface IGameOptionsItemMagic {
    /**
     * The chance for magical properties to be generated on an item of this quality.
     */
    chance: number;
    /**
     * When spawning an item with magical properties, this is the minimum number it will spawn with.
     */
    min: number;
    /**
     * The maximum number of additional magical properties the item could spawn with.
     */
    bonus: number;
    /**
     * The chance of a bonus property. Is checked once for each additional property, stopping whenever it fails to add one.
     *
     * For example, given a chance of 0.5:
     * - 50% chance of 1 bonus property
     * - 25% chance of 2 bonus properties
     * - 12.5% chance of 3 bonus properties
     * - etc
     */
    bonusChance: number;
    /**
     * Whether bonus chances also take the "contextual multiplier" into account (based on skill, island distance, etc.)
     */
    bonusChanceUsesContextualMultiplier: boolean;
    /**
     * Whether to ignore the magical property quantity override from mastercrafting.
     */
    ignoreQuantityOverride: boolean;
    /**
     * Whether to randomize the magical properties as a value from a range with flat chances.
     * Disables `bonusChance` and `bonusChanceUsesContextualMultiplier`.
     */
    randomizeAsRange: boolean;
}
