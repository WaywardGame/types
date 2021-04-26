/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { ISteamworksNetworking } from "electron/interfaces";
import { IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { Connection } from "multiplayer/networking/Connection";
export declare class SteamNetworkConnection extends Connection {
    private readonly steamNetworking;
    private readonly hostSteamId;
    private readonly onData;
    private readonly onConnected?;
    private readonly connectGlobalMatchmakingServer?;
    name: string;
    private _processIntervalId;
    private _checkSessionStateIntervalId;
    constructor(steamNetworking: ISteamworksNetworking, hostSteamId: string, matchmakingInfo: IMatchmakingInfo | undefined, matchmakingIdentifier: string, onData: (data: ArrayBuffer) => void, onConnected?: ((matchmakingInfo: IMatchmakingInfo) => void) | undefined, connectGlobalMatchmakingServer?: (() => void) | undefined);
    /**
     * Steam id of the peer
     */
    get steamIdRemote(): string | undefined;
    close(): void;
    isConnected(): boolean;
    send(data: ArrayBuffer | Uint8Array): void;
    processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
    private checkSessionState;
    private processIncomingPackets;
}
