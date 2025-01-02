/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IUpgradeVersion, UpgradeParameters, UpgradeType } from "@wayward/game/save/upgrade/UpgradeVersion";
import type UpgradesArray from "@wayward/game/save/upgrade/UpgradesArray";
import type Version from "@wayward/utilities/Version";
export declare const BUILD_TIME_INTRODUCED_TIME: Date;
declare namespace UpgradeVersionRegistry {
    function getAll(): readonly IUpgradeVersion[];
    function run<TYPE extends UpgradeType>(version: Version.Info, messages: UpgradesArray, which: TYPE, ...params: UpgradeParameters<TYPE>): void;
}
export default UpgradeVersionRegistry;
