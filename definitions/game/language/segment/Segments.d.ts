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
import type { ISegment } from "@wayward/game/utilities/string/Interpolator";
export declare enum Segment {
    Argument = 0,
    Conditional = 1,
    InterpolateArgument = 2,
    FormatList = 3,
    Randomization = 4,
    Bold = 5,
    Italic = 6,
    Underline = 7,
    Color = 8,
    Heading = 9,
    Tooltip = 10,
    Bind = 11,
    Reformat = 12,
    Link = 13,
    SentenceCapitalization = 14,
    ConditionalTranslation = 15,
    IncludeTranslation = 16,
    IncludeTranslationThisEntry = 17,
    CompatNumber = 18,
    NumberAsRomanNumeral = 19,
    NumberAsWords = 20,
    NumberDifference = 21,
    NumberToPercent = 22,
    NumberToPlaces = 23,
    FalsyCoalescing = 24,
    Class = 25,
    Simplification = 26,
    Overline = 27
}
declare const segments: Record<Segment, ISegment>;
export default segments;
export declare const segmentsMapInverted: Map<ISegment<unknown>, Segment>;
