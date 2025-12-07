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
import type { IMultiplayerOnConnected } from "@wayward/game/multiplayer/IMultiplayer";
import type { IMatchmakingInfo, MatchmakingMessageData } from "@wayward/game/multiplayer/matchmaking/IMatchmaking";
import { Connection } from "@wayward/game/multiplayer/networking/Connection";
import { ConnectionState } from "@wayward/game/multiplayer/networking/IConnection";
/**
 * Connects to the host either using Steam Networking, WebRTC, or WebSockets (in that order)
 */
export declare class SmartConnection extends Connection {
    private readonly matchmakingInfo;
    readonly matchmakingIdentifier: string;
    private readonly webRTCConfig;
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
    private _webWorkerConnection;
    constructor(matchmakingInfo: IMatchmakingInfo, matchmakingIdentifier: string, webRTCConfig: RTCConfiguration, sendMatchmakingMessage: (message: MatchmakingMessageData) => void, onData: (data: ArrayBufferLike) => void, onConnected: (data: IMultiplayerOnConnected) => void, trySteamRelayNetwork: boolean, connectGlobalMatchmakingServer: () => void);
    private get activeConnection();
    get isSteamNetworkConnection(): boolean;
    get isConnected(): boolean;
    getState(): ConnectionState;
    setState(state: ConnectionState): void;
    get maxMessageSize(): number;
    close(closeImmediately: boolean): void;
    protected onClosing(): void;
    protected onClosed(): void;
    addKeepAliveTimeout(): void;
    sendKeepAlive(): void;
    clearTimeout(): boolean;
    send(data: Uint8Array<ArrayBuffer>, byteOffset: number, length?: number): boolean;
    processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
    private trySteamNetwork;
    private tryWebRTC;
    private tryWebSocket;
    private tryWebWorker;
    private _onConnected;
}
