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
export interface IHeadingSection extends IStringSection {
    heading: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
}
declare const headingSegment: ISegment;
export default headingSegment;
