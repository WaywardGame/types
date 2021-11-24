/*!
 * Copyright 2011-2021 Unlok
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
export declare enum PartOfDay {
    Nighttime = 0,
    Dawn = 1,
    Sunrise = 2,
    Daytime = 3,
    Sunset = 4,
    Dusk = 5
}
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
