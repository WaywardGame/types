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
import type * as ws from "ws";
import Server from "./server";
import * as shared from "./shared";
import type { IServerGameDetails, IServerServerDetails } from "@wayward/hosts-shared/interfaces";
export declare class DedicatedServer extends Server {
    private host;
    private readonly dedicatedServerId;
    stop(): void;
    setLogCallback(logFunc: ((...args: any[]) => void) | undefined): void;
    get ipAddress(): string | undefined;
    updateDirectory(serverDetails: Partial<IServerServerDetails>, gameDetails: IServerGameDetails): void;
    checkConnection(): Promise<shared.ICheckConnectionServerDirectoryResponse>;
    protected getDirectoryConnectionAddress(): string | undefined;
    protected getConnectionIdentifier(path: string | undefined): string | undefined;
    protected onConnect(connection: shared.ClientConnection, ipAddress: string): void;
    protected onDisconnect(connection: shared.ClientConnection): void;
    protected onMessage(clientConnection: shared.ClientConnection, data: ws.Data, _: string | undefined): void;
}
