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
import type Dictionary from "language/Dictionary";
import type { Random } from "utilities/random/Random";
import type { ISegment, ISegmentApi, IStringSection } from "utilities/string/Interpolator";
declare module TranslationSegment {
    const include: ISegment;
    const thisEntry: ISegment & {
        translationChain: Array<[Dictionary, number | string, number, Random]>;
    };
    const conditional: ISegment;
    function resolveTranslation(random: Random, api: ISegmentApi, dictionaryName: string, entryName: string, index: string | undefined, subTranslationArgsString: string, args: any[]): IStringSection[] | undefined;
    function getSubTranslationArgs(api: ISegmentApi, str: string, ...args: any[]): IStringSection[][];
}
export default TranslationSegment;
