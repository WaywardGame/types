/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { Load } from "game/meta/Loading";
import type { Prompt } from "game/meta/prompt/IPrompt";
import type { ScreenId } from "ui/screen/IScreen";
import type { MenuId } from "ui/screen/screens/menu/component/IMenu";
import type { Random } from "utilities/random/Random";
import ApplicationInteractions from "test/core/applicationInteractions";
import type { Apps } from "test/core/applicationManager";
import type { IAppPaths } from "test/interfaces";
import type { TestRunContext } from "test/testRunner";
export interface IApplicationOptions {
    additionalArgs?: string[];
    mods?: string[];
    nodeJsMode?: boolean;
    random?: Random;
    serverPort?: number;
    ignoreErrorsInLogs?: boolean;
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
export declare class Application extends ApplicationInteractions {
    private readonly paths;
    readonly options: IApplicationOptions;
    private static readonly browsers;
    static get browserCount(): number;
    static stop(): Promise<void>;
    readonly id: string;
    readonly basePath: string;
    private readonly chromeDriver;
    manager: Apps;
    readonly heapSnapshotPath: string;
    private recordVideo;
    private videoPath;
    private videoTimerId;
    private readonly videoFrames;
    constructor(testContext: TestRunContext, appId: string, paths: IAppPaths, options?: IApplicationOptions);
    get waywardLogFilePath(): string;
    reportResults(): Promise<void>;
    start(expectedInitialScreen?: "title" | "mp_gameplay_modifiers"): Promise<void>;
    stop(shouldQuitGame?: boolean): Promise<string[]>;
    clearDirectory(directory: string): Promise<void>;
    getApplicationState(): Promise<IApplicationState>;
    getLogs(): Promise<string[]>;
    requestVideo(videoPath: string): void;
    private recordVideoFrame;
    private configureDirectories;
}
