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
import type { ISynchronizeState, PauseSource } from "game/IGame";
import { TurnMode } from "game/IGame";
import type { Load } from "game/meta/Loading";
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
    updatedOptions(options: IMultiplayerOptions): any;
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
    Entity = 18,
    ExhaustedPreMove = 19,
    FlowFieldHashCode = 20,
    FlowFieldPenalty = 21,
    FlowFieldUpdate = 22,
    FlowFieldUpdateTile = 23,
    FlowFieldValue = 24,
    HandToUse = 25,
    HealthChange = 26,
    InventoryCount = 27,
    Island = 28,
    IslandCivilizationScore = 29,
    Islands = 30,
    IsTileEmpty = 31,
    Item = 32,
    ItemCraft = 33,
    ItemDamage = 34,
    ItemOrder = 35,
    LastCreationIds = 36,
    Merchant = 37,
    MilestoneSeed = 38,
    Modifier = 39,
    MoveToTile = 40,
    Option = 41,
    PenaltyFieldHashCode = 42,
    PlaceOnTile = 43,
    PlayerManager = 44,
    PlayerPositions = 45,
    Players = 46,
    PlayerSetup = 47,
    Random = 48,
    Reputation = 49,
    Seed = 50,
    SeededGenerator = 51,
    SetPosition = 52,
    SetZ = 53,
    SkillGain = 54,
    StaminaChanges = 55,
    StatChange = 56,
    Stats = 57,
    StatusChange = 58,
    StatusEffect = 59,
    TemperatureManager = 60,
    Temporary = 61,
    Tick = 62,
    TileEvent = 63,
    Time = 64,
    UpdateDirection = 65,
    Weight = 66
}
export declare const maxPlayers = 32;
export declare const packetTickRate = 16;
export declare const defaultServerPort = 38740;
export declare const defaultSshServerPort = 38742;
export declare const defaultSshServerUsername = "wayward";
export declare const steamLobbyPrefix = "steam:";
export declare const checkConnectionMatchmakingId = "check";
export declare const syncCheckWaitingResetTime = 5000;
export declare const defaultSyncChecks: MultiplayerSyncCheck[];
export declare const networkingOptions: IMultiplayerNetworkingOptions;
export declare function getDefaultMultiplayerOptions(): IMultiplayerOptions;
export type PacketTarget = Array<Player | IConnection> | Player | IConnection;
export interface IMultiplayerOptions {
    lobbyType: LobbyType;
    pvp: boolean;
    allowTraveling: boolean;
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
    recentPacketTracking: number;
    recentHashedSyncCheckTracking: number;
    joinServerTimeout: number;
    steamNetworkTimeout: number;
    webRtcTimeout: number;
    connectionTimeout: number;
    keepAliveInterval: number;
    keepAliveTimeout: number;
    steamNetworkingConnectionWebRTCFallbackInitialTimeout: number;
    steamNetworkingConnectionWebRTCFallbackDownloadingTimeout: number;
    webSocketConnectionMaxMessageSize: number;
}
export type ServerInfo = string | IMatchmakingInfo;
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
export interface IMultiplayerRunSafelyOptions {
    isSynced: boolean;
    pauseGame?: PauseSource;
    pauseIncomingPacketProcessing?: boolean;
    showLoadingScreen?: {
        load: Load;
        args?: any[];
        excludeTargets?: PacketTarget;
        disableDelayAfter?: boolean;
        hostInitiatesHide?: boolean;
    };
}
