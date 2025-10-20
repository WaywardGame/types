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
import type { HeapStatistics } from "electron";
import type { IOS } from "./ipc/os";
import type { IFileSystem } from "./ipc/fileSystem";
import type { IElectron } from "./ipc/electron";
export interface IWaywardPreload {
    hostContextBridge: IHostContextBridge;
    appPath: string;
    arch: string;
    argv: string[] | undefined;
    installPath: string;
    isTestMode: boolean;
    testClientId?: string;
    versions: Record<string, string>;
    electronRequire?: any;
}
export interface IHostContextBridge {
    crypto: any;
    electron: IElectron | undefined;
    fileSystem: IFileSystem;
    greenworks: ISteamworks | undefined;
    matchmakingServer: IMatchmakingServer | undefined;
    napi: INapi | undefined;
    os: IOS;
    path: IPath;
    ssh2: any;
    getHeapStatistics(): HeapStatistics;
    takeHeapSnapshot(filePath: string): boolean;
}
export interface ISteamworks {
    UGCMatchingType: {
        Items: number;
    };
    UserUGCListSortOrder: {
        CreationOrderAsc: number;
    };
    UserUGCList: {
        Published: number;
    };
    networking: ISteamworksNetworking;
    Utils: {
        createArchive(target: string, src: string, success: () => void, failure: (err: string) => void): void;
        extractArchive(src: string, dest: string): Promise<void>;
    };
    initialize(): void;
    shutdown(): void;
    runCallbacks(): void;
    getFriends(): ISteamFriend[];
    getStatInt(name: string): number | undefined;
    setStat(name: string, value: number): void;
    storeStats(cb: (err: string | null) => void): void;
    getGlobalStatInt(name: string, count: number): number | undefined;
    startPlaytimeTracking(publishFileIds: number[]): void;
    stopPlaytimeTracking(): void;
    setRichPresence(key: string, value: string): boolean;
    clearRichPresence(): void;
    createLobby(type: LobbyType): void;
    setLobbyType(lobbyId: string, type: LobbyType): boolean;
    joinLobby(lobbyId: string): void;
    leaveLobby(lobbyId: string): void;
    getLobbyData(lobbyId: string, name: string): string | undefined;
    setLobbyData(lobbyId: string, name: string, value: string): boolean;
    getLobbyOwner(lobbyId: string): string | undefined;
    getLobbyMembers(lobbyId: string): ISteamFriend[] | undefined;
    ugcGetUserItems(type: number, sort: number, listType: number, cb: (err: string | null, items: IWorkshopItem[]) => void): void;
    ugcSynchronizeItems(path: string, cb: (err: string | null, items: IWorkshopItem[]) => void): void;
    ugcSubscribe(publishFileId: string, cb: (err: string | null) => void): void;
    ugcUnsubscribe(publishFileId: string, cb: (err: string | null) => void): void;
    saveFilesToCloud(files: string[], cb: (err: string | null) => void): void;
    publishWorkshopFile(path: string, imagePath: string, title: string, description: string, tags: string[], cb: (err: string | null, publishedFileId2: string) => void): void;
    updatePublishedWorkshopFile(publishFileId: string, path: string, imagePath: string, title: string, description: string, tags: string[], cb: (err: string | null, publishedFileId2: string) => void): void;
    fileShare(path: string, cb: (err: string | null) => void): void;
    activateGameOverlayToWebPage(url: string): void;
    activateGameOverlayInviteDialog(lobbyId: string): void;
    ugcShowOverlay(publishFileId?: string): void;
    getCurrentGameInstallDir(): string;
    getSteamId(): ISteamId;
    getCurrentBetaName(): string;
    getBetas(): ISteamBeta[];
    setActiveBeta(name: string): boolean;
    onGameOverlayActive(cb: (isActive: boolean) => void): void;
    onLobbyCreated(cb: (success: boolean, lobbyId: string, result?: number) => void): void;
    onLobbyEntered(cb: (success: boolean, lobbyId: string, result?: number) => void): void;
    onLobbyChatUpdate(cb: (lobbyId: string, steamIdUserChanged: string, state: number) => void): void;
    onLobbyJoinRequested(cb: (lobbyId: string | undefined) => void): void;
    getFileCount(): number;
    getFileNameAndSize(index: number): IRemoteFile;
    deleteRemoteFile(name: string): void;
    getCurrentBatteryPower(): number;
    isSteamRunningOnSteamDeck(): boolean;
    showFloatingGamepadTextInput(nTextFieldXPosition: number, nTextFieldYPosition: number, nTextFieldWidth: number, nTextFieldHeight: number): boolean;
    dismissFloatingGamepadTextInput(): boolean;
    setFloatingGamepadTextInputDismissedCallback(cb: () => void): void;
    overlayNeedsPresent(): boolean;
    isGameOverlayEnabled(): boolean;
    getInputType(): SteamInputType;
    setTimelineGameMode(timelineGameMode: SteamTimelineGameMode): void;
    addTimelineEvent(marker: SteamTimelineMarker, title: string, description: string, clipPriority: SteamTimelineEventClipPriority): void;
}
export interface ISteamworksNetworking {
    initRelayNetworkAccess(): undefined;
    getRelayNetworkStatus(): ISteamNetworkRelayStatus;
    acceptSessionWithUser(steamIdRemote: string): boolean;
    sendMessageToUser(steamIdRemote: string, data: Uint8Array): number;
    closeSessionWithUser(steamIdRemote: string): boolean;
    getSessionConnectionInfo(steamIdRemote: string): ISteamNetworkSessionConnectionInfo;
    receiveMessagesOnChannel(): Array<{
        steamIdRemote: string;
        data: Uint8Array;
    }> | undefined;
    setSteamNetworkingMessagesSessionRequestCallback(callback: (steamIdRemote: string) => void): void;
    setSteamNetworkingMessagesSessionFailedCallback(callback: (steamIdRemote: string, state: SteamNetworkingConnectionState, endReason: number) => void): void;
    setSteamNetworkingConnectionStatusCallback(callback: (steamIdRemote: string, state: SteamNetworkingConnectionState, endReason: number, oldState: SteamNetworkingConnectionState) => void): void;
    setSteamNetworkingSendRates(min: number, max: number): void;
    setSteamNetworkingDebugCallback(callback: (type: number, message: string) => void): void;
}
export interface ISteamBeta {
    buildId: number;
    name: string;
    description: string;
    flags: number;
}
export interface ISteamFriend {
    name?: string;
    steamId: string;
    staticAccountId: string;
    gameId?: string;
    lobbyId?: string;
}
export interface IWorkshopItem {
    file: string;
    fileName: string;
    isUpdated: boolean;
    timeCreated: number;
    timeUpdated: number;
    timeAddedToUserList: number;
    title: string;
    description: string;
    banned: boolean;
    acceptedForUse: boolean;
    publishedFileId: string;
    steamIDOwner: string;
}
export interface ISteamId {
    accountId: number;
    screenName: string;
    steamId: string;
    staticAccountId: string;
}
export interface IRemoteFile {
    name: string;
    size: number;
}
export interface ISteamNetworkRelayStatus {
    availabilitySummary: number;
    availabilityNetworkConfig: number;
    availabilityAnyRelay: number;
    debugMessage: string;
}
export interface ISteamNetworkSessionState {
    connectionActive: number;
    connecting: number;
    lastError: number;
    usingRelay: number;
}
export interface ISteamNetworkSessionConnectionInfo {
    state: SteamNetworkingConnectionState;
    endReason: number;
    connectionDescription: string;
    endDebug: string;
}
export declare enum SteamNetworkingConnectionState {
    k_ESteamNetworkingConnectionState_None = 0,
    k_ESteamNetworkingConnectionState_Connecting = 1,
    k_ESteamNetworkingConnectionState_FindingRoute = 2,
    k_ESteamNetworkingConnectionState_Connected = 3,
    k_ESteamNetworkingConnectionState_ClosedByPeer = 4,
    k_ESteamNetworkingConnectionState_ProblemDetectedLocally = 5
}
export interface IPath {
    resolve(...path: string[]): string;
    join(...path: string[]): string;
    basename(...path: string[]): string;
    extname(path: string): string;
    isAbsolute(path: string): boolean;
}
export interface INapi {
    discord: INapiDiscord | undefined;
}
export interface INapiDiscord {
    initialize(apiKey: string, appId?: string): void;
    shutdown(): void;
    runCallbacks(): void;
    setReadyCallback(callback: () => void): void;
    setJoinCallback(callback: (server: string) => void): void;
    setErrorCallback(callback: (error: string | number) => void): void;
    updatePresence(presenceInfo: INapiDiscordPresenceInfo): Promise<number> | void;
}
export interface INapiDiscordPresenceInfo {
    details: string;
    state?: string;
    largeImageKey?: string;
    largeImageText?: string;
    smallImageKey?: string;
    smallImageText?: string;
    multiplayerServerId?: string;
    multiplayerCurrentPlayers?: number;
    multiplayerMaxPlayers?: number;
}
export interface IMatchmakingServer {
    port: number | undefined;
    connectCallback: ((connection: IMatchmakingServerConnection, path: string | undefined) => void) | undefined;
    directoryConnectionConnectedCallback: ((directoryConnection: any) => void) | undefined;
    disconnectCallbacks: Map<string, () => void>;
    messageCallbacks: Map<string, (data: ArrayBuffer) => void>;
    ipAddress: string | undefined;
    isRunning(): boolean;
    start(port?: number, disableServerDirectoryConnection?: boolean): string;
    stop(): void;
    setLogCallback(logFunc: ((...args: any[]) => void) | undefined): void;
    updateDirectory(serverDetails: Partial<IServerServerDetails>, gameDetails: IServerGameDetails): void;
    checkConnection(): Promise<{
        webRtcWorks: boolean;
        webSocketWorks: boolean;
    }>;
    getConnections(): Map<string, IMatchmakingServerConnection>;
}
export interface IMatchmakingServerConnection {
    send(data: ArrayBuffer | Uint8Array): void;
}
export interface IServerServerDetails {
    worldId: string;
    name: string;
    description: string;
    hostPlayerName: string;
    hostPlayerId: string;
    lobbyType: LobbyType;
    region: string;
    code: string;
    isDedicatedServer: boolean;
    buildTime: number | undefined;
    gameVersion: string | undefined;
}
export interface IServerGameDetails {
    players: string[];
    maxPlayers: number;
    difficulty: number;
    pvp: boolean;
    tier: number;
    days: number;
    mods: IServerMod[];
    peaceful: boolean;
    milestoneModifiersAllowed: boolean;
    island: IServerIslandDetails;
    reputation?: number;
    alignment?: number;
}
export interface IServerMod {
    name: string;
    version: string;
    publishFileId?: string;
}
export interface IServerIslandDetails {
    position: {
        x: number;
        y: number;
    };
    biomeType: number;
}
export declare enum LobbyType {
    Private = 0,// only way to join the lobby is to invite to someone else
    FriendsOnly = 1,// shows for friends or invitees, but not in lobby list
    Public = 2,// visible for friends and in lobby list
    Invisible = 3
}
export declare enum SteamInputType {
    k_ESteamInputType_Unknown = 0,
    k_ESteamInputType_SteamController = 1,
    k_ESteamInputType_XBox360Controller = 2,
    k_ESteamInputType_XBoxOneController = 3,
    k_ESteamInputType_GenericGamepad = 4,// DirectInput controllers
    k_ESteamInputType_PS4Controller = 5,
    k_ESteamInputType_AppleMFiController = 6,// Unused
    k_ESteamInputType_AndroidController = 7,// Unused
    k_ESteamInputType_SwitchJoyConPair = 8,// Unused
    k_ESteamInputType_SwitchJoyConSingle = 9,// Unused
    k_ESteamInputType_SwitchProController = 10,
    k_ESteamInputType_MobileTouch = 11,// Steam Link App On-screen Virtual Controller
    k_ESteamInputType_PS3Controller = 12,// Currently uses PS4 Origins
    k_ESteamInputType_PS5Controller = 13,// Added in SDK 151
    k_ESteamInputType_SteamDeckController = 14,// Added in SDK 153
    k_ESteamInputType_Count = 15,
    k_ESteamInputType_MaximumPossibleValue = 255
}
export declare enum SteamTimelineGameMode {
    k_ETimelineGameMode_Invalid = 0,
    k_ETimelineGameMode_Playing = 1,
    k_ETimelineGameMode_Staging = 2,
    k_ETimelineGameMode_Menus = 3,
    k_ETimelineGameMode_LoadingScreen = 4,
    k_ETimelineGameMode_Max = 5
}
export declare enum SteamTimelineEventClipPriority {
    k_ETimelineEventClipPriority_Invalid = 0,
    k_ETimelineEventClipPriority_None = 1,
    k_ETimelineEventClipPriority_Standard = 2,
    k_ETimelineEventClipPriority_Featured = 3
}
export type SteamTimelineMarker = "steam_marker" | "steam_achievement" | "steam_attack" | "steam_bolt" | "steam_bookmark" | "steam_bug" | "steam_cart" | "steam_caution" | "steam_chat" | "steam_checkmark" | "steam_chest" | "steam_circle" | "steam_combat" | "steam_completed" | "steam_crown" | "steam_death" | "steam_defend" | "steam_diamond" | "steam_edit" | "steam_effect" | "steam_explosion" | "steam_fix" | "steam_flag" | "steam_gem" | "steam_group" | "steam_heart" | "steam_info" | "steam_invalid" | "steam_minus" | "steam_pair" | "steam_person" | "steam_plus" | "steam_purchase" | "steam_question" | "steam_ribbon" | "steam_screenshot" | "steam_scroll" | "steam_square" | "steam_star" | "steam_starburst" | "steam_timer" | "steam_transfer" | "steam_triangle" | "steam_trophy" | "steam_view" | "steam_x";
