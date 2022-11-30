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
export interface ICommonGameOptions {
    gameMode: GameMode;
    seed?: string | number;
    enableAllMilestoneModifiers?: boolean;
}
export interface IWaitUntilGameLoadedOptions {
    isJoiningServer: boolean;
    isCreatingServer: boolean;
    expectReopenServerPrompt: boolean;
}
export interface INewGameOptions extends ICommonGameOptions {
    playMode: GamePlayMode;
    reuseCharacter?: boolean;
}
export type IDedicatedServerGameOptions = ICommonGameOptions;
export interface IJoinServerOptions {
    joinProgrammatically: boolean;
    enableAllMilestoneModifiers?: boolean;
    multiplayerIdentifier?: string;
}
export declare enum GameMode {
    Hardcore = "Hardcore Mode",
    Casual = "Casual Mode",
    Challenge = "Challenge Mode"
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
}
