/*!
 * Copyright 2011-2023 Unlok
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
    Automation = 4,
    DoodadChangeType = 5,
    FadeIn = 6,
    FovTransition = 7,
    FovUpdate = 8,
    FovUpdateRadius = 9,
    GameAnimating = 10,
    GamePassTurn = 11,
    GameResumed = 12,
    GameTick = 13,
    GameTickPacket = 14,
    GenericOverlay = 15,
    HiddenMob = 16,
    HumanRest = 17,
    HumanRestStart = 18,
    HumanRestStop = 19,
    HumanSetPosition = 20,
    HumanVehicle = 21,
    InspectOverlay = 22,
    IslandLoad = 23,
    IslandTravel = 24,
    ItemEquip = 25,
    ItemEquipEffect = 26,
    ItemMovement = 27,
    ItemUnequip = 28,
    Mod = 29,
    MovementPlayerPost = 30,
    MovementPlayerZPost = 31,
    MultiplayerDisconnect = 32,
    Notifier = 33,
    NotifierAddCreature = 34,
    NotifierAddItem = 35,
    NotifierAddNotifierIcon = 36,
    NotifierAddStat = 37,
    NotifierAddStatusType = 38,
    OptionEquipment = 39,
    OptionVisionMode = 40,
    OptionZoomLevel = 41,
    Particles = 42,
    PlayerAdd = 43,
    PlayerKill = 44,
    PlayerNoclip = 45,
    PlayerProcessMovement = 46,
    PlayerReady = 47,
    PlayerRemove = 48,
    PlayerRespawn = 49,
    PlayerWalkToTilePath = 50,
    PlayerWalkToTilePathOverburdened = 51,
    PlayerWalkToTilePathPreview = 52,
    PlayerWalkToTilePathReset = 53,
    RendererReinitialize = 54,
    Resize = 55,
    Sacrifice = 56,
    SetupGl = 57,
    SpawnAnimationStart = 58,
    StartGame = 59,
    Steamworks = 60,
    Thumbnail = 61,
    WorldLayerRendererFlush = 62
}
export declare function calculateAmbientLightLevel(origin: IFieldOfViewOrigin, z: number): number;
export declare const ZOOM_LEVEL_MIN = 1;
export declare const ZOOM_LEVEL_MAX = 16;
export declare const ZOOM_LEVEL_ANIMATION_TIME = 400;
