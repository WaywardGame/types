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
import type { CurseEvent, CurseEventContext } from "@wayward/game/game/curse/CurseEvent";
import { CurseEventSubscriber } from "@wayward/game/game/curse/CurseEvent";
import { CurseCategory, CurseComponent, CurseEventDisplayMode, CurseEventType } from "@wayward/game/game/curse/ICurse";
import type Human from "@wayward/game/game/entity/Human";
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import type Island from "@wayward/game/game/island/Island";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import { IRange, IRangeRange } from "@wayward/utilities/math/Range";
import type { WeightedOption } from "@wayward/utilities/random/IRandom";
import DataComponent from "@wayward/game/game/entity/data/DataComponent";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
export declare const CURSE_CAP = 10000;
export declare const CURSE_COMPONENT_ATTACK_CAP = 50;
export declare const CURSE_COMPONENT_ATTACK_FLOOR = 1;
export declare const CURSE_COMPONENT_DEFENSE_CAP = 100;
export declare const CURSE_COMPONENT_DEFENSE_FLOOR = 2;
export declare const CURSE_COMPONENT_CRAFTING_CAP = 3000;
export declare const CURSE_COMPONENT_CRAFTING_MIN_EFFECT = 0.3;
export declare const CURSE_COMPONENT_KILLING_CAP = 500;
export declare const CURSE_COMPONENT_SKILL_CAP = 100;
export declare const CURSE_COMPONENT_SLEEPLESSNESS_CAP_DAYS = 3;
interface CurseComponentDefinition {
    readonly maxCurseContribution: number | null;
    compute(human: Human): number;
}
export declare const CURSE_COMPONENTS: Record<CurseComponent, CurseComponentDefinition>;
export declare const CumulativeEvilCrafting: DataComponent<number, number>;
export declare const CumulativeKilling: DataComponent<number, number>;
export declare const Sleeplessness: DataComponent<number, number>;
export declare const HighestAttack: DataComponent.Live<number>;
export declare const HighestDefense: DataComponent.Live<number>;
export interface Obliviousness {
    days: number;
    thisNightInvalidated: boolean;
}
export declare const Obliviousness: DataComponent<Obliviousness, Obliviousness>;
/**
 * Gets the highest value of either current or max skill multiplied by the "evilness" of each skill (from rune chance)
 * (Basically, high values in any of the evil-er skills make curse go brrrr)
 */
declare function getSkillValue(human: Human): {
    value: number;
    skill: SkillType;
};
declare namespace Curse {
    const getSkill: typeof getSkillValue;
    function getComponentValue(human: Human, component: CurseComponent): number;
    function getComponentCap(component: CurseComponent): number | null;
    function getValue(human: Human): number;
}
/**
 * In the following graph, this value is `b`:
 * https://www.desmos.com/calculator/sgdtqdqzup
 */
export declare const CURSE_EVENTS_MAX = 5;
/**
 * In the following graph, this value is `a`:
 * https://www.desmos.com/calculator/sgdtqdqzup
 */
export declare const CURSE_EVENTS_MAELSTROM_SPEED = 1;
/**
 * The chance that a curse event will occur, given the opportunity.
 * The chance scales up from the minimum (left) value at 0% curse, to the maximum (right) value at 100% curse.
 *
 * There can be up to CURSE_EVENTS_MAX opportunities per night, based on maelstrom level.
 * At 0-1 maelstrom, there are up to 2 opportunities per night. (Per player, because curse events are localised.)
 * Additional opportunities before the top opportunity always use the max chance.
 */
export declare const CURSE_EVENTS_CHANCE: IRange<number>;
export declare const CURSE_EVENTS_DEFAULT_RADIUS = 25;
/**
 * An IRangeRange for randomly selecting the cooldown time between curse event nights.
 * Interpolates between the minimum and maximum ranges based on the player's curse.
 */
export declare const CURSE_EVENTS_COOLDOWN_RANGE: IRangeRange;
export declare const CURSE_EVENTS_FIRST_NIGHT = 3;
/**
 * Each tick after a curse event ends, one entity of each type spawned by the event has this chance to despawn.
 * If the entity is on a tile that can be seen by a player, it will not despawn.
 */
export declare const CURSE_EVENTS_ENTITY_DESPAWN_CHANCE = 0.1;
/**
 * Some curse events extinguish light sources via additional decay (both static & dynamic (based on % of decay remaining))
 * This multiplier affects how quickly curse ward doodads & items are extinguished compared to the rest
 */
export declare const CURSE_EVENTS_EXTINGUISH_WARD_MULTIPLIER = 0.02;
/**
 * Some curse events extinguish light sources via additional decay (both static & dynamic (based on % of decay remaining))
 * This multiplier affects how quickly it happens when the cursebearer is sleeping
 */
