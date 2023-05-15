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
    Entity = 12,
    EnumManager = 13,
    FileDataStorage = 14,
    FlowFieldManager = 15,
    Game = 16,
    GameplayModifier = 17,
    GarbageCollection = 18,
    HookManager = 19,
    Human = 20,
    IndexedDBDataStorage = 21,
    Input = 22,
    InputManager = 23,
    InterModRegistryManager = 24,
    Island = 25,
    ItemManager = 26,
    ItemReference = 27,
    ItemStylesheet = 28,
    Languages = 29,
    Loading = 30,
    LocalStorageDataStorage = 31,
    MapGen = 32,
    Matchmaking = 33,
    MatchmakingServer = 34,
    MemoryLeakDetector = 35,
    Message = 36,
    Mod = 37,
    Mods = 38,
    Multiplayer = 39,
    NPC = 40,
    NPCManager = 41,
    OldUi = 42,
    Packet = 43,
    Player = 44,
    PlayerManager = 45,
    Prompts = 46,
    Random = 47,
    Reflow = 48,
    Renderer = 49,
    ReplayManager = 50,
    ResourceLoader = 51,
    SaveLoad = 52,
    SaveManager = 53,
    Serializer = 54,
    Shaders = 55,
    Shipper = 56,
    SmartConnection = 57,
    SoundEffect = 58,
    SpritePack = 59,
    SshCommandManager = 60,
    SshServer = 61,
    SteamNetworkConnection = 62,
    Steamworks = 63,
    StringTokenizer = 64,
    TemperatureManager = 65,
    TileEventManager = 66,
    TileUpdate = 67,
    Timer = 68,
    Trello = 69,
    Ui = 70,
    Utilities = 71,
    WebAssembly = 72,
    WebGlContext = 73,
    WebRTCConnection = 74,
    WebSocketConnection = 75,
    WebWorkerClient = 76,
    WebWorkerConnection = 77,
    WebWorkerManager = 78,
    World = 79,
    WorldLayer = 80,
    WorldLayerRenderer = 81,
    WorldRenderer = 82
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
