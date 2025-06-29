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
import type { IIPCHandler } from "../../../../main/ipc/interfaces";
import { SharedFileSystemIPCHandler } from "../../../../../shared/ipc/handlers/fileSystem/fileSystem";
import type { IFileSystem } from "../../../../../shared/ipc/fileSystem";
export declare class FileSystemIPCHandler extends SharedFileSystemIPCHandler implements IIPCHandler<IFileSystem> {
    readonly ipc: import("@wayward/hosts/shared/ipc").IIPC<IFileSystem>;
}
