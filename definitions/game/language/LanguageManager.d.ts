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
import type { Game } from "@wayward/game/game/Game";
import type { IIcon } from "@wayward/game/game/inspection/InfoProvider";
import Dictionary from "@wayward/game/language/Dictionary";
import Language from "@wayward/game/language/Language";
import LanguageExtension from "@wayward/game/language/LanguageExtension";
import type TranslationsProvider from "@wayward/game/language/TranslationsProvider";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import { IStringSection } from "@wayward/game/utilities/string/Interpolator";
import { CaseStyle } from "@wayward/game/utilities/string/Strings";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
type ArticleRules = Array<[number | {
    min: number;
    max?: number;
} | null, string, string]>;
export interface ISerializedTranslationsProvider {
    dictionaries: Record<string, Record<string, string | string[]>>;
    pluralizationRules?: {
        pluralRules?: Record<string, string> | Array<[singular: string, plural: string]>;
        singularRules?: Record<string, string> | Array<[plural: string, singular: string]>;
        uncountables?: string[];
        irregularRules?: Array<[singular: string, plural: string]>;
        articleRules?: {
            definite?: ArticleRules;
            indefinite?: ArticleRules;
        };
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
    private readonly game;
    constructor(game: Game);
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
    /**
     * Asynchronously load additional languages
     */
    private loadAdditionalLanguages;
    shouldUseAlternateFontStyle(): boolean;
    getTranslation(dictionary: Dictionary, entry: number | string, ignoreInvalid?: boolean): string[] | undefined;
    add(provider: TranslationsProvider): void;
    remove(provider: TranslationsProvider): void;
    serialize(languageName?: string, caseStyle?: CaseStyle): ISerializedLanguage | undefined;
    serializeLanguageToFile(language?: string, caseStyle?: CaseStyle): void;
    /**
     * Serializes the language into individual pieces for use by Weblate
     */
    serializeToFiles(language?: string, caseStyle?: CaseStyle): Map<string, string>;
    /**
     * Unserializes the language from individual pieces (from Weblate), into an ISerializedLanguage object
     */
    reserializeFromFiles(files: Map<string, Record<string, any>>): ISerializedLanguage;
    deserialize(serialized: ISerializedLanguage | ISerializedLanguageExtension): Language | LanguageExtension;
    generateSchema(): void;
    reformatSingularNoun(noun: string | IStringSection[], count: number, article?: false | "definite" | "indefinite"): string | IStringSection[];
    private getNounType;
    private plural;
    private getEntryNameFromEntryId;
    private setDebug;
    private debugFor;
    private debugLog;
}
export interface ITranslationInjection {
    selector: string;
    translation: TranslationGenerator;
    type?: "title" | "generic";
    icon?: IIcon;
}
export {};
