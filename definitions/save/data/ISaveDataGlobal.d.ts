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
import { InspectType } from "game/inspection/IInspection";
import { GameMode, IGameOptions } from "game/options/IGameOptions";
import { ISerializedTranslation } from "language/Translation";
import Bindable from "ui/input/Bindable";
import { Binding } from "ui/input/Bindings";
import UiExperiment from "ui/UiExperiments";
import { ISourceFilter } from "utilities/Log";
export interface IOptions {
    alternateContextMenu: boolean;
    alternatingDirectionMovement: boolean;
    alwaysShowMoreInformation: boolean;
    autoAttack: boolean;
    autoGatherHarvest: boolean;
    autoPickup: boolean;
    autoPickupOnIdle: boolean;
    autoSave: [AutoSave.Off] | [AutoSave.Turns | AutoSave.Time, number];
    consoleLogSourceFilter: ISourceFilter;
    currentGame: number;
    defaultCursor: boolean;
    developerMode: boolean;
    developerModeContextMenu: boolean;
    dialogOpacity: number;
    directionTurnDelay: number;
    disableUIEffects: boolean;
    dropLocation: DropLocation;
    dropOnDismantle: boolean;
    dropOnGatherHarvest: boolean;
    fallBackToEnglish: boolean;
    fontStyle: boolean;
    fullscreen: boolean;
    hideEquippedHeadgear: boolean;
    keepSortActive: boolean;
    leftHand: boolean;
    mouseTurnDelay: number;
    musicPlaylist: MusicPlaylist;
    muteEffects: boolean;
    muteMusic: boolean;
    playInputSoundWhenTyping: boolean;
    powerPreference: PowerMode;
    realTimeTickSpeed: number;
    rightClickInspect: boolean;
    rightHand: boolean;
    shouldLoadLastSave: boolean;
    shouldObjectNamesSkipArticle: boolean;
    skipSplash: boolean;
    tooltipDelay: number;
    tooltips: {
        [key in InspectType]: boolean | undefined;
    };
    uiExperiments: UiExperiment.Any[];
    uiScale: number;
    useAdjacentContainers: boolean;
    useNewCraftingSystem: boolean;
    visionMode: boolean;
    volumeEffects: number;
    volumeMusic: number;
    warnOnDangerousActions: boolean;
    warnWhenBreakingItems: boolean;
    warnWhenBreakingItemsOnCraft: boolean;
    windowMode: boolean;
    zoomLevel: number;
    /**
     * Indexed by `Bindable` names, IE `GameFaceDirection`
     * Missing indices = use default binding
     */
    bindings: OptionalDescriptions<keyof typeof Bindable, Binding[]>;
}
export declare enum DropLocation {
    Facing = 0,
    Feet = 1,
    FeetWhenFacingBlocked = 2
}
export declare enum AutoSave {
    Off = 0,
    Turns = 1,
    Time = 2
}
export declare enum MusicPlaylist {
    Ordered = 0,
    Shuffle = 1,
    Dynamic = 2
}
export declare enum PowerMode {
    Default = "default",
    LowPower = "low-power",
    HighPerformance = "high-performance"
}
export declare type IOptionsOld = Partial<Pick<IOptions, "bindings">> & Partial<{
    keyBinds: Record<number, number>;
    bindings: IBindingsOld;
    directionTurnDelay: boolean;
    developerLogging: boolean;
    hints: boolean;
    skipIntro: boolean;
    worldTooltips: boolean;
    dropUnderYourself: boolean;
    openNotesAutomatically: boolean;
    tooltipsCreatures: boolean;
    tooltipsDoodads: boolean;
    tooltipsNPCs: boolean;
    tooltipsTerrain: boolean;
    tooltipsItems: boolean;
    allowDiagonalMovement: boolean;
    disableUIAnimations: boolean;
    enableAutoSave: boolean;
    protectedCraftingItems: boolean;
    protectedCraftingItemContainers: boolean;
}>;
export interface IHighscore {
    name: string;
    message: ISerializedTranslation;
    turns: number;
    score: number;
    difficulty: GameMode;
    date: number;
    characterName: string;
    seed?: string | number;
    difficultyOptions?: IGameOptions;
}
export declare type IHighscoreOld = Partial<IHighscore> & Partial<{
    dailyChallenge: boolean;
    talent: number;
}>;
export declare enum KeyModifierOld {
    Shift = 0,
    Alt = 1,
    Control = 2
}
export interface IBindingOld {
    /**
     * See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code#Try_it_out, use `key` only if `code` is an empty string
     */
    key?: string;
    mouseButton?: number | "Up" | "Down";
    /**
     * Does not currently function
     */
    gamepadButton?: number;
    modifiers?: KeyModifierOld[];
}
export declare type IBindingsOld = Record<string, ArrayOr<IBindingOld>>;
