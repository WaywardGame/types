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
    GameConfirmationActionOnFire = 5,
    GameConfirmationActionOnFirePlural = 6,
    GameConfirmationActionInLava = 7,
    GameConfirmationActionInLavaPlural = 8,
    GameConfirmationActionIsLava = 9,
    GameConfirmationDestroyOnGather = 10,
    GameConfirmationDroppingContainer = 11,
    GameConfirmationRestWithEquippedFireSource = 12,
    GameContainerNotFull = 13,
    GameDangerousStep = 14,
    GameDesalinationNoNeed = 15,
    GameExtinguishWaterStill = 16,
    GameItemMayBeDestroyedInCraft = 17,
    GameItemMayCauseBurns = 18,
    GameItemsMayBeDestroyedOnUse = 19,
    GameLoadFailure = 20,
    GameNoHealingRequired = 21,
    GameNoSaveOnDeath = 22,
    GamePickUpStillWithWater = 23,
    GameReleaseCreature = 24,
    GameRenameGeneric = 25,
    GameRenameCreature = 26,
    GameRenameDoodad = 27,
    GameRenameItem = 28,
    GameReturnToTitleScreen = 29,
    GameReturnToTitleScreenChallenge = 30,
    GameSailAwayEnd = 31,
    GameSailAwayReturnable = 32,
    GameSaveFailure = 33,
    GameIslandTravelConfirmation = 34,
    GameWellConvert = 35,
    GameSolarStillWontWorkInTemperature = 36,
    GameSolarStillWontWorkInCave = 37,
    GamePause = 38,
    GameWin = 39,
    GameOver = 40,
    GameHelp = 41,
    GameMultiplayerOptions = 42,
    GameEditBindings = 43,
    MenuCharacterCreationImportCharacterFailure = 44,
    MenuCharacterSelectionDeleteCharacter = 45,
    MenuGameEndGhostDeleteSave = 46,
    MenuGameEndWonDeleteSave = 47,
    MenuGameEndReturnToTitleScreen = 48,
    MenuGameEndReturnToTitleScreenChallengeMultiplayer = 49,
    MenuGameEndReturnToTitleScreenChallenge = 50,
    MenuGameEndReturnToTitleScreenMultiplayer = 51,
    MenuLoadGameDeleteSave = 52,
    MenuLoadGameDeleteSaves = 53,
    MenuLoadGameExportType = 54,
    MenuLoadGameImportSaveFailure = 55,
    MenuLoadGameMissingMod = 56,
    MenuLoadGameOldBuildTime = 57,
    MenuLoadGamePublishError = 58,
    MenuMainWelcomeToVersion = 59,
    MenuMainOldVersionWarning = 60,
    MenuModsConfirmPublish = 61,
    MenuModsConfirmPublishUpdate = 62,
    MenuModsModEnableMultipleLanguages = 63,
    MenuModsModEnableUseLanguage = 64,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 65,
    MenuModsPublishError = 66,
    MenuModsPublishUpdateError = 67,
    MenuModsInfoMissingDependencies = 68,
    MenuModsConfirmEnableDisabledDependencies = 69,
    MenuModsConfirmDisableDependents = 70,
    MenuModsConfirmUninstallMod = 71,
    MenuModsUnloadableSaveGameMod = 72,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 73,
    MenuMultiplayerCannotJoinFailedToLoadMods = 74,
    MenuNewGameTooManySaves = 75,
    MenuCustomGameOptionsConfirmImport = 76,
    MenuCustomGameOptionsImportFailure = 77,
    MenuMilestoneModifiersConfirmImport = 78,
    MenuMilestoneModifiersImportFailure = 79,
    MenuOptionsReloadGame = 80,
    MenuOptionsChangeReload = 81,
    MenuOptionsConfirmUnlockMilestones = 82,
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
export declare type PromptDescriptionArgs<PROMPT extends IPromptDescriptionBase<any[]>> = PROMPT extends IPromptDescriptionBase<infer A> ? A : never;
export interface IPromptDescriptionBase<A extends any[]> {
    type?: Prompt;
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
