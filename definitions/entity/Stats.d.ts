/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IStatChangeInfo, StatChangeReason } from "entity/IEntity";
import { IStat, IStatBase, IStatEvents, IStats, Stat } from "entity/IStats";
import StatFactory from "entity/StatFactory";
import EventEmitter from "event/EventEmitter";
export interface IStatHost extends EventEmitter.Host<IStatEvents> {
    stats: IStats;
}
export default class Stats<T extends IStatHost> {
    private readonly host;
    private get stats();
    constructor(host: T);
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
    has(stat: Stat): boolean;
    /**
     * Removes the given stat from this entity.
     */
    remove(stat: Stat): T;
    /**
     * Returns the stat object of a given `Stat`. The return type is a vague `IStat`, but can be
     * passed a type which extends `IStatBase` for automatic narrowing.
     * @param stat The `Stat` to get
     */
    get<Staty extends IStatBase | undefined = IStat | undefined>(stat: Stat, allowFailure?: boolean): Staty & (Staty extends IStatBase ? {
        base: Staty;
    } : undefined);
    /**
     * Returns the value of the given stat, or `undefined` if the stat does not exist. Stat bonus *is* applied.
     */
    getValue(stat: Stat | IStat): number | undefined;
    /**
     * Returns the value of the given stat, or `undefined` if the stat does not exist. Stat bonus is *not* applied.
     */
    getBaseValue(stat: Stat | IStat): number | undefined;
    /**
     * Sets the given `Stat`'s value to the given amount. Triggers `EntityEvent.StatChange`
     * @param stat The `Stat` to set.
     * @param amount The amount to set the value to.
     * @param reason Why this stat is changing.
     *
     * Note: Initializes the stat if it does not exist.
     */
    set(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    /**
     * Reduces the given `Stat` by the given amount. Triggers `EntityEvent.StatChange`
     * @param stat The `Stat` to reduce.
     * @param amount The amount to reduce by.
     * @param reason Why this stat is changing.
     *
     * An alias for `increaseStat`, negating the given amount.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    reduce(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    /**
     * Increases the given `Stat` by the given amount. Triggers `EntityEvent.StatChange`
     * @param stat The `Stat` to increase.
     * @param amount The amount to increase by.
     * @param reason Why this stat is changing.
     *
     * An alias for `setStat(stat, stat.value + amount, reason)`
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    increase(stat: Stat | IStat, amount: number, info?: StatChangeReason | IStatChangeInfo): boolean;
    getBonus(stat: Stat | IStat): number | undefined;
    /**
     * Change the bonus for a stat.
     * @param stat The `Stat` to set the bonus of.
     * @param bonus The amount to increase/decrease the stat.
     * @param reason Why this stat is changing.
     *
     * Triggers `EntityEvent.StatBonusChanged`, then `EntityEvent.StatChanged`
     */
    setBonus(stat: Stat | IStat, bonus: number, info?: StatChangeReason | IStatChangeInfo): T;
    /**
     * Returns the `max` of the given stat, or undefined if the stat isn't an `IStatMax`. Stat bonus *is* applied.
     */
    getMax(stat: Stat | IStat): number;
    /**
     * Returns the `max` of the given stat, or undefined if the stat isn't an `IStatMax`. Stat bonus is *not* applied.
     */
    getBaseMax(stat: Stat | IStat): number | undefined;
    /**
     * Sets the given `Stat`'s `max` to the given amount. Triggers `EntityEvent.StatMaxChange`
     * @param stat The `Stat` to set.
     * @param max The amount to set the value to.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    setMax(stat: Stat | IStat, max: number, newValue?: number): T;
    /**
     * Sets how frequently the stat should change. Triggers `EntityEvent.StatTimerChange`
     * @param stat The `Stat` that should change.
     * @param timer How many turns should pass between changes.
     * @param amount The amount the stat will change whenever the timer completes. Defaults to increase by `1`.
     *
     * If the stat already has a timer going, the difference of the new and old timers
     * is subtracted from the time remaining.
     *
     * This method assumes the stat you're providing exists on this entity. If it doesn't,
     * it will likely error!
     */
    setChangeTimer(stat: Stat | IStat, timer: number, amt?: number, skipWillChange?: boolean): T;
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
    getTimeUntilChange(stat: Stat | IStat): number | undefined;
    removeChangeTimer(stat: Stat | IStat): T;
    /**
     * Passes the "turn" for stats, decrements their `changeTimer`s. If a stat's timer reaches `0`,
     * the stat value is changed by `changeAmount` and the `changeTimer` is reset to `nextChangeTimer`
     */
    updateTimers(): this;
    private getInternal;
}
