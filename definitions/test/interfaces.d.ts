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
import type { INewIslandOverrides } from "@wayward/game/game/island/IIsland";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { GameMode } from "@wayward/game/game/options/IGameOptions";
export interface ICommonGameOptions {
    gameMode: GameMode;
    seed?: string | number;
    enableMilestoneModifiers?: Set<Milestone>;
    enableAllMilestoneModifiers?: boolean;
    startingIslandOverrides?: Partial<INewIslandOverrides>;
}
export interface IWaitUntilGameLoadedOptions {
    isJoiningServer: boolean;
    isCreatingServer: boolean;
    expectReopenServerPrompt: boolean;
    expectGameScreen: boolean;
}
export interface INewGameOptions extends ICommonGameOptions {
    playMode: GamePlayMode;
    reuseCharacter?: boolean;
}
export type IDedicatedServerGameOptions = ICommonGameOptions;
export interface ITestJoinServerOptions {
    joinProgrammatically: boolean;
    enableAllMilestoneModifiers?: boolean;
    multiplayerIdentifier?: string;
}
export declare enum GamePlayMode {
    Singleplayer = "Singleplayer",
    Multiplayer = "Multiplayer"
}
export interface IAppPaths {
    repoPath: string;
    electronPath: string;
    electronExecutablePath: string;
    electronAppAsarPath: string;
    saveZipPath?: string;
}
export interface IPaths extends Omit<IAppPaths, "saveZipPath"> {
    dataPath: string;
    generalDataPath: string;
    specificDataPath: string;
    versionsPath: string;
    saveImportsPath: string;
    savewardPath: string | undefined;
}
export declare const APP_CONTEXT_KEY = "APP";
