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
import type { ISteamworksNetworking } from "@hosts/shared/interfaces";
import type { IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { Connection } from "multiplayer/networking/Connection";
export declare class SteamNetworkConnection extends Connection {
    private readonly steamNetworking;
    private readonly hostSteamId;
    private readonly onData;
    private readonly onConnected?;
    private readonly connectGlobalMatchmakingServer?;
    name: string;
    readonly maxMessageSize = 262144;
    private _processIntervalId;
    private _checkSessionStateIntervalId;
    constructor(steamNetworking: ISteamworksNetworking, hostSteamId: string, matchmakingInfo: IMatchmakingInfo | undefined, matchmakingIdentifier: string, onData: (data: ArrayBuffer) => void, onConnected?: ((matchmakingInfo: IMatchmakingInfo) => void) | undefined, connectGlobalMatchmakingServer?: (() => void) | undefined);
    /**
     * Steam id of the peer
     */
    get steamIdRemote(): string | undefined;
    protected onClosing(): void;
    protected onClosed(): void;
    isConnected(): boolean;
    send(data: ArrayBuffer | Uint8Array): boolean;
    processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
    private checkSessionState;
    private processIncomingPackets;
}