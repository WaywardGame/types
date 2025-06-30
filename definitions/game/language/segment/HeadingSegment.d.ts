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
import type { ISegment, IStringSection } from "@wayward/game/utilities/string/Interpolator";
export interface IHeadingSection extends IStringSection {
    heading: 1 | 2 | 3 | 4 | 5 | 6 | undefined;
}
declare const headingSegment: ISegment;
export default headingSegment;
