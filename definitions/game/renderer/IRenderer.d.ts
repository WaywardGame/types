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
import type { IFieldOfViewOrigin } from "renderer/fieldOfView/IFieldOfView";
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
    getMinZoomLevel(): number | undefined;
    /**
     * Called when setting the zoom level.
     */
    getMaxZoomLevel(): number | undefined;
    /**
     * Called when setting the zoom level.
     * @param zoomLevel The zoom level that will be used by default
     */
    getZoomLevel(zoomLevel: number): number | undefined;
    /**
     * Called when the renderer is initialized
     */
    initialized(): void;
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
    DoodadChangeType = 4,
    FadeIn = 5,
    FovTransition = 6,
    FovUpdate = 7,
    FovUpdateRadius = 8,
    GameAnimating = 9,
    GamePassTurn = 10,
    GameResumed = 11,
    GameTick = 12,
    HiddenMob = 13,
    HumanRest = 14,
    HumanRestStart = 15,
    HumanRestStop = 16,
    HumanSetPosition = 17,
    HumanVehicle = 18,
    InspectOverlay = 19,
    IslandLoad = 20,
    IslandTravel = 21,
    ItemEquip = 22,
    ItemEquipEffect = 23,
    ItemMovement = 24,
    ItemUnequip = 25,
    Loop = 26,
    Mod = 27,
    MovementCreature = 28,
    MovementNPC = 29,
    MovementPlayer = 30,
    MovementPlayerPost = 31,
    MovementPlayerZPost = 32,
    MovementTileEvent = 33,
    MultiplayerDisconnect = 34,
    Notifier = 35,
    NotifierAddCreature = 36,
    NotifierAddItem = 37,
    NotifierAddNotifierIcon = 38,
    NotifierAddStat = 39,
    NotifierAddStatusType = 40,
    OptionEquipment = 41,
    OptionVisionMode = 42,
    OptionZoomLevel = 43,
    Particles = 44,
    ParticleSpawn = 45,
    PlayerAdd = 46,
    PlayerKill = 47,
    PlayerNoclip = 48,
    PlayerProcessMovement = 49,
    PlayerReady = 50,
    PlayerRemove = 51,
    PlayerRespawn = 52,
    PlayerWalkToTilePath = 53,
    PlayerWalkToTilePathOverburdened = 54,
    PlayerWalkToTilePathPreview = 55,
    PlayerWalkToTilePathReset = 56,
    RemoveBlood = 57,
    Resize = 58,
    SetupGl = 59,
    SpawnAnimationStart = 60,
    StartGame = 61,
    Steamworks = 62,
    Thumbnail = 63,
    WorldLayerRendererFlush = 64
}
export declare function calculateAmbientLightLevel(origin: IFieldOfViewOrigin, z: number): number;
export declare const ZOOM_LEVEL_MIN = 1;
export declare const ZOOM_LEVEL_MAX = 16;
export declare const ZOOM_LEVEL_ANIMATION_TIME = 400;
