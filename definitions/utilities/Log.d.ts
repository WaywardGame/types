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
    DoodadManager = 10,
    EnumManager = 11,
    FlowFieldManager = 12,
    Game = 13,
    HookManager = 14,
    Input = 15,
    InputManager = 16,
    InterModRegistryManager = 17,
    ItemManager = 18,
    Languages = 19,
    MapGen = 20,
    Matchmaking = 21,
    MatchmakingServer = 22,
    Message = 23,
    Mod = 24,
    Mods = 25,
    Multiplayer = 26,
    NewUi = 27,
    NPC = 28,
    NPCManager = 29,
    Packet = 30,
    Player = 31,
    PlayerManager = 32,
    Reflow = 33,
    Renderer = 34,
    ResourceLoader = 35,
    SaveManager = 36,
    Serializer = 37,
    Shaders = 38,
    SshCommandManager = 39,
    SshServer = 40,
    Steamworks = 41,
    TemperatureManager = 42,
    TileEventManager = 43,
    TileUpdate = 44,
    Trello = 45,
    Ui = 46,
    Utilities = 47,
    WebAssembly = 48,
    WebRTCConnection = 49,
    WebSocketConnection = 50,
    World = 51
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
    /**
     * Any source present in this array will not appear in the log file.
     */
    disabledFileSources: Array<keyof typeof LogSource>;
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
