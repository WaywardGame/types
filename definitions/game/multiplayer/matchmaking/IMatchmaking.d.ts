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
import type { IServerServerDetails, IServerGameDetails } from "@wayward/hosts/shared/interfaces";
import type { UnableToJoinReason } from "@wayward/game/multiplayer/IMultiplayer";
export interface IMatchmaking {
    readonly isConnected: boolean;
    readonly identifier: string;
    readonly channel: string;
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
    targetMatchmakingIdentifier: string;
    clientVersion: string;
    clientBuild: number | undefined;
    playerIdentifier: string;
    playerSteamId: string | undefined;
    /**
     * Used by clients to authenticate ownership of their player
     */
    clientSecret: string;
    /**
     * Used by hosts to authenticate ownership of a server/matchmaking channel
     */
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
    hasExistingPlayerInGame: boolean;
    customMilestoneModifiersAllowed: boolean;
}
export interface IMatchmakingUnableToJoinGameMessageData extends IMatchmakingMessageData {
    type: MatchmakingMessageDataType.UnableToJoinGame;
    reason: UnableToJoinReason;
    args?: Array<number | string>;
}
export type MatchmakingMessageData = IMatchmakingCheckConnectionMessageData | IMatchmakingUpdateDirectoryMessageData | IMatchmakingIpAddressMessageData | IMatchmakingJoinChannelMessageData | IMatchmakingIceCandidateMessageData | IMatchmakingSessionDescriptionMessageData | IMatchmakingHostIpAddressMessageData | IMatchmakingConnectedMessageData | IMatchmakingUnableToJoinGameMessageData;
export interface IServer {
    id: string;
    serverDetails: IServerServerDetails;
    gameDetails: IServerGameDetails;
}
