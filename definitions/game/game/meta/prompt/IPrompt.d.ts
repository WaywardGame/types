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
    GameDesalinationNoNeed = 11,
    GameExtinguishWaterStill = 12,
    GameItemMayBeDestroyedInCraft = 13,
    GameItemMayCauseBurns = 14,
    GameItemsMayBeDestroyedOnUse = 15,
    GameLoadFailure = 16,
    GameNoHealingRequired = 17,
    GameNoSaveOnDeath = 18,
    GamePickUpStillWithWater = 19,
    GameReleaseCreature = 20,
    GameUncage = 21,
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
    GameShipToIslandPayment = 35,
    GamePause = 36,
    GameWin = 37,
    GameOver = 38,
    GameHelp = 39,
    GameMultiplayerOptions = 40,
    GameEditBindings = 41,
    MenuCharacterCreationImportCharacterFailure = 42,
    MenuCharacterSelectionDeleteCharacter = 43,
    MenuGameEndGhostDeleteSave = 44,
    MenuGameEndWonDeleteSave = 45,
    MenuGameEndReturnToTitleScreen = 46,
    MenuGameEndReturnToTitleScreenChallengeMultiplayer = 47,
    MenuGameEndReturnToTitleScreenChallenge = 48,
    MenuGameEndReturnToTitleScreenMultiplayer = 49,
    MenuLoadGameDeleteSave = 50,
    MenuLoadGameDeleteSaves = 51,
    MenuLoadGameExportType = 52,
    MenuLoadGameImportSaveFailure = 53,
    MenuLoadGameMissingMod = 54,
    MenuLoadGameOldBuildTime = 55,
    MenuLoadGamePublishError = 56,
    MenuMainWelcomeToVersion = 57,
    MenuMainOldVersionWarning = 58,
    MenuModsConfirmPublish = 59,
    MenuModsConfirmPublishUpdate = 60,
    MenuModsModEnableMultipleLanguages = 61,
    MenuModsModEnableUseLanguage = 62,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 63,
    MenuModsPublishError = 64,
    MenuModsPublishUpdateError = 65,
    MenuModsInfoMissingDependencies = 66,
    MenuModsConfirmEnableDisabledDependencies = 67,
    MenuModsConfirmDisableDependents = 68,
    MenuModsConfirmUninstallMod = 69,
    MenuModsUnloadableSaveGameMod = 70,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 71,
    MenuMultiplayerCannotJoinFailedToLoadMods = 72,
    MenuNewGameTooManySaves = 73,
    MenuCustomGameOptionsConfirmImport = 74,
    MenuCustomGameOptionsImportFailure = 75,
    MenuMilestoneModifiersConfirmImport = 76,
    MenuMilestoneModifiersImportFailure = 77,
    MenuOptionsReloadGame = 78,
    MenuOptionsChangeReload = 79,
    MenuOptionsConfirmUnlockMilestones = 80,
    MenuOptionsConfirmDiscoverActions = 81,
    MenuOptionsConfirmUnlockRecipes = 82,
    MenuOptionsSaveDataClearAll = 83,
    MenuOptionsSaveDataClearCharacters = 84,
    MenuOptionsSaveDataClearHighscores = 85,
    MenuOptionsSaveDataClearMilestones = 86,
    MenuOptionsSaveDataClearOptions = 87,
    MenuOptionsSaveDataClearSaves = 88,
    MenuOptionsSaveDataClearCraftingRecipes = 89,
    MenuOptionsSaveDataClearBindings = 90,
    MenuOptionsConfirmImportGlobalData = 91,
    MenuPauseGhostKeepSave = 92,
    MenuPauseReturnToTitleScreen = 93,
    MenuPauseReturnToTitleScreenChallenge = 94,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 95,
    MenuPauseReturnToTitleScreenMultiplayer = 96,
    MultiplayerFailedToConnect = 97,
    MultiplayerRestartServerAfterLoadingSave = 98,
    MultiplayerDisconnect = 99,
    MultiplayerDisconnectRejoin = 100,
    SteamworksURLOpenedInBrowser = 101,
    SteamworksWorkshopOpenedInBrowser = 102,
    SteamworksModWithNameAlreadyExists = 103,
    SteamworksModImportSaveGameFailure = 104,
    SteamworksModImportedSaveGame = 105,
    SteamworksOpenFolderFailure = 106,
    SteamworksModPublishModJsonUpdateFailed = 107,
    SteamworksNotAvailableOnSteamDeck = 108,
    UiSaveDrop = 109
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
export type PromptDescriptionArgs<PROMPT extends IPromptDescriptionBase<any[]>> = PROMPT extends IPromptDescriptionBase<infer A> ? A : never;
export interface IPromptDescriptionBase<A extends any[]> {
    type: Prompt;
    promptType: PromptType;
    priority?: PromptPriority;
    title?: TranslationGenerator<UiTranslation, A>;
    description?: TranslationGenerator<UiTranslation, A>;
    init?(...args: A): any;
}
type ResolvablePromptProperty<A extends any[], T> = T | ((...args: A) => T);
export type PromptResult<PROMPT extends IPromptDescriptionBase<any[]>> = {
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
export type PromptChoices<A extends any[]> = ResolvablePromptProperty<A, InterruptChoice[]>;
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
export type PromptDescription<A extends any[] = []> = IPromptInfoDescription<A> | IPromptConfirmDescription<A> | IPromptChoiceDescription<A> | IPromptInputDescription<A> | IPromptMenuDescription<MenuId, A>;
export {};
