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
    DiscoverRecipe = 24,
    Doodad = 25,
    DoodadManager = 26,
    EncumberedStatus = 27,
    Entity = 28,
    EntityPosition = 29,
    ExhaustedPreMove = 30,
    FlowFieldHashCode = 31,
    FlowFieldPenalty = 32,
    FlowFieldUpdate = 33,
    FlowFieldUpdateTile = 34,
    FlowFieldValue = 35,
    HandToUse = 36,
    HealthChange = 37,
    History = 38,
    InventoryCount = 39,
    Island = 40,
    IslandCivilizationScore = 41,
    Islands = 42,
    IsTileEmpty = 43,
    Item = 44,
    ItemCraft = 45,
    ItemDamage = 46,
    ItemOrder = 47,
    LastCreationIds = 48,
    Merchant = 49,
    MilestoneSeed = 50,
    Modifier = 51,
    MoveToTile = 52,
    NPC = 53,
    Option = 54,
    PenaltyFieldHashCode = 55,
    PlaceOnTile = 56,
    PlayerManager = 57,
    Players = 58,
    PlayerSetup = 59,
    Random = 60,
    Seed = 61,
    SeededGenerator = 62,
    SetPosition = 63,
    SetZ = 64,
    SkillGain = 65,
    StaminaChanges = 66,
    StatChange = 67,
    Stats = 68,
    Status = 69,
    StatusChange = 70,
    TemperatureManager = 71,
    Temporary = 72,
    Tick = 73,
    TileEvent = 74,
    Time = 75,
    UpdateDirection = 76,
    Weight = 77,
    WorldUpdateTile = 78
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
