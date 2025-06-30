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
export default class Bezier {
    private readonly startX;
    private readonly startY;
    private readonly endX;
    private readonly endY;
    static LINEAR: Bezier;
    static EASE: Bezier;
    static EASE_IN: Bezier;
    static EASE_OUT: Bezier;
    static EASE_IN_OUT: Bezier;
    private readonly samples;
    constructor(startX: number, startY: number, endX: number, endY: number);
    get(x: number): number;
    lerp(from: number, to: number, t: number): number;
    clerp(from: number, to: number, t: number): number;
    private getTForX;
}
