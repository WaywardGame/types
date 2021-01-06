/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
/**
 * The default radius of a drawn map. The width and height of the map will be `radius * 2 + 1`.
 * This default is overridden in world generation
 */
export declare const DRAWN_MAP_DEFAULT_RADIUS = 20;
/**
 * A decimal number between 0 and 1 representing how much variance there is in obfuscation level between each tile
 */
export declare const DRAWN_MAP_OBFUSCATION_DEPTH = 0.9;
/**
 * A number representing how much effect the map's obfuscation level has on each tile
 */
export declare const DRAWN_MAP_OBFUSCATION_HEIGHT = 2;
/**
 * How much durability damage maps take when using the read action on them
 */
export declare const DRAWN_MAP_READ_DURABILITY_COST = 200;
