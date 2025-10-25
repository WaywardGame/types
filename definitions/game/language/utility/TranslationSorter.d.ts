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
import type Dictionary from "@wayward/game/language/Dictionary";
import type Translation from "@wayward/game/language/Translation";
import TranslationUtility from "@wayward/game/language/utility/TranslationUtility";
interface TranslationSorter<T = number> {
    (a: T, b: T): number;
}
declare class TranslationSorter<T = number> extends TranslationUtility {
    private mapper?;
    private fallback?;
    private reverse?;
    private customSorter?;
    private customSorterArgs?;
    private translator?;
    private translationCache?;
    constructor(dictionary?: Dictionary, index?: number, mapper?: TranslationSorter.EntryMapper);
    /**
     * Sets this sort to be reversed
     */
    setReverse(): this;
    /**
     * Sets whether this sort should be reversed
     */
    setReverse(r: boolean): this;
    /**
     * Sets this translation sorter to be getting the entry with the given mapper
     */
    setEntryMapper<T2>(mapper: TranslationSorter.EntryMapper<T2>): TranslationSorter<T2>;
    /**
     * Sets a fallback sorter for when two translations are in the same position
     */
    setFallback(fallback?: TranslationSorter.SortFallback<T>): this;
    /**
     * Sets a custom sorter to override the default sort functionality
     *
     * Note: When a custom sorter is used, fallbacks registered in `setFallback` will not be.
     */
    setSorter<A extends any[]>(sorter?: TranslationSorter.SortFallback<T, A>, ...args: A): this;
    /**
     * Sets a custom translator, which takes each value to sort and makes a string from it. These strings are cached by the sorter
     */
    setTranslator<T2 = T>(translator: TranslationSorter.Translator<T2>): TranslationSorter<T2>;
}
declare namespace TranslationSorter {
    type EntryMapper<T = any> = (v: T) => number;
    type SortFallback<T = any, A extends any[] = any[]> = (a: T, b: T, entryA: T extends Translation ? undefined : number, entryB: T extends Translation ? undefined : number, stringA: string, stringB: string, ...args: A) => number;
    type Translator<T = any> = (v: T, entry?: number, dictionary?: Dictionary, index?: number) => Translation | string | undefined;
    function create(): TranslationSorter<Translation>;
    function create<T = number>(dictionary: Dictionary, index?: number): TranslationSorter<T>;
}
export default TranslationSorter;
