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
export type PluralRule = [RegExp, string];
export type SingularRule = [RegExp, string];
export type UncountableRule = RegExp;
export interface IrregularRule {
    singular: [string, RegExp];
    plural: [string, RegExp];
}
export type NameRule = [CountMatcher, RegExp, string];
export type CountMatcher = number | {
    min: number;
    max?: number;
} | null;
export interface IPluralizationRules {
    pluralRules: PluralRule[];
    singularRules: SingularRule[];
    uncountables: UncountableRule[];
    irregularRules: IrregularRule[];
    articleRules: {
        definite: NameRule[];
        indefinite: NameRule[];
    };
}
export interface IContextRules {
    isWord?: RegExp;
    isWordSeparator?: RegExp;
    isSentenceSeparator?: RegExp;
    shouldCapitalizeWord?: RegExp;
}
export default abstract class TranslationsProvider {
    readonly dictionaries: Map<string, Map<string, string[]>>;
    readonly language: string;
    readonly pluralizationRules: IPluralizationRules;
    readonly contextRules: IContextRules;
    constructor(language: string);
    getTranslation(dictionaryName: string, entry: string): string[] | undefined;
    setDictionary(dictionary: string, translations: Record<string, string | string[]> | Map<any, string | string[]>): this;
    setIrregularRules(...rules: Array<[string, string]>): this;
    setPluralizationRules(...rules: Array<PluralRule | [string, string]>): this;
    setSingularizationRules(...rules: Array<SingularRule | [string, string]>): this;
    setUncountableRules(...rules: Array<RegExp | string>): this;
    setArticleRules(type: "definite" | "indefinite", ...rules: Array<NameRule | [CountMatcher, string, string]>): this;
    setContextRules(rules: {
        [key in keyof IContextRules]?: RegExp | string;
    }): this;
    private getEntryName;
}
