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
import TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IVersionInfo } from "@wayward/utilities/Version";
import Version from "@wayward/utilities/Version";
declare namespace VersionTranslation {
    function getVersionDisplayTranslation(version?: Version.String | Version.StringSemVer | IVersionInfo, development?: boolean): TranslationImpl;
    function getUpdateDisplayTranslation(version?: Version.String | Version.StringSemVer | IVersionInfo): TranslationImpl | undefined;
}
export default VersionTranslation;
