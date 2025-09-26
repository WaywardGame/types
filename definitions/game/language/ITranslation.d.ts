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
import type Translation from "@wayward/game/language/Translation";
import type TranslationImplImport from "@wayward/game/language/impl/TranslationImpl";
import type { IRandomDefinition } from "@wayward/game/language/impl/TranslationImpl";
import type { Segment } from "@wayward/game/language/segment/Segments";
import type { IInterpolationOptions, IStringSection } from "@wayward/game/utilities/string/Interpolator";
import type { Random } from "@wayward/utilities/random/Random";
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
type Reformatter = ISerializedTranslation | [translation: ISerializedTranslation, ...args: TranslationArg[]];
export interface ISerializedTranslation {
    isSerializedTranslation: true;
    id: string;
    context?: TextContext;
    normalize?: true;
    args?: TranslationArg[];
    failWith?: string | ISerializedTranslation | IStringSection[];
    reformatters?: Reformatter[];
    reference?: Reference;
    referenceContext?: InfoProviderContext;
    forceInclude?: true;
    tooltip?: ISerializedTranslation | IStringSection[];
    tooltipWide?: true;
    interpolator?: ISerializedInterpolator;
    classes?: string[];
    randomDefinition?: IRandomDefinition;
}
export declare namespace ISerializedTranslation {
    function is(value: unknown): value is ISerializedTranslation;
    function clone(translation: ISerializedTranslation): ISerializedTranslation;
    function equals(a: ISerializedTranslation, b: ISerializedTranslation): boolean;
}
export interface ISerializedInterpolator {
    options?: IInterpolationOptions;
    segments?: Segment[];
}
export type TranslationArg = string | number | boolean | Translation | ISerializedTranslation | IStringSection | TranslationArg[] | ITranslationArgRecord | (() => TranslationArg) | undefined | null;
export declare namespace TranslationArg {
    function setTranslationImpl(impl: typeof TranslationImplImport): void;
    function registerStringSectionCloneHelper<T extends IStringSection>(helper: (section: IStringSection & Partial<T>) => IStringSection | undefined | void): void;
    function clone<ARG extends TranslationArg>(arg: ARG): ARG;
    interface IResolvedTranslationArg {
        result: TranslationArg;
        canCache: boolean;
    }
    function resolve(arg: TranslationArg, random?: Random): IResolvedTranslationArg;
    function equals(a: TranslationArg, b: TranslationArg): boolean;
}
export interface ITranslationArgRecord {
    [key: string]: ITranslationArgRecord | TranslationArg;
}
export declare enum Article {
    /**
     * Use no article.
     */
    None = "",
    /**
     * In English, this is "a" or "an" in front of the text, assuming the "count" is one.
     */
    Indefinite = "indefinite",
    /**
     * In English, this is "the" in front of the text.
     */
    Definite = "definite",
    /**
     * Uses "indefinite" if the user hasn't opted out of articles in titles.
     */
    Title = "title"
}
export {};
