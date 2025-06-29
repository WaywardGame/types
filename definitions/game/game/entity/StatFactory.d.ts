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
import type { IStat, IStatBase, IStatFactory, IStats } from "@wayward/game/game/entity/IStats";
import { Stat } from "@wayward/game/game/entity/IStats";
import type { IStatHost } from "@wayward/game/game/entity/Stats";
import type Stats from "@wayward/game/game/entity/Stats";
export declare class StatsFactory {
    private readonly stats;
    private readonly _host;
    constructor(host: IStatHost);
    private get host();
    /**
     * If the condition is not falsey, runs the initializer on this factory.
     */
    if(condition: any, initializer: (factory: StatsFactory) => any): this;
    /**
     * Note: When adding a stat that already exists in this factory, the previous one will be replaced.
     */
    add(stat: Stat, initializer?: (factory: StatFactory) => any): this;
    add(stat: Stat, value?: number, initializer?: (factory: StatFactory) => any): this;
    get(): IStats;
}
declare class StatFactory implements IStatFactory {
    private readonly host;
    private readonly result;
    get stat(): Stat;
    get value(): number;
    /**
     * @param type The `Stat` this factory is building
     * @param value The starting value of this stat. Defaults to `0`
     */
    constructor(host: IStatHost, type: Stat, value?: number);
    setValue(value: number): this;
    /**
     * Sets the max value this stat can be
     */
    setMax(max: number, canExceed?: true): this;
    /**
     * Sets the stat to change over time.
     * @param timer The number of turns that should pass before the stat should change.
     * @param amt The amount the stat should change, whenever the timer completes.
     *
     * Stat timers are managed by their parent Entity. Currently, only players support `changeTimer`
     */
    setChangeTimer(timer: number, initializer?: (factory: StatChangeTimerFactory) => any): this;
    /**
     * Sets the "bonus" for the stat. This changes the value that will be returned.
     */
    setBonus(bonus: number): this;
    get(): IStat;
}
export default StatFactory;
export declare enum StatChangeCurrentTimerStrategy {
    /**
     * If the next change timer will be `200`, sets the current change timer to `200`.
     */
    Reset = "Reset",
    /**
     * If the current change timer is `250`, and the next change timer will be `200`, sets the current change timer to `200`.
     */
    Clamp = "Clamp",
    /**
     * If the current change timer is `10`, and the next change timer is going from `100` to `200`, sets the current change timer to `110`.
     */
    Difference = "Difference",
    /**
     * If the current change timer is `10`, and the next change timer is going from `100` to `200`, sets the current change timer to `20`.
     */
    Ratio = "Ratio"
}
export declare class StatChangeTimerFactory {
    private timer;
    private nextTimer;
    private _canOverride;
    private amount?;
    private decayRate?;
    constructor(timer: number);
    /**
     * @returns The strategy for calculating the current change timer given the changes.
     */
    getCurrentTimer(): number | StatChangeCurrentTimerStrategy;
    /**
     * Sets the strategy for calculating the current change timer given the changes.
     * @param timer A number to precisely set the current timer, or a `StatChangeCurrentTimerStrategy` to calculate the new value automatically.
     * See enum for more detail.
     */
    setCurrentTimer(timer?: StatChangeCurrentTimerStrategy): this;
    /**
     * @returns The next change timer. This value is what the `changeTimer` will be reset to every time it reaches `0`.
     * If the next change timer is less than or equal to `0`, upon reaching `0`, the change timer will be removed from the stat.
     */
    getNextTimer(): number;
    /**
     * @param nextTimer The next change timer. This value is what the `changeTimer` will be reset to every time it reaches `0`.
     * If the next change timer is less than or equal to `0`, upon reaching `0`, the change timer will be removed from the stat.
     */
    setNextTimer(nextTimer: number): this;
    /**
     * Sets the next change timer to `-1`, which will cause the change timer to be removed from the stat when the timer reaches `0`.
     */
    setOnce(): this;
    /**
     * @returns The amount the stat will be changed when the change timer completes.
     */
    getAmount(): number | undefined;
    /**
     * @param amount The amount the stat will be changed when the change timer completes. Defaults to `1`.
     */
    setAmount(amount?: number): this;
    /**
     * @returns The amount the change timer will be reduced by every tick.
     */
    getDecayRate(): number | undefined;
    /**
     * @param rate The amount the change timer will be reduced by every tick.
     */
    setDecayRate(rate: number): this;
    /**
     * @returns Whether this change timer's application is overridable through the `statTimerWillChange` event.
     */
    isOverridable(): boolean;
    /**
     * @param overridable Whether this change timer's application is overridable through the `statTimerWillChange` event.
     */
    setOverridable(overridable?: boolean): this;
    apply(host: IStatHost, stat: Partial<Mutable<IStatBase>>): void;
    apply(stats: Stats<IStatHost>, stat: Stat | IStat): void;
}
