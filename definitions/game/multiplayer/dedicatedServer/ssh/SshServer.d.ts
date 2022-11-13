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
import type * as ssh2 from "ssh2";
import type { IFileSystem } from "@hosts/shared/ipc/fileSystem";
export interface ISshServerOptions {
    ssh2: typeof ssh2;
    crypto: any;
    fs: IFileSystem;
    serverName: string;
    port: number;
    serverKeyPath: string;
    publicKeyPath: string;
    username: string;
    password?: string;
}
export declare function start(options: ISshServerOptions): Promise<void>;
