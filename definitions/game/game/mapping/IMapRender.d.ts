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
export declare enum MapSprite {
    Obfuscation = 0,
    Background = 1,
    BackgroundTattered = 2,
    EdgeMask = 3,
    FogOfWar = 4,
    InnerFogOfWar = 5,
    O = 6,
    X = 7,
    TravelDots = 8
}
export declare const DRAWN_MAP_BACKGROUND_PADDING = 16;
export declare enum DrawnMapTheme {
    Paper = 0,
    Dark = 1
}
export interface IDrawnMapTheme {
    noBackground?: true;
    sepia?: true;
}
export declare const drawnMapThemes: Record<DrawnMapTheme, IDrawnMapTheme>;
