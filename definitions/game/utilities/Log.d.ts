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
    Loading = 27,
    LocalStorageDataStorage = 28,
    MapGen = 29,
    Matchmaking = 30,
    MatchmakingServer = 31,
    MemoryLeakDetector = 32,
    Message = 33,
    Mod = 34,
    Mods = 35,
    Multiplayer = 36,
    NPC = 37,
    NPCManager = 38,
    OldUi = 39,
    Packet = 40,
    Player = 41,
    PlayerManager = 42,
    Prompts = 43,
    Reflow = 44,
    Renderer = 45,
    ReplayManager = 46,
    ResourceLoader = 47,
    SaveManager = 48,
    Serializer = 49,
    Shaders = 50,
    SoundEffect = 51,
    SpritePack = 52,
    SshCommandManager = 53,
    SshServer = 54,
    Steamworks = 55,
    StringTokenizer = 56,
    TemperatureManager = 57,
    TileEventManager = 58,
    TileUpdate = 59,
    Timer = 60,
    Trello = 61,
    Ui = 62,
    Utilities = 63,
    WebAssembly = 64,
    WebGlContext = 65,
    WebRTCConnection = 66,
    WebSocketConnection = 67,
    World = 68,
    WorldLayerRenderer = 69,
    WorldRenderer = 70
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
