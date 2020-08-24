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
import { MessageType } from "entity/player/IMessageManager";
import { Quality } from "game/IObject";
import { Dictionary } from "language/Dictionaries";
import Message from "language/dictionary/Message";
import { MiscTranslation } from "language/dictionary/Misc";
import UiTranslation from "language/dictionary/UiTranslation";
import { Link } from "language/segment/LinkSegment";
import { TranslationGenerator } from "newui/component/IComponent";
import { Random } from "utilities/Random";
import Interpolator, { ISegment, IStringSection } from "utilities/string/Interpolator";
export declare type TranslationProvider = (dictionary: Dictionary, entry: number | string, ignoreInvalid?: boolean) => string[] | undefined;
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
    args?: Array<string | number | boolean | any[] | object | ISerializedTranslation>;
    failWith?: string | ISerializedTranslation | IStringSection[];
    reformatters?: ISerializedTranslation[];
}
export declare enum ListEnder {
    None = 0,
    And = 1,
    Or = 2
}
declare type EntryMapper<T = any> = (v: T) => number;
declare type SortFallback<T = any, A extends any[] = any[]> = (a: T, b: T, entryA: number, entryB: number, stringA: string, stringB: string, ...args: A) => number;
declare type Translator<T = any> = (v: T, entry: number, dictionary: Dictionary, index?: number) => Translation | string | undefined;
export interface ITranslationSorter<T = number> {
    (a: T, b: T): number;
    /**
     * Sets this sort to be reversed
     */
    setReverse(): this;
    /**
     * Sets whether this sort should be reversed
     */
    setReverse(reverse: boolean): this;
    /**
     * Sets this translation sorter to be getting the entry with the given mapper
     */
    setEntryMapper<T2>(mapper: EntryMapper<T2>): ITranslationSorter<T2>;
    /**
     * Sets a fallback sorter for when two translations are in the same position
     */
    setFallback(fallback?: SortFallback<T>): this;
    /**
     * Sets a custom sorter to override the default sort functionality
     *
     * Note: When a custom sorter is used, fallbacks registered in `setFallback` will not be.
     */
    setSorter<A extends any[]>(sorter?: SortFallback<T, A>, ...args: A): this;
    /**
     * Sets a custom translator, which takes each value to sort and makes a string from it. These strings are cached by the sorter
     */
    setTranslator(translator: Translator<T>): this;
}
declare class Translation {
    static readonly RANDOM = "random";
    static empty(): Translation;
    static readonly defaultInterpolator: Interpolator;
    static provider: TranslationProvider;
    static colorizeQuality(quality: Quality): Translation;
    static colorizeQuality(quality: Quality, text: string | IStringSection): IStringSection;
    static colorizeQuality(quality: Quality, text: IStringSection[]): IStringSection[];
    static colorizeMessageType(type: MessageType): Translation;
    static colorizeMessageType(type: MessageType, text: string | IStringSection): IStringSection;
    static colorizeMessageType(type: MessageType, text: IStringSection[]): IStringSection[];
    static colorizeImportance(importance: "primary" | "secondary"): Translation;
    static colorizeImportance(importance: "primary" | "secondary", text: string | IStringSection): IStringSection;
    static colorizeImportance(importance: "primary" | "secondary", text: IStringSection[]): IStringSection[];
    static formatList(items: Iterable<string | IStringSection | Iterable<IStringSection> | Translation | ISerializedTranslation>, ender?: ListEnder | false): Translation;
    static getString(...entries: ArrayOfIterablesOr<string | IStringSection | Translation>): string;
    static getAll(dictionary: Dictionary | string, entry?: number | string): Translation[];
    static nameOf(type: Dictionary, thing: number | {
        type: number;
        renamed?: string | ISerializedTranslation;
    }, article?: boolean): Translation;
    static nameOf(type: Dictionary, thing: number | {
        type: number;
        renamed?: string | ISerializedTranslation;
    }, count?: number, article?: boolean, showRenamedQuotes?: boolean, ...args: any[]): Translation;
    static ofNumber(number: number, failWith?: string | Translation): Translation;
    /**
     * DO NOT USE THIS METHOD
     *
     * Unless the text is PRE-GENERATED and there is NO WAY TO TRANSLATE IT.
     *
     * Example uses include text the user inputs, and text from other sites (steam/trello)
     */
    static generator(textOrGenerator: GetterOfOr<string | IStringSection[]>, link?: Link): TranslationGenerator;
    static isSerializedTranslation(thing: unknown): thing is ISerializedTranslation;
    static deserialize(serializedTranslation: ISerializedTranslation): Translation;
    static resolve(dictionary: Dictionary, entry: string | number, index?: number): string;
    static sorter<T = number>(dictionary: Dictionary, index?: number): ITranslationSorter<T>;
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
    constructor(dictionary: Dictionary | string, entry: number | string, index?: "random" | number);
    /**
     * Creates from a translation id. Entry matching is done by changing the case-style of the inputted
     * translation id, so if you provide an all lower-case string it will not work!
     *
     * Examples that do work:
     *
     * - `Ui:MenuMainButtonContinueGame`
     * - `ui:menuMainButtonContinueGame`
     * - `ui:menu-main-button-continue-game`
     * - `Ui:Menu-Main-Button-Continue-Game`
     * - `Player.FirstName:random`
     * - `Creature.AcidSpitterDemon:1`
     *
     * Examples that don't work:
     *
     * - `UI:MENU-MAIN-BUTTON-CONTINUE-GAME`
     * - `Ui:menumainbuttoncontinuegame`
     * - `UI:MENUMAINBUTTONCONTINUEGAME`
     */
    constructor(translationId: string);
    withSegments(...segments: ISegment[]): this;
    withSegments(priority: true, ...segments: ISegment[]): this;
    addArgs(...args: any[]): this;
    inContext(context?: TextContext, normalize?: boolean): this;
    passTo(...reformatters: Array<Translation | ((sections: IStringSection[]) => IStringSection[]) | Falsy>): this;
    passTo(beginning: true, ...reformatters: Array<Translation | ((sections: IStringSection[]) => IStringSection[]) | Falsy>): this;
    /**
     * Sets what this translation will return if there is no translation.
     */
    setFailWith(failWith?: string | Translation | IStringSection[]): this;
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
    /**
     * Returns this translation as a list of string sections
     */
    get(...args: any[]): IStringSection[];
    /**
     * Returns the translation as a string
     */
    getString(...args: any[]): string;
    toString(): string;
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
declare module Translation {
    const ui: (entry: string | UiTranslation) => Translation;
    const message: (entry: string | Message) => Translation;
    const misc: (entry: string | MiscTranslation) => Translation;
}
export default Translation;
