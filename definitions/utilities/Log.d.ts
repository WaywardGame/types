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
import type { IFileSystem } from "@wayward/hosts/shared/ipc/fileSystem";
export declare enum LogLineType {
    Debug = 0,
    Error = 1,
    Info = 2,
    Trace = 3,
    Warn = 4
}
export declare const LOG_SOURCES: Record<string, number>;
export interface ILog {
    debug(...args: any[]): void;
    error(...args: any[]): void;
    info(...args: any[]): void;
    trace(...args: any[]): void;
    warn(...args: any[]): void;
    setSources(...sources: string[]): void;
    ifEnabled(logger: (log: this) => any): void;
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
    ifEnabled: (logger: (log: this) => any) => void;
    protected sources: string[];
    constructor(...sources: Array<BaseLog | string>);
    setSources(...sources: Array<BaseLog | string>): void;
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
export declare class MemoryLogLine implements ILogLine {
    readonly type: LogLineType;
    readonly args: any[];
    constructor(type: LogLineType, args: any[]);
    toString(): string;
}
/**
 * Logs to an in-memory array - not the console
 */
export declare class MemoryLog extends BaseLog {
    errorCount: number;
    readonly linesPerType: Map<LogLineType, ILogLine[]>;
    lines: ILogLine[];
    /**
     * Re-binds the Log methods
     */
    setup(): void;
    setArray(lines: ILogLine[]): void;
    clear(): void;
    private addLogLine;
}
/**
 * Any source present in this array will not appear in the console by default.
 */
export declare const DEFAULT_CONSOLE_LOG_SOURCE_FILTERS: Record<string, false>;
/**
 * Any source present in this array will not appear in the log file.
 */
export declare const DEFAULT_FILE_LOG_SOURCE_FILTERS: Record<string, boolean>;
declare namespace Log {
    enum LogType {
        Console = 0,
        File = 1,
        Memory = 2
    }
    function setMemoryLog(memoryLog: MemoryLog | undefined): void;
    function setTimestampType(type: "full" | "build"): void;
    function disableFileLogger(): void;
    function disableFileLoggingForSource(source: string): void;
    function initializeGameState(): void;
    function setCallback(cb?: (...args: any[]) => void): void;
    function addPreConsoleCallback(cb: (...args: any[]) => void): void;
    function removePreConsoleCallback(cb: (...args: any[]) => void): void;
    /**
     * Setups file logging
     */
    function setupFileLogger(fileSystem: IFileSystem, logsPath: string): Promise<void>;
    /**
     * Flushes pending logs to disk if the file logger is active
     */
    function flush(): Promise<void>;
    /**
     * Returns a method that can be used to `Log.info` with the given sources.
     * @param sources A list of sources to log to.
     */
    function info(...sources: string[]): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.warn` with the given sources.
     * @param sources A list of sources to log to.
     */
    function warn(...sources: string[]): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.error` with the given sources.
     * @param sources A list of sources to log to.
     */
    function error(...sources: string[]): (...args: any[]) => void;
    /**
     * Returns a method that can be used to `Log.debug` with the given sources.
     * @param sources A list of sources to log to.
     */
    function debug(...sources: string[]): (...args: any[]) => void;
    function ifEnabled(...sources: string[]): (logger: (log: ILog) => any) => void;
    function ifEnabled<LOG extends ILog>(log: LOG, ...sources: string[]): (logger: (log: LOG) => any) => void;
    /**
     * Returns a method that can be used to `Log.trace` with the given sources.
     * @param sources A list of sources to log to.
     */
    function trace(...sources: string[]): (...args: any[]) => void;
    interface SimplifyString extends String {
        simplified: string;
    }
    namespace SimplifyString {
        function is(value: unknown): value is SimplifyString;
        function get(value: unknown): string;
    }
    function simplify(segments: TemplateStringsArray, ...interpolations: unknown[]): SimplifyString;
    function simplify(mainLog: string, simplified: string): SimplifyString;
    /**
     * Returns a combination of the object's constructor and the result of calling `toString` on it.
     *
     * If the `toString` result is redundant or useless, it is omitted.
     *
     * The resulting string will be automatically simplified when reported to the error server.
     */
    function objectToString(object?: object): string;
}
declare class NullLog extends BaseLog {
    setup(): void;
}
export declare const nullLog: NullLog;
export default Log;
