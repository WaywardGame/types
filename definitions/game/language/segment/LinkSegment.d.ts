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
import type { IColorSection } from "language/segment/ColorSegment";
import type { IDecoratedSection } from "language/segment/TextDecorationSegments";
import type { ISegment } from "utilities/string/Interpolator";
export declare type Link = string | [string, string | undefined];
export interface ILinkSection extends IColorSection, IDecoratedSection {
    link: Link;
}
declare const linkSegment: ISegment;
export default linkSegment;
