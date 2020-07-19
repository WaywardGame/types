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
    CommandManager = 4,
    CorpseManager = 5,
    CreatureManager = 6,
    DailyChallenge = 7,
    DoodadManager = 8,
    EnumManager = 9,
    FlowFieldManager = 10,
    Game = 11,
    HookManager = 12,
    Input = 13,
    InputManager = 14,
    InterModRegistryManager = 15,
    ItemManager = 16,
    Languages = 17,
    MapGen = 18,
    Matchmaking = 19,
    MatchmakingServer = 20,
    Mod = 21,
    Mods = 22,
    Multiplayer = 23,
    NewUi = 24,
    NPCManager = 25,
    Packet = 26,
    Player = 27,
    PlayerManager = 28,
    Reflow = 29,
    Renderer = 30,
    ResourceLoader = 31,
    SaveManager = 32,
    Serializer = 33,
    Shaders = 34,
    SshCommandManager = 35,
    SshServer = 36,
    Steamworks = 37,
    TemperatureManager = 38,
    TileEventManager = 39,
    TileUpdate = 40,
    Trello = 41,
    Ui = 42,
    Utilities = 43,
    WebAssembly = 44,
    WebRTCConnection = 45,
    WebSocketConnection = 46,
    World = 47
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
    /**
     * Takes a winston instance and a path. Updates the static Log methods to use the winston instance.
     */
    function setupFileLogger(fileSystem: IFileSystem, path: IPath, logsPath: string): void;
    function refresh(): void;
    function setCallback(cb?: (...args: any[]) => void): void;
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
