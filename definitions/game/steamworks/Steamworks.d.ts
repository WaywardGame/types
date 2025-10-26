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
import type { Game } from "@wayward/game/game/Game";
import type Entity from "@wayward/game/game/entity/Entity";
import IActionContext from "@wayward/game/game/entity/action/IActionContext";
import { ModState, ModType } from "@wayward/game/mod/IModInformation";
import type { ModInformation } from "@wayward/game/mod/ModInformation";
import type { IJoinServerOptions, ServerInfo } from "@wayward/game/multiplayer/IMultiplayer";
import type { IDedicatedServerInfo, IModPath, ISteamworksEvents, RunningContext, SteamStatTypeValues } from "@wayward/game/steamworks/ISteamworks";
import { SteamStatArea } from "@wayward/game/steamworks/ISteamworks";
import type { ISteamBeta } from "@wayward/hosts/shared/interfaces";
import { type IMatchmakingServer, type INapiDiscordPresenceInfo, type IRemoteFile, type ISteamFriend, type ISteamId, type ISteamworksNetworking, type IWaywardPreload, type IWorkshopItem, type LobbyType } from "@wayward/hosts/shared/interfaces";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { IBuild, IBuildId } from "@wayward/hosts/shared/globalTypes";
export default class Steamworks extends EventEmitter.Host<ISteamworksEvents> {
    private readonly game;
    protected initialized: boolean;
    private steamId;
    private betaName;
    private _build;
    private overlayWorks;
    private runningOnSteamDeck;
    private runningOnSteamDeckDesktop;
    private runningOnBatteryPower;
    private floatingTextInputFocused;
    private floatingTextInputBlurTime;
    private timelineGameMode;
    private initializingMods;
    private logsPath;
    private backupsPath;
    private modsPath;
    private workshopPath;
    private workshopModsPath;
    private workshopSyncPath;
    private workshopSharePath;
    readonly loadedMods: Record<string, IWorkshopItem>;
    private publishedMods;
    private readonly workshopUrl;
    private readonly workshopFileUrl;
    /**
     * Files/directories ignored when uploads mods to steam workspace
     */
    private readonly ignoredDirectories;
    private _serverToJoin;
    private _automaticallyJoinServer;
    private _dedicatedServerInfo;
    private _defaultMatchmakingServerPort;
    private _nextBackupTime;
    private _currentLobbyId;
    private _multiplayerLogs;
    private importingSaveGameMod;
    private relayNetworkStatus;
    private _isGameOverlayActive;
    private _isTraceRecording;
    private _osPlatform;
    private readonly _intervalIds;
    constructor(game: Game);
    get isGameOverlayActive(): boolean;
    get isRunningOnSteamDeck(): boolean;
    get isRunningOnSteamDeckDesktop(): boolean;
    get isRunningOnBatteryPower(): boolean;
    get isLowPowerMode(): boolean;
    isElectron(): boolean;
    getOsPlatform(): NodeJS.Platform | undefined;
    takeHeapSnapshot(snapshotName: string): string | undefined;
    reload(): Promise<void>;
    openGpuInfoWindow(): void;
    closeWindow(): Promise<void>;
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
    getMatchmakingServerPort(): number;
    getSteamNetworking(): ISteamworksNetworking | undefined;
    /** @deprecated For console use */
    protected setUpgradeId(id?: string): void;
    initialize(): Promise<IWaywardPreload | undefined>;
    enableSafePaths(): Promise<void>;
    onUnload(): void;
    getHeapStatistics(): Promise<HeapStatistics | undefined>;
    setFullscreen(fullscreen: boolean): Promise<void>;
    setCustomTitleBar(enabled: boolean): Promise<void>;
    setOverlayWorks(overlayWorks: boolean): Promise<void>;
    setupMods(): Promise<void>;
    getSteamId(): ISteamId | undefined;
    getFriends(): ISteamFriend[] | undefined;
    getScreenName(): string | undefined;
    isDevelopmentBranch(): boolean;
    get build(): IBuild | undefined;
    get buildName(): string;
    /**
     * Returns the build time of the game, not depending on any save that's currently loaded.
     *
     * If there is no IBuild data associated with this build, the build is considered as having happened "now".
     * This will only be the case in dev builds, and means that after this build time is saved with a version,
     * no further upgrades will be run. Build time is saved in the following places:
     * - {@link saveDataGlobal.gameLastPlayedBuildTime}
     * - {@link saveData.gameBuildTime}
     * - {@link Island.mapGenBuildTime}
     * - {@link Island.saveBuildTime}
     */
    get buildTime(): number;
    /**
     * Returns the upgrade ID of the game, not depending on any save that's currently loaded.
     * The upgrade ID comes from the most recent applicable save upgrade registered in {@link UpgradeVersionRegistry}.
     *
     * Upgrade IDs are saved in the following places:
     * - {@link saveDataGlobal.gameLastPlayedBuildId}
     * - {@link saveData.gameBuildId}
     * - {@link Island.mapGenBuildId}
     * - {@link Island.saveBuildId}
     */
    get upgradeId(): IBuildId | undefined;
    /**
     * Returns a string about how the game is running
     */
    get runningContext(): RunningContext;
    getPublishedMods(): IWorkshopItem[] | undefined;
    getStatInt(name: string): number | undefined;
    /**
     * Increases the specified stat. This will never throw errors
     * todo: strongly typed stat areas & types? method to automatically fetch all stats for each area?
     */
    incrementStat<T extends SteamStatArea>(area: T, type: SteamStatTypeValues<T>, name: string): void;
    getGlobalStatInt(name: string): number | undefined;
    getCurrentBetaName(): string | undefined;
    getBetas(): ISteamBeta[] | undefined;
    setActiveBeta(betaName: string): boolean;
    isContentTracingRecording(): boolean;
    toggleContentTracingRecording(): Promise<boolean>;
    startPlaytimeTracking(): void;
    stopPlaytimeTracking(): void;
    setSteamRichPresence(key: string, value: string): boolean;
    clearSteamRichPresence(): void;
    updateSteamRichPresence(): void;
    onAddHistoricalAction(game: Game, executor: Entity, context: IActionContext): void;
    private addTimelineEvent;
    private updateTimelineGameMode;
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
    private getPublishedModFromTitle;
    getPublishedModFromPublishFileId(publishFileId: string): IWorkshopItem | undefined;
    publishMod(mod: ModInformation): Promise<string>;
    createArchive(id: string): Promise<void>;
    getPublishedItems(): Promise<IWorkshopItem[]>;
    openUrl(url: string): void;
    openWorkshop(publishFileId?: string): Promise<void>;
    openInviteDialog(): void;
    openSaveFolder(): void;
    openModsFolder(): Promise<void>;
    openModFolder(mod: ModInformation): Promise<void>;
    openLogsFolder(): void;
    openBackupsFolder(): void;
    subscribe(publishFileIds: string[]): Promise<void>;
    unsubscribe(publishFileId: string): Promise<void>;
    toggleDeveloperTools(): Promise<void>;
    getModPath(name: string, modType: ModType, file?: string, checkIfExists?: boolean): Promise<IModPath | undefined>;
    getModPathSync(name: string, modType: ModType, file?: string): IModPath | undefined;
    createSaveGameMod(name: string, slot: number): Promise<boolean>;
    /**
     * Do not remove callback. It's required for compatibility with pre 2.4 saves
     */
    importFromSaveGameMod(mod: ModInformation, jsonOrUint8Array: string | Uint8Array, callback?: (success: boolean) => void): Promise<boolean>;
    deleteSaveGameMod(name: string): Promise<void>;
    saveFile(fileName: string, blob: Blob): Promise<void>;
    hasServerToJoin(): boolean;
    getServerToJoin(): ServerInfo | undefined;
    setServerToJoin(serverToJoin: ServerInfo, automatic?: Partial<IJoinServerOptions>): void;
    clearServerToJoin(): void;
    shouldAutomaticallyJoinServer(): Partial<IJoinServerOptions> | undefined;
    processDedicatedServerBackups(force?: boolean): Promise<boolean>;
    protected onGlobalSlotReady(): void;
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
    writeGameStateJson(cleanup?: boolean): Promise<string>;
    private initializeGreenworks;
    private initializeNapi;
    private setupAndInitializeWorkshopMods;
    private setupWorkshopMods;
    private initializeModsFromFolder;
    private enumerateInstalledWorkshopMods;
    private refreshSetupMods;
    private cleanupTemporaryLocalFiles;
    private cleanupTemporaryRemoteFiles;
    /**
     * Called when the overlay is closed or when the refresh mods button is clicked
     */
    refreshWorkshopMods(waitForRefresh?: boolean, initialModState?: ModState.Enabled | ModState.Disabled): Promise<void>;
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
