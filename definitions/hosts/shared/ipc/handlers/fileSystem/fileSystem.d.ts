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
import * as fs from "fs";
import type { IFileSystem } from "../../fileSystem";
export declare class SharedFileSystemIPCHandler implements IFileSystem {
    private readonly shell;
    private safePathsEnabled;
    readonly safePaths: Set<string>;
    readonly safeFileWritePaths: Set<string>;
    private readonly logFile;
    constructor(defaultSafePaths: string[], shell: {
        openExternal(url: string): Promise<void>;
        openPath(path: string): Promise<string>;
    } | undefined);
    addSafePath(path: string): Promise<void>;
    addSafeFileWritePath(filePath: string): Promise<void>;
    enableSafePaths(): Promise<void>;
    openExternal(url: string): Promise<void>;
    openPath(path: string): Promise<string>;
    setLogsPath(path: string): Promise<void>;
    appendLogFile(message: string): Promise<void>;
    closeLogFile(): Promise<void>;
    copy(source: string, destination: string, dereference?: boolean, ignoredDirectories?: string[]): Promise<void>;
    stat(path: string): Promise<{
        atime: Date;
        mtime: Date;
        ctime: Date;
        size: number;
        isFile: boolean;
        isDirectory: boolean;
        isSymbolicLink: boolean;
    }>;
    createWriteStream(path: string, opt: any): Promise<fs.WriteStream>;
    mkdir(path: string, opt?: {
        recursive: boolean;
    }): Promise<void>;
    pathExists(path: string): Promise<boolean>;
    readdir(path: string): Promise<string[]>;
    readFile(path: string, encoding: "utf8" | undefined): Promise<any>;
    remove(path: string): Promise<void>;
    writeFile(path: string, data: any, opt: fs.WriteFileOptions): Promise<void>;
    private ensurePathSafety;
}
