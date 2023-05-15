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
    GenericOverlay = 13,
    HiddenMob = 14,
    HumanRest = 15,
    HumanRestStart = 16,
    HumanRestStop = 17,
    HumanSetPosition = 18,
    HumanVehicle = 19,
    InspectOverlay = 20,
    IslandLoad = 21,
    IslandTravel = 22,
    ItemEquip = 23,
    ItemEquipEffect = 24,
    ItemMovement = 25,
    ItemUnequip = 26,
    Mod = 27,
    MovementPlayerPost = 28,
    MovementPlayerZPost = 29,
    MultiplayerDisconnect = 30,
    Notifier = 31,
    NotifierAddCreature = 32,
    NotifierAddItem = 33,
    NotifierAddNotifierIcon = 34,
    NotifierAddStat = 35,
    NotifierAddStatusType = 36,
    OptionEquipment = 37,
    OptionVisionMode = 38,
    OptionZoomLevel = 39,
    Particles = 40,
    PlayerAdd = 41,
    PlayerKill = 42,
    PlayerNoclip = 43,
    PlayerProcessMovement = 44,
    PlayerReady = 45,
    PlayerRemove = 46,
    PlayerRespawn = 47,
    PlayerWalkToTilePath = 48,
    PlayerWalkToTilePathOverburdened = 49,
    PlayerWalkToTilePathPreview = 50,
    PlayerWalkToTilePathReset = 51,
    Resize = 52,
    SetupGl = 53,
    SpawnAnimationStart = 54,
    StartGame = 55,
    Steamworks = 56,
    Thumbnail = 57,
    WorldLayerRendererFlush = 58
}
export declare function calculateAmbientLightLevel(origin: IFieldOfViewOrigin, z: number): number;
export declare const ZOOM_LEVEL_MIN = 1;
export declare const ZOOM_LEVEL_MAX = 16;
export declare const ZOOM_LEVEL_ANIMATION_TIME = 400;
