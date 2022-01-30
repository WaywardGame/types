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
}
export declare enum UpdateRenderFlag {
    None = 0,
    World = 1,
    FieldOfView = 2,
    FieldOfViewForced = 4,
    Particles = 8,
    Notifier = 16,
    SteamOverlay = 32,
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
    MovementPlayerPre = 25,
    MovementPlayerZPost = 26,
    MovementPlayerZPre = 27,
    MovementTileEvent = 28,
    MultiplayerDisconnect = 29,
    Notifier = 30,
    NotifierAddCreature = 31,
    NotifierAddItem = 32,
    NotifierAddNotifierIcon = 33,
    NotifierAddStat = 34,
    NotifierAddStatusType = 35,
    OptionHeadgear = 36,
    OptionVisionMode = 37,
    OptionZoomLevel = 38,
    Particles = 39,
    ParticleSpawn = 40,
    PlayerAdd = 41,
    PlayerKill = 42,
    PlayerProcessMovement = 43,
    PlayerReady = 44,
    PlayerRemove = 45,
    PlayerRespawn = 46,
    PlayerRest = 47,
    PlayerRestStart = 48,
    PlayerRestStop = 49,
    PlayerVehicle = 50,
    PlayerWalkToTilePath = 51,
    PlayerWalkToTilePathOverburdened = 52,
    PlayerWalkToTilePathPreview = 53,
    PlayerWalkToTilePathReset = 54,
    RemoveBlood = 55,
    Resize = 56,
    SetupGl = 57,
    StartGame = 58,
    Steamworks = 59,
    Thumbnail = 60,
    WorldLayerRendererFlush = 61
}
export declare function calculateAmbientLightLevel(origin: IRendererOrigin, z: number): number;
