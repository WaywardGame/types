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
import { ICharacter } from "entity/IHuman";
import { PlayerState } from "entity/player/IPlayer";
import Player from "entity/player/Player";
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
    CreatureIsInFlowField = 6,
    CreatureMoveDirection = 7,
    CreatureNearestPlayer = 8,
    CreaturePosition = 9,
    Damage = 10,
    Dismantle = 11,
    EncumberedStatus = 12,
    FlowFieldHashCode = 13,
    FlowFieldValue = 14,
    HandToUse = 15,
    HealthChange = 16,
    InventoryCount = 17,
    IsTileEmpty = 18,
    Item = 19,
    ItemCraft = 20,
    ItemDamage = 21,
    ItemOrder = 22,
    LastCreationIds = 23,
    MilestoneSeed = 24,
    Misc = 25,
    PenaltyFieldHashCode = 26,
    PlaceOnTile = 27,
    PlayerPositions = 28,
    Players = 29,
    PlayerSetup = 30,
    Random = 31,
    Reputation = 32,
    Seed = 33,
    SkillGain = 34,
    StaminaChanges = 35,
    StatChange = 36,
    Stats = 37,
    StatusChange = 38,
    Temp = 39,
    Tick = 40,
    Ticks = 41,
    Weight = 42
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
    enablePacketNumberChecks: boolean;
    checkSeedHistory: boolean;
    chunkSize: number;
    logPackets: boolean;
    logSyncChecks: boolean;
    stopWebRtc: boolean;
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
    joinServerTimeout?: number;
}
