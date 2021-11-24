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
    MovementPlayerPost = 23,
    MovementPlayerPre = 24,
    MovementPlayerZPost = 25,
    MovementPlayerZPre = 26,
    MovementTileEvent = 27,
    MultiplayerDisconnect = 28,
    Notifier = 29,
    NotifierAddCreature = 30,
    NotifierAddItem = 31,
    NotifierAddNotifierIcon = 32,
    NotifierAddStat = 33,
    NotifierAddStatusType = 34,
    OptionHeadgear = 35,
    OptionVisionMode = 36,
    OptionZoomLevel = 37,
    Particles = 38,
    ParticleSpawn = 39,
    PlayerAdd = 40,
    PlayerKill = 41,
    PlayerProcessMovement = 42,
    PlayerReady = 43,
    PlayerRemove = 44,
    PlayerRespawn = 45,
    PlayerRest = 46,
    PlayerRestStart = 47,
    PlayerRestStop = 48,
    PlayerVehicle = 49,
    PlayerWalkToTilePath = 50,
    PlayerWalkToTilePathOverburdened = 51,
    PlayerWalkToTilePathPreview = 52,
    PlayerWalkToTilePathReset = 53,
    RemoveBlood = 54,
    Resize = 55,
    SetupGl = 56,
    StartGame = 57,
    Steamworks = 58,
    Thumbnail = 59,
    WorldLayerRendererFlush = 60
}
export declare function calculateAmbientLightLevel(origin: IRendererOrigin, z: number): number;
