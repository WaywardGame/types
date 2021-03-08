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
export declare enum TextDecoration {
    Underline = 1,
    Bold = 2,
    Italicized = 4
}
export interface IDecoratedSection extends IStringSection {
    decoration: TextDecoration;
}
export declare const italicizedSegment: ISegment;
export declare const boldSegment: ISegment;
export declare const underlineSegment: ISegment;
export declare const newItalicizedSegment: ISegment;
export declare const newBoldSegment: ISegment;
export declare const newUnderlineSegment: ISegment;
export declare function getDecorations(section: IStringSection): [TextDecoration, number][];
