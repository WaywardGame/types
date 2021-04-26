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
export interface IWaywardPreload {
    api: IElectronApi;
    appPath: string;
    arch: string;
    argv: string[] | undefined;
    installPath: string;
    isTestMode: boolean;
    testClientId?: string;
    versions: Record<string, string>;
    electronRequire?: any;
}
export interface IElectronApi {
    crypto: any;
    fileSystem: IFileSystem;
    greenworks: ISteamworks | undefined;
    ipc: any;
    matchmakingServer: IMatchmakingServer | undefined;
    napi: INapi | undefined;
    os: any;
    path: IPath;
    shell: any;
    ssh2: any;
    webFrame: any;
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
        extractArchive(src: string, dest: string, success: () => void, failure: (err: string) => void): void;
    };
    getFriends(): ISteamFriend[];
    getStatInt(name: string): number | undefined;
    setStat(name: string, value: number): void;
    storeStats(cb: () => void, errCallback?: () => void): void;
    getGlobalStatInt(name: string, count: number): number | undefined;
    startPlaytimeTracking(publishFileIds: number[]): void;
    stopPlaytimeTracking(): void;
    setRichPresence(key: string, value: string): boolean;
    clearRichPresence(): void;
    createLobby(type: number): void;
    setLobbyType(lobbyId: string, type: number): boolean;
    joinLobby(lobbyId: string): void;
    leaveLobby(lobbyId: string): void;
    getLobbyData(lobbyId: string, name: string): string | undefined;
    setLobbyData(lobbyId: string, name: string, value: string): boolean;
    getLobbyOwner(lobbyId: string): string | undefined;
    getLobbyMembers(lobbyId: string): ISteamFriend[] | undefined;
    ugcGetUserItems(type: number, sort: number, listType: number, cb: (items: IWorkshopItem[]) => void, failure: (err: string) => void): void;
    ugcSynchronizeItems(path: string, cb: (items: IWorkshopItem[]) => void, failure: (err: string) => void): void;
    ugcUnsubscribe(publishId: string, cb: () => void, err: (err: string) => void): void;
    saveFilesToCloud(files: string[], cb: () => void, err: (err: string) => void): void;
    publishWorkshopFile(path: string, imagePath: string, title: string, description: string, tags: string[], cb: (publishedFileId2: string) => void, err: (err: string) => void): void;
    updatePublishedWorkshopFile(publishFileId: string, path: string, imagePath: string, title: string, description: string, tags: string[], cb: (publishedFileId2: string) => void, err: (err: string) => void): void;
    fileShare(path: string, cb: () => void, err: (err: string) => void): void;
    activateGameOverlayToWebPage(url: string): void;
    activateGameOverlayInviteDialog(lobbyId: string): void;
    ugcShowOverlay(publishFileId?: string): void;
    initAPI(): boolean;
    getCurrentGameInstallDir(): string;
    getSteamId(): ISteamId;
    getCurrentBetaName(): string;
    onGameOverlayActive(cb: (isActive: boolean) => void): void;
    onLobbyCreated(cb: (success: boolean, lobbyId: string, result?: number) => void): void;
    onLobbyEntered(cb: (success: boolean, lobbyId: string, result?: number) => void): void;
    onLobbyChatUpdate(cb: (lobbyId: string, steamIdUserChanged: string, state: number) => void): void;
    onLobbyJoinRequested(cb: (lobbyId: string | undefined) => void): void;
    getFileCount(): number;
    getFileNameAndSize(index: number): IRemoteFile;
    deleteRemoteFile(name: string): void;
}
export interface ISteamworksNetworking {
    initRelayNetworkAccess(): undefined;
    getRelayNetworkStatus(): ISteamNetworkRelayStatus;
    acceptP2PSessionWithUser(steamIdRemote: string): boolean;
    isP2PPacketAvailable(): number;
    getP2PSessionState(steamIdRemote: string): ISteamNetworkSessionState | undefined;
    closeP2PSessionWithUser(steamIdRemote: string): boolean;
    sendP2PPacket(steamIdRemote: string, data: Uint8Array): boolean;
    readP2PPacket(length: number): {
        steamIdRemote: string;
        data: Uint8Array;
    } | undefined;
    readP2PPacket(length: number, data: Uint8Array): string | undefined;
    setRelayNetworkStatusCallback(callback: (availabilitySummary: number, availabilityNetworkConfig: number, availabilityAnyRelay: number, debugMessage: string) => void): void;
    setP2PSessionRequestCallback(callback: (steamIdRemote: string) => void): void;
    setP2PSessionConnectFailCallback(callback: (steamIdRemote: string, errorCode: number) => void): void;
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
export interface IFileSystem {
    enableSafePaths(): void;
    addSafePath(path: string): void;
    createWriteStream(path: string, opts: any): IFileStream;
    copy(source: string, destination: string, opt: {
        dereference?: boolean;
        filter?(file: string): boolean;
    }, cb: (err: string | null | undefined) => void): any;
    emptyDir(destination: string, cb: (err: string | null | undefined) => void): any;
    remove(path: string, cb: (err: string | null | undefined) => void): any;
    rmdirSync(path: string): any;
    unlinkSync(path: string): any;
    stat(path: string, cb: (err: string | null | undefined, stats: IFileStat) => void): any;
    statSync(path: string): IFileStat | undefined;
    mkdirSync(path: string, opt?: any): any;
    existsSync(path: string): boolean;
    pathExistsSync(path: string): boolean;
    readdir(path: string, cb: (err: string | null | undefined, files: string[]) => void): any;
    readdirSync(path: string): string[];
    readFileSync(path: string, opt?: any): string | any;
    writeFile(path: string, data: string, opt: any, cb: (err?: any) => void): any;
    writeFileSync(path: string, data: string, opt?: any): any;
}
export interface IFileStream {
    bytesWritten: number;
    on(type: "error", callback: (err: any) => void): void;
    on(type: "drain", callback: () => void): void;
    write(data: string): boolean;
    close(): void;
}
export interface IFile extends IFileStat {
    name: string;
    path: string;
}
export interface IFileStat {
    atime: Date;
    mtime: Date;
    ctime: Date;
    size: number;
    isFile(): boolean;
    isDirectory(): boolean;
    isSymbolicLink(): boolean;
}
export interface IPath {
    resolve(...path: string[]): string;
    join(...path: string[]): string;
    basename(...path: string[]): string;
    isAbsolute(path: string): boolean;
}
export interface INapi {
    discord: INapiDiscord;
}
export interface INapiDiscord {
    initialize(apiKey: string, appId?: string): void;
    shutdown(): void;
    runCallbacks(): void;
    setOnJoinCallback(callback: (server: string) => void): void;
    setOnErrorCallback(callback: (error: string | number) => void): void;
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
    updateName(name: string): void;
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
    lobbyType: number;
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
    reputation: number;
    days: number;
    mods: IServerMod[];
    peaceful: boolean;
    milestoneModifiersAllowed: boolean;
    island: IServerIslandDetails;
}
export interface IServerMod {
    name: string;
    version: string;
    publishFileId: string | undefined;
}
export interface IServerIslandDetails {
    position: {
        x: number;
        y: number;
    };
    biomeType: number;
}
