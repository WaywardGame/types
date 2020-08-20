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
import EventEmitter from "event/EventEmitter";
import { ModType } from "mod/IModInfo";
import { IServerGameDetails, IServerServerDetails } from "multiplayer/matchmaking/IMatchmaking";
import { IDedicatedServerInfo, IModPath, ISteamFriend, ISteamId, ISteamNetworking as ISteamworksNetworking, ISteamworksEvents, IWorkshopItem, LobbyType } from "steamworks/ISteamworks";
interface IRemoteFile {
    name: string;
    size: number;
}
interface IMatchmakingServer {
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
    updateName(name: string): void;
    updateDirectory(serverDetails: Partial<IServerServerDetails>, gameDetails: IServerGameDetails): void;
    checkConnection(): Promise<{
        webRtcWorks: boolean;
        webSocketWorks: boolean;
    }>;
    getConnections(): Map<string, IMatchmakingServerConnection>;
}
interface IMatchmakingServerConnection {
    send(data: ArrayBuffer | Uint8Array): void;
}
export default class Steamworks extends EventEmitter.Host<ISteamworksEvents> {
    private steamId;
    private betaName;
    private buildTime;
    private overlayWorks;
    private initializingMods;
    private logsPath;
    private backupPath;
    private modsPath;
    private workshopPath;
    private workshopModsPath;
    private workshopSyncPath;
    private workshopSharePath;
    private readonly loadedMods;
    private publishedMods;
    private readonly workshopUrl;
    private readonly workshopFileUrl;
    private readonly ignoredDirectories;
    private _serverToJoin;
    private _dedicatedServerInfo;
    private _nextBackupTime;
    private _currentLobbyId;
    private _multiplayerLogs;
    private importingSaveGameMod;
    private relayNetworkStatus;
    private _isGameOverlayActive;
    get isGameOverlayActive(): boolean;
    isElectron(): boolean;
    reload(): void;
    closeWindow(): void;
    isOverlayWorking(): boolean;
    isGreenworksEnabled(): boolean;
    isNapiEnabled(): boolean;
    isRelayNetworkReady(): boolean;
    getAbsolutePath(...p: string[]): string;
    isAbsolutePath(path: string): boolean;
    getAppPath(...p: string[]): string;
    isUsingAsar(): boolean;
    isTestMode(): boolean;
    isDedicatedServer(): boolean;
    getDedicatedServerInfo(): IDedicatedServerInfo | undefined;
    getMatchmakingServer(): IMatchmakingServer | undefined;
    getSteamNetworking(): ISteamworksNetworking | undefined;
    initialize(): Promise<void>;
    enableSafePaths(): void;
    onUnload(): void;
    setOverlayWorks(overlayWorks: boolean): void;
    setupMods(): Promise<void>;
    getSteamId(): ISteamId | undefined;
    getFriends(): ISteamFriend[] | undefined;
    getScreenName(): string | undefined;
    getBetaName(): string;
    getBuildTime(): number | undefined;
    getPublishedMods(): IWorkshopItem[] | undefined;
    getStatInt(name: string): number | undefined;
    incrementStat(name: string): void;
    getGlobalStatInt(name: string): number | undefined;
    startPlaytimeTracking(): void;
    stopPlaytimeTracking(): void;
    setSteamRichPresence(key: string, value: string): boolean;
    clearSteamRichPresence(): void;
    updateSteamRichPresence(): void;
    updateDiscordPresence(): void;
    setDiscordPresence(presenceInfo: INapiDiscordPresenceInfo): Promise<void>;
    getLobbyId(): string | undefined;
    isInLobby(): boolean;
    createLobby(type: LobbyType): void;
    setLobbyType(type: LobbyType): boolean;
    leaveLobby(): void;
    joinLobby(lobbyId: string): void;
    getLobbyData(name: string): string | undefined;
    setLobbyData(name: string, data: string): boolean;
    getLobbyOwner(): string | undefined;
    getLobbyMembers(): ISteamFriend[] | undefined;
    getPublishedMod(publishFileId: string): IWorkshopItem | undefined;
    fillOutWorkshopMod(index: number, item?: IWorkshopItem): void;
    publishMod(modIndex: number): Promise<string>;
    createArchive(id: string): Promise<void>;
    getPublishedItems(): Promise<IWorkshopItem[]>;
    openUrl(url: string): void;
    openWorkshop(publishId?: string): Promise<void>;
    openInviteDialog(): void;
    openSaveFolder(): void;
    openModsFolder(): void;
    openLogsFolder(): void;
    unsubscribe(publishId: string): Promise<void>;
    sendMessage(name: string, ...data: any[]): boolean;
    onMessage(name: string, listener: (e: any, ...data: any[]) => any): boolean;
    toggleDeveloperTools(): void;
    getModPath(name: string, modType: ModType, file?: string, checkIfExists?: boolean): IModPath | undefined;
    createSaveGameMod(name: string, slot: number): Promise<boolean>;
    /**
     * Do not remove callback. It's required for compatibility with pre 2.4 saves
     */
    importFromSaveGameMod(modIndex: number, json: string, callback?: (success: boolean) => void): Promise<boolean>;
    deleteSaveGameMod(name: string): void;
    hasServerToJoin(): boolean;
    onReady(): void;
    processBackups(force?: boolean): Promise<boolean>;
    setupMultiplayerLog(): void;
    getMultiplayerLogs(): string;
    multiplayerLog(...args: any[]): void;
    multiplayerLogError(...args: any[]): void;
    enumerateRemoteFiles(): IRemoteFile[];
    private initializeGreenworks;
    private initializeNapi;
    private setupAndInitializeWorkshopMods;
    private setupWorkshopMods;
    private initializeModsFromFolder;
    private enumerateInstalledWorkshopMods;
    private refreshSetupMods;
    private cleanupTemporaryLocalFiles;
    private cleanupTemporaryRemoteFiles;
    private refreshPublishedMods;
    private getIdFromWorkshopItem;
    private syncWorkshopItems;
    private ugcSynchronizeItems;
    private copyFolder;
    /**
     * Steam cloud files only have file names (not paths)
     * The mod.png file should be uploaded with a unique name (not mod.png)
     */
    private copyImage;
    private saveFilesToCloud;
    private shareFilesInCloud;
    private publishFileToWorkshop;
    private extractArchive;
    private safeOpenFolder;
    private onGameOverlayActive;
    private onLobbyCreated;
    private onLobbyEntered;
    private onLobbyChatUpdate;
    /**
     * Called when the user tries to join a lobby from their friends list or from an invite. The game client should attempt to connect to specified lobby when this is received. If the game isn't running yet then the game will be automatically launched with the command line parameter +connect_lobby <64-bit lobby Steam ID> instead.
     */
    private onLobbyJoinRequested;
    /**
     * Called when the steam relay network status changes
     */
    private onRelayNetworkStatus;
    /**
     * Called when a remote steam id is trying to send us a message
     */
    private onP2PSessionRequest;
    /**
     * Called when we failed to connect to a remote steam id
     */
    private onP2PSessionConnectFail;
    private showCharacterSelectionForMultiplayer;
    private createFolderIfNotExists;
    private getSyncPath;
    private getSharePathForModZip;
    private getSharePathForModImage;
    private getFilesInFolder;
    private processArguments;
    private logDebugInfo;
}
export {};
