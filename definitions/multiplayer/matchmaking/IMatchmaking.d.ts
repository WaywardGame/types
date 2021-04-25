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
import { BiomeTypes } from "game/biome/IBiome";
import { UnableToJoinReason } from "multiplayer/IMultiplayer";
export interface IMatchmaking {
    getIdentifier(): string;
    getChannel(): string;
    isConnected(): boolean;
    connect(): void;
    disconnect(): void;
    send(data: ArrayBuffer | Uint8Array | MatchmakingMessageData, channel?: string): void;
}
export interface IMatchmakingInfo {
    identifier: string;
    channel: string;
    matchmakingServer: string;
    isDedicatedServer: boolean;
}
export interface MatchmakingMessage {
    channel?: string;
    data?: MatchmakingMessageData;
}
export declare enum MatchmakingMessageDataType {
    CheckConnection = -3,
    UpdateDirectory = -2,
    IpAddress = -1,
    JoinChannel = 0,
    IceCandidate = 1,
    SessionDescription = 2,
    HostIpAddress = 3,
    Connected = 4,
    UnableToJoinGame = 5
}
export interface IMatchmakingMessageData {
    type: MatchmakingMessageDataType;
    matchmakingIdentifier?: string;
    targetMatchmakingIdentifier?: string;
}
export interface IMatchmakingCheckConnectionMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.CheckConnection;
    secret: string;
    webRtcWorks?: boolean;
    webSocketWorks?: boolean;
}
export interface IMatchmakingUpdateDirectoryMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.UpdateDirectory;
    serverDetails: Partial<IServerServerDetails>;
    gameDetails: Partial<IServerGameDetails>;
    secret: string;
}
export interface IMatchmakingIpAddressMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.IpAddress;
    ip?: string;
}
export interface IMatchmakingJoinChannelMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.JoinChannel;
    clientVersion: string;
    clientBuild: number | undefined;
    playerIdentifier: string;
    playerSteamId: string | undefined;
    secret?: string;
}
export interface IMatchmakingIceCandidateMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.IceCandidate;
    iceCandidate: RTCIceCandidateInit;
}
export interface IMatchmakingSessionDescriptionMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.SessionDescription;
    sessionDescription: RTCSessionDescriptionInit;
}
export interface IMatchmakingHostIpAddressMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.HostIpAddress;
    ip: string;
}
export interface IMatchmakingConnectedMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.Connected;
}
export interface IMatchmakingUnableToJoinGameMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.UnableToJoinGame;
    reason: UnableToJoinReason;
    args?: Array<number | string>;
}
export declare type MatchmakingMessageData = IMatchmakingCheckConnectionMessageData | IMatchmakingUpdateDirectoryMessageData | IMatchmakingIpAddressMessageData | IMatchmakingJoinChannelMessageData | IMatchmakingIceCandidateMessageData | IMatchmakingSessionDescriptionMessageData | IMatchmakingHostIpAddressMessageData | IMatchmakingConnectedMessageData | IMatchmakingUnableToJoinGameMessageData;
export interface IServer {
    id: string;
    serverDetails: IServerServerDetails;
    gameDetails: IServerGameDetails;
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
    biomeType: BiomeTypes;
}
