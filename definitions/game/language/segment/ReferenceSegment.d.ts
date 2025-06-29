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
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type { Reference } from "@wayward/game/game/reference/IReferenceManager";
import type { IRegexSegment, IStringSection } from "@wayward/game/utilities/string/Interpolator";
export interface IReferenceSection extends IStringSection {
    reference: Reference;
    context?: InfoProviderContext;
}
declare const referenceSegment: IRegexSegment;
export default referenceSegment;
