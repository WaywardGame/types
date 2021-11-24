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
import EventEmitter from "event/EventEmitter";
import Dictionary from "language/Dictionary";
import Language from "language/Language";
import LanguageExtension from "language/LanguageExtension";
import Translation from "language/Translation";
import type TranslationsProvider from "language/TranslationsProvider";
import type { IStringSection } from "utilities/string/Interpolator";
import { CaseStyle } from "utilities/string/Strings";
export interface ISerializedTranslationsProvider {
    dictionaries: Record<string, Record<string, string | string[]>>;
    pluralizationRules?: {
        pluralRules?: Record<string, string> | Array<[singular: string, plural: string]>;
        singularRules?: Record<string, string> | Array<[plural: string, singular: string]>;
        uncountables?: string[];
        irregularRules?: Array<[singular: string, plural: string]>;
        articleRules?: Array<[number | {
            min: number;
            max?: number;
        } | null, string, string]>;
    };
    contextRules?: {
        isWord?: string;
        isWordSeparator?: string;
        isSentenceSeparator?: string;
        shouldCapitalizeWord?: string;
    };
}
export interface ISerializedLanguage extends ISerializedTranslationsProvider {
    name: string;
    alternateFontStyle?: boolean;
}
export interface ISerializedLanguageExtension extends ISerializedTranslationsProvider {
    extends: string;
}
export declare enum NounType {
    Singular = 0,
    Plural = 1,
    Uncountable = 2,
    Unknown = 3
}
export interface ILanguageEvents {
    change(language: string): void;
    postGetTranslation(sections: IStringSection[]): IStringSection[];
}
export default class LanguageManager extends EventEmitter.Host<ILanguageEvents> {
    get language(): string;
    set language(languageName: string);
    private readonly translationProviders;
    get providers(): readonly TranslationsProvider[];
    private orderedTranslationProviders?;
    get orderedProviders(): readonly TranslationsProvider[];
    private debug;
    private languageLoadId;
    get loadID(): number;
    initialize(): void;
    shouldUseAlternateFontStyle(): boolean;
    refreshUiTranslations(): void;
    getTranslation(dictionary: Dictionary, entry: number | string, ignoreInvalid?: boolean): string[] | undefined;
    add(provider: TranslationsProvider): void;
    remove(provider: TranslationsProvider): void;
    serialize(languageName?: string, caseStyle?: CaseStyle): ISerializedLanguage | undefined;
    serializeLanguageToFile(language?: string, caseStyle?: CaseStyle): void;
    serializeLanguageToFiles(language?: string, caseStyle?: CaseStyle): Promise<void>;
    deserialize(serialized: ISerializedLanguage | ISerializedLanguageExtension): Language | LanguageExtension;
    generateSchema(): void;
    reformatSingularNoun(noun: string, count: number, article?: boolean): string;
    private getNounType;
    private plural;
    private getEntryNameFromEntryId;
    private setDebug;
    private debugFor;
    private debugLog;
    private readonly uiTranslationsToSelector;
    private setup;
    private addTranslateSelector;
    private addTranslateSelectors;
    private refreshUiTranslation;
}
export interface ISelector {
    selector: string | string[];
    html?: boolean;
    attribute?: string;
    func?(translation: Translation): string;
}
export declare type ISelectorArray = Record<number, ISelector>;
