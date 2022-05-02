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
    GameplayModifier = 16,
    GarbageCollection = 17,
    HookManager = 18,
    IndexedDBDataStorage = 19,
    Input = 20,
    InputManager = 21,
    InterModRegistryManager = 22,
    Island = 23,
    ItemManager = 24,
    ItemReference = 25,
    ItemStylesheet = 26,
    Languages = 27,
    Loading = 28,
    LocalStorageDataStorage = 29,
    MapGen = 30,
    Matchmaking = 31,
    MatchmakingServer = 32,
    MemoryLeakDetector = 33,
    Message = 34,
    Mod = 35,
    Mods = 36,
    Multiplayer = 37,
    NPC = 38,
    NPCManager = 39,
    OldUi = 40,
    Packet = 41,
    Player = 42,
    PlayerManager = 43,
    Prompts = 44,
    Random = 45,
    Reflow = 46,
    Renderer = 47,
    ReplayManager = 48,
    ResourceLoader = 49,
    SaveLoad = 50,
    SaveManager = 51,
    Serializer = 52,
    Shaders = 53,
    SoundEffect = 54,
    SpritePack = 55,
    SshCommandManager = 56,
    SshServer = 57,
    Steamworks = 58,
    StringTokenizer = 59,
    TemperatureManager = 60,
    TileEventManager = 61,
    TileUpdate = 62,
    Timer = 63,
    Trello = 64,
    Ui = 65,
    Utilities = 66,
    WebAssembly = 67,
    WebGlContext = 68,
    WebRTCConnection = 69,
    WebSocketConnection = 70,
    World = 71,
    WorldLayerRenderer = 72,
    WorldRenderer = 73
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
