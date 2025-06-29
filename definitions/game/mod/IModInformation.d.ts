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
import type { IHasImagePath } from "@wayward/game/game/IObject";
import type { ISerializedLanguage, ISerializedLanguageExtension } from "@wayward/game/language/LanguageManager";
import type TranslationsProvider from "@wayward/game/language/TranslationsProvider";
import type Log from "@wayward/utilities/Log";
export declare enum TypeFlag {
    Undefined = 1,
    Null = 2,
    Number = 4,
    Boolean = 8,
    String = 16,
    Object = 32,
    Array = 64,
    Function = 128,
    True = 256,
    False = 512
}
export declare enum ModState {
    Disabled = 0,
    Enabled = 1,
    Loaded = 2,
    Error = 3,
    ChangingState = 4,
    Temporary = 5,
    LoadedInMultiplayer = 6
}
export declare enum ModType {
    Internal = 0,
    Local = 1,
    Workshop = 2
}
export declare enum ModProvide {
    Scripts = "scripts",
    Languages = "languages",
    LanguageExtensions = "languageExtensions",
    Stylesheets = "stylesheets",
    ImageOverrides = "imageOverrides",
    Customizations = "customizations"
}
export interface IModProvides {
    scripts: boolean;
    languages: number;
    languageExtensions: number;
    stylesheets: number;
    imageOverrides: boolean;
    customizations: boolean;
    saveData: boolean;
}
export interface IImageOverrideDescription extends IHasImagePath {
    replace: string;
    animated?: boolean;
}
export type IImageOverrides = Array<string | IImageOverrideDescription>;
export interface ICustomizations {
    hairColors: string[];
    skinColors: string[];
    hairStyles: Array<string | {
        name: string;
        path: string;
    }>;
}
export type IModLanguage = {
    instance: TranslationsProvider;
} | {
    data: ISerializedLanguage | ISerializedLanguageExtension;
    instance?: TranslationsProvider;
};
export interface IModStylesheet {
    name: string;
    path: string;
}
export interface IModInformation {
    log: Log;
    state: ModState;
    name: string;
}
