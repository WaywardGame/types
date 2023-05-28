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
    GenericOverlay = 14,
    HiddenMob = 15,
    HumanRest = 16,
    HumanRestStart = 17,
    HumanRestStop = 18,
    HumanSetPosition = 19,
    HumanVehicle = 20,
    InspectOverlay = 21,
    IslandLoad = 22,
    IslandTravel = 23,
    ItemEquip = 24,
    ItemEquipEffect = 25,
    ItemMovement = 26,
    ItemUnequip = 27,
    Mod = 28,
    MovementPlayerPost = 29,
    MovementPlayerZPost = 30,
    MultiplayerDisconnect = 31,
    Notifier = 32,
    NotifierAddCreature = 33,
    NotifierAddItem = 34,
    NotifierAddNotifierIcon = 35,
    NotifierAddStat = 36,
    NotifierAddStatusType = 37,
    OptionEquipment = 38,
    OptionVisionMode = 39,
    OptionZoomLevel = 40,
    Particles = 41,
    PlayerAdd = 42,
    PlayerKill = 43,
    PlayerNoclip = 44,
    PlayerProcessMovement = 45,
    PlayerReady = 46,
    PlayerRemove = 47,
    PlayerRespawn = 48,
    PlayerWalkToTilePath = 49,
    PlayerWalkToTilePathOverburdened = 50,
    PlayerWalkToTilePathPreview = 51,
    PlayerWalkToTilePathReset = 52,
    Resize = 53,
    SetupGl = 54,
    SpawnAnimationStart = 55,
    StartGame = 56,
    Steamworks = 57,
    Thumbnail = 58,
    WorldLayerRendererFlush = 59
}
export declare function calculateAmbientLightLevel(origin: IFieldOfViewOrigin, z: number): number;
export declare const ZOOM_LEVEL_MIN = 1;
export declare const ZOOM_LEVEL_MAX = 16;
export declare const ZOOM_LEVEL_ANIMATION_TIME = 400;
