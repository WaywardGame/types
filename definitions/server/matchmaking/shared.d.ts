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
import type { IServerGameDetails, IServerServerDetails } from "@wayward/hosts/shared/interfaces";
import type * as ws from "ws";
export declare const matchmakingServer = "mm.waywardgame.com";
export declare const matchmakingServerPort = 38740;
export declare const serverDirectoryPort = 38741;
export declare const defaultServerPort = 38740;
export declare const checkNetworkConnectionWebSocketTimeout = 5000;
export declare const checkNetworkConnectionWebRTCTimeout = 10000;
export declare const checkNetworkConnectionTotalTimeout = 15000;
export declare const checkConnectionMatchmakingId = "check";
export declare const hostMatchmakingIdentifier = "host";
export declare enum ServerVersion {
    Version1 = 0,
    Version2 = 1
}
export interface ClientConnection extends ws {
    identifier: string;
    version: ServerVersion;
    channel?: string;
    channelMatchmakingIdentifier?: string;
    servers?: string[];
    pendingCheckConnection?: boolean;
}
export type Connections = Map<string, ClientConnection>;
export interface IServer {
    serverDetails?: Partial<IServerServerDetails>;
    gameDetails?: Partial<IServerGameDetails>;
    pendingCheckConnectionTimeoutId?: NodeJS.Timeout;
    pendingCheckConnectionPromise?: Promise<ICheckConnectionServerDirectoryResponse>;
    pendingCheckConnectionResolve?: (response: ICheckConnectionServerDirectoryResponse) => void;
}
export interface IServerConnectionDetails {
    code: string;
}
export declare enum ServerLobbyType {
    Private = 0,
    FriendsOnly = 1,
    Public = 2,
    Invisible = 3
}
/**
 * Requests
 */
export declare enum ServerDirectoryRequestType {
    AddOrUpdate = 0,
    Remove = 1,
    CheckConnection = 2
}
export interface IServerDirectoryRequest {
    type: ServerDirectoryRequestType;
    id: string;
}
export interface IAddOrUpdateServerDirectoryRequest extends IServerDirectoryRequest, Partial<IServer> {
    type: ServerDirectoryRequestType.AddOrUpdate;
    ipAddress?: string;
}
export interface IRemoveServerDirectoryRequest extends IServerDirectoryRequest {
    type: ServerDirectoryRequestType.Remove;
}
export interface ICheckConnectionDirectoryRequest extends IServerDirectoryRequest {
    type: ServerDirectoryRequestType.CheckConnection;
    ipAddress?: string;
}
export type ServerDirectoryRequest = IAddOrUpdateServerDirectoryRequest | IRemoveServerDirectoryRequest | ICheckConnectionDirectoryRequest;
/**
 * Responses
 */
export declare enum ServerDirectoryResponseType {
    IpAddress = 0,
    CheckConnection = 1
}
export interface IServerDirectoryResponse {
    type: ServerDirectoryResponseType;
    id: string;
}
export interface IIpAddressServerDirectoryResponse extends IServerDirectoryResponse {
    type: ServerDirectoryResponseType.IpAddress;
    ipAddress: string;
}
export interface ICheckConnectionServerDirectoryResponse extends IServerDirectoryResponse {
    type: ServerDirectoryResponseType.CheckConnection;
    webRtcWorks: boolean;
    webSocketWorks: boolean;
}
export type ServerDirectoryResponse = IIpAddressServerDirectoryResponse | ICheckConnectionServerDirectoryResponse;
/**
 * APIs
 */
export interface IServerDirectoryV1BaseResponse {
    error?: string;
}
export interface IServerDirectoryV1InfoResponse extends IServerDirectoryV1BaseResponse {
    servers: IServerDirectoryV1ServersServer[];
    players: number;
}
export interface IServerDirectoryV1ServersServer extends IServer {
    id: string;
}
export declare function log(...args: any[]): void;
export declare function error(...args: any[]): void;
export declare function setLogCallback(logFunc: ((...args: any[]) => void) | undefined): void;
export declare function randomUUID(): string;
