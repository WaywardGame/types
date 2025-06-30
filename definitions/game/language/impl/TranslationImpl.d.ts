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
import type { GameEmitterOrBus, GameEvent, GameEventHandler } from "@wayward/game/event/EventManager";
import { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type { Reference, Referenceable } from "@wayward/game/game/reference/IReferenceManager";
import Dictionary from "@wayward/game/language/Dictionary";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import { TextContext, TranslationArg } from "@wayward/game/language/ITranslation";
import type { Link } from "@wayward/game/language/segment/LinkSegment";
import type { ITooltipSection } from "@wayward/game/language/segment/TooltipSegment";
import type { ISerializable } from "@wayward/game/save/serializer/ISerializer";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { ISegment, IStringSection } from "@wayward/game/utilities/string/Interpolator";
import Interpolator from "@wayward/game/utilities/string/Interpolator";
import { Random } from "@wayward/utilities/random/Random";
export interface ITranslationConfig {
    segments: Record<number, ISegment>;
    invertedSegmentMap: Map<ISegment, number>;
    interpolator: Interpolator;
    provideTranslation(dictionary: Dictionary, entry: number | string, ignoreInvalid?: boolean): string[] | undefined;
}
export type TranslationReformatter = TranslationImpl | Falsy;
type TranslationStringRenderer = (section: IStringSection) => string | undefined;
export interface IRandomDefinition {
    seed: number;
    /** number of times to advance the seed */
    advance?: number;
}
export default class TranslationImpl implements Omit<ISerializable, "deserializeObject"> {
    private static defaultInterpolatorSegmentIds?;
    private static _config?;
    static set config(config: ITranslationConfig | undefined);
    static get config(): ITranslationConfig | undefined;
    static getAll(dictionary: Dictionary | string, entry?: number | string): TranslationImpl[];
    static getString(sections: ArrayOfIterablesOr<string | IStringSection | TranslationImpl>): string;
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
    readonly id: string;
    readonly args: TranslationArg[];
    readonly reformatters: Array<[reformatter: TranslationImpl, ...args: TranslationArg[]]>;
    private interpolator;
    private _context;
    get context(): TextContext;
    private normalize;
    private failWith?;
    private random;
    private randomDefinition?;
    private languageLoadId;
    private cachedSections?;
    private cachedString?;
    private isRootTranslation;
    private tooltip?;
    private tooltipWide?;
    private reference?;
    private referenceContext?;
    private forceInclude?;
    private classes?;
    constructor(dictionary: Dictionary | string, entry: number | string, index?: "random" | number);
    constructor(translationId: string);
    getDictionary(): Dictionary;
    equals(translation: TranslationImpl): boolean;
    setWhich(which?: number | "random"): this;
    clone(): TranslationImpl;
    withSegments(...segments: ISegment[]): this;
    withSegments(priority: true, ...segments: ISegment[]): this;
    classed(...classes: Array<string | Supplier<string | undefined>>): this;
    withTooltip(tooltip?: Falsy | ITooltipSection["tooltip"], wide?: true): this;
    private readonly refreshEvents;
    /**
     * Marks this translation as to be refreshed on events for the given host.
     * The text renderer is responsible for actually handling refreshes.
     *
     * **Note:** This cannot be serialized!
     * @param predicate A predicate function for whether or not this component should actually refresh when the event is hit
     */
    subscribeRefreshOn<E extends GameEmitterOrBus, K extends GameEvent<E>>(emitterOrBus: E | undefined, ...args: [...events: K[], predicate: (...params: Parameters<GameEventHandler<E, K>>) => boolean]): this;
    /**
     * Marks this translation as to be refreshed on events for the given host.
     * The text renderer is responsible for actually handling refreshes.
     *
     * **Note:** This cannot be serialized!
     */
    subscribeRefreshOn<E extends GameEmitterOrBus, K extends GameEvent<E>>(emitterOrBus: E | undefined, ...events: K[]): this;
    getReference(): Reference | undefined;
    getReferenceContext(): InfoProviderContext | undefined;
    setReference(reference?: Reference | Referenceable, context?: InfoProviderContext, forceInclude?: true): this;
    addArgs(...args: TranslationArg[]): this;
    inContext(context?: TextContext, normalize?: boolean): this;
    passTo(reformatters: ArrayOr<TranslationReformatter>, ...args: TranslationArg[]): this;
    passTo(beginning: true, reformatters: ArrayOr<TranslationReformatter>, ...args: TranslationArg[]): this;
    /**
     * Sets what this translation will return if there is no translation.
     */
    setFailWith(failWith?: string | TranslationImpl | IStringSection[]): this;
    /**
     * Returns true if this translation has been set to fail with another translation or string.
     */
    hasFailWith(notEmptyString?: boolean): boolean;
    /**
     * Sets the random source for this Translation. Uses general random by default, not seeded.
     *
     * Note: If this translation is an argument to another translation, it will use the random of the parent translation.
     */
    setRandom(random?: Random | IRandomDefinition): this;
    hasTranslation(): boolean;
    orElse(translation: GetterOfOr<TranslationImpl>): TranslationImpl;
    orElse(translation?: GetterOfOr<TranslationImpl | undefined>): TranslationImpl | undefined;
    /**
     * Returns this translation as a list of string sections
     */
    get(...args: any[]): IStringSection[];
    private resolveSections;
    static sectionStringRenderers: TranslationStringRenderer[];
    /**
     * Returns the translation as a string
     */
    getString(...args: any[]): string;
    toString(): string;
    private getCustomInterpolatorSegments;
    serializeObject(): ISerializedTranslation;
    serialize(depth?: number): ISerializedTranslation;
    static serializeTranslationArg(arg: any, depth?: number, maxSerializationDepth?: number): TranslationArg | undefined;
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
export {};
