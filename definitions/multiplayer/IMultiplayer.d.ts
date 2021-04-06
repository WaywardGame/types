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
import { ICharacter } from "game/entity/IHuman";
import { PlayerState } from "game/entity/player/IPlayer";
import Player from "game/entity/player/Player";
import { TurnMode } from "game/IGame";
import { Milestone } from "game/milestones/IMilestone";
import { GameMode, IGameOptions } from "game/options/IGameOptions";
import { IMatchmakingInfo } from "multiplayer/matchmaking/IMatchmaking";
import { IConnection } from "multiplayer/networking/IConnection";
import { ISaveObject } from "save/ISaveManager";
import { LobbyType } from "steamworks/ISteamworks";
export interface IMultiplayerEvents {
    connect(): any;
    disconnect(): any;
    joinLobby(lobbyId: string): any;
    leaveLobby(lobbyId: string): any;
    stateChange(): any;
    checkConnection(webRtcWorks: boolean, webSocketWorks: boolean): any;
}
export declare enum MultiplayerSyncCheck {
    ActionAttack = 0,
    ActionMove = 1,
    BaseEntityManager = 2,
    CanASeeB = 3,
    Container = 4,
    Creature = 5,
    CreatureCheckMove = 6,
    CreatureMovement = 7,
    CreatureNearestPlayer = 8,
    CreatureOffer = 9,
    CreaturePosition = 10,
    CreatureStatChange = 11,
    Damage = 12,
    Dismantle = 13,
    Doodad = 14,
    EncumberedStatus = 15,
    FlowFieldHashCode = 16,
    FlowFieldPenalty = 17,
    FlowFieldUpdate = 18,
    FlowFieldUpdateTile = 19,
    FlowFieldValue = 20,
    HandToUse = 21,
    HealthChange = 22,
    InventoryCount = 23,
    IsTileEmpty = 24,
    Item = 25,
    ItemCraft = 26,
    ItemDamage = 27,
    ItemOrder = 28,
    LastCreationIds = 29,
    MilestoneSeed = 30,
    Misc = 31,
    MoveToTile = 32,
    PenaltyFieldHashCode = 33,
    PlaceOnTile = 34,
    PlayerPositions = 35,
    Players = 36,
    PlayerSetup = 37,
    Random = 38,
    Reputation = 39,
    Seed = 40,
    SkillGain = 41,
    StaminaChanges = 42,
    StatChange = 43,
    Stats = 44,
    StatusChange = 45,
    SyncChecks = 46,
    Temp = 47,
    TemperatureGet = 48,
    TemperatureUpdate = 49,
    Tick = 50,
    Ticks = 51,
    TileEvent = 52,
    Time = 53,
    Weight = 54
}
export declare const maxPlayers = 32;
export declare const packetTickRate = 10;
export declare const defaultServerPort = 38740;
export declare const steamLobbyPrefix = "steam:";
export declare const checkConnectionMatchmakingId = "check";
export declare const defaultSyncChecks: MultiplayerSyncCheck[];
export declare const networkingOptions: IMultiplayerNetworkingOptions;
export declare function getDefaultMultiplayerOptions(): IMultiplayerOptions;
export declare type PacketTarget = Array<Player | IConnection> | Player | IConnection;
export interface IMultiplayerOptions {
    lobbyType: LobbyType;
    pvp: boolean;
    turnMode: TurnMode;
    maxPlayers: number;
    tickSpeed: number;
    syncChecks: boolean | MultiplayerSyncCheck[];
    newPlayerState?: PlayerState;
    description?: string;
}
export interface IMultiplayerState {
    enable: boolean;
    options?: IMultiplayerOptions;
}
export interface IMultiplayerNetworkingOptions {
    matchmakingServer: string;
    matchmakingServerPort: number;
    syncChecks: boolean | MultiplayerSyncCheck[];
    enableSteamNetworkConnections: boolean;
    enableWebRtcConnections: boolean;
    enablePacketNumberChecks: boolean;
    enableSeedHistoryChecks: boolean;
    maxMessageSize: number;
    logPackets: boolean;
    logSyncChecks: boolean;
    fakeRoundTripTime: number;
    recentPacketTracking: number;
    joinServerTimeout: number;
    steamNetworkTimeout: number;
    webRtcTimeout: number;
    connectionTimeout: number;
    keepAliveInterval: number;
    keepAliveTimeout: number;
}
export declare type ServerInfo = string | IMatchmakingInfo;
export declare enum PacketAcceptType {
    Serverside = 1,
    Clientside = 2,
    All = 3
}
export interface IMultiplayerWorldData {
    pid: number;
    playerCount: number;
    mods: IMultiplayerMod[];
    multiplayerOptions: IMultiplayerOptions;
    difficulty: GameMode;
    difficultyOptions?: IGameOptions;
    saveObject: ISaveObject;
    initialFlowFieldPids: number[];
}
export interface IMultiplayerMod {
    name: string;
    version: string;
    publishedFileId: string | undefined;
}
export declare enum DisconnectReason {
    ConnectionTimeout = 0,
    Desync = 1,
    KeepAliveTimeout = 2,
    Kick = 3,
    Left = 4,
    LostConnection = 5,
    ServerShutdown = 6,
    UnableToJoinGame = 7,
    UnableToLoadMods = 8,
    Banned = 9,
    CheckConnection = 10,
    Traveling = 11
}
export declare enum UnableToJoinReason {
    BuildMismatch = 0,
    DuplicateIdentifier = 1,
    FriendsOnly = 2,
    ServerFull = 3,
    SteamRequired = 4,
    UnknownError = 5,
    VersionMismatch = 6,
    Banned = 7,
    FailedToLoadMods = 8
}
export declare enum JoinServerRetryReason {
    Timeout = 0,
    UnableToJoinSteamLobby = 1,
    UnableToConnectToGlobalMatchmakingServer = 2,
    UnableToConnectToDedicatedMatchmakingServer = 3,
    WebRTCTimeout = 4
}
export interface IJoinServerOptions {
    character: ICharacter;
    milestoneModifiers: Set<Milestone>;
    retryMatchmakingInfo: IMatchmakingInfo;
    joinServerTimeout?: number;
}
