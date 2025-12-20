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
import { type IUpgradeVersion, type UpgradeParameters, type UpgradeType } from "@wayward/game/save/upgrade/UpgradeVersion";
import type UpgradesArray from "@wayward/game/save/upgrade/UpgradesArray";
import Version from "@wayward/utilities/Version";
import type { IBuildId } from "@wayward/hosts/shared/globalTypes";
export declare const BUILD_TIME_INTRODUCED_TIME: Date;
declare namespace UpgradeVersionRegistry {
    function getMostRecentUpgradeId(): IBuildId | undefined;
    function getAll(): readonly IUpgradeVersion[];
    function run<TYPE extends UpgradeType>(version: Version.Info, messages: UpgradesArray, which: TYPE, ...params: UpgradeParameters<TYPE>): void;
}
export default UpgradeVersionRegistry;
