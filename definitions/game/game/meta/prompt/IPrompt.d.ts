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
    GameConfirmationActionDumpDropItemsInWaterVoid = 7,
    GameConfirmationDestroyOnGather = 8,
    GameConfirmationDroppingContainer = 9,
    GameConfirmationRestWithEquippedFireSource = 10,
    GameContainerNotFull = 11,
    GameDesalinationNoNeed = 12,
    GameExtinguishWaterStill = 13,
    GameItemMayBeDestroyedInCraft = 14,
    GameItemMayCauseBurns = 15,
    GameItemsMayBeDestroyedOnUse = 16,
    GameLoadFailure = 17,
    GameNoHealingRequired = 18,
    GameNoSaveOnDeath = 19,
    GamePickUpDoodadWillBeDestroyed = 20,
    GamePickUpStillWithWater = 21,
    GameReleaseCreature = 22,
    GameUncage = 23,
    GameRenameGeneric = 24,
    GameRenameCreature = 25,
    GameRenameDoodad = 26,
    GameRenameItem = 27,
    GameReturnToTitleScreen = 28,
    GameReturnToTitleScreenChallenge = 29,
    GameSailAwayEnd = 30,
    GameSailAwayReturnable = 31,
    GameSaveError = 32,
    GameSaveFailure = 33,
    GameIslandTravelConfirmation = 34,
    GameWellConvert = 35,
    GameSolarStillWontWorkInTemperature = 36,
    GameSolarStillWontWorkInCave = 37,
    GameShipToIslandPayment = 38,
    GameQuestConfirmSkip = 39,
    GamePause = 40,
    GameWin = 41,
    GameOver = 42,
    GameHelp = 43,
    GameMultiplayerOptions = 44,
    GameEditBindings = 45,
    MenuCharacterCreationImportCharacterFailure = 46,
    MenuCharacterSelectionDeleteCharacter = 47,
    MenuGameEndGhostDeleteSave = 48,
    MenuGameEndWonDeleteSave = 49,
    MenuGameEndReturnToTitleScreen = 50,
    MenuGameEndReturnToTitleScreenChallengeMultiplayer = 51,
    MenuGameEndReturnToTitleScreenChallenge = 52,
    MenuGameEndReturnToTitleScreenMultiplayer = 53,
    MenuLoadGameDeleteSave = 54,
    MenuLoadGameDeleteSaves = 55,
    MenuLoadGameExportType = 56,
    MenuLoadGameImportSaveFailure = 57,
    MenuLoadGameMissingMod = 58,
    MenuLoadGameOldBuildTime = 59,
    MenuLoadGamePublishError = 60,
    MenuMainWelcomeToVersion = 61,
    MenuMainOldVersionWarning = 62,
    MenuModsConfirmPublish = 63,
    MenuModsConfirmPublishUpdate = 64,
    MenuModsModEnableMultipleLanguages = 65,
    MenuModsModEnableUseLanguage = 66,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 67,
    MenuModsPublishError = 68,
    MenuModsPublishUpdateError = 69,
    MenuModsInfoMissingDependencies = 70,
    MenuModsConfirmEnableDisabledDependencies = 71,
    MenuModsConfirmDisableDependents = 72,
    MenuModsConfirmUninstallMod = 73,
    MenuModsUnloadableSaveGameMod = 74,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 75,
    MenuMultiplayerCannotJoinFailedToLoadMods = 76,
    MenuMultiplayerCannotJoinMissingMods = 77,
    MenuNewGameTooManySaves = 78,
    MenuCustomGameOptionsConfirmImport = 79,
    MenuCustomGameOptionsImportFailure = 80,
    MenuMilestoneModifiersConfirmImport = 81,
    MenuMilestoneModifiersImportFailure = 82,
    MenuOptionsReloadGame = 83,
    MenuOptionsChangeReload = 84,
    MenuOptionsChangeSteamBeta = 85,
    MenuOptionsConfirmUnlockMilestones = 86,
    MenuOptionsConfirmDiscoverActions = 87,
    MenuOptionsConfirmUnlockRecipes = 88,
    MenuOptionsSaveDataClearAll = 89,
    MenuOptionsSaveDataClearCharacters = 90,
    MenuOptionsSaveDataClearUI = 91,
    MenuOptionsSaveDataClearHighscores = 92,
    MenuOptionsSaveDataClearMilestones = 93,
    MenuOptionsSaveDataClearOptions = 94,
    MenuOptionsSaveDataClearSaves = 95,
    MenuOptionsSaveDataClearCraftingRecipes = 96,
    MenuOptionsSaveDataClearBindings = 97,
    MenuOptionsConfirmImportGlobalData = 98,
    MenuPauseGhostKeepSave = 99,
    MenuPauseReturnToTitleScreen = 100,
    MenuPauseReturnToTitleScreenChallenge = 101,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 102,
    MenuPauseReturnToTitleScreenMultiplayer = 103,
    MultiplayerFailedToConnect = 104,
    MultiplayerRestartServerAfterLoadingSave = 105,
    MultiplayerDisconnect = 106,
    MultiplayerDisconnectRejoin = 107,
    MultiplayerServerHasUnpublishedMods = 108,
    SteamworksURLOpenedInBrowser = 109,
    SteamworksWorkshopOpenedInBrowser = 110,
    SteamworksModWithNameAlreadyExists = 111,
    SteamworksModImportSaveGameFailure = 112,
    SteamworksModImportedSaveGame = 113,
    SteamworksOpenFolderFailure = 114,
    SteamworksModPublishModJsonUpdateFailed = 115,
    SteamworksNotAvailableOnSteamDeck = 116,
    UiSaveDrop = 117
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
