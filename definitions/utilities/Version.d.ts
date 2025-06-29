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
import type { IBuild, IBuildId } from "@wayward/hosts/shared/globalTypes";
import type { IFileSystem } from "@wayward/hosts/shared/ipc/fileSystem";
export interface IVersionInfo {
    str: Version.String;
    strSemver: Version.StringSemVer;
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
    buildId?: IBuildId;
}
export declare namespace IVersionInfo {
    interface WithBuildId extends IVersionInfo {
        buildId: IBuildId;
    }
}
declare namespace Version {
    export function readBuildFile(path?: string, fs?: IFileSystem): Promise<IBuild | undefined>;
    export type Stage = "beta" | "release";
    export type String = `${Stage}${bigint}.${bigint}.${bigint}` | `${Stage}${bigint}.${bigint}` | `${Stage}${bigint}`;
    export type StringSemVer = `${bigint}.${bigint}.${bigint}-${Stage}` | `${bigint}.${bigint}.${bigint}`;
    export type Month = "jan" | "feb" | "mar" | "apr" | "may" | "jun" | "jul" | "aug" | "sep" | "oct" | "nov" | "dec";
    export type DateString = `${Month} ${bigint} ${bigint} ${bigint | "00"}:${bigint | "00"}`;
    export type StringBuildId = `${String}-dev${bigint}.${bigint}` | `${String}-dev${bigint}`;
    export const versionInfoRegExp: RegExp;
    export const versionInfoRegExpSemver: RegExp;
    export const versionInfoWithBuildIdRegExp: RegExp;
    /**
     * Returns whether the given version is compatible with the game's version. This is used to check, for example,
     * if a mod is compatible with the game's version.
     *
     * - Compatible versions in "beta" stage require identical stage, major, minor, and a patch less than or equal to the current patch.
     * - Compatible versions in "release" stage require identical stage and major, and a minor and patch less than or equal to the current minor and patch.
     */
    export function isCompatible(version: IVersionInfo | Version.String | Version.StringSemVer): boolean;
    /**
     * Returns whether the given version is compatible with the game's version. This is used to check, for example,
     * if a mod is compatible with the game's version.
     *
     * - Compatible versions in "beta" stage require identical stage, major, minor, and a patch less than or equal to the current patch.
     * - Compatible versions in "release" stage require identical stage and major, and a minor and patch less than or equal to the current minor and patch.
     */
    export function is(versionA?: IVersionInfo | Version.String | Version.StringSemVer | Version.StringBuildId, versionB?: IVersionInfo | Version.String | Version.StringSemVer | Version.StringBuildId): boolean;
    /**
     * Returns whether the given `version` is `atLeast` another version. This can be used, for example,
     * to see if a save or mod was created/edited after a specific thing was implemented.
     */
    export function isAtLeast(version: IVersionInfo | Version.String | Version.StringSemVer | Version.StringBuildId, atLeast: IVersionInfo | Version.String | Version.StringSemVer | Version.StringBuildId): boolean;
    /**
     * Returns if `checkVersion` is older than `isBefore`
     */
    export function isBefore(checkVersion: IVersionInfo | Version.String | Version.StringSemVer, isBefore: IVersionInfo | Version.String | Version.StringSemVer): boolean;
    export function createRawVersionInfo(stage: Version.Stage, major: number, minor: number, patch?: number, date?: Date): IVersionInfo;
    export function convertStringToRawInfo(version: Version.String | Version.StringSemVer | Version.StringBuildId): IVersionInfo;
    export function create(stage: Version.Stage, major: number, minor: number, patch?: number, date?: Date): Info;
    export function getVersionInfo(version?: IVersionInfo | Version.String | Version.StringSemVer | Version.StringBuildId): Info;
    export function isSameVersion(version: IVersionInfo, compareVersion: IVersionInfo): boolean;
    const timezones: {
        nz: string;
        pt: string;
        build: string;
    };
    export interface Info extends IVersionInfo {
    }
    export class Info {
        constructor(info: IVersionInfo | Version.String | Version.StringSemVer | Version.StringBuildId);
        /**
         * Returns whether this version is compatible with the game's version. This is used to check, for example,
         * if a mod is compatible with the game's version.
         *
         * - Compatible versions in "beta" stage require identical stage, major, minor, and a patch less than or equal to the current patch.
         * - Compatible versions in "release" stage require identical stage and major, and a minor and patch less than or equal to the current minor and patch.
         */
        isCompatible(): boolean;
        /**
         * Returns whether this version is greater than or equal to the given version. This can be used, for example,
         * to see if a save or mod was created/edited after a specific thing was implemented.
         */
        isAtLeast(version: IVersionInfo | Version.String | Version.StringSemVer | Version.StringBuildId): boolean;
        /**
         * Returns whether this version is greater than or equal to the given version. This can be used, for example,
         * to see if a save or mod was created/edited after a specific thing was implemented.
         */
        is(version: IVersionInfo | Version.String | Version.StringSemVer | Version.StringBuildId): boolean;
        /**
         * Returns whether this version is older than the given version.
         */
        isBefore(version: IVersionInfo | Version.String | Version.StringSemVer | Version.StringBuildId): boolean;
        /**
         * Returns whether this version is older than the given build time.
         *
         * **Note:** Always returns `true` if this version object doesn't have a date set.
         */
        isBefore(dateStr: DateString, timezone: keyof typeof timezones): boolean;
        equals(version: IVersionInfo | Version.String | Version.StringSemVer): boolean;
    }
    export {};
}
export default Version;
