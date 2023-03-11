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
    GameUncage = 22,
    GameRenameGeneric = 23,
    GameRenameCreature = 24,
    GameRenameDoodad = 25,
    GameRenameItem = 26,
    GameReturnToTitleScreen = 27,
    GameReturnToTitleScreenChallenge = 28,
    GameSailAwayEnd = 29,
    GameSailAwayReturnable = 30,
    GameSaveFailure = 31,
    GameIslandTravelConfirmation = 32,
    GameWellConvert = 33,
    GameSolarStillWontWorkInTemperature = 34,
    GameSolarStillWontWorkInCave = 35,
    GameShipToIslandPayment = 36,
    GamePause = 37,
    GameWin = 38,
    GameOver = 39,
    GameHelp = 40,
    GameMultiplayerOptions = 41,
    GameEditBindings = 42,
    MenuCharacterCreationImportCharacterFailure = 43,
    MenuCharacterSelectionDeleteCharacter = 44,
    MenuGameEndGhostDeleteSave = 45,
    MenuGameEndWonDeleteSave = 46,
    MenuGameEndReturnToTitleScreen = 47,
    MenuGameEndReturnToTitleScreenChallengeMultiplayer = 48,
    MenuGameEndReturnToTitleScreenChallenge = 49,
    MenuGameEndReturnToTitleScreenMultiplayer = 50,
    MenuLoadGameDeleteSave = 51,
    MenuLoadGameDeleteSaves = 52,
    MenuLoadGameExportType = 53,
    MenuLoadGameImportSaveFailure = 54,
    MenuLoadGameMissingMod = 55,
    MenuLoadGameOldBuildTime = 56,
    MenuLoadGamePublishError = 57,
    MenuMainWelcomeToVersion = 58,
    MenuMainOldVersionWarning = 59,
    MenuModsConfirmPublish = 60,
    MenuModsConfirmPublishUpdate = 61,
    MenuModsModEnableMultipleLanguages = 62,
    MenuModsModEnableUseLanguage = 63,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 64,
    MenuModsPublishError = 65,
    MenuModsPublishUpdateError = 66,
    MenuModsInfoMissingDependencies = 67,
    MenuModsConfirmEnableDisabledDependencies = 68,
    MenuModsConfirmDisableDependents = 69,
    MenuModsConfirmUninstallMod = 70,
    MenuModsUnloadableSaveGameMod = 71,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 72,
    MenuMultiplayerCannotJoinFailedToLoadMods = 73,
    MenuNewGameTooManySaves = 74,
    MenuCustomGameOptionsConfirmImport = 75,
    MenuCustomGameOptionsImportFailure = 76,
    MenuMilestoneModifiersConfirmImport = 77,
    MenuMilestoneModifiersImportFailure = 78,
    MenuOptionsReloadGame = 79,
    MenuOptionsChangeReload = 80,
    MenuOptionsConfirmUnlockMilestones = 81,
    MenuOptionsConfirmDiscoverActions = 82,
    MenuOptionsConfirmUnlockRecipes = 83,
    MenuOptionsSaveDataClearAll = 84,
    MenuOptionsSaveDataClearCharacters = 85,
    MenuOptionsSaveDataClearHighscores = 86,
    MenuOptionsSaveDataClearMilestones = 87,
    MenuOptionsSaveDataClearOptions = 88,
    MenuOptionsSaveDataClearSaves = 89,
    MenuOptionsSaveDataClearCraftingRecipes = 90,
    MenuOptionsSaveDataClearBindings = 91,
    MenuOptionsConfirmImportGlobalData = 92,
    MenuPauseGhostKeepSave = 93,
    MenuPauseReturnToTitleScreen = 94,
    MenuPauseReturnToTitleScreenChallenge = 95,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 96,
    MenuPauseReturnToTitleScreenMultiplayer = 97,
    MultiplayerFailedToConnect = 98,
    MultiplayerRestartServerAfterLoadingSave = 99,
    MultiplayerDisconnect = 100,
    MultiplayerDisconnectRejoin = 101,
    SteamworksURLOpenedInBrowser = 102,
    SteamworksWorkshopOpenedInBrowser = 103,
    SteamworksModWithNameAlreadyExists = 104,
    SteamworksModImportSaveGameFailure = 105,
    SteamworksModImportedSaveGame = 106,
    SteamworksOpenFolderFailure = 107,
    SteamworksModPublishModJsonUpdateFailed = 108,
    SteamworksNotAvailableOnSteamDeck = 109,
    UiSaveDrop = 110
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
