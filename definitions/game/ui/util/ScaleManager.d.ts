/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export default class ScaleManager {
    private scale;
    get scaleNativeFactor(): number;
    constructor();
    /**
     * Returns the minimum scale we allow, 0.5.
     */
    getMinimum(): number;
    /**
     * Returns the maximum scale the screen size will allow.
     */
    getMaximum(): number;
    private maximumFormula;
    /**
     * Returns the current UI scale (after being clamped by min & max).
     */
    get(): number;
    getFloor(floor?: number): number;
    getClamped(scale?: number): number;
    /**
     * Returns the currently "requested" UI scale.
     */
    getUserSetting(): number;
    private getPlatformDefaultUiScale;
    /**
     * Requests a new UI scale, a multiplier of the default size.
     */
    setUserSetting(scale: number): void;
    /**
     * Updates the UI scale based on the current viewport.
     */
    update(force?: boolean): void;
    private lastScaleFactor;
    checkScaleFactor(): void;
}
