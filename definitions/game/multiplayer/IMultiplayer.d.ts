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
    Action = 0,
    ActionAttack = 1,
    ActionMove = 2,
    Alignment = 3,
    BaseEntityManager = 4,
    CanASeeB = 5,
    Container = 6,
    Creature = 7,
    CreatureAiAdd = 8,
    CreatureAiEmit = 9,
    CreatureAiMaskAdd = 10,
    CreatureAiMaskRemove = 11,
    CreatureAiRemove = 12,
    CreatureAiSet = 13,
    CreatureCheckMove = 14,
    CreatureMovement = 15,
    CreatureNearestPlayer = 16,
    CreatureOffer = 17,
    CreatureStatChange = 18,
    Damage = 19,
    Dismantle = 20,
    Doodad = 21,
    DoodadManager = 22,
    EncumberedStatus = 23,
    Entity = 24,
    EntityPosition = 25,
    ExhaustedPreMove = 26,
    FlowFieldHashCode = 27,
    FlowFieldPenalty = 28,
    FlowFieldUpdate = 29,
    FlowFieldUpdateTile = 30,
    FlowFieldValue = 31,
    HandToUse = 32,
    HealthChange = 33,
    History = 34,
    InventoryCount = 35,
    Island = 36,
    IslandCivilizationScore = 37,
    Islands = 38,
    IsTileEmpty = 39,
    Item = 40,
    ItemCraft = 41,
    ItemDamage = 42,
    ItemOrder = 43,
    LastCreationIds = 44,
    Merchant = 45,
    MilestoneSeed = 46,
    Modifier = 47,
    MoveToTile = 48,
    NPC = 49,
    Option = 50,
    PenaltyFieldHashCode = 51,
    PlaceOnTile = 52,
    PlayerManager = 53,
    Players = 54,
    PlayerSetup = 55,
    Random = 56,
    Seed = 57,
    SeededGenerator = 58,
    SetPosition = 59,
    SetZ = 60,
    SkillGain = 61,
    StaminaChanges = 62,
    StatChange = 63,
    Stats = 64,
    Status = 65,
    StatusChange = 66,
    TemperatureManager = 67,
    Temporary = 68,
    Tick = 69,
    TileEvent = 70,
    Time = 71,
    UpdateDirection = 72,
    Weight = 73,
    WorldUpdateTile = 74
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
