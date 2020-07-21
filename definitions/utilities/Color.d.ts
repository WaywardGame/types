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
export interface IRGB {
    r: number;
    g: number;
    b: number;
}
export interface IColorFul {
    red: number;
    green: number;
    blue: number;
}
declare function Color(color: IRGB): IRGB;
declare function Color(r: number, g: number, b: number): IRGB;
declare function Color(rgb: string): IRGB;
declare function Color(rgb: number): IRGB;
declare module Color {
    function fromInt(int: number): IRGB;
    function toInt(color: IRGB): number;
    function getFullNames(color: IRGB): IColorFul;
    function blend(...colors: IRGB[]): IRGB;
    function blend(color1: IRGB, color2: IRGB, percentage: number): IRGB;
    function getCSS(color: IRGB): string;
    function getSVGColorMatrix(color: IRGB): string;
    function equals(color1: IRGB, color2: IRGB): boolean;
}
export default Color;
