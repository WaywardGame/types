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
export declare enum TimeFormat {
    PartOfDay = 0,
    /**
     * EX: 3:00pm
     */
    TwelveHour = 1,
    /**
     * EX: 15:00
     */
    TwentyFourHour = 2,
    /**
     * EX: 3pm
     */
    TwelveHourNoMinute = 3,
    /**
     * EX: 15 hours
     */
    TwentyFourHourNoMinute = 4
}
export type TimeString = (`${number}:${number}` | `${number}:${number}${"am" | "pm"}` | `${number}${"am" | "pm"}`);
export declare enum PartOfDay {
    Nighttime = 1,
    Dawn = 2,
    Sunrise = 4,
    Daytime = 8,
    Sunset = 16,
    Dusk = 32,
    AllDaytime = 30,
    AllNighttime = 33,
    Always = 63
}
export type PartOfDayGranular = Exclude<PartOfDay, PartOfDay.AllDaytime | PartOfDay.AllNighttime | PartOfDay.Always>;
export declare enum DayQuarter {
    Day1 = 0,
    Day2 = 1,
    Day3 = 2,
    Day4 = 3,
    Night1 = 4,
    Night2 = 5,
    Night3 = 6,
    Night4 = 7
}
