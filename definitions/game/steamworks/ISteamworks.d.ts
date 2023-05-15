/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ISteamNetworkRelayStatus, SteamNetworkingConnectionState } from "@hosts/shared/interfaces";
import type { IPlayOptions } from "game/IGame";
import type { MultiplayerSyncCheckLevel, ServerInfo } from "multiplayer/IMultiplayer";
export interface ISteamworksEvents {
    initialize(): any;
    batteryChange(): any;
    overlayShown(): any;
    overlayHidden(): any;
    onRelayNetworkStatus(ready: boolean, status: ISteamNetworkRelayStatus): void;
    onSteamNetworkingMessagesSessionRequest(steamIdRemote: string): void;
    onSteamNetworkingMessagesSessionFailed(steamIdRemote: string, state: SteamNetworkingConnectionState, endReason: number): void;
    requestJoinServer(serverInfo: ServerInfo): any;
}
export interface IModPath {
    path: string;
    uriEncodedPath: string;
}
export interface IDedicatedServerInfo {
    name: string;
    motd?: string;
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
    sshPort: number;
    sshUsername: string;
    sshPassword?: string;
    devMode: boolean;
    syncChecks: MultiplayerSyncCheckLevel;
    gameCode?: string;
}
export interface IBuild {
    name: string;
    time: number;
    publishName?: string;
    publishTime?: string;
}
