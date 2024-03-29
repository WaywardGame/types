/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Translation from "language/Translation";
import type Tooltip from "ui/tooltip/Tooltip";
import type { ISegment, IStringSection } from "utilities/string/Interpolator";
export interface ITooltipSection extends IStringSection {
    tooltip: IStringSection[] | Translation | ((tooltip: Tooltip) => any);
}
declare const tooltipSegment: ISegment;
export default tooltipSegment;
