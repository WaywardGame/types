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
/// <reference types="node" />
import type { IMatchmakingServer, INapiDiscordPresenceInfo, IRemoteFile, ISteamFriend, ISteamId, ISteamworksNetworking, IWaywardPreload, IWorkshopItem, LobbyType } from "@hosts/shared/interfaces";
import EventEmitter from "event/EventEmitter";
import { ModType } from "mod/IModInfo";
import type { ServerInfo } from "multiplayer/IMultiplayer";
import type { IDedicatedServerInfo, IModPath, ISteamworksEvents } from "steamworks/ISteamworks";
export default class Steamworks extends EventEmitter.Host<ISteamworksEvents> {
    private steamId;
    private betaName;
    private buildTime;
    private overlayWorks;
    private runningOnSteamDeck;
    private runningOnBatteryPower;
    private floatingTextInputFocused;
    private floatingTextInputBlurTime;
    private initializingMods;
    private logsPath;
    private backupsPath;
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
    private _automaticallyJoinServer;
    private _dedicatedServerInfo;
    private _nextBackupTime;
    private _currentLobbyId;
    private _multiplayerLogs;
    private importingSaveGameMod;
    private relayNetworkStatus;
    private _isGameOverlayActive;
    private _isTraceRecording;
    private _osPlatform;
    private _intervalIds;
    get isGameOverlayActive(): boolean;
    get isRunningOnSteamDeck(): boolean;
    get isRunningOnBatteryPower(): boolean;
    isElectron(): boolean;
    getOsPlatform(): NodeJS.Platform | undefined;
    reload(): Promise<void>;
    openGpuInfoWindow(): void;
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
    initialize(): Promise<IWaywardPreload | undefined>;
    enableSafePaths(): void;
    onUnload(): void;
    setFullscreen(fullscreen: boolean): Promise<void>;
    setCustomTitleBar(enabled: boolean): Promise<void>;
    setOverlayWorks(overlayWorks: boolean): void;
    setupMods(): Promise<void>;
    getSteamId(): ISteamId | undefined;
    getFriends(): ISteamFriend[] | undefined;
    getScreenName(): string | undefined;
    isDevelopmentBranch(): boolean;
    getBuildTime(): number | undefined;
    getPublishedMods(): IWorkshopItem[] | undefined;
    getStatInt(name: string): number | undefined;
    incrementStat(name: string): void;
    getGlobalStatInt(name: string): number | undefined;
    isContentTracingRecording(): boolean;
    toggleContentTracingRecording(): Promise<boolean>;
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
    openModsFolder(): Promise<void>;
    openModFolder(modIndex: number): Promise<void>;
    openLogsFolder(): void;
    openBackupsFolder(): void;
    unsubscribe(publishId: string): Promise<void>;
    toggleDeveloperTools(): Promise<void>;
    getModPath(name: string, modType: ModType, file?: string, checkIfExists?: boolean): Promise<IModPath | undefined>;
    getModPathSync(name: string, modType: ModType, file?: string): IModPath | undefined;
    createSaveGameMod(name: string, slot: number): Promise<boolean>;
    /**
     * Do not remove callback. It's required for compatibility with pre 2.4 saves
     */
    importFromSaveGameMod(modIndex: number, jsonOrUint8Array: string | Uint8Array, callback?: (success: boolean) => void): Promise<boolean>;
    deleteSaveGameMod(name: string): Promise<void>;
    saveFile(fileName: string, blob: Blob): Promise<void>;
    hasServerToJoin(): boolean;
    getServerToJoin(): ServerInfo | undefined;
    setServerToJoin(serverToJoin: ServerInfo, automatic?: boolean): void;
    clearServerToJoin(): void;
    shouldAutomaticallyJoinServer(): boolean | undefined;
    processDedicatedServerBackups(force?: boolean): Promise<boolean>;
    protected onGlobalSlotLoaded(): void;
    writeBackup(slot: number, data: Uint8Array): Promise<string | undefined>;
    private _writeBackupFile;
    onInputFocus(inputElement: HTMLElement): void;
    private onFloatingGamepadTextInputDismissed;
    setupMultiplayerLog(): void;
    getMultiplayerLogs(): string;
    multiplayerLog(...args: any[]): void;
    multiplayerLogWarn(...args: any[]): void;
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
    private emitJoinRequest;
    /**
     * Called when the steam relay network status changes
     */
    private onRelayNetworkStatus;
    /**
     * Called when a remote steam id is trying to send us a message
     */
    private onSteamNetworkingMessagesSessionRequest;
    /**
     * Called when a networking messages session fails
     */
    private onSteamNetworkingMessagesSessionFailed;
    setSteamNetworkingSendRates(min: number, max: number): void;
    /**
     * Insanely expensive to do and it's possible for it to cause crashes
     */
    activateSteamNetworkingDebugMessages(): void;
    private createFolderIfNotExists;
    private getSyncPath;
    private getSharePathForModZip;
    private getSharePathForModImage;
    private getFilesInFolder;
    private processArguments;
    private logDebugInfo;
}
