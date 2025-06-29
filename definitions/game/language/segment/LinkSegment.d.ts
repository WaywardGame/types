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
export type Link = string | [string, string | undefined, string | undefined];
export interface ILinkSection extends IStringSection {
    link: Link;
}
declare const linkSegment: ISegment;
export default linkSegment;
