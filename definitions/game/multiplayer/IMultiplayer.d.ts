/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { LobbyType } from "@hosts/shared/interfaces";
import type { ICharacter } from "game/entity/IHuman";
import type { PlayerState } from "game/entity/player/IPlayer";
import type Player from "game/entity/player/Player";
import type { ISynchronizeState } from "game/IGame";
import { TurnMode } from "game/IGame";
import type { Milestone } from "game/milestones/IMilestone";
import type { GameMode, IGameOptions } from "game/options/IGameOptions";
import type { IMatchmakingInfo } from "multiplayer/matchmaking/IMatchmaking";
import type { IConnection } from "multiplayer/networking/IConnection";
import type { ISaveObject } from "save/ISaveManager";
export interface IMultiplayerEvents {
    connect(): any;
    disconnect(): any;
    joinLobby(lobbyId: string): any;
    leaveLobby(lobbyId: string): any;
    stateChange(): any;
    checkConnection(webRtcWorks: boolean, webSocketWorks: boolean): any;
}
export declare enum MultiplayerSyncCheckLevel {
    None = "none",
    Normal = "normal",
    Extended = "extended",
    Verbose = "verbose",
    All = "all"
}
export declare enum MultiplayerSyncCheck {
    Action = 0,
    ActionAttack = 1,
    ActionMove = 2,
    BaseEntityManager = 3,
    CanASeeB = 4,
    Container = 5,
    Creature = 6,
    CreatureCheckMove = 7,
    CreatureMovement = 8,
    CreatureNearestPlayer = 9,
    CreatureOffer = 10,
    CreaturePosition = 11,
    CreatureStatChange = 12,
    Damage = 13,
    Dismantle = 14,
    Doodad = 15,
    DoodadManager = 16,
    EncumberedStatus = 17,
    ExhaustedPreMove = 18,
    FlowFieldHashCode = 19,
    FlowFieldPenalty = 20,
    FlowFieldUpdate = 21,
    FlowFieldUpdateTile = 22,
    FlowFieldValue = 23,
    HandToUse = 24,
    HealthChange = 25,
    InventoryCount = 26,
    Island = 27,
    IslandCivilizationScore = 28,
    Islands = 29,
    IsTileEmpty = 30,
    Item = 31,
    ItemCraft = 32,
    ItemDamage = 33,
    ItemOrder = 34,
    LastCreationIds = 35,
    Merchant = 36,
    MilestoneSeed = 37,
    Misc = 38,
    Modifier = 39,
    MoveToTile = 40,
    PenaltyFieldHashCode = 41,
    PlaceOnTile = 42,
    PlayerManager = 43,
    PlayerPositions = 44,
    Players = 45,
    PlayerSetup = 46,
    Random = 47,
    Reputation = 48,
    Seed = 49,
    SeededGenerator = 50,
    SkillGain = 51,
    StaminaChanges = 52,
    StatChange = 53,
    Stats = 54,
    StatusChange = 55,
    StatusEffect = 56,
    SyncChecks = 57,
    TemperatureManager = 58,
    Temporary = 59,
    Tick = 60,
    TileEvent = 61,
    Time = 62,
    UpdateDirection = 63,
    Weight = 64
}
export declare const maxPlayers = 32;
export declare const packetTickRate = 16;
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
    allowHardcoreRespawns: boolean;
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
    matchmakingServerWebSocketPort: number;
    syncChecks: boolean | MultiplayerSyncCheck[];
    enableSteamNetworkConnections: boolean;
    enableWebRtcConnections: boolean;
    enablePacketNumberChecks: boolean;
    logPackets: boolean;
    logSyncChecks: boolean;
    recentPacketTracking: number;
    joinServerTimeout: number;
    steamNetworkTimeout: number;
    webRtcTimeout: number;
    connectionTimeout: number;
    keepAliveInterval: number;
    keepAliveTimeout: number;
    steamNetworkingConnectionWebRTCFallbackTimeout: number;
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
    initialSynchronizeState: ISynchronizeState;
    saveObject: ISaveObject | undefined;
}
export interface IMultiplayerMod {
    name: string;
    version: string;
    publishedFileId: string | undefined;
}
export declare enum DisconnectReason {
    Banned = 0,
    Cancelled = 1,
    CheckConnection = 2,
    ConnectionTimeout = 3,
    Desync = 4,
    KeepAliveTimeout = 5,
    Kick = 6,
    Left = 7,
    LostConnection = 8,
    Normal = 9,
    ServerShutdown = 10,
    UnableToJoinGame = 11,
    UnableToLoadMods = 12
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
    automaticallyRetry: boolean;
    enableSteamNetworkConnections: boolean;
}
