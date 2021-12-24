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
import type { Load } from "../../game/game/meta/Loading";
import type { Prompt } from "../../game/game/meta/prompt/IPrompt";
import type { ScreenId } from "../../game/ui/screen/IScreen";
import type { MenuId } from "../../game/ui/screen/screens/menu/component/IMenu";
import type { Random, SeededGenerator } from "../../game/utilities/random/Random";
import type { ITest } from "../util/mochaNUnitReporter";
import type { IAppPaths } from "../interfaces";
import type { Apps } from "./applicationManager";
import ApplicationInteractions from "./applicationInteractions";
export interface IApplicationOptions {
    additionalArgs?: string[];
    mods?: string[];
}
export interface ITestState {
    seed: number;
    apps: Record<string, IApplicationState>;
}
export interface IApplicationState {
    ui: {
        screen?: ScreenId;
        menu?: MenuId;
        loading: Load[];
        prompt?: Prompt;
    };
}
/**
 * WebDriver client api: http://webdriver.io/api.html
 */
export default class Application extends ApplicationInteractions {
    readonly appId: string;
    private readonly paths;
    private readonly options;
    private static readonly browsers;
    static get browserCount(): number;
    static stop(): Promise<void>;
    readonly id: string;
    readonly basePath: string;
    readonly userDataDirectory: string;
    private readonly chromeDriver;
    private readonly remoteOptions;
    manager: Apps;
    private screenshotPath;
    private heapSnapshotPath;
    private recordVideo;
    private videoPath;
    private videoTimerId;
    private readonly videoFrames;
    constructor(mochaTestContext: Mocha.Context | ITest, appId: string, paths: IAppPaths, random: Random<SeededGenerator>, options?: IApplicationOptions);
    get waywardLogFilePath(): string;
    start(expectedInitialScreen?: "title" | "mp_gameplay_modifiers"): Promise<void>;
    stop(shouldQuitGame?: boolean): Promise<string[]>;
    clearDirectory(directory: string): Promise<void>;
    getApplicationState(): Promise<IApplicationState>;
    getLogs(): Promise<string[]>;
    requestScreenshot(screenshotPath: string): void;
    requestHeapSnapshot(heapSnapshotPath: string): void;
    requestVideo(videoPath: string): void;
    private recordVideoFrame;
}
