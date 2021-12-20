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
import type { Reference, Referenceable } from "game/reference/ReferenceManager";
import Dictionary from "language/Dictionary";
import type { ISerializedTranslation } from "language/ITranslation";
import { TextContext } from "language/ITranslation";
import type { Link } from "language/segment/LinkSegment";
import type { ITooltipSection } from "language/segment/TooltipSegment";
import type { TranslationGenerator } from "ui/component/IComponent";
import type { Random } from "utilities/random/Random";
import type { ISegment, IStringSection } from "utilities/string/Interpolator";
import Interpolator from "utilities/string/Interpolator";
export interface ITranslationConfig {
    segments: Record<number, ISegment>;
    invertedSegmentMap: Map<ISegment, number>;
    interpolator: Interpolator;
    provideTranslation(dictionary: Dictionary, entry: number | string, ignoreInvalid?: boolean): string[] | undefined;
}
export default class TranslationImpl {
    private static defaultInterpolatorSegmentIds?;
    private static _config?;
    static set config(config: ITranslationConfig | undefined);
    static get config(): ITranslationConfig | undefined;
    static getAll(dictionary: Dictionary | string, entry?: number | string): TranslationImpl[];
    static getString(...entries: ArrayOfIterablesOr<string | IStringSection | TranslationImpl>): string;
    static resolve(dictionary: Dictionary, entry: string | number, index?: number): string;
    static isSerializedTranslation(thing: unknown): thing is ISerializedTranslation;
    static deserialize(serializedTranslation: ISerializedTranslation): TranslationImpl;
    /**
     * DO NOT USE THIS METHOD
     *
     * Unless the text is PRE-GENERATED and there is NO WAY TO TRANSLATE IT.
     *
     * Example uses include text the user inputs, and text from other sites (steam/trello)
     */
    static generator(textOrGenerator: GetterOfOr<string | IStringSection[]>, link?: Link): TranslationGenerator;
    private static getStringSections;
    readonly isValid: boolean;
    private readonly translationData;
    private readonly translationId;
    private readonly args;
    private readonly reformatters;
    private interpolator;
    private _context;
    get context(): TextContext;
    private normalize;
    private failWith?;
    private random;
    private languageLoadId;
    private cachedSections?;
    private cachedString?;
    private isRootTranslation;
    private tooltip?;
    private reference?;
    constructor(dictionary: Dictionary | string, entry: number | string, index?: "random" | number);
    constructor(translationId: string);
    withSegments(...segments: ISegment[]): this;
    withSegments(priority: true, ...segments: ISegment[]): this;
    withTooltip(tooltip?: Falsy | ITooltipSection["tooltip"]): this;
    setReference(reference?: Reference | Referenceable): this;
    addArgs(...args: any[]): this;
    inContext(context?: TextContext, normalize?: boolean): this;
    passTo(...reformatters: Array<TranslationImpl | ((sections: IStringSection[]) => IStringSection[]) | Falsy>): this;
    passTo(beginning: true, ...reformatters: Array<TranslationImpl | ((sections: IStringSection[]) => IStringSection[]) | Falsy>): this;
    /**
     * Sets what this translation will return if there is no translation.
     */
    setFailWith(failWith?: string | TranslationImpl | IStringSection[]): this;
    /**
     * Returns true if this translation has been set to fail with another translation or string.
     */
    hasFailWith(): boolean;
    /**
     * Sets the random source for this Translation. Uses general random by default, not seeded.
     *
     * Note: If this translation is an argument to another translation, it will use the random of the parent translation.
     */
    setRandom(random?: Random): this;
    hasTranslation(): boolean;
    orElse(translation?: GetterOfOr<TranslationImpl | undefined>): TranslationImpl | undefined;
    /**
     * Returns this translation as a list of string sections
     */
    get(...args: any[]): IStringSection[];
    /**
     * Returns the translation as a string
     */
    getString(...args: any[]): string;
    toString(): string;
    private getCustomInterpolatorSegments;
    serialize(): ISerializedTranslation;
    private canCache;
    private getCachedTranslation;
    /**
     * Gets the `IStringSection[]` representing this translation, resolved.
     * If the translation is invalid, and `failWith` is set, it will return the result of `getFailureSections()`
     */
    private getSections;
    /**
     * Gets the list of raw translations provided for this dictionary and entry.
     */
    private getRawTranslations;
    /**
     * Returns the resolved `IStringSection[]` of `failWith`, or the translation ID if `failWith` is not set.
     */
    private getFailureSections;
}
