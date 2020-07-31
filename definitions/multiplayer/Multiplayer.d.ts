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
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import { DisconnectReason, IJoinServerOptions, IMultiplayerEvents, IMultiplayerOptions, JoinServerRetryReason, MultiplayerSyncCheck, PacketTarget, ServerInfo, UnableToJoinReason } from "multiplayer/IMultiplayer";
import { IMatchmakingInfo } from "multiplayer/matchmaking/IMatchmaking";
import { IConnection } from "multiplayer/networking/IConnection";
import { IPacket } from "multiplayer/packets/IPacket";
export default class Multiplayer extends EventEmitter.Host<IMultiplayerEvents> {
    /**
     * Static steam account id when steam support is on
     * Otherwise it will be a random guid that persists
     */
    private _playerIdentifier;
    /**
     * Steam id - used for steam networking
     */
    private readonly _playerSteamId;
    private readonly _steamNetworking;
    private _isServer;
    private _server;
    private readonly _clients;
    private readonly _steamIdToClientMapping;
    private _joinServerTimeoutId;
    private _joinedMatchmakingInfo;
    private _connectedMatchmakingInfo;
    private _globalMatchmaking;
    private _globalMatchmakingRetryTimeoutId;
    private _dedicatedMatchmaking;
    private _dedicatedMatchmakingRetryTimeoutId;
    private _options;
    private _joinServerOptions;
    private _incomingPacketQueue;
    private _incomingPacketProcessingPaused;
    private _packetTickIntervalId;
    private _currentPacketProcessing;
    private _currentSyncPacketsWaiting;
    private _currentSyncPacketsProcessing;
    private _syncCheckStack;
    private _activeSyncCheck;
    private _syncChecksSuppressed;
    private _recentPackets;
    private _enabledSyncChecks;
    private _disconnectingFromSyncIssue;
    private _ipAddress;
    private readonly _matchmakingSecret;
    private readonly readBuffer;
    constructor();
    isConnected(): boolean;
    isReady(): boolean;
    isServer(): boolean;
    isClient(): boolean;
    isProcessingPacket(): boolean;
    getPlayerIdentifier(): string;
    getOptions(): IMultiplayerOptions;
    setOptions(options: IMultiplayerOptions, updateGame?: boolean): void;
    updateOptions(updates: Partial<IMultiplayerOptions>): void;
    enableSteamNetworkConnections(enable: boolean): void;
    getConnectedMatchmakingInfo(): IMatchmakingInfo | undefined;
    /**
     * Three types of game codes:
     * 1. Dedicated server code - ex. 1.2.3.4:1234
     * 2. Steam lobby code - ex. steam:109775241017071190
     * 3. Global matchmaking server id - ex. 87287724-49aa-e556-4145-3ed96c649a20
     */
    getConnectedGameCode(): string | undefined;
    isSteamLobby(gameCode: string): boolean;
    convertGameCodeToServerInfo(gameCode: string): ServerInfo;
    getDedicatedServerMatchmakingInfo(matchmakingServer: string, identifier?: string): IMatchmakingInfo;
    getBannedPlayers(): string[];
    setBanned(identifier: string, ban: boolean): boolean;
    createServer(serverInfo: ServerInfo, options?: IMultiplayerOptions): void;
    joinServer(serverInfo: ServerInfo, options?: Partial<IJoinServerOptions>): void;
    disconnect(reason?: DisconnectReason, args?: any[], unloading?: boolean): Promise<void>;
    displayJoinServerRetryDialog(matchmakingInfo: IMatchmakingInfo, retryReason: JoinServerRetryReason): Promise<void>;
    disconnectAndResetGameState(reason: DisconnectReason.UnableToJoinGame, unableToJoinReason: UnableToJoinReason): Promise<void>;
    disconnectAndResetGameState(reason?: DisconnectReason, reasonDescription?: any[]): Promise<void>;
    kick(player: Player, reason: DisconnectReason.Kick | DisconnectReason.Banned): void;
    onPlaying(): Promise<void>;
    onLobbyEntered(success: boolean, lobbyId: string): void;
    onLobbyExited(lobbyId: string): void;
    getClients(): IConnection[];
    closeConnection(reason: DisconnectReason, connection: IConnection): void;
    sendConnectPacket(): void;
    requestReconnections(): void;
    removePlayers(reason: DisconnectReason): void;
    removePlayer(connection: IConnection, reason: DisconnectReason): void;
    sendPacket(packet: IPacket, exclude?: PacketTarget): void;
    sendPacketTo(to: PacketTarget, packet: IPacket, force?: boolean): void;
    /**
     * Sends a packet in a synchronized way to the server or clients
     *
     * When ran as a server, clientSide() is called and the packet data is sent to all the clients.
     *
     * When ran as a client, the packet is sent to the server. The server is expected to call this method, which in turn sends the packet back to the client. When the client receives the packet, this method a second time and clientSide() is called.
     *
     * @param packet The packet
     * @param clientSide The method to run for the client or server.
     * @param checkId When true, this packet will not be sent to the server/client if the same packet is already being processed. When false, this packet will not be sent if any packet is already being processed. Useful when dealing with methods that could end up sending multiple packets while a packet is already being processed.
     * @param wait When true, the client will keep track of what packets it sent to the server. If the client calls this method again before the server responds, it will not send a duplicate packet. It will wait for the server to send the packet back before allowing another one to be sent. When true, it will keep track of duplicate packets based on the packet type. When it's a number, it will keep track of duplicate packets based on the packet type + the number.
     */
    syncPacket<T = any>(packet: IPacket, clientSide?: NullaryFunction<T>, checkId?: boolean, wait?: number | true): T | undefined;
    markCurrentProcessingPacket(packetId: number, processing: boolean): void;
    clearSyncPacketWaiting(packet: IPacket, wait: number): void;
    clearSyncPacketsWaiting(waitId?: string): void;
    pauseIncomingPacketProcessing(pause: boolean, clearQueue?: boolean): void;
    updatePlayerId(oldPid: number, newPid: number): void;
    suppressSyncChecks(suppress: boolean): void;
    syncGameState(): void;
    clearKeepAliveTimeouts(): void;
    addKeepAliveTimeouts(): void;
    updateGlobalServerDirectory(): void;
    checkConnection(): void;
    isSyncCheckEnabled(syncCheck: MultiplayerSyncCheck): boolean;
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any, addStackTrace?: boolean): void;
    addMiscSyncCheck(info: string): void;
    addBeforeSyncChecks(packet: IPacket): void;
    addAfterSyncChecks(packet: IPacket): void;
    private addDefaultSyncChecks;
    private getPacketSyncChecks;
    private clearJoinServerRetryTimeout;
    private startMatchmakingServer;
    private stopMatchmakingServer;
    private setupClientConnection;
    private connectGlobalMatchmakingServer;
    private disconnectGlobalMatchmakingServer;
    private connectDedicatedMatchmakingServer;
    private disconnectDedicatedMatchmakingServer;
    private onMatchmakingMessage;
    private _onConnected;
    private onConnectionData;
    private packetTick;
    private processIncomingPackets;
    private processOutgoingPackets;
    private processPacket;
    private synchronizationCheck;
    private desync;
    private sendPacketInternal;
    private _sendData;
    private onStateChange;
    private convertToMatchmakingInfo;
    private getSyncPacketWaitId;
    private refreshLobbySteamRelayStatus;
    private onRelayNetworkStatus;
    /**
     * Called when a remote steam id is trying to send us a message
     */
    private onP2PSessionRequest;
    /**
     * Called when we failed to connect to a remote steam id
     */
    private onP2PSessionConnectFail;
    private refreshEnabledSyncChecks;
}
