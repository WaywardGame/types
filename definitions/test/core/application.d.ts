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
import type { ActionType } from "@wayward/game/game/entity/action/IAction";
import type Player from "@wayward/game/game/entity/player/Player";
import { ItemType } from "@wayward/game/game/item/IItem";
import type { Load } from "@wayward/game/game/meta/Loading";
import type { Prompt } from "@wayward/game/game/meta/prompt/IPrompt";
import type { ScreenId } from "@wayward/game/ui/screen/IScreen";
import type { MenuId } from "@wayward/game/ui/screen/screens/menu/component/IMenu";
import ApplicationInteractions from "@wayward/test/core/applicationInteractions";
import type { ApplicationManager } from "@wayward/test/core/applicationManager";
import { ItemComponentMarshal } from "@wayward/test/core/marshals/ui/itemComponentMarshal";
import type { IAppPaths } from "@wayward/test/interfaces";
import type { TestRunContext } from "@wayward/test/testRunner";
import type { Random } from "@wayward/utilities/random/Random";
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
    manager: ApplicationManager;
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
    /**
     * Executes a function on just this app in the context of the local player
     */
    executeLocalJavaScript<T2 extends any[], T = void>(executor: (player: Player, ...extraArgs: T2) => T, ...extraArgs: T2): Promise<T>;
    /**
     * Asserts some code on just this app
     */
    assertScript(executor: (player: Player) => boolean, assertMessage?: string): Promise<void>;
    getActionCount(actionType: ActionType): Promise<number>;
    findItemComponents(itemType: ItemType): Promise<ItemComponentMarshal[]>;
    requestVideo(videoPath: string): void;
    private recordVideoFrame;
    private configureDirectories;
}
