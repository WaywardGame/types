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
import type { BiomeType } from "@wayward/game/game/biome/IBiome";
import type { CurseCategory, CurseEventType } from "@wayward/game/game/curse/ICurse";
import type Human from "@wayward/game/game/entity/Human";
import type Island from "@wayward/game/game/island/Island";
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import type { TimeString } from "@wayward/game/game/time/ITimeManager";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import type { IRange } from "@wayward/utilities/math/Range";
export interface CurseEventContext {
    readonly island: Island;
    readonly point: IVector2;
    /** A number 0-1 of how far through the night it currently is */
    readonly fractionalTime: number;
    readonly cursebearer: Human | undefined;
    getNearbyPlayers(): Human[];
    /**
     * Inject a custom curse event subscriber class into the game.
     * This class *must* be included in `CurseEvent.subscribers`.
     */
    inject<T extends CurseEventSubscriber>(subscriber: Class<T>): void;
    setVisible(visible: boolean): void;
    uninject(): void;
    uninject<T extends CurseEventSubscriber>(subscriber: Class<T>): void;
    toString(): string;
}
/**
 * A base class for subscribing to game events & applying game options during a curse event.
 * Note that renaming this class will result in it no longer being subscribed for a curse event, if it was before.
 */
export declare abstract class CurseEventSubscriber {
    protected readonly event: CurseEventContext;
    constructor(event: CurseEventContext);
    protected getOptions?(): IGameOptionsPartial;
}
export interface CurseEvent {
    category: CurseCategory;
    /** A number 0-1 representing the curse level that the randomly selected player must have in order for this curse event to be chosen */
    requiredCurseLevel?: number;
    requiredBiomes?: {
        type: "whitelist" | "blacklist";
        biomes: BiomeType[];
    };
    /** If one event is marked as conflicting with another, they will both have the conflict registered. */
    conflicts?: CurseEventType[];
    requiredPredicate?(context: CurseEventContext): boolean;
    subscribers?: Array<Class<CurseEventSubscriber>>;
    onStart?(context: CurseEventContext): void;
    onEnd?(context: CurseEventContext): void;
    script?: CurseEventScript;
}
export declare function CurseEvent(event: CurseEvent): CurseEvent;
export type CurseEventScript = CurseEventScript.Step[];
export declare function CurseEventScript(steps: CurseEventScript): CurseEventScript;
export declare namespace CurseEventScript {
    interface CurseEventScriptNodeBase {
        type: string;
    }
    export interface EndAfter extends CurseEventScriptNodeBase {
        type: "end after";
        ticks: number | IRange;
    }
    export function EndAfter(ticks: number | IRange): EndAfter;
    export interface EndAt extends CurseEventScriptNodeBase {
        type: "end at";
        time: TimeString;
    }
    export function EndAt(time: TimeString): EndAt;
    export interface EndWhen extends CurseEventScriptNodeBase {
        type: "end when";
        predicate(context: CurseEventContext): boolean;
    }
    export function EndWhen(predicate: EndWhen["predicate"]): EndWhen;
    export type EndCondition = EndAfter | EndAt | EndWhen;
    export interface Wait extends CurseEventScriptNodeBase {
        type: "wait";
        end: EndCondition;
    }
    export function Wait(end: EndCondition): Wait;
    export interface Action extends CurseEventScriptNodeBase {
        type: "action";
        end?: EndCondition;
        /** @returns `false` to end the entire curse event immediately */
        action(context: CurseEventContext): false | undefined | void;
    }
    export function Action(action: Action["action"]): Action;
    export function Action(end: EndCondition, action: Action["action"]): Action;
    export interface Repeat extends CurseEventScriptNodeBase {
        type: "repeat";
        steps: Step[];
        times?: number | IRange;
    }
    export function Repeat(steps: Step[]): Repeat;
    export function Repeat(times: number | IRange, steps: Step[]): Repeat;
    export interface Simultaneously extends CurseEventScriptNodeBase {
        type: "simultaneously";
        scripts: Record<string, Step[]>;
    }
    export function Simultaneously(scripts: Record<string, Step[]>): Simultaneously;
    export type Step = Wait | Action | Repeat | Simultaneously;
    export {};
}
