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
import * as ws from "ws";
import Server from "./server";
import * as shared from "./shared";
export default class GlobalServerDirectory extends Server {
    private readonly servers;
    private readonly serverConnections;
    private hasGlobalMatchmakingServerConnection;
    constructor();
    protected getConnectionIdentifier(_: string | undefined, ipAddress: string): string | undefined;
    protected onConnect(connection: shared.ClientConnection, ipAddress: string): void;
    protected onDisconnect(connection: shared.ClientConnection): void;
    protected onMessage(connection: shared.ClientConnection, data: ws.Data, ipAddress: string): void;
    private sendResponse;
    private checkConnection;
    /**
     * Connects to the servers websocket
     * @param serverAddress Address to connect to
     */
    private checkWebSocketConnection;
    private getApiV1Route;
    private isValidServer;
}
