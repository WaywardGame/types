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
export declare enum Health {
    Unharmed = 0,
    MostlyUnharmed = 1,
    Injured = 2,
    SeverelyInjured = 3,
    OnTheVergeOfDeath = 4
}
export declare enum HealthAccuracy {
    Low = 0,
    Moderate = 1,
    High = 2,
    Perfect = 3,
    Exact = 4
}
export declare const healthsByAccuracy: Record<HealthAccuracy, Health[]>;
