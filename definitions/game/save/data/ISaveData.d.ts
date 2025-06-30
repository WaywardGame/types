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
import type { RunningContext } from "@wayward/game/steamworks/ISteamworks";
import type Version from "@wayward/utilities/Version";
import type { IBuildId } from "@wayward/hosts/shared/globalTypes";
export interface IGameCreationInfo {
    build: IGameCreationInfoBuild;
    creationTime: number;
    runningContext: RunningContext;
    version: Version.String;
}
export interface IGameCreationInfoBuild {
    id: IBuildId | undefined;
    time: number;
}