export declare const CURSE_EVENTS_EXTINGUISH_SLEEPING_MULTIPLIER = 0.2;
export declare const CURSE_EVENTS_RUNE_CHANCE_MULTIPLIER_UNLUCKY: IRange<number>;
export declare const CURSE_EVENTS_RUNE_CHANCE_MULTIPLIER_LUCKY: IRange<number>;
/**
 * additional runes granted to the player on kills/tames using intInRange.
 * the amounts in the ranges are scaled by curse %
 */
export declare const CURSE_EVENTS_RUNES_KILL_TAME: Array<WeightedOption<IRange>>;
export declare const CURSE_EVENTS_RUNES_SURVIVED: IRange<number>;
export declare const CURSE_EVENTS_CREATURE_WANDER_CURSEBEARER_PRIORITY: IRange<number>;
declare namespace Curse {
    interface Helper {
        context: CurseEventContext;
        instance: CurseEventInstance;
        definition: CurseEvent;
    }
    function get(island?: Island, type?: CurseEventType): Helper | undefined;
    function all(island: Island, cursebearer?: Human): CurseEventContext[];
    function isMysteryForClient(event: CurseEventInstance): boolean;
    function isMysteryForHuman(event: CurseEventInstance, human: Human): boolean;
    function getOwnerEvent(island: Island, creature: Creature): CurseEventInstance | undefined;
    function willHaveEventsTonight(island: Island): boolean;
    function canWarnAboutIncomingEvents(island: Island): boolean;
    function getCooldownMultiplier(island: Island, humans?: Human<unknown, number, ReferenceType.NPC | ReferenceType.Player, unknown>[]): number;
    function clearCooldown(island: Island): void;
    function resetCooldown(island: Island): void;
    function updateRuneItemsDisplay(island: Island): void;
    function tickCurse(island: Island, humans: Human[]): void;
    function reload(island: Island, isNew?: boolean): void;
    function spawnCurseEvents(island: Island, humans: Human[]): void;
    function attemptCurseEventSpawn(category: CurseCategory, human: Human, curse: number, humans: Human[], events: CurseEventInstance[]): CurseEventInstance | undefined;
    function attemptSpecificCurseEventSpawn(human: Human, type: CurseEventType, humans: Human[], curse?: number, force?: boolean | "full"): CurseEventInstance | undefined;
    function attemptSpecificCurseEventSpawnOnPlayer(player: Human, curseType: CurseEventType, force: boolean | "full"): CurseEventInstance | undefined;
    function unload(island: Island): void;
    function cleanup(island: Island, humans?: Human[], isMorning?: boolean): void;
    function cleanupEphemerals(island: Island): void;
    function getCursebearer(island: Island, event: CurseEventInstance): Human | undefined;
    function createCurseEventContext(instance: CurseEventInstance, island: Island): CurseEventContext;
}
declare const SYMBOL_CURSE_EVENT_SUBSCRIBER_INSTANCES: unique symbol;
declare const SYMBOL_CURSE_EVENT_GLOBAL_SUBSCRIBER_INSTANCE: unique symbol;
declare const SYMBOL_CURSE_EVENT_ACTIVE_SUBSCRIBER_INSTANCE: unique symbol;
interface Curse {
    night?: true;
    globalCurse?: number;
    events?: CurseEventInstance[];
    cooldown?: number;
    warned?: true;
    ephemeralCreatures?: number[];
    [SYMBOL_CURSE_EVENT_GLOBAL_SUBSCRIBER_INSTANCE]?: CurseEventSubscriber;
    [SYMBOL_CURSE_EVENT_ACTIVE_SUBSCRIBER_INSTANCE]?: CurseEventSubscriber;
}
export interface CurseEventInstance {
    type: CurseEventType;
    defaultDisplay: CurseEventDisplayMode;
    display: Record<string, CurseEventDisplayMode>;
    cursebearerIdentifier: string;
    curse: number;
    point: IVector2;
    creatures?: number[];
    savedData?: Record<string, any>;
    subscribers?: string[];
    scriptProcesses?: ScriptProcessState[];
    [SYMBOL_CURSE_EVENT_SUBSCRIBER_INSTANCES]?: Record<string, CurseEventSubscriber>;
}
interface ScriptProcessState {
    /** The path of keys/indices from the root of the script to the step this process is currently on. */
    path: Array<string | number>;
    /** Iterations remaining for a Repeat block, or ticks remaining for an EndCondition. */
    iterationsRemaining?: number;
    /** The state of any child processes started by a Simultaneously or Repeat block. */
    childProcesses?: ScriptProcessState[];
}
export default Curse;
