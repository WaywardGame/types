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
export interface IVersionInfo {
    str: string;
    strSemver: string;
    stage: "beta" | "release";
    major: number;
    minor: number;
    patch: number;
    name?: string;
    date?: Date;
    /**
     * A number representing the patch (if beta) or minor (if release), used when the stage is not known
     */
    update?: number;
}
declare module Version {
    export const versionInfoRegExp: RegExp;
    export const versionInfoRegExpSemver: RegExp;
    /**
     * Returns whether the given version is compatible with the game's version. This is used to check, for example,
     * if a mod is compatible with the game's version.
     */
    export function isCompatible(version: IVersionInfo | string): boolean;
    /**
     * Returns whether the given `version` is `atLeast` another version. This can be used, for example,
     * to see if a save or mod was created/edited after a specific thing was implemented.
     */
    export function isAtLeast(version: IVersionInfo | string, atLeast: IVersionInfo | string): boolean;
    export function create(stage: "beta" | "release", major: number, minor: number, patch?: number, date?: Date): IVersionInfo;
    export function getVersionInfo(version: string): IVersionInfo;
    export function isSameVersion(version: IVersionInfo, compareVersion: IVersionInfo): boolean;
    export function getVersionDisplayString(version?: string | IVersionInfo, development?: boolean): string;
    export function getUpdateDisplayString(version?: string | IVersionInfo): string | undefined;
    const timezones: {
        nz: string;
        build: string;
    };
    export function isBefore(date: Date, dateStr: `${string} ${number} ${number} ${number}:${number}`, timezone: keyof typeof timezones): boolean;
    export {};
}
export default Version;
