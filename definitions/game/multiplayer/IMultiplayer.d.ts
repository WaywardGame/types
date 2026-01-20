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
    Curse = 23,
    Damage = 24,
    DiscoverRecipe = 25,
    Dismantle = 26,
    Doodad = 27,
    DoodadManager = 28,
    EncumberedStatus = 29,
    Entity = 30,
    EntityPosition = 31,
    ExhaustedPreMove = 32,
    FlowFieldHashCode = 33,
    FlowFieldPenalty = 34,
    FlowFieldUpdate = 35,
    FlowFieldUpdateTile = 36,
    FlowFieldValue = 37,
    HandToUse = 38,
    HealthChange = 39,
    History = 40,
    InventoryCount = 41,
    Island = 42,
    IslandCivilizationScore = 43,
    Islands = 44,
    IsTileEmpty = 45,
    Item = 46,
    ItemCraft = 47,
    ItemDamage = 48,
    ItemOrder = 49,
    LastCreationIds = 50,
    Merchant = 51,
    MilestoneSeed = 52,
    Modifier = 53,
    MoveToTile = 54,
    NPC = 55,
    Option = 56,
    PenaltyFieldHashCode = 57,
    PlaceOnTile = 58,
    PlayerManager = 59,
    Players = 60,
    PlayerSetup = 61,
    Random = 62,
    ResetItemDiscovered = 63,
    Seed = 64,
    SeededGenerator = 65,
    SetPosition = 66,
    SetZ = 67,
    SkillGain = 68,
    StaminaChanges = 69,
    StatChange = 70,
    Stats = 71,
    Status = 72,
    StatusChange = 73,
    TemperatureManager = 74,
    Temporary = 75,
    Tick = 76,
    TileEvent = 77,
    Time = 78,
    UpdateDirection = 79,
    Weight = 80,
    WorldUpdateTile = 81
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
