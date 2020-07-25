/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
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
}
declare module Version {
    /**
     * Returns whether the given version is compatible with the game's version. This is used to check, for example,
     * if a mod is compatible with the game's version.
     */
    function isCompatible(version: IVersionInfo | string): boolean;
    /**
     * Returns whether the given `version` is `atLeast` another version. This can be used, for example,
     * to see if a save or mod was created/edited after a specific thing was implemented.
     */
    function isAtLeast(version: IVersionInfo | string, atLeast: IVersionInfo | string): boolean;
    function create(stage: "beta" | "release", major: number, minor: number, patch?: number): IVersionInfo;
    function getVersionInfo(version: string): IVersionInfo;
    function isSameVersion(version: IVersionInfo, compareVersion: IVersionInfo): boolean;
    function getVersionDisplayString(version?: string | IVersionInfo): string;
}
export default Version;
