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
import TranslationImpl from "language/impl/TranslationImpl";
import type Translation from "language/Translation";
import type { ISegment } from "utilities/string/Interpolator";
declare module NumberTranslation {
    function translate(number: number, failWith?: string | Translation): Translation;
    const numberAsWordsSegment: ISegment;
    function romanNumeral(number: number): TranslationImpl;
    const numberAsRomanNumeralSegment: ISegment;
    const numberToPlacesSegment: ISegment;
    const numberToPercentSegment: ISegment;
    const numberDifferenceSegment: ISegment;
    /**
     * @deprecated Prefer `numberToPlacesSegment`, `numberAsWordsSegment`
     */
    const compatNumberSegment: ISegment;
}
export default NumberTranslation;
