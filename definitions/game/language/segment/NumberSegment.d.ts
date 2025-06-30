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
import type Translation from "@wayward/game/language/Translation";
import TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IRegexSegment, ISegment } from "@wayward/game/utilities/string/Interpolator";
declare namespace NumberTranslation {
    function translate(number: number, failWith?: string | Translation): Translation;
    const numberAsWordsSegment: ISegment;
    function romanNumeral(number: number): TranslationImpl;
    const numberAsRomanNumeralSegment: ISegment;
    const numberToPlacesSegment: IRegexSegment;
    const numberToPercentSegment: IRegexSegment;
    const numberDifferenceSegment: ISegment;
    /**
     * @deprecated Prefer `numberToPlacesSegment`, `numberAsWordsSegment`
     */
    const compatNumberSegment: IRegexSegment;
}
export default NumberTranslation;
