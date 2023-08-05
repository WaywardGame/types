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
export declare const gameVersionStage = "beta", gameVersionMajor = 2, gameVersionMinor = 13, gameVersionPatch = 5, gameVersionName = "Beacon's Call";
export declare const gameVersion: string;
export declare const gameVersionTitleMajor: string;
export declare const gameVersionTitleMinor: string;
export declare const gameVersionTitle: string;
export declare function getTitleBarString(isSimplified?: boolean, includeBuild?: boolean, isLauncher?: boolean, isDedicatedServer?: boolean, testAppId?: string, testTitleId?: string): string;
export declare function registerGlobals(globalObject: any): void;
