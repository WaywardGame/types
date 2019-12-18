/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { Connection } from "multiplayer/networking/Connection";
import { ConnectionState } from "multiplayer/networking/IConnection";
/**
 * Connects to the host either using Steam Networking, WebRTC, or WebSockets (in that order)
 */
export declare class SmartConnection extends Connection {
    private readonly matchmakingInfo;
    readonly matchmakingIdentifier: string;
    private readonly config;
    private readonly sendMatchmakingMessage;
    private readonly onData;
    private readonly onConnected;
    private readonly connectGlobalMatchmakingServer;
    name: string;
    private _webRTCTimeoutId;
    private _webRTCConnection;
    private _hostIpAddress;
    private _steamNetworkTimeoutId;
    private _steamNetworkConnection;
    constructor(matchmakingInfo: IMatchmakingInfo, matchmakingIdentifier: string, config: RTCConfiguration, sendMatchmakingMessage: (message: MatchmakingMessageData) => void, onData: (data: ArrayBuffer) => void, onConnected: (matchmakingInfo: IMatchmakingInfo) => void, trySteamRelayNetwork: boolean, connectGlobalMatchmakingServer: () => void);
    getState(): ConnectionState;
    setState(state: ConnectionState): void;
    isConnected(): boolean;
    close(): void;
    send(data: ArrayBuffer | Uint8Array): void;
    processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
    private trySteamNetwork;
    private tryWebRTC;
    private tryWebSocket;
    private _onConnected;
}
