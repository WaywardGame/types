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
import { Random } from "utilities/random/Random";
import { ISegment, ISegmentApi, IStringSection } from "utilities/string/Interpolator";
declare function TranslationSegment(random: Random): ISegment & {
    isTranslationSegment: true;
};
declare module TranslationSegment {
    function resolveTranslation(random: Random, api: ISegmentApi, dictionaryName: string, entryName: string, index: string, subTranslationArgsString: string, args: any[]): IStringSection[] | undefined;
    function getSubTranslationArgs(api: ISegmentApi, str: string, ...args: any[]): IStringSection[][];
}
export default TranslationSegment;
