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
import { TextContext } from "@wayward/game/language/ITranslation";
import type { ISegment, IStringSection } from "@wayward/game/utilities/string/Interpolator";
declare namespace CapitalizationSegment {
    const sentence: ISegment;
    /**
     * Changes the case of an array of string sections based on their context.
     */
    function updateCase(sections: IStringSection[], context: TextContext, normalize?: boolean): IStringSection[];
}
export default CapitalizationSegment;
