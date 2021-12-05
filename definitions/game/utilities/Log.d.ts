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
import type { IFileSystem } from "@hosts/shared/ipc/fileSystem";
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
    FileDataStorage = 13,
    FlowFieldManager = 14,
    Game = 15,
    GarbageCollection = 16,
    HookManager = 17,
    IndexedDBDataStorage = 18,
    Input = 19,
    InputManager = 20,
    InterModRegistryManager = 21,
    Island = 22,
    ItemManager = 23,
    ItemReference = 24,
    ItemStylesheet = 25,
    Languages = 26,
    LocalStorageDataStorage = 27,
    MapGen = 28,
    Matchmaking = 29,
    MatchmakingServer = 30,
    MemoryLeakDetector = 31,
    Message = 32,
    Mod = 33,
    Mods = 34,
    Multiplayer = 35,
    NPC = 36,
    NPCManager = 37,
    OldUi = 38,
    Packet = 39,
    Player = 40,
    PlayerManager = 41,
    Prompts = 42,
    Reflow = 43,
    Renderer = 44,
    ReplayManager = 45,
    ResourceLoader = 46,
    SaveManager = 47,
    Serializer = 48,
    Shaders = 49,
    SoundEffect = 50,
    SpritePack = 51,
    SshCommandManager = 52,
    SshServer = 53,
    Steamworks = 54,
    StringTokenizer = 55,
    TemperatureManager = 56,
    TileEventManager = 57,
    TileUpdate = 58,
    Timer = 59,
    Trello = 60,
    Ui = 61,
    Utilities = 62,
    WebAssembly = 63,
    WebGlContext = 64,
    WebRTCConnection = 65,
    WebSocketConnection = 66,
    World = 67,
    WorldLayerRenderer = 68,
    WorldRenderer = 69
}
export declare enum LogLineType {
    Debug = 0,
    Error = 1,
    Info = 2,
    Trace = 3,
    Warn = 4
}
export interface ILog {
    debug(...args: any[]): void;
    error(...args: any[]): void;
    info(...args: any[]): void;
    trace(...args: any[]): void;
    warn(...args: any[]): void;
    setSources(...sources: Array<LogSource | string>): void;
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
    constructor(...sources: Array<BaseLog | LogSource | string>);
    setSources(...sources: Array<BaseLog | LogSource | string>): void;
    /**
     * Re-binds the Log methods
     */
    abstract setup(): void;
}
declare class Log extends BaseLog {
    /**
     * Re-binds the Log methods
     */
    setup(): void;
}
/**
 * Logs to an in-memory array - not the console
 */
export declare class MemoryLog extends BaseLog {
    lines: ILogLine[];
    /**
     * Re-binds the Log methods
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
    disabledSources: Set<keyof typeof LogSource>;
}
export declare const defaultSourceFilter: ISourceFilter;
declare module Log {
    enum LogType {
        Console = 0,
        File = 1
    }
    function refresh(): void;
    function initializeGameState(): void;
    function setCallback(cb?: (...args: any[]) => void): void;
    function addPreConsoleCallback(cb: (...args: any[]) => void): void;
    function removePreConsoleCallback(cb: (...args: any[]) => void): void;
    function setSourceFilter(logType: LogType, enable: boolean, ...sources: Array<LogSource | string>): void;
    /**
     * Setups file logging
     */
    function setupFileLogger(fileSystem: IFileSystem, logsPath: string): void;
    /**
     * Flushes pending logs to disk if the file logger is active
     */
    function flush(): Promise<void>;
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
     * Returns a method that can be used to `Log.debug` with the given sources.
     * @param sources A list of sources to log to.
     */
    function debug(...sources: Array<LogSource | string>): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.trace` with the given sources.
     * @param sources A list of sources to log to.
     */
    function trace(...sources: Array<LogSource | string>): (...args: any[]) => void;
}
declare class NullLog extends BaseLog {
    setup(): void;
}
export declare const nullLog: NullLog;
export default Log;
