/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { TurnMode } from "@wayward/game/game/IGame";
import type { InspectType } from "@wayward/game/game/inspection/IInspection";
import type { AutoSaveMode } from "@wayward/game/game/meta/IAutoSave";
import type { GameMode, IGameOptions } from "@wayward/game/game/options/IGameOptions";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type { IMultiplayerOptions } from "@wayward/game/multiplayer/IMultiplayer";
import type Bindable from "@wayward/game/ui/input/Bindable";
import type { Binding } from "@wayward/game/ui/input/Bindings";
import type { FontStyle } from "@wayward/game/ui/IUi";
import type UiExperiment from "@wayward/game/ui/UiExperiments";
export interface IOptions {
    alternatingDirectionMovement: boolean;
    autoAttack: boolean;
    autoSave: [AutoSaveMode.Off] | [AutoSaveMode.Turns | AutoSaveMode.Time, number];
    /**
     * Indexed by `Bindable` names, IE `GameFaceDirection`
     * Missing indices = use default binding
     */
    bindings: OptionalDescriptions<keyof typeof Bindable, Binding[]>;
    compressSaves: boolean;
    consoleLogSourceFilters: Record<string, boolean>;
    currentGame: number;
    customTitleBar: boolean;
    defaultCursor: boolean;
    developerLogMessagesForContainerDesyncs: boolean;
    developerMode: boolean;
    developerModeContextMenu: boolean;
    developerReportErrorsToWaywardTeam: boolean;
    dialogOpacity: number;
    directionTurnDelay: number;
    disableAcrylicTransparency: boolean;
    disableCraftingProtectedItems: boolean;
    disableHealthVignette: boolean;
    disableItemNotifiers: boolean;
    disableMilestones: boolean;
    disableMovementAnimations: boolean;
    disableOverlaySupport: boolean;
    disableQuitConfirmation: boolean;
    disableSpritePack: boolean;
    disableUIAnimation: boolean;
    disableUIEffects: boolean;
    disableUIOpacity: boolean;
    discoveredEverything: boolean;
    dropIntoContainers: boolean;
    dropLocation: DropLocation;
    dropOnDisassemble: boolean;
    dropOnDismantle: boolean;
    dropOnGatherHarvest: boolean;
    enableSaveDataBackups: boolean;
    fallBackToEnglish: boolean;
    fontStyle: FontStyle;
    fullscreen: boolean;
    grantAllMilestoneModifiers: boolean;
    hideEquippedHeadgear: boolean;
    hudWidth?: number;
    leftHanded: boolean;
    lowPowerMode: boolean;
    mouseTurnDelay: number;
    musicPlaylist: MusicPlaylist;
    muteEffects: boolean;
    muteMusic: boolean;
    muteWhileNotFocused: boolean;
    playInputSoundWhenTyping: boolean;
    realTimeTickSpeed: number;
    renderer: "webgl" | "webgpu";
    saveImportFolders: string[];
    saveUiDataGlobally: boolean;
    shouldLoadLastSave: boolean;
    shouldObjectNamesSkipArticle: boolean;
    skipSplash: boolean;
    steamInputKeyboardPosition: SteamInputKeyboardPosition;
    tooltipDelay: number;
    tooltips: Record<InspectType, boolean | undefined>;
    tooltipVisibility?: TooltipVisibilityOption;
    uiExperiments: UiExperiment.Any[];
    uiScale?: number;
    useAdjacentContainers: boolean;
    useNewCraftingSystem: boolean;
    visionMode: boolean;
    volumeEffects: number;
    volumeMusic: number;
    warnOnDangerousActions: boolean;
    warnOnDestructiveActions: boolean;
    warnOnDroppingActions: boolean;
    warnWhenBreakingItems: boolean;
    warnWhenBreakingItemsOnCraft: boolean;
    windowMode: boolean;
    zoomLevel: number;
    zoomSmoothing: boolean;
}
export declare enum DropLocation {
    Facing = 0,
    Feet = 1,
    FeetWhenFacingBlocked = 2
}
export declare enum MusicPlaylist {
    Ordered = 0,
    Shuffle = 1,
    Dynamic = 2
}
export declare enum SteamInputKeyboardPosition {
    Dynamic = 0,
    Top = 1,
    Bottom = 2
}
export declare enum TooltipVisibilityOption {
    HiddenUnlessBind = 0,
    ShowMoreInformationWithBind = 1,
    AlwaysShowMoreInformation = 2,
    Default = 1
}
export interface IOptionsOld {
    alwaysShowMoreInformation?: boolean;
    keyBinds?: Record<number, number>;
    bindings?: IBindingsOld;
    directionTurnDelay?: boolean;
    fontStyle?: boolean;
    developerLogging?: boolean;
    hints?: boolean;
    skipIntro?: boolean;
    worldTooltips?: boolean;
    dropUnderYourself?: boolean;
    openNotesAutomatically?: boolean;
    tooltipsCreatures?: boolean;
    tooltipsDoodads?: boolean;
    tooltipsNPCs?: boolean;
    tooltipsTerrain?: boolean;
    tooltipsItems?: boolean;
    allowDiagonalMovement?: boolean;
    disableUIAnimations?: boolean;
    enableAutoSave?: boolean;
    protectedCraftingItems?: boolean;
    protectedCraftingItemContainers?: boolean;
}
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
    turnMode: TurnMode;
    multiplayerOptions?: ImmutableObject<IMultiplayerOptions>;
    customMilestoneModifiersAllowed?: boolean;
}
export type IHighscoreOld = Partial<IHighscore> & Partial<{
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
export type IBindingsOld = Record<string, ArrayOr<IBindingOld>>;
