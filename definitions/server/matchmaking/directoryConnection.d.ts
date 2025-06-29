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
import { EventEmitter } from "events";
import * as shared from "./shared";
export default class DirectoryConnection extends EventEmitter {
    private running;
    private _ipAddress;
    private webSocket;
    private processTimeoutId;
    private readonly servers;
    private readonly outgoingMessages;
    get ipAddress(): string | undefined;
    start(address: string): void;
    stop(): void;
    addOrUpdateServer(channel: string, updatedServerInfo: shared.IServer, ipAddress?: string): void;
    removeServer(channel: string): void;
    checkConnection(channel: string, ipAddress?: string): Promise<shared.ICheckConnectionServerDirectoryResponse>;
    private connect;
    private disconnect;
    private queueProcessMessagesTimer;
    private clearProcessMessagesTimer;
    private processMessages;
}
