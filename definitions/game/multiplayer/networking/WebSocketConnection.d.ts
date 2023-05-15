/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IMatchmaking, IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { Connection } from "multiplayer/networking/Connection";
export declare class WebSocketConnection extends Connection {
    private readonly getMatchmaking;
    private readonly onData;
    private readonly onConnected?;
    name: string;
    get maxMessageSize(): number;
    constructor(matchmakingInfo: IMatchmakingInfo | undefined, matchmakingIdentifier: string, getMatchmaking: () => IMatchmaking | undefined, onData: (data: ArrayBuffer) => void, onConnected?: ((matchmakingInfo: IMatchmakingInfo) => void) | undefined);
    isConnected(): boolean;
    protected onClosing(): void;
    protected onClosed(): void;
    send(data: Uint8Array): boolean;
    processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
}
