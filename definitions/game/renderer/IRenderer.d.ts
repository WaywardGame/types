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
import type { IRendererOrigin } from "renderer/context/RendererOrigin";
import type { IVector2 } from "utilities/math/IVector";
export interface IRendererEvents {
    /**
     * Called before rendering everything
     */
    preRender?(): void;
    /**
     * Called after rendering everything
     */
    postRender?(): void;
    /**
     * Called when getting the position to render at. By default, this is the player's location.
     * @param position The player's location
     * @returns The new position to render at, or undefined to use the player's location
     */
    getCameraPosition(position: IVector2): IVector2 | undefined;
    /**
     * Called when setting the zoom level.
     */
    getZoomLevel(): number | undefined;
    /**
     * Called when the renderer is deleted
     */
    deleted(): void;
}
export declare enum UpdateRenderFlag {
    None = 0,
    World = 1,
    FieldOfView = 2,
    FieldOfViewForced = 4,
    FieldOfViewSkipTransition = 8,
    Particles = 16,
    Notifier = 32,
    SteamOverlay = 64,
    All = 255
}
export declare enum RenderSource {
    ActionManager = 0,
    ActionsMenu = 1,
    AmbientLightLevelUpdate = 2,
    AttackAnimationStart = 3,
    FadeIn = 4,
    FovTransition = 5,
    FovUpdate = 6,
    FovUpdateRadius = 7,
    GameAnimating = 8,
    GamePassTurn = 9,
    GameResumed = 10,
    GameTick = 11,
    HiddenMob = 12,
    InspectOverlay = 13,
    IslandLoad = 14,
    ItemEquip = 15,
    ItemEquipEffect = 16,
    ItemMovement = 17,
    ItemUnequip = 18,
    Loop = 19,
    Mod = 20,
    MovementCreature = 21,
    MovementNPC = 22,
    MovementPlayer = 23,
    MovementPlayerPost = 24,
    MovementPlayerZPost = 25,
    MovementTileEvent = 26,
    MultiplayerDisconnect = 27,
    Notifier = 28,
    NotifierAddCreature = 29,
    NotifierAddItem = 30,
    NotifierAddNotifierIcon = 31,
    NotifierAddStat = 32,
    NotifierAddStatusType = 33,
    OptionEquipment = 34,
    OptionVisionMode = 35,
    OptionZoomLevel = 36,
    Particles = 37,
    ParticleSpawn = 38,
    PlayerAdd = 39,
    PlayerKill = 40,
    PlayerProcessMovement = 41,
    PlayerReady = 42,
    PlayerRemove = 43,
    PlayerRespawn = 44,
    PlayerRest = 45,
    PlayerRestStart = 46,
    PlayerRestStop = 47,
    PlayerSetPosition = 48,
    PlayerVehicle = 49,
    PlayerWalkToTilePath = 50,
    PlayerWalkToTilePathOverburdened = 51,
    PlayerWalkToTilePathPreview = 52,
    PlayerWalkToTilePathReset = 53,
    RemoveBlood = 54,
    Resize = 55,
    SetupGl = 56,
    SpawnAnimationStart = 57,
    StartGame = 58,
    Steamworks = 59,
    Thumbnail = 60,
    WorldLayerRendererFlush = 61
}
export declare function calculateAmbientLightLevel(origin: IRendererOrigin, z: number): number;
