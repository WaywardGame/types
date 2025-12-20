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
import type { ICharacter } from "@wayward/game/game/entity/IHuman";
import type { PlayerState } from "@wayward/game/game/entity/player/IPlayer";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IMultiplayerServerToJoin, ISynchronizeState, PauseSource } from "@wayward/game/game/IGame";
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
    AddItemDiscovered = 5,
    Alignment = 6,
    BaseEntityManager = 7,
    CanASeeB = 8,
    Container = 9,
    Creature = 10,
    CreatureAi = 11,
    CreatureAiAdd = 12,
    CreatureAiEmit = 13,
    CreatureAiMaskAdd = 14,
    CreatureAiMaskRemove = 15,
    CreatureAiRemove = 16,
    CreatureAiSet = 17,
    CreatureCheckMove = 18,
    CreatureMovement = 19,
    CreatureNearestPlayer = 20,
    CreatureOffer = 21,
    CreatureStatChange = 22,
    Damage = 23,
    DiscoverRecipe = 24,
    Dismantle = 25,
    Doodad = 26,
    DoodadManager = 27,
    EncumberedStatus = 28,
    Entity = 29,
    EntityPosition = 30,
    ExhaustedPreMove = 31,
    FlowFieldHashCode = 32,
    FlowFieldPenalty = 33,
    FlowFieldUpdate = 34,
    FlowFieldUpdateTile = 35,
    FlowFieldValue = 36,
    HandToUse = 37,
    HealthChange = 38,
    History = 39,
    InventoryCount = 40,
    Island = 41,
    IslandCivilizationScore = 42,
    Islands = 43,
    IsTileEmpty = 44,
    Item = 45,
    ItemCraft = 46,
    ItemDamage = 47,
    ItemOrder = 48,
    LastCreationIds = 49,
    Merchant = 50,
    MilestoneSeed = 51,
    Modifier = 52,
    MoveToTile = 53,
    NPC = 54,
    Option = 55,
    PenaltyFieldHashCode = 56,
    PlaceOnTile = 57,
    PlayerManager = 58,
    Players = 59,
    PlayerSetup = 60,
    Random = 61,
    ResetItemDiscovered = 62,
    Seed = 63,
    SeededGenerator = 64,
    SetPosition = 65,
    SetZ = 66,
    SkillGain = 67,
    StaminaChanges = 68,
    StatChange = 69,
    Stats = 70,
    Status = 71,
    StatusChange = 72,
    TemperatureManager = 73,
    Temporary = 74,
    Tick = 75,
    TileEvent = 76,
    Time = 77,
    UpdateDirection = 78,
    Weight = 79,
    WorldUpdateTile = 80
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
    multiplayerServerToJoin: IMultiplayerServerToJoin;
    character: ICharacter;
    milestoneModifiers: Set<Milestone>;
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
export interface IMultiplayerOnConnected {
    matchmakingInfo: IMatchmakingInfo;
    hasExistingPlayerInGame: boolean;
    customMilestoneModifiersAllowed: boolean;
}
