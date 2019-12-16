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
import { IPlayOptions } from "game/IGame";
export interface ISteamworksEvents {
    overlayShown(): any;
    overlayHidden(): any;
    fullscreenUpdate(fullscreen: boolean): any;
    onRelayNetworkStatus(ready: boolean, status: ISteamNetworkRelayStatus): void;
    onP2PSessionRequest(steamIdRemote: string): void;
    onP2PSessionConnectFail(steamIdRemote: string, errorCode: number): void;
}
export interface ISteamId {
    accountId: number;
    screenName: string;
    steamId: string;
    staticAccountId: string;
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
export interface IModPath {
    path: string;
    uriEncodedPath: string;
}
export declare enum LobbyType {
    Private = 0,
    FriendsOnly = 1,
    Public = 2,
    Invisible = 3
}
export interface IDedicatedServerInfo {
    name: string;
    port: number;
    backup: boolean;
    backupInterval: number;
    maxBackups: number;
    load: string | undefined;
    console: boolean;
    newGameOptions?: Partial<IPlayOptions> & {
        dailyChallenge?: boolean;
    };
    ssh: boolean;
    sshPort?: number;
    sshUsername?: string;
    sshPassword?: string;
}
export interface ISteamNetworking {
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
