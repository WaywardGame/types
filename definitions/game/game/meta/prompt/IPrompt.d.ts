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
import type InterruptChoice from "language/dictionary/InterruptChoice";
import type UiTranslation from "language/dictionary/UiTranslation";
import type { TranslationGenerator } from "ui/component/IComponent";
import type Input from "ui/component/Input";
import type { MenuId } from "ui/screen/screens/menu/component/IMenu";
import type { MenuById } from "ui/screen/screens/menu/MenuMap";
export declare enum Prompt {
    GameDialogMessagesEditFiltersSaveOverExisting = 0,
    GameDialogMessagesEditFiltersResetConfirm = 1,
    GameMessagesContextMenuClear = 2,
    GameCannotRunGlError = 3,
    GameCannotRunIndexedDbError = 4,
    GameConfirmationActionIsLava = 5,
    GameConfirmationActionInLavaOrFire = 6,
    GameConfirmationDestroyOnGather = 7,
    GameConfirmationDroppingContainer = 8,
    GameConfirmationRestWithEquippedFireSource = 9,
    GameContainerNotFull = 10,
    GameDangerousStep = 11,
    GameDesalinationNoNeed = 12,
    GameExtinguishWaterStill = 13,
    GameItemMayBeDestroyedInCraft = 14,
    GameItemMayCauseBurns = 15,
    GameItemsMayBeDestroyedOnUse = 16,
    GameLoadFailure = 17,
    GameNoHealingRequired = 18,
    GameNoSaveOnDeath = 19,
    GamePickUpStillWithWater = 20,
    GameReleaseCreature = 21,
    GameRenameGeneric = 22,
    GameRenameCreature = 23,
    GameRenameDoodad = 24,
    GameRenameItem = 25,
    GameReturnToTitleScreen = 26,
    GameReturnToTitleScreenChallenge = 27,
    GameSailAwayEnd = 28,
    GameSailAwayReturnable = 29,
    GameSaveFailure = 30,
    GameIslandTravelConfirmation = 31,
    GameWellConvert = 32,
    GameSolarStillWontWorkInTemperature = 33,
    GameSolarStillWontWorkInCave = 34,
    GamePause = 35,
    GameWin = 36,
    GameOver = 37,
    GameHelp = 38,
    GameMultiplayerOptions = 39,
    GameEditBindings = 40,
    MenuCharacterCreationImportCharacterFailure = 41,
    MenuCharacterSelectionDeleteCharacter = 42,
    MenuGameEndGhostDeleteSave = 43,
    MenuGameEndWonDeleteSave = 44,
    MenuGameEndReturnToTitleScreen = 45,
    MenuGameEndReturnToTitleScreenChallengeMultiplayer = 46,
    MenuGameEndReturnToTitleScreenChallenge = 47,
    MenuGameEndReturnToTitleScreenMultiplayer = 48,
    MenuLoadGameDeleteSave = 49,
    MenuLoadGameDeleteSaves = 50,
    MenuLoadGameExportType = 51,
    MenuLoadGameImportSaveFailure = 52,
    MenuLoadGameMissingMod = 53,
    MenuLoadGameOldBuildTime = 54,
    MenuLoadGamePublishError = 55,
    MenuMainWelcomeToVersion = 56,
    MenuMainOldVersionWarning = 57,
    MenuModsConfirmPublish = 58,
    MenuModsConfirmPublishUpdate = 59,
    MenuModsModEnableMultipleLanguages = 60,
    MenuModsModEnableUseLanguage = 61,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 62,
    MenuModsPublishError = 63,
    MenuModsPublishUpdateError = 64,
    MenuModsInfoMissingDependencies = 65,
    MenuModsConfirmEnableDisabledDependencies = 66,
    MenuModsConfirmDisableDependents = 67,
    MenuModsConfirmUninstallMod = 68,
    MenuModsUnloadableSaveGameMod = 69,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 70,
    MenuMultiplayerCannotJoinFailedToLoadMods = 71,
    MenuNewGameTooManySaves = 72,
    MenuCustomGameOptionsConfirmImport = 73,
    MenuCustomGameOptionsImportFailure = 74,
    MenuMilestoneModifiersConfirmImport = 75,
    MenuMilestoneModifiersImportFailure = 76,
    MenuOptionsReloadGame = 77,
    MenuOptionsChangeReload = 78,
    MenuOptionsConfirmUnlockMilestones = 79,
    MenuOptionsConfirmUnlockRecipes = 80,
    MenuOptionsSaveDataClearAll = 81,
    MenuOptionsSaveDataClearCharacters = 82,
    MenuOptionsSaveDataClearHighscores = 83,
    MenuOptionsSaveDataClearMilestones = 84,
    MenuOptionsSaveDataClearOptions = 85,
    MenuOptionsSaveDataClearSaves = 86,
    MenuOptionsSaveDataClearCraftingRecipes = 87,
    MenuOptionsSaveDataClearBindings = 88,
    MenuOptionsConfirmImportGlobalData = 89,
    MenuPauseGhostKeepSave = 90,
    MenuPauseReturnToTitleScreen = 91,
    MenuPauseReturnToTitleScreenChallenge = 92,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 93,
    MenuPauseReturnToTitleScreenMultiplayer = 94,
    MultiplayerFailedToConnect = 95,
    MultiplayerRestartServerAfterLoadingSave = 96,
    MultiplayerDisconnect = 97,
    MultiplayerDisconnectRejoin = 98,
    SteamworksURLOpenedInBrowser = 99,
    SteamworksWorkshopOpenedInBrowser = 100,
    SteamworksModWithNameAlreadyExists = 101,
    SteamworksModImportSaveGameFailure = 102,
    SteamworksModImportedSaveGame = 103,
    SteamworksOpenFolderFailure = 104,
    SteamworksModPublishModJsonUpdateFailed = 105,
    SteamworksNotAvailableOnSteamDeck = 106,
    UiSaveDrop = 107
}
export declare enum PromptType {
    Info = 0,
    Confirm = 1,
    Choice = 2,
    Input = 3,
    Menu = 4
}
export declare enum PromptPriority {
    Default = 0,
    Menu = 1
}
export declare type PromptDescriptionArgs<PROMPT extends IPromptDescriptionBase<any[]>> = PROMPT extends IPromptDescriptionBase<infer A> ? A : never;
export interface IPromptDescriptionBase<A extends any[]> {
    type: Prompt;
    promptType: PromptType;
    priority?: PromptPriority;
    title?: TranslationGenerator<UiTranslation, A>;
    description?: TranslationGenerator<UiTranslation, A>;
    init?(...args: A): any;
}
declare type ResolvablePromptProperty<A extends any[], T> = T | ((...args: A) => T);
export declare type PromptResult<PROMPT extends IPromptDescriptionBase<any[]>> = {
    [PromptType.Info]: void;
    [PromptType.Confirm]: boolean;
    [PromptType.Choice]: PROMPT extends IPromptChoiceDescription<any, infer CHOICES> ? CHOICES extends ResolvablePromptProperty<any, infer T> ? T extends Array<infer T2> ? T2 : T : never : never;
    [PromptType.Input]: string;
    [PromptType.Menu]: void;
}[PROMPT["promptType"]];
export interface IPromptInfoDescription<A extends any[] = []> extends IPromptDescriptionBase<A> {
    promptType: PromptType.Info;
}
export interface IPromptConfirmDescription<A extends any[] = []> extends IPromptDescriptionBase<A> {
    promptType: PromptType.Confirm;
    yesTranslation?: TranslationGenerator<InterruptChoice>;
    noTranslation?: TranslationGenerator<InterruptChoice>;
}
export declare type PromptChoices<A extends any[]> = ResolvablePromptProperty<A, InterruptChoice[]>;
export interface IPromptChoiceDescription<A extends any[] = [], CHOICES extends PromptChoices<A> = PromptChoices<A>> extends IPromptDescriptionBase<A> {
    promptType: PromptType.Choice;
    choices: CHOICES;
}
export interface IPromptInputDescription<A extends any[] = []> extends IPromptDescriptionBase<A> {
    promptType: PromptType.Input;
    configure?(input: Input, ...args: A): any;
    canCancel?: boolean;
}
export interface IPromptMenuDescription<MENU extends MenuId, A extends any[] = []> extends IPromptDescriptionBase<A> {
    promptType: PromptType.Menu;
    menu: MENU;
    configure?(menu: MenuById[MENU], ...args: A): any;
}
export declare type PromptDescription<A extends any[] = []> = IPromptInfoDescription<A> | IPromptConfirmDescription<A> | IPromptChoiceDescription<A> | IPromptInputDescription<A> | IPromptMenuDescription<MenuId, A>;
export {};
