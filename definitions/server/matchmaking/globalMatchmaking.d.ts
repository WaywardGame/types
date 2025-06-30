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
export default class GlobalMatchmaking extends Server {
    private readonly channels;
    protected getDirectoryConnectionAddress(): string | undefined;
    protected getConnectionIdentifier(_: string | undefined): string | undefined;
    protected onConnect(_1: shared.ClientConnection, _2: string | undefined): void;
    protected onDisconnect(connection: shared.ClientConnection): void;
    protected onMessage(connection: shared.ClientConnection, data: ws.Data, ipAddress: string): void;
    private removeFromChannel;
    private addToChannel;
}
