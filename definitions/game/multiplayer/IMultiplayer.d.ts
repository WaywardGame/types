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
    Islands = 28,
    IsTileEmpty = 29,
    Item = 30,
    ItemCraft = 31,
    ItemDamage = 32,
    ItemOrder = 33,
    LastCreationIds = 34,
    MilestoneSeed = 35,
    Misc = 36,
    MoveToTile = 37,
    PenaltyFieldHashCode = 38,
    PlaceOnTile = 39,
    PlayerManager = 40,
    PlayerPositions = 41,
    Players = 42,
    PlayerSetup = 43,
    Random = 44,
    Reputation = 45,
    Seed = 46,
    SeededGenerator = 47,
    SkillGain = 48,
    StaminaChanges = 49,
    StatChange = 50,
    Stats = 51,
    StatusChange = 52,
    StatusEffect = 53,
    SyncChecks = 54,
    TemperatureManager = 55,
    Temporary = 56,
    Tick = 57,
    TileEvent = 58,
    Time = 59,
    UpdateDirection = 60,
    Weight = 61
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
    ghostDataClear: boolean;
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
    logPackets: boolean;
    logSyncChecks: boolean;
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
    joinServerTimeout?: number;
    automaticallyRetry?: boolean;
}
