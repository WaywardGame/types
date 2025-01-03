/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IMatchmaking, IMatchmakingInfo, MatchmakingMessageData } from "@wayward/game/multiplayer/matchmaking/IMatchmaking";
export declare class Matchmaking implements IMatchmaking {
    private readonly info;
    private readonly onConnected;
    private readonly onCloseOrError;
    private readonly onMessage;
    private webSocket?;
    constructor(info: IMatchmakingInfo, onConnected: (matchmaking: IMatchmaking) => void, onCloseOrError: (matchmaking: IMatchmaking) => void, onMessage: (matchmaking: IMatchmaking, message: ArrayBuffer | MatchmakingMessageData) => Promise<void>);
    get identifier(): string;
    get channel(): string;
    get isConnected(): boolean;
    connect(): void;
    disconnect(): void;
    send(data: ArrayBuffer | Uint8Array | MatchmakingMessageData, channel?: string): void;
}
