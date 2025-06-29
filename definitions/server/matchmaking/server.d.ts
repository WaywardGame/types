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
import type * as express from "express";
import * as ws from "ws";
import DirectoryConnection from "./directoryConnection";
import * as shared from "./shared";
export default abstract class Server {
    protected expressApp: express.Application | undefined;
    protected directoryConnection: DirectoryConnection | undefined;
    port: number | undefined;
    protected readonly connections: Map<string, shared.ClientConnection>;
    connectCallback: ((connection: shared.ClientConnection, path: string | undefined) => void) | undefined;
    directoryConnectionConnectedCallback: ((directoryConnection: DirectoryConnection) => void) | undefined;
    readonly disconnectCallbacks: Map<string, () => void>;
    readonly messageCallbacks: Map<string, (data: ArrayBuffer) => void>;
    private server;
    private webSocketServer;
    isRunning(): boolean;
    start(port: number, disableServerDirectoryConnection?: boolean): string;
    stop(): void;
    getConnections(): Map<string, shared.ClientConnection>;
    protected getDirectoryConnectionAddress(): string | undefined;
    protected abstract getConnectionIdentifier(path: string | undefined, ipAddress: string): string | undefined;
    protected abstract onConnect(connection: shared.ClientConnection, ipAddress: string): void;
    protected abstract onDisconnect(connection: shared.ClientConnection): void;
    protected abstract onMessage(connection: shared.ClientConnection, data: ws.Data, ipAddress: string): void;
    private setupPingPong;
}
