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
import type { CurseGroup, CurseEventType, CurseCategory, CursePosition, CurseEventRevealCondition } from "@wayward/game/game/curse/ICurse";
import type Human from "@wayward/game/game/entity/Human";
import type Island from "@wayward/game/game/island/Island";
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import type { TimeString } from "@wayward/game/game/time/ITimeManager";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import { IRange } from "@wayward/utilities/math/Range";
import type Tile from "@wayward/game/game/tile/Tile";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type Item from "@wayward/game/game/item/Item";
import type TileEvent from "@wayward/game/game/tile/TileEvent";
import type WorldZ from "@wayward/utilities/game/WorldZ";
import type { StatusEffectList } from "@wayward/game/game/entity/status/StatusEffectList";
import type { CurseEventInstance } from "@wayward/game/game/curse/Curse";
import type { DeityReal } from "@wayward/game/game/deity/Deity";
/** The API that curse events have access to */
export interface CurseEventContext {
    readonly type: CurseEventType;
    readonly definition: CurseEvent | undefined;
    /** @deprecated You shouldn't have to use this */
    readonly instance: CurseEventInstance;
    readonly island: Island;
    /** The epicenter of the curse, based on `CurseEvent.position` */
    readonly point: IVector2;
    /** A number 0-1 of how far through the night it currently is */
    readonly fractionalTime: number;
    /** The human that happened to get the event rolled on them */
    readonly cursebearer: Human | undefined;
    /** The cursebearer's curse at the time the event began */
    readonly curse: number;
    /** The creatures that the event has spawned */
    readonly creatures: Creature[];
    /** Whether the cursebearer is asleep */
    readonly sleeping: boolean;
    /** Get the players nearby the curse. This is based on `CurseEvent.position` and `CurseEvent.radius` */
    getNearbyPlayers(): Human[];
    /** Get a random tile within the curse event's radius. This is based on `CurseEvent.position` and `CurseEvent.radius` */
    getRandomTile(radius?: number): Tile | undefined;
    /** Get a random tile within the curse event's radius. This is based on `CurseEvent.position` and `CurseEvent.radius` */
    getTilesInRange(radius?: number, z?: WorldZ): Tile[];
    /**
     * Spawn a creature at the given tile using the curse event spawning rules.
     *
     * Note that "curse event" creatures:
     * - Do not display alerted notifiers
     * - Do not randomly despawn
     * - Are despawned at the event end
     *
     * @param evenWhenAsleep Disable the default functionality of preventing spawns if the cursebearer is asleep
     */
    spawnCreature(type?: CreatureType, aberrant?: boolean, tile?: Tile, evenWhenAsleep?: true): Creature | undefined;
    /**
     * Note: This does not check whether or not the cursebearer is asleep.
     * @param options The options for extinguishing lights
     * @param lights The lights that should lose decay. If no lights are provided, all lights in the event radius will be affected
     */
    extinguish(options: CurseEventExtinguishOptions, ...lights: Array<Doodad | Item | TileEvent>): void;
    /**
     * Mark the given creatures as "curse event" creatures. See the `spawnCreature` function for more information
     */
    claim(...creatures: Creature[]): void;
    /**
     * Skip time in any scripts running for this event.
     */
    skipTime(ticks: number): void;
    reveal(forSpecificHuman?: ArrayOr<Human>): boolean;
    discover(forSpecificHuman?: ArrayOr<Human>): boolean;
    /**
     * Inject a custom curse event subscriber class into the game.
     * This class *must* be included in `CurseEvent.subscribers`.
     */
    inject<T extends CurseEventSubscriber>(subscriber: Class<T>): void;
    uninject(): void;
    uninject<T extends CurseEventSubscriber>(subscriber: Class<T>): void;
    toString(): string;
    data<T>(def: CurseEventContextDataDefinition<T>): CurseEventContextData<T>;
}
export interface CurseEventContextDataDefinition<T> {
    readonly id: string;
    initializer?(): T;
}
export interface CurseEventContextData<T> {
    get(): T;
    set(value: T): void;
}
export declare function CurseEventContextData<T>(id: string): CurseEventContextDataDefinition<T | undefined>;
export declare function CurseEventContextData<T>(id: string, initializer: () => T): CurseEventContextDataDefinition<T>;
export declare namespace CurseEventContextData {
    function get<T>(instance: CurseEventInstance, def: CurseEventContextDataDefinition<T>): T | undefined;
}
export interface CurseEventExtinguishOptions {
    /**
     * The number of flat ticks to reduce decays by
     *
     * Chooses the higher of `staticDecay` and `dynamicDecay`.
     */
    staticDecay?: number | IRange;
    /**
     * The percentage of the current decay to reduce by, represented as a number between 0 and 1.
     *
     * Chooses the higher of `staticDecay` and `dynamicDecay`.
     */
    dynamicDecay?: number | IRange;
}
export interface CurseEvent {
    group: CurseGroup;
    alignment: DeityReal;
    category: CurseCategory;
    /**
     * The chance that this curse event will spawn compared to other events.
     * All curse events default to a weight of 1, so setting this to 0.5 would make it half as likely as any other event.
     */
    weight?: number;
    revealOn: ArrayOr<CurseEventRevealCondition>;
    discoverOn: ArrayOr<CurseEventRevealCondition>;
    effects?(context: CurseEventContext, effects: StatusEffectList): StatusEffectList;
    /** A number 0-1 representing the curse level that the randomly selected player must have in order for this curse event to be chosen */
    requiredCurseLevel?: number;
    requiredBiomes?: {
        type: "whitelist" | "blacklist";
        biomes: BiomeType[];
    };
    /** If one event is marked as conflicting with another, they will both have the conflict registered. */
    conflicts?: CurseEventType[];
    requiredPredicate?(context: CurseEventContext): boolean;
    /** Defaults to `CursePosition.None` */
    position?: CursePosition;
    /**
     * Controls the radius of the curse event. Defaults to the value of `CURSE_EVENTS_DEFAULT_RADIUS` (at time of writing, 25.)
     * This is used for the `CurseEventContext.getRandomTile` and `CurseEventContext.getNearbyPlayers` methods.
     */
    radius?: number;
    /**
     * Creature types that this event can spawn by default.
     */
    creatureTypes?: SupplierOr<CreatureType[] | undefined, [CurseEventContext]>;
    /**
     * Custom game options to apply during the curse event. Note that this only runs once, right at the start of the event.
     */
    getOptions?(context: CurseEventContext): IGameOptionsPartial;
    subscribers?: Array<Class<CurseEventSubscriber>>;
    onStart?(context: CurseEventContext): void;
    onEnd?(context: CurseEventContext): void;
    script?: CurseEventScript | CurseEventScript.Repeat | CurseEventScript.Simultaneously;
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
        ticks: SupplierOr<number | IRange, [CurseEventContext]>;
    }
    export function EndAfter(ticks: SupplierOr<number | IRange, [CurseEventContext]>): EndAfter;
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
    export function Wait(ticks: SupplierOr<number | IRange, [CurseEventContext]>): Wait;
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
/**
 * A base class for subscribing to game events & applying game options during a curse event.
 * Note that renaming this class will result in it no longer being subscribed for a curse event, if it was before.
 */
export declare abstract class CurseEventSubscriber {
    protected readonly event: CurseEventContext;
    constructor(event: CurseEventContext);
    protected getOptions?(): IGameOptionsPartial;
    private getAdditionalGameOptionsSources;
}
