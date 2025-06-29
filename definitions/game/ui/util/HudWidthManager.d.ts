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
export default class HudWidthManager {
    private width;
    /**
     * Returns the minimum HUD width we allow, 800.
     */
    getMinimum(): number;
    /**
     * Returns the maximum HUD width (it's always 1, which puts stuff at the edges).
     */
    getMaximum(): number;
    /**
     * Returns the current HUD width (after being clamped by min & max).
     */
    get(): number;
    /**
     * Returns the currently "requested" HUD width.
     */
    getUserSetting(width?: number): number;
    /**
     * Requests a new HUD Width, a multiplier of the default size.
     */
    setUserSetting(width: number): void;
    /**
     * Updates the HUD width based on the current viewport.
     */
    update(): void;
}
