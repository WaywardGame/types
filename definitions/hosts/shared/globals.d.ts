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
import type { IWaywardTitle } from "@wayward/hosts/shared/globalTypes";
export declare const gameVersionStage = "beta", gameVersionMajor = 2, gameVersionMinor = 15, gameVersionPatch = 2, gameVersionName = "Cursebreaker", gameVersionColor = 5186397;
export declare const gameVersion = "beta2.15.2";
export declare const gameVersionTitleMajor = "Wayward: Cursebreaker";
export declare const gameVersionTitleMinor: string;
export declare const gameVersionTitle: string;
export declare function getTitleBarString(title: IWaywardTitle): string;
export declare function registerGlobals(globalObject: any): void;
