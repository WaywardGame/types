/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { IFileSystem, IPath } from "electron/interfaces";
export declare enum LogSource {
    ActionManager = 0,
    Audio = 1,
    BaseMod = 2,
    Chat = 3,
    ClientMessage = 4,
    CommandManager = 5,
    CorpseManager = 6,
    Creature = 7,
    CreatureManager = 8,
    DailyChallenge = 9,
    Doodad = 10,
    DoodadManager = 11,
    EnumManager = 12,
    FlowFieldManager = 13,
    Game = 14,
    HookManager = 15,
    Input = 16,
    InputManager = 17,
    InterModRegistryManager = 18,
    ItemManager = 19,
    ItemSpriteLoader = 20,
    Languages = 21,
    MapGen = 22,
    Matchmaking = 23,
    MatchmakingServer = 24,
    Message = 25,
    Mod = 26,
    Mods = 27,
    Multiplayer = 28,
    NPC = 29,
    NPCManager = 30,
    OldUi = 31,
    Packet = 32,
    Player = 33,
    PlayerManager = 34,
    Reflow = 35,
    Renderer = 36,
    ReplayManager = 37,
    ResourceLoader = 38,
    SaveManager = 39,
    Serializer = 40,
    Shaders = 41,
    SoundEffect = 42,
    SpritePack = 43,
    SshCommandManager = 44,
    SshServer = 45,
    Steamworks = 46,
    TemperatureManager = 47,
    TileEventManager = 48,
    TileUpdate = 49,
    Trello = 50,
    Ui = 51,
    Utilities = 52,
    WebAssembly = 53,
    WebRTCConnection = 54,
    WebSocketConnection = 55,
    World = 56
}
export interface ILog {
    debug(...args: any[]): void;
    error(...args: any[]): void;
    info(...args: any[]): void;
    trace(...args: any[]): void;
    warn(...args: any[]): void;
    setSources(...sources: Array<LogSource | string>): void;
}
export declare enum LogLineType {
    Debug = 0,
    Error = 1,
    Info = 2,
    Trace = 3,
    Warn = 4
}
export interface ILogLine {
    type: LogLineType;
    args: any[];
}
declare abstract class BaseLog implements ILog {
    debug: (...args: any[]) => void;
    error: (...args: any[]) => void;
    info: (...args: any[]) => void;
    trace: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    protected sources: Array<LogSource | string>;
    constructor(...sources: Array<LogSource | string>);
    setSources(...sources: Array<LogSource | string>): void;
    /**
     * Re-binds the Log methods. Called automatically when the winston instance is set.
     */
    abstract setup(): void;
}
declare class Log extends BaseLog {
    /**
     * Re-binds the Log methods. Called automatically when the winston instance is set.
     */
    setup(): void;
}
/**
 * Logs to an in-memory array - not the console
 */
export declare class MemoryLog extends BaseLog {
    lines: ILogLine[];
    /**
     * Re-binds the Log methods. Called automatically when the winston instance is set.
     */
    setup(): void;
    setArray(lines: ILogLine[]): void;
    clear(): void;
    private addLogLine;
}
export interface ISourceFilter {
    /**
     * Any misc (string) source that does not match the filter will not appear in the console.
     */
    miscSourceFilter: string;
    /**
     * Any source present in this array will not appear in the console.
     */
    disabledSources: Array<keyof typeof LogSource>;
}
export declare const defaultSourceFilter: ISourceFilter;
declare module Log {
    enum LogType {
        Console = 0,
        File = 1
    }
    function refresh(): void;
    function startSetup(): void;
    function finalizeSetup(): void;
    function initializeGameState(): void;
    function setCallback(cb?: (...args: any[]) => void): void;
    function addPreConsoleCallback(cb: (...args: any[]) => void): void;
    function removePreConsoleCallback(cb: (...args: any[]) => void): void;
    function setSourceFilter(logType: LogType, enable: boolean, ...sources: Array<LogSource | string>): void;
    /**
     * Takes a winston instance and a path. Updates the static Log methods to use the winston instance.
     */
    function setupFileLogger(fileSystem: IFileSystem, path: IPath, logsPath: string): void;
    /**
     * Returns a method that can be used to `Log.info` with the given sources.
     * @param sources A list of sources to log to.
     */
    function info(...sources: Array<LogSource | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.warn` with the given sources.
     * @param sources A list of sources to log to.
     */
    function warn(...sources: Array<LogSource | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.error` with the given sources.
     * @param sources A list of sources to log to.
     */
    function error(...sources: Array<LogSource | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.trace` with the given sources.
     * @param sources A list of sources to log to.
     */
    function trace(...sources: Array<LogSource | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.debug` with the given sources.
     * @param sources A list of sources to log to.
     */
    function debug(...sources: Array<LogSource | string>): (...args: any[]) => void;
}
declare class NullLog extends BaseLog {
    setup(): void;
}
export declare const nullLog: NullLog;
export default Log;
