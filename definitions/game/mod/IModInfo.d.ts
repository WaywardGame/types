/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IHasImagePath } from "game/IObject";
import type TranslationsProvider from "language/TranslationsProvider";
import type { IModConfig } from "mod/IMod";
import type Mod from "mod/Mod";
import type Log from "utilities/Log";
export interface IModInfo {
    index: number;
    config: IModConfig;
    state: ModState;
    path: string;
    folderName: string;
    type: ModType;
    provides: IModProvides;
    instance?: Mod;
    initialized?: boolean;
    publishedFileId?: string;
    steamIDOwner?: string;
    lastUpdated?: number;
    installDate?: number;
    createdDate?: number;
    imageOverrides?: IImageOverrides;
    customizations?: ICustomizations;
    stylesheets?: string[];
    languages?: Array<{
        path?: string;
        instance?: TranslationsProvider;
    }>;
    log: Log;
    loadOrder: number;
    readme?: string | false;
    icon?: string | false;
}
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
