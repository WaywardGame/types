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
export declare const gameVersionStage = "beta", gameVersionMajor = 2, gameVersionMinor = 12, gameVersionPatch = 0, gameVersionName = "Wheels & Wetlands";
export declare const gameVersion: string;
export declare function getTitleBarString(isSimplified?: boolean, isDedicatedServer?: boolean, testAppId?: string, testTitleId?: string): string;
export declare function registerGlobals(globalObject: any): void;
