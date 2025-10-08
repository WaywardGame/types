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
import { SkillType } from "@wayward/game/game/entity/IHuman";
import type Island from "@wayward/game/game/island/Island";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import { IRange, IRangeRange } from "@wayward/utilities/math/Range";
export declare const CURSE_WEIGHTS: PartialRecord<CurseComponent, number>;
export declare const CURSE_ATTACK_MAX = 50;
export declare const CURSE_DEFENSE_MAX = 100;
export declare const CURSE_CRAFTING_MAX = 100;
export declare const CURSE_KILLING_MAX = 100;
export declare const CURSE_SKILL_MAX = 100;
export declare const CURSE_COMPONENTS: Record<CurseComponent, (human: Human) => number>;
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
export declare const CURSE_EVENTS_CHANCE: IRange;
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
declare namespace Curse {
    interface Helper {
        context: CurseEventContext;
        instance: CurseEventInstance;
        definition: CurseEvent;
    }
    function get(island?: Island, type?: CurseEventType): Helper | undefined;
    function willHaveEventsTonight(island: Island): boolean;
    function canWarnAboutIncomingEvents(island: Island): boolean;
    function getCooldownMultiplier(island: Island, humans?: Human<unknown, number, import("../reference/IReferenceManager").ReferenceType.NPC | import("../reference/IReferenceManager").ReferenceType.Player, unknown>[]): number;
    function clearCooldown(island: Island): void;
    function tickCurse(island: Island, humans: Human[]): void;
    function reload(island: Island): void;
    function spawnCurseEvents(island: Island, humans: Human[]): void;
    function attemptCurseEventSpawn(category: CurseCategory, human: Human, curse: number, humans: Human[], events: CurseEventInstance[]): CurseEventInstance | undefined;
    function attemptSpecificCurseEventSpawn(human: Human, type: CurseEventType, humans: Human[], curse?: number): CurseEventInstance | undefined;
    function unload(island: Island): void;
    function cleanup(island: Island, humans?: Human[]): void;
    function cleanupEphemerals(island: Island): void;
    function createCurseEventContext(instance: CurseEventInstance, island: Island, humans?: Human[], cursebearer?: Human): CurseEventContext;
}
declare const SYMBOL_CURSE_EVENT_SUBSCRIBER_INSTANCES: unique symbol;
declare const SYMBOL_CURSE_EVENT_GLOBAL_SUBSCRIBER_INSTANCE: unique symbol;
interface Curse {
    night?: true;
    events?: CurseEventInstance[];
    cooldown?: number;
    warned?: true;
    ephemeralCreatures?: number[];
    [SYMBOL_CURSE_EVENT_GLOBAL_SUBSCRIBER_INSTANCE]?: CurseEventSubscriber;
}
interface CurseEventInstance {
    type: CurseEventType;
    display: CurseEventDisplayMode;
    cursebearerIdentifier: string;
    curse: number;
    point: IVector2;
    creatures?: number[];
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
