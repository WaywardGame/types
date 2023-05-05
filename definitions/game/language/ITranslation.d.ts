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
import type { Reference } from "game/reference/IReferenceManager";
import type Translation from "language/Translation";
import type { Segment } from "language/segment/Segments";
import type { IInterpolationOptions, IStringSection } from "utilities/string/Interpolator";
export declare enum ListEnder {
    None = 0,
    And = 1,
    Or = 2
}
export declare enum TextContext {
    None = 0,
    Lowercase = 1,
    Uppercase = 2,
    Title = 3,
    Sentence = 4
}
export interface ISerializedTranslation {
    isSerializedTranslation: true;
    id: string;
    context?: TextContext;
    normalize?: true;
    args?: TranslationArg[];
    failWith?: string | ISerializedTranslation | IStringSection[];
    reformatters?: ISerializedTranslation[];
    reference?: Reference;
    tooltip?: ISerializedTranslation | IStringSection[];
    interpolator?: ISerializedInterpolator;
}
export interface ISerializedInterpolator {
    options?: IInterpolationOptions;
    segments?: Segment[];
}
export type TranslationArg = string | number | boolean | Translation | ISerializedTranslation | IStringSection | TranslationArg[] | ITranslationArgRecord | (() => TranslationArg) | undefined | null;
export interface ITranslationArgRecord {
    [key: string]: ITranslationArgRecord | TranslationArg;
}
