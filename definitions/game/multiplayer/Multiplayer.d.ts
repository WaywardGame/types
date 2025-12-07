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
import type { IMultiplayerServerToJoin } from "@wayward/game/game/IGame";
import Player from "@wayward/game/game/entity/player/Player";
import type Island from "@wayward/game/game/island/Island";
import type { IJoinServerOptions, IMultiplayerEvents, IMultiplayerOptions, IMultiplayerRunSafelyOptions, PacketTarget, ServerInfo } from "@wayward/game/multiplayer/IMultiplayer";
import { DisconnectReason, JoinServerRetryReason, MultiplayerSyncCheck, MultiplayerSyncCheckLevel, UnableToJoinReason } from "@wayward/game/multiplayer/IMultiplayer";
import type { IMatchmakingInfo } from "@wayward/game/multiplayer/matchmaking/IMatchmaking";
import type { IConnection } from "@wayward/game/multiplayer/networking/IConnection";
import type { IPacket } from "@wayward/game/multiplayer/packets/IPacket";
import DesyncPacket from "@wayward/game/multiplayer/packets/server/DesyncPacket";
import type { IServerMod } from "@wayward/hosts/shared/interfaces";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export default class Multiplayer extends EventEmitter.Host<IMultiplayerEvents> {
    /**
     * Static steam account id when steam support is on
     * Otherwise it will be a random guid that persists
     */
    private _playerIdentifier;
    /**
     * A secret string that's stored in localStorage that helps authorize players to servers.
     */
    private readonly _clientSecret;
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
    private _steamNetworkConnectionWebRTCFallbackTimeoutId;
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
    private _keepAliveTimeoutsPaused;
    private _currentPacketProcessing;
    private _currentSyncPacketsWaiting;
    private _currentSyncPacketsProcessing;
    private _activeSyncCheck;
    private _enabledSyncChecks;
    private readonly _recentHashedSyncChecks;
    private _recentPackets;
    private _syncChecksSuppressed;
    private _syncCheckStack;
    private _disconnectingFromSyncIssue;
    private _reportedSyncHashMismatch;
    private readonly _autoJoinOptions;
    private _ipAddress;
    private readonly _matchmakingSecret;
    constructor();
    get isConnected(): boolean;
    get isPacketProcessingPaused(): boolean;
    get isProcessingPacket(): boolean;
    get isServer(): boolean;
    get isClient(): boolean;
    get areSyncChecksSuppressed(): boolean;
    getPlayerIdentifier(): string;
    setPlayerIdentifier(identifier: string): void;
    get options(): ImmutableObject<IMultiplayerOptions>;
    setOptions(options: IMultiplayerOptions, updateGame?: boolean): void;
    updateOptions(updates: Partial<IMultiplayerOptions>): void;
    /**
     * Helper method for updating sync checks
     * multiplayer.updateSyncChecks("normal")
     * multiplayer.updateSyncChecks("verbose")
     */
    updateSyncChecks(syncChecks: boolean | MultiplayerSyncCheckLevel | MultiplayerSyncCheck[]): void;
    private parseSyncChecks;
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
    createServer(serverInfo: ServerInfo): void;
    joinServer(serverToJoin: IMultiplayerServerToJoin, options?: Partial<IJoinServerOptions>): Promise<void>;
    rejoinServer(options?: {
        randomizeIdentifier?: boolean;
        automaticallyRetry?: boolean;
        enableSteamNetworkConnections?: boolean;
    }): Promise<boolean>;
    /**
     * Disconnects from multiplayer
     * Callable from a server or client
     * If a client is in a game, disconnectAndResetGameState should be called
     * @returns True when it disconnected. False is there was nothing to disconnect
     */
    disconnect(reason: DisconnectReason, args?: any[], unloadingOrResetGameState?: boolean): Promise<boolean>;
    displayJoinServerRetryDialog(matchmakingInfo: IMatchmakingInfo | undefined, retryReason: JoinServerRetryReason): Promise<void>;
    disconnectAndResetGameState(reason: DisconnectReason.UnableToJoinGame, unableToJoinReason: UnableToJoinReason): Promise<void>;
    disconnectAndResetGameState(reason: DisconnectReason, reasonDescription?: any[]): Promise<void>;
    /**
     * Sanity checks for the state of multiplayer
     * @returns True when the state is invalid
     */
    verifyState(): boolean;
    kick(player: Player, reason: DisconnectReason.Kick | DisconnectReason.Banned): void;
    onPlaying(): Promise<void>;
    onLobbyEntered(success: boolean, lobbyId: string): void;
    onLobbyExited(lobbyId: string): void;
    getClients(): IConnection[];
    closeConnection(reason: DisconnectReason, connection: IConnection): boolean;
    sendConnectPacket(): void;
    removePlayers(reason: DisconnectReason): void;
    removePlayer(connection: IConnection, reason: DisconnectReason): void;
    sendPacket(packet: IPacket, exclude?: PacketTarget): void;
    sendPacketTo(to: PacketTarget, packet: IPacket, force?: boolean): void;
    /**
     * Executes a function while ensuring it is runs outside the context of any executing actions/multiplayer logic in order to prevent desyncs
     * @param lambda Function to execute
     */
    executeClientside(lambda: () => any): void;
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
    syncPacket<T = any>(packet: IPacket, clientSide: NullaryFunction<T>, checkId: boolean, wait: boolean | number): PromiseOr<T | undefined>;
    markCurrentProcessingPacket(packetId: number, processing: boolean): void;
    resolveSyncPacketWaiting(packet: IPacket, wait: number): void;
    resolveSyncPacketsWaiting(waitId?: string, value?: unknown): void;
    private pauseIncomingPacketProcessing;
    /**
     * Execute an async function while applying some temporary state changes
     */
    runSafely<T = void>(executor: () => Promise<T>, options: IMultiplayerRunSafelyOptions): Promise<T>;
    updatePlayerId(oldPid: number, newPid: number): void;
    suppressSyncChecks(suppress: boolean): void;
    syncGameState(): Promise<void>;
    isKeepAliveTimeoutPaused(): boolean;
    pauseKeepAliveTimeouts(): void;
    resumeKeepAliveTimeouts(): void;
    getServerMods(): IServerMod[];
    updateGlobalServerDirectory(): void;
    checkConnection(): Promise<void>;
    /**
     * Checks if a sync check is active and enabled.
     * Active means there's a current sync check being recorded
     */
    isSyncCheckEnabled(syncCheck: MultiplayerSyncCheck): boolean;
    addSyncCheck(syncCheck: MultiplayerSyncCheck, value: any, addStackTrace?: boolean): void;
    addSyncCheckWithSeed(island: Island, syncCheck: MultiplayerSyncCheck, ...messages: any[]): void;
    addBeforeSyncChecks(packet: IPacket): void;
    addAfterSyncChecks(packet: IPacket): void;
    sendChatMessage(sender: Player, message: string): Promise<void>;
    private addDefaultSyncChecks;
    /**
     * Returns sync check hashes
     * @returns [all sync checks hash, enabled sync checks hash]
     */
    private getPacketSyncChecks;
    private recordHashedSyncCheck;
    private filterEnabledSyncChecks;
    private hashSyncCheckHash;
    private clearJoinServerRetryTimeout;
    createOrExtendSteamNetworkConnectionWebRTCFallbackTimer(timeoutTime: number): void;
    clearSteamNetworkConnectionWebRTCFallbackTimer(): void;
    private startMatchmakingServer;
    private stopMatchmakingServer;
    private setupClientConnection;
    private connectGlobalMatchmakingServer;
    private disconnectGlobalMatchmakingServer;
    private connectDedicatedMatchmakingServer;
    private disconnectDedicatedMatchmakingServer;
    private onMatchmakingMessage;
    /**
     * Called when a multiplayer connection is established to a server.
     * This is only called on the client side.
     */
    private _onConnected;
    private _sendConnectPacket;
    private onConnectionData;
    private serverPacketTick;
    private clientPacketTick;
    private processIncomingPackets;
    private processOutgoingPackets;
    private processPacket;
    private synchronizationCheck;
    private logSyncCheckErrors;
    private sendDesyncPacket;
    processDesyncPacket(connection: IConnection, desyncPacket: DesyncPacket): void;
    private sendPacketInternal;
    private onStateChange;
    private convertToMatchmakingInfo;
    private getSyncPacketWaitId;
    private refreshLobbySteamRelayStatus;
    private onRelayNetworkStatus;
    /**
     * Called when a remote steam id is trying to send us a message
     */
    private onSteamNetworkingMessagesSessionRequest;
    /**
     * Called when we failed to connect to a remote steam id
     */
    private onSteamNetworkingMessagesSessionFailed;
    private refreshEnabledSyncChecks;
}
