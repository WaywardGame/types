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
import type Player from "@wayward/game/game/entity/player/Player";
import { Direction } from "@wayward/game/utilities/math/Direction";
import type { Application, ITestState } from "@wayward/test/core/application";
import type { INewGameOptions, ITestJoinServerOptions } from "@wayward/test/interfaces";
export declare class Apps {
    private readonly _logs;
    private readonly _applications;
    private readonly _clients;
    private _server;
    private _tars;
    private _pausedCount;
    /**
     * Returns the server
     */
    get server(): Application;
    /**
     * Returns clients playing the game (in the server)
     * This includes the server
     */
    get applicationsInGame(): Application[];
    /**
     * Returns clients playing the game (in the server)
     * This includes the server if this is not a dedicated server
     */
    get applicationsInGameExcludingDedicatedServer(): Application[];
    /**
     * Returns clients playing the game (in the server)
     * This excludes the server
     */
    get applicationsInGameExcludingServer(): Application[];
    /**
     * Returns applications except for the server
     */
    get applicationsExcludingServer(): Application[];
    /**
     * Returns clients not playing
     */
    get inactiveClients(): Application[];
    reset(): void;
    add(app: Application): Promise<Application>;
    addServer(app: Application): Promise<Application>;
    addTARS(app: Application): Application;
    addConnectedClient(app: Application): Application;
    activateTARS(): () => void;
    getTestState(): Promise<ITestState>;
    startAll(): Promise<void>;
    lastTestState?: ITestState;
    stopAll(): Promise<Map<string, {
        logs: string[];
        errorsAreFatal: boolean;
    }>>;
    get(): readonly Application[];
    getLogs(): string[];
    verifyGameStates(): Promise<void>;
    createMultiplayerGame(options: Omit<INewGameOptions, "playMode">): Promise<void>;
    setClientJoinIsland(x: number, y: number): Promise<void>;
    getServerGameCode(): Promise<string>;
    joinServer(options: ITestJoinServerOptions, ...apps: Application[]): Promise<void>;
    leaveServer(...apps: Application[]): Promise<void>;
    returnToTitleScreen(): Promise<void>;
    waitUntilLoadingIsFinished(): Promise<void>;
    removeNearbyCreatures(): Promise<void>;
    randomInput(count: number): Promise<void>;
    moveToTowardsIsland(app: Application, direction: Direction.Cardinal, recoverStats?: boolean): Promise<void>;
    recoverStats(app: Application): Promise<void>;
    moveAndVerifyTicks(app: Application, direction: Direction.Cardinal): Promise<void>;
    waitForClientConsistency(): Promise<void>;
    sailToCivilization(winnerApp: Application): Promise<void>;
    executeJavascript<T2 extends any[], T = void>(app: Application, executor: (player: Player, ...extraArgs: T2) => T, ...extraArgs: T2): Promise<T[]>;
    executeOnPlayingClients<T>(runnable: (app: Application) => Promise<T>): Promise<T[]>;
    executeOnApps<T>(apps: Application[], runnable: (app: Application) => Promise<T>, requiresDeterminism: boolean): Promise<T[]>;
    runWhilePaused(blockId: string, runnable: () => Promise<void>): Promise<void>;
    private bindApp;
    private log;
}
export declare const appsContextKey = "APPS";
