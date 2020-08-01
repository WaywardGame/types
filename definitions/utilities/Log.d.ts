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
    Creature = 6,
    CreatureManager = 7,
    DailyChallenge = 8,
    DoodadManager = 9,
    EnumManager = 10,
    FlowFieldManager = 11,
    Game = 12,
    HookManager = 13,
    Input = 14,
    InputManager = 15,
    InterModRegistryManager = 16,
    ItemManager = 17,
    Languages = 18,
    MapGen = 19,
    Matchmaking = 20,
    MatchmakingServer = 21,
    Mod = 22,
    Mods = 23,
    Multiplayer = 24,
    NewUi = 25,
    NPC = 26,
    NPCManager = 27,
    Packet = 28,
    Player = 29,
    PlayerManager = 30,
    Reflow = 31,
    Renderer = 32,
    ResourceLoader = 33,
    SaveManager = 34,
    Serializer = 35,
    Shaders = 36,
    SshCommandManager = 37,
    SshServer = 38,
    Steamworks = 39,
    TemperatureManager = 40,
    TileEventManager = 41,
    TileUpdate = 42,
    Trello = 43,
    Ui = 44,
    Utilities = 45,
    WebAssembly = 46,
    WebRTCConnection = 47,
    WebSocketConnection = 48,
    World = 49
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
    function refresh(): void;
    function startSetup(): void;
    function finalizeSetup(): void;
    function setCallback(cb?: (...args: any[]) => void): void;
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
