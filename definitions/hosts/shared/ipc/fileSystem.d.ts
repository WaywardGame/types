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
import type * as fs from "fs";
import type { IIPC } from "../ipc";
export declare const fileSystemIPC: IIPC<IFileSystem>;
export interface IFileSystem {
    addSafePath(path: string): Promise<void>;
    appendLogFile(message: string): Promise<void>;
    closeLogFile(): Promise<void>;
    copy(source: string, destination: string, dereference?: boolean, ignoredDirectories?: string[]): Promise<void>;
    enableSafePaths?(): Promise<void>;
    mkdir(path: string, opt?: any): Promise<void>;
    openExternal(url: string): Promise<void>;
    openPath(path: string): Promise<string>;
    pathExists(path: string): Promise<boolean>;
    readdir(path: string): Promise<string[]>;
    readFile(path: string, encoding: undefined): Promise<Uint8Array>;
    readFile(path: string, encoding: "utf8"): Promise<string>;
    remove(path: string): Promise<void>;
    setLogsPath(path: string): Promise<void>;
    stat(path: string): Promise<IFileStat>;
    writeFile(path: string, data: string | Uint8Array, opt?: fs.WriteFileOptions): Promise<void>;
}
export interface IFile extends IFileStat {
    name: string;
    path: string;
}
export interface IFileStat {
    atime: Date;
    mtime: Date;
    ctime: Date;
    size: number;
    isFile: boolean;
    isDirectory: boolean;
    isSymbolicLink: boolean;
}
