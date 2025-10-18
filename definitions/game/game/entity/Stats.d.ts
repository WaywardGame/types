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
import { IStatChangeInfo, StatChangeReason } from "@wayward/game/game/entity/IEntity";
import type { IStat, IStatBase, IStatEvents, IStats } from "@wayward/game/game/entity/IStats";
import { Stat } from "@wayward/game/game/entity/IStats";
import StatFactory, { StatChangeTimerFactory } from "@wayward/game/game/entity/StatFactory";
import type EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IStatHost extends EventEmitter.Host<IStatEvents> {
    stats: IStats;
}
export default class Stats<T extends IStatHost> {
    private get stats();
    private readonly _host;
    constructor(host: T);
    private get host();
    /**
     * Initializes the given stat from a `StatFactory` instance.
     * @param factory The factory to initialize the stat from.
     *
     * This method will replace existing stats.
     */
    init(stat: Stat, initializer?: (factory: StatFactory) => any): T;
    init(stat: Stat, value: number, initializer?: (factory: StatFactory) => any): T;
    /**
     * Returns whether the given stat exists on this entity.
     */
    has(stat: Stat | IStat): boolean;
    /**
     * Removes the given stat from this entity.
     */
    remove(stat: Stat | IStat): T;
    /**
     * Returns the stat object of a given `Stat`. The return type is a vague `IStat`, but can be
     * passed a type which extends `IStatBase` for automatic narrowing.
     * @param stat The `Stat` to get
     */
    get<STAT_DATA extends IStatBase | undefined = IStat | undefined>(stat: Stat | IStat, allowFailure?: boolean): STAT_DATA & (STAT_DATA extends IStatBase ? {
        base: STAT_DATA;
    } : undefined);
    /**
     * Returns the value of the given stat, or `undefined` if the stat does not exist. Stat bonus *is* applied.
     */
    getValue(stat: Stat | IStat, allowFailure?: true): number | undefined;
    /**
     * Returns the value of the given stat, or `undefined` if the stat does not exist. Stat bonus is *not* applied.
     */
    getBaseValue(stat: Stat | IStat, allowFailure?: boolean): number | undefined;
    /**
     * Sets the given `Stat`'s value to the given amount. Assumes the given value includes any bonus. Triggers `statChange`
     * @param stat The `Stat` to set.
     * @param amount The amount to set the value to, including the bonus.
     * @param reason Why this stat is changing.
     *
     * Note: Initializes the stat if it does not exist.
     */
    set(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    /**
     * Sets the given `Stat`'s value to the given amount. Triggers `statChange`
     * @param stat The `Stat` to set.
     * @param amount The amount to set the value to.
     * @param reason Why this stat is changing.
     *
     * Note: Initializes the stat if it does not exist.
     */
    setValue(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    cacheDynamicValue(stat: Stat | IStat, value: number): boolean;
    /**
     * Reduces the given `Stat` by the given amount. Triggers `statChange`
     * @param stat The `Stat` to reduce.
     * @param amount The amount to reduce by.
     * @param reason Why this stat is changing.
     *
     * An alias for `increaseStat`, negating the given amount.
     */
    reduce(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    /**
     * Increases the given `Stat` by the given amount. Triggers `statChange`
     * @param stat The `Stat` to increase.
     * @param amount The amount to increase by.
     * @param reason Why this stat is changing.
     *
     * An alias for `setStat(stat, stat.value + amount, reason)`
     */
    increase(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    getBonus(stat: Stat | IStat): number | undefined;
    /**
     * Change the bonus for a stat.
     * @param stat The `Stat` to set the bonus of.
     * @param bonus The amount to increase/decrease the stat.
     * @param reason Why this stat is changing.
     *
     * Triggers `statBonusChanged`, then `statChanged`, and potentially `statMaxChanged`
     */
    setBonus(stat: Stat | IStat, bonus: number, info?: StatChangeReason | IStatChangeInfo): T;
    /**
     * Returns whether the given stat has a `max`.
     */
    hasMax(stat: Stat | IStat): boolean;
    /**
     * Returns the `max` of the given stat, or undefined if the stat isn't an `IStatMax`. Stat bonus *is* applied.
     */
    getMax(stat: Stat | IStat): number;
    /**
     * Returns the `max` of the given stat, or undefined if the stat isn't an `IStatMax`. Stat bonus is *not* applied.
     */
    getBaseMax(stat: Stat | IStat, allowFailure?: boolean): number | undefined;
    /**
     * Sets the given `Stat`'s `max` to the given amount. Triggers `statMaxChange`
     * @param stat The `Stat` to set.
     * @param max The amount to set the value to.
     * @param newValue The new value for the stat, optional. Calls `Stat.set` internally.
     */
    setMax(stat: Stat | IStat, max: number, newValue?: number): T;
    /**
     * Returns the "percent" of the given stat, calculated with `value / max`. If there is no `max` for this stat, returns `undefined`.
     */
    getPercent(stat: Stat | IStat): number;
    /**
     * Returns whether the stat exceeds its `max` value. If there is no `max` for this stat, returns `false`.
     */
    exceedsMax(stat: Stat | IStat): boolean;
    /**
     * Sets how frequently the stat should change. Triggers `statTimerChange`
     * @param stat The `Stat` that should change.
     * @param timer How many turns should pass between changes.
     * @param amount The amount the stat will change whenever the timer completes. Defaults to increase by `1`.
     * @param force By default, the `statTimerWillChange` event can be used to cancel or tweak the change timer when set from this method.
     * When this parameter is `true`, that event call will be skipped.
     *
     * If the stat already has a timer going, the difference of the new and old timers
     * is subtracted from the time remaining.
     */
    setChangeTimer(stat: Stat | IStat, timer: number, initializer?: (factory: StatChangeTimerFactory) => any): T;
    /**
     * Resets the change timer for the given stat.
     * @param stat The stat to reset the change timer for.
     */
    resetChangeTimer(stat: Stat | IStat): T;
    /**
     * Decreases the change timer for the given stat.
     * @param stat The stat to decrease the change timer for.
     * @param amt The amount to decrease the change timer by. Defaults to the stat's `changeTimerSpeed`.
     */
    reduceChangeTimer(stat: Stat | IStat, amt?: number): T;
    /**
     * Increases the change timer for the given stat.
     * @param stat The stat to increase the change timer for.
     * @param amt The amount to increase the change timer by. Defaults to the stat's `changeTimerSpeed`.
     */
    increaseChangeTimer(stat: Stat | IStat, amt?: number): T;
    getTimeUntilChange(stat: Stat | IStat, allowFailure?: boolean): number;
    removeChangeTimer(stat: Stat | IStat): T;
    /**
     * Passes the "turn" for stats, decrements their `changeTimer`s. If a stat's timer reaches `0`,
     * the stat value is changed by `changeAmount` and the `changeTimer` is reset to `nextChangeTimer`
     */
    updateTimers(): this;
    all(): IStatBase[];
    private getInternal;
}
