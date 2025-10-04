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
import { IRange } from "@wayward/utilities/math/Range";
export declare const CURSE_WEIGHTS: PartialRecord<CurseComponent, number>;
export declare const CURSE_ATTACK_MAX = 50;
export declare const CURSE_DEFENSE_MAX = 100;
export declare const CURSE_CRAFTING_MAX = 100;
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
export declare const CURSE_EVENTS_NEARBY_PLAYERS_RADIUS = 25;
/**
 * For randomly selecting the cooldown time between curse event nights.
 * Interpolates between the minimum and maximum values based on the player's curse — minimum at 0% curse, maximum at 100% curse.
 */
export declare const CURSE_EVENTS_COOLDOWN_RANGE: {
    minimum: IRange;
    maximum: IRange;
};
declare namespace Curse {
    interface Helper {
        context: CurseEventContext;
        instance: CurseEventInstance;
        definition: CurseEvent;
    }
    function get(island?: Island, type?: CurseEventType): Helper | undefined;
    function tickCurse(island: Island, humans: Human[]): void;
    function reload(island: Island): void;
    function spawnCurseEvents(island: Island, humans: Human[]): void;
    function attemptCurseEventSpawn(category: CurseCategory, human: Human, curse: number, humans: Human[], events: CurseEventInstance[]): CurseEventInstance | undefined;
    function attemptSpecificCurseEventSpawn(human: Human, type: CurseEventType, humans: Human[], curse?: number): CurseEventInstance | undefined;
    function cleanup(island: Island, humans?: Human[]): void;
    function createCurseEventContext(instance: CurseEventInstance, island: Island, humans?: Human[], cursebearer?: Human): CurseEventContext;
}
interface Curse {
    night?: true;
    events?: CurseEventInstance[];
    cooldown?: number;
    warned?: true;
}
interface ScriptProcessState {
    /** The path of keys/indices from the root of the script to the step this process is currently on. */
    path: Array<string | number>;
    /** The game tick when this step's EndAfter condition is met. */
    endTick?: number;
    /** Iterations remaining for a "repeat" block. */
    iterationsRemaining?: number;
    /** The state of any child processes started by a "simultaneously" or "repeat" block. */
    childProcesses?: ScriptProcessState[];
}
declare const SYMBOL_CURSE_EVENT_SUBSCRIBER_INSTANCES: unique symbol;
interface CurseEventInstance {
    type: CurseEventType;
    display: CurseEventDisplayMode;
    cursebearerIdentifier: string;
    point: IVector2;
    subscribers?: string[];
    scriptProcesses?: ScriptProcessState[];
    [SYMBOL_CURSE_EVENT_SUBSCRIBER_INSTANCES]?: Record<string, CurseEventSubscriber>;
}
export default Curse;
