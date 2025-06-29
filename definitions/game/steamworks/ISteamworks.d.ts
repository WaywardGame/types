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
import type { ISteamNetworkRelayStatus, SteamNetworkingConnectionState, SteamTimelineMarker } from "@wayward/hosts/shared/interfaces";
import type { IPlayOptions } from "@wayward/game/game/IGame";
import type { MultiplayerSyncCheckLevel, ServerInfo } from "@wayward/game/multiplayer/IMultiplayer";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
export interface ISteamworksEvents {
    initialize(): any;
    batteryChange(): any;
    overlayShown(isActive: true): any;
    overlayHidden(isActive: false): any;
    onRelayNetworkStatus(ready: boolean, status: ISteamNetworkRelayStatus): void;
    onSteamNetworkingMessagesSessionRequest(steamIdRemote: string): void;
    onSteamNetworkingMessagesSessionFailed(steamIdRemote: string, state: SteamNetworkingConnectionState, endReason: number): void;
    requestJoinServer(serverInfo: ServerInfo): any;
    changeBuildId(): any;
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
export declare enum SteamStatArea {
    Music = 0,
    Renderer = 1
}
export declare const steamStatTypes: {
    readonly 0: readonly ["PlayedCount"];
    readonly 1: readonly ["WebGl"];
};
export type SteamStatTypeValues<T extends SteamStatArea> = typeof steamStatTypes[T][keyof typeof steamStatTypes[T]];
export declare const actionToSteamMarker: OptionalDescriptions<ActionType, SteamTimelineMarker>;
export type RunningContext = "Steam" | "Electron" | "Node.js" | "Browser";
