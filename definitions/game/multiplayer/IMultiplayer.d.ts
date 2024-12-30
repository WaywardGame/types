/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { ICharacter } from "@wayward/game/game/entity/IHuman";
import type { PlayerState } from "@wayward/game/game/entity/player/IPlayer";
import type Player from "@wayward/game/game/entity/player/Player";
import type { ISynchronizeState, PauseSource } from "@wayward/game/game/IGame";
import { TurnMode } from "@wayward/game/game/IGame";
import type { Load } from "@wayward/game/game/meta/Loading";
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { GameMode, IGameOptions } from "@wayward/game/game/options/IGameOptions";
import type { IMatchmakingInfo } from "@wayward/game/multiplayer/matchmaking/IMatchmaking";
import type { IConnection } from "@wayward/game/multiplayer/networking/IConnection";
import type { ISaveObject } from "@wayward/game/save/ISaveManager";
import { LobbyType } from "@wayward/hosts/shared/interfaces";
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
    "END REGION" = 0,
    "START REGION" = 1,
    Action = 2,
    ActionAttack = 3,
    ActionMove = 4,
    Alignment = 5,
    BaseEntityManager = 6,
    CanASeeB = 7,
    Container = 8,
    Creature = 9,
    CreatureAi = 10,
    CreatureAiAdd = 11,
    CreatureAiEmit = 12,
    CreatureAiMaskAdd = 13,
    CreatureAiMaskRemove = 14,
    CreatureAiRemove = 15,
    CreatureAiSet = 16,
    CreatureCheckMove = 17,
    CreatureMovement = 18,
    CreatureNearestPlayer = 19,
    CreatureOffer = 20,
    CreatureStatChange = 21,
    Damage = 22,
    Dismantle = 23,
    Doodad = 24,
    DoodadManager = 25,
    EncumberedStatus = 26,
    Entity = 27,
    EntityPosition = 28,
    ExhaustedPreMove = 29,
    FlowFieldHashCode = 30,
    FlowFieldPenalty = 31,
    FlowFieldUpdate = 32,
    FlowFieldUpdateTile = 33,
    FlowFieldValue = 34,
    HandToUse = 35,
    HealthChange = 36,
    History = 37,
    InventoryCount = 38,
    Island = 39,
    IslandCivilizationScore = 40,
    Islands = 41,
    IsTileEmpty = 42,
    Item = 43,
    ItemCraft = 44,
    ItemDamage = 45,
    ItemOrder = 46,
    LastCreationIds = 47,
    Merchant = 48,
    MilestoneSeed = 49,
    Modifier = 50,
    MoveToTile = 51,
    NPC = 52,
    Option = 53,
    PenaltyFieldHashCode = 54,
    PlaceOnTile = 55,
    PlayerManager = 56,
    Players = 57,
    PlayerSetup = 58,
    Random = 59,
    Seed = 60,
    SeededGenerator = 61,
    SetPosition = 62,
    SetZ = 63,
    SkillGain = 64,
    StaminaChanges = 65,
    StatChange = 66,
    Stats = 67,
    Status = 68,
    StatusChange = 69,
    TemperatureManager = 70,
    Temporary = 71,
    Tick = 72,
    TileEvent = 73,
    Time = 74,
    UpdateDirection = 75,
    Weight = 76,
    WorldUpdateTile = 77
}
export declare const maxPlayers = 32;
export declare const packetTickRate = 16.6666;
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
    pauseOnDesync: boolean;
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
    Normal = 9,// server shut down or player left
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
    FailedToLoadMods = 8,
    ClientDataInvalid = 9
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
    suppressSyncChecks?: boolean;
    showLoadingScreen?: {
        load: Load;
        args?: any[];
        excludeTargets?: PacketTarget;
        disableDelayAfter?: boolean;
        hostInitiatesHide?: boolean;
    };
}
