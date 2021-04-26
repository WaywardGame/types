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
import { IPlayOptions } from "game/IGame";
import { ISteamNetworkRelayStatus } from "electron/interfaces";
export interface ISteamworksEvents {
    overlayShown(): any;
    overlayHidden(): any;
    fullscreenUpdate(fullscreen: boolean): any;
    onRelayNetworkStatus(ready: boolean, status: ISteamNetworkRelayStatus): void;
    onP2PSessionRequest(steamIdRemote: string): void;
    onP2PSessionConnectFail(steamIdRemote: string, errorCode: number): void;
}
export interface IModPath {
    path: string;
    uriEncodedPath: string;
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
export declare enum LobbyType {
    Private = 0,
    FriendsOnly = 1,
    Public = 2,
    Invisible = 3
}
