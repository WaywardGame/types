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
import type { IFieldOfViewOrigin } from "@wayward/game/renderer/fieldOfView/IFieldOfView";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
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
    /** Called when the zoom level changes. */
    setZoom(zoomlevel: number): any;
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
    Marker = 64,
    SteamOverlay = 128,
    All = 255
}
export declare enum RenderSource {
    ActionManager = 0,
    ActionsMenu = 1,
    AmbientLightLevelUpdate = 2,
    AttackAnimationStart = 3,
    Automation = 4,
    ContainerBucketItemList = 5,
    DoodadChangeType = 6,
    FadeIn = 7,
    FovTransition = 8,
    FovUpdate = 9,
    FovUpdateRadius = 10,
    GameAnimating = 11,
    GamePassTurn = 12,
    GameResumed = 13,
    GameTick = 14,
    GameTickPacket = 15,
    GenericOverlay = 16,
    HiddenMob = 17,
    HumanRest = 18,
    HumanRestStart = 19,
    HumanRestStop = 20,
    HumanSetPosition = 21,
    HumanVehicle = 22,
    InspectOverlay = 23,
    IslandLoad = 24,
    IslandTravel = 25,
    ItemEquip = 26,
    ItemEquipEffect = 27,
    ItemMovement = 28,
    ItemUnequip = 29,
    Mod = 30,
    MovementPlayerPost = 31,
    MovementPlayerZPost = 32,
    MultiplayerDisconnect = 33,
    Notifier = 34,
    NotifierAddCreature = 35,
    NotifierAddItem = 36,
    NotifierAddNotifierIcon = 37,
    NotifierAddStat = 38,
    NotifierAddStatusType = 39,
    NotifierRemoveMarker = 40,
    NotifierRemoveNotification = 41,
    OptionEquipment = 42,
    OptionVisionMode = 43,
    OptionZoomLevel = 44,
    Particles = 45,
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
    RendererReinitialize = 57,
    Resize = 58,
    Sacrifice = 59,
    SetupGl = 60,
    SpawnAnimationStart = 61,
    StartGame = 62,
    Steamworks = 63,
    Thumbnail = 64,
    WorldLayerRendererFlush = 65
}
export declare function calculateAmbientLightLevel(origin: IFieldOfViewOrigin, z: number): number;
export declare const ZOOM_LEVEL_MIN = 1;
export declare const ZOOM_LEVEL_MAX = 16;
export declare const ZOOM_LEVEL_ANIMATION_TIME = 400;
