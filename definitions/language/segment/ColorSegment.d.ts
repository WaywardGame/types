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
import { ISegment, IStringSection } from "utilities/string/Interpolator";
export interface IColorSection extends IStringSection {
    color: string;
}
declare const colorSegment: ISegment;
export declare function colorize(sections: IStringSection[], color: string): IColorSection[];
export default colorSegment;
