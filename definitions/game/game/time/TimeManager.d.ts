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
import type { PartOfDayGranular, TimeString } from "@wayward/game/game/time/ITimeManager";
import { DayQuarter, TimeFormat } from "@wayward/game/game/time/ITimeManager";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export declare const DEFAULT_TIME_DAY_LENGTH = 3200;
export declare const DEFAULT_TIME_DAY_PERCENT = 0.625;
export default class TimeManager {
    private dayLength;
    dayPercent: number;
    frozenTime?: number;
    private _ticks;
    private dayAnchor;
    private readonly transitionPercent;
    get dayStart(): number;
    constructor(turns: number);
    /**
     * Returns a copy of this TimeManager as a new object
     */
    clone(): TimeManager;
    /**
     * The total number of ticks passed.
     */
    get ticks(): number;
    /**
     * Returns which day it is. Starts at 1.
     */
    get day(): number;
    getDayLength(): number;
    /**
     * Returns whether time is frozen.
     */
    isFrozen(): boolean;
    /**
     * Increments `ticks`.
     */
    nextTick(amount?: number): void;
    /**
     * Returns a decimal representation of the current time. `0` is the start of the day, and `1` is the end.
     */
    getTime(tickOffset?: number): number;
    /**
     * Returns the amount of ticks until the time is at least the desired time amount.
     */
    getTicksUntilTimeIsAtLeast(desiredTime: number, tickOffset?: number): number | undefined;
    /**
     * Returns the amount of ticks until the time is before the desired time amount.
     */
    getTicksUntilTimeIsBefore(desiredTime: number, tickOffset?: number): number | undefined;
    /**
     * Returns if the given time is at day.
     * @param time The time to check, defaulting to the current time.
     */
    isDay(time?: number): boolean;
    /**
     * Returns if the given time is at night.
     * @param time The time to check, defaulting to the current time.
     */
    isNight(time?: number): boolean;
    /**
     * Checks if the given time is after a formatted time.
     * @param checkTime A formatted time.
     * @param time The time to check, defaulting to the current time.
     */
    isPast(checkTime: TimeString, time?: number): boolean | undefined;
    /**
     * Checks if the given time is before a formatted time.
     * @param checkTime A formatted time.
     * @param time The time to check, defaulting to the current time.
     */
    isBefore(checkTime: TimeString, time?: number): boolean | undefined;
    /**
     * Returns if the given time is between two formatted times.
     * @param checkPast A formatted time to check if the given time is after.
     * @param checkBefore A formatted time to check if the given time is before.
     * @param time The time to check, defaulting to the current time.
     *
     * Internally calls `isPast` and `isBefore`
     */
    isBetween(checkPast: TimeString, checkBefore: TimeString, currentTime?: number): boolean | undefined;
    /**
     * Returns the hours and minutes of the given time.
     * @param time The time to use, defaulting to the current time.
     */
    getHoursAndMinutes(time?: number): {
        hour: number;
        minute: number;
    };
    /**
     * Returns the hour of the given time.
     * @param time The time to use, defaulting to the current time.
     *
     * Internally calls `getHourMinute`
     */
    getHour(time?: number, format?: TimeFormat): number;
    /**
     * Returns the minute of the given time.
     * @param time The time to use, defaulting to the current time.
     *
     * Internally calls `getHourMinute`
     */
    getMinute(time?: number): number;
    /**
     * Returns the `PartOfDay` of the given time.
     * @param time The time to use, defaulting to the current time.
     */
    getPartOfDay(time?: number): PartOfDayGranular;
    /**
     * Returns the `DayQuarter` of the given time.
     * @param time The time to use, defaulting to the current time.
     */
    getDayQuarter(time?: number): DayQuarter;
    /**
     * Returns a string representation of the given time.
     * @param time The time to use, defaulting to the current time.
     * @param format The format to use, defaulting to `TimeFormat.TwelveHour`
     */
    getTranslation(time?: number, format?: TimeFormat): TranslationImpl;
    /**
     * Returns how bright it is at the given time.
     * @param time The time to use, defaulting to the current time.
     */
    getBrightness(time?: number): number;
    /**
     * Sets the current time from a `dayNight` number and a `boolean` flag of whether it's day or night.
     *
     * Used exclusively for save conversion.
     */
    restoreFromDayNight(dayNight: number, dayNightSwitch: 0 | 1): void;
    setDayLength(value: number): void;
    /**
     * Sets the time.
     * @param time A number between `0` and `1`, where `0` is the start of the day and `1` is the end.
     *
     * Setting the time with the result of `getTime` will likely not set to the same value.
     * This method is provided for save conversion and utility, and should rarely be used.
     */
    setTime(time: number): this;
    /**
     * The time returned by the time manager ignores that it's stored relative to the start of the day.
     * This method "realigns" a time from this version to one offset by the start of the day.
     * Formula: `0` -> `0 + dayStart / dayLength + transitionPercent / 4`
     */
    private realignTime;
}
