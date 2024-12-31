/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type InterruptChoice from "@wayward/game/language/dictionary/InterruptChoice";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type Input from "@wayward/game/ui/component/Input";
import type { MenuId } from "@wayward/game/ui/screen/screens/menu/component/IMenu";
import type { MenuById } from "@wayward/game/ui/screen/screens/menu/MenuMap";
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
    GamePickUpDoodadWillBeDestroyed = 19,
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
    GameSaveError = 31,
    GameSaveFailure = 32,
    GameIslandTravelConfirmation = 33,
    GameWellConvert = 34,
    GameSolarStillWontWorkInTemperature = 35,
    GameSolarStillWontWorkInCave = 36,
    GameShipToIslandPayment = 37,
    GameQuestConfirmSkip = 38,
    GamePause = 39,
    GameWin = 40,
    GameOver = 41,
    GameHelp = 42,
    GameMultiplayerOptions = 43,
    GameEditBindings = 44,
    MenuCharacterCreationImportCharacterFailure = 45,
    MenuCharacterSelectionDeleteCharacter = 46,
    MenuGameEndGhostDeleteSave = 47,
    MenuGameEndWonDeleteSave = 48,
    MenuGameEndReturnToTitleScreen = 49,
    MenuGameEndReturnToTitleScreenChallengeMultiplayer = 50,
    MenuGameEndReturnToTitleScreenChallenge = 51,
    MenuGameEndReturnToTitleScreenMultiplayer = 52,
    MenuLoadGameDeleteSave = 53,
    MenuLoadGameDeleteSaves = 54,
    MenuLoadGameExportType = 55,
    MenuLoadGameImportSaveFailure = 56,
    MenuLoadGameMissingMod = 57,
    MenuLoadGameOldBuildTime = 58,
    MenuLoadGamePublishError = 59,
    MenuMainWelcomeToVersion = 60,
    MenuMainOldVersionWarning = 61,
    MenuModsConfirmPublish = 62,
    MenuModsConfirmPublishUpdate = 63,
    MenuModsModEnableMultipleLanguages = 64,
    MenuModsModEnableUseLanguage = 65,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 66,
    MenuModsPublishError = 67,
    MenuModsPublishUpdateError = 68,
    MenuModsInfoMissingDependencies = 69,
    MenuModsConfirmEnableDisabledDependencies = 70,
    MenuModsConfirmDisableDependents = 71,
    MenuModsConfirmUninstallMod = 72,
    MenuModsUnloadableSaveGameMod = 73,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 74,
    MenuMultiplayerCannotJoinFailedToLoadMods = 75,
    MenuMultiplayerCannotJoinMissingMods = 76,
    MenuNewGameTooManySaves = 77,
    MenuCustomGameOptionsConfirmImport = 78,
    MenuCustomGameOptionsImportFailure = 79,
    MenuMilestoneModifiersConfirmImport = 80,
    MenuMilestoneModifiersImportFailure = 81,
    MenuOptionsReloadGame = 82,
    MenuOptionsChangeReload = 83,
    MenuOptionsChangeSteamBeta = 84,
    MenuOptionsConfirmUnlockMilestones = 85,
    MenuOptionsConfirmDiscoverActions = 86,
    MenuOptionsConfirmUnlockRecipes = 87,
    MenuOptionsSaveDataClearAll = 88,
    MenuOptionsSaveDataClearCharacters = 89,
    MenuOptionsSaveDataClearUI = 90,
    MenuOptionsSaveDataClearHighscores = 91,
    MenuOptionsSaveDataClearMilestones = 92,
    MenuOptionsSaveDataClearOptions = 93,
    MenuOptionsSaveDataClearSaves = 94,
    MenuOptionsSaveDataClearCraftingRecipes = 95,
    MenuOptionsSaveDataClearBindings = 96,
    MenuOptionsConfirmImportGlobalData = 97,
    MenuPauseGhostKeepSave = 98,
    MenuPauseReturnToTitleScreen = 99,
    MenuPauseReturnToTitleScreenChallenge = 100,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 101,
    MenuPauseReturnToTitleScreenMultiplayer = 102,
    MultiplayerFailedToConnect = 103,
    MultiplayerRestartServerAfterLoadingSave = 104,
    MultiplayerDisconnect = 105,
    MultiplayerDisconnectRejoin = 106,
    MultiplayerServerHasUnpublishedMods = 107,
    SteamworksURLOpenedInBrowser = 108,
    SteamworksWorkshopOpenedInBrowser = 109,
    SteamworksModWithNameAlreadyExists = 110,
    SteamworksModImportSaveGameFailure = 111,
    SteamworksModImportedSaveGame = 112,
    SteamworksOpenFolderFailure = 113,
    SteamworksModPublishModJsonUpdateFailed = 114,
    SteamworksNotAvailableOnSteamDeck = 115,
    UiSaveDrop = 116
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
    title?: TranslationGenerator;
    description?: TranslationGenerator;
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
