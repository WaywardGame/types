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
    MenuMultiplayerOptionsDeletePlayer = 58,
    MenuMultiplayerOptionsDeleteConnectedPlayer = 59,
    MenuLoadGameMissingMod = 60,
    MenuLoadGameOldBuildTime = 61,
    MenuLoadGamePublishError = 62,
    MenuMainWelcomeToVersion = 63,
    MenuMainOldVersionWarning = 64,
    MenuModsConfirmPublish = 65,
    MenuModsConfirmPublishUpdate = 66,
    MenuModsModEnableMultipleLanguages = 67,
    MenuModsModEnableUseLanguage = 68,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 69,
    MenuModsPublishError = 70,
    MenuModsPublishUpdateError = 71,
    MenuModsInfoMissingDependencies = 72,
    MenuModsConfirmEnableDisabledDependencies = 73,
    MenuModsConfirmDisableDependents = 74,
    MenuModsConfirmUninstallMod = 75,
    MenuModsUnloadableSaveGameMod = 76,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 77,
    MenuMultiplayerCannotJoinFailedToLoadMods = 78,
    MenuMultiplayerCannotJoinMissingMods = 79,
    MenuNewGameTooManySaves = 80,
    MenuCustomGameOptionsConfirmImport = 81,
    MenuCustomGameOptionsImportFailure = 82,
    MenuMilestoneModifiersConfirmImport = 83,
    MenuMilestoneModifiersImportFailure = 84,
    MenuOptionsReloadGame = 85,
    MenuOptionsChangeReload = 86,
    MenuOptionsChangeSteamBeta = 87,
    MenuOptionsConfirmUnlockMilestones = 88,
    MenuOptionsConfirmDiscoverActions = 89,
    MenuOptionsConfirmUnlockRecipes = 90,
    MenuOptionsSaveDataClearAll = 91,
    MenuOptionsSaveDataClearCharacters = 92,
    MenuOptionsSaveDataClearUI = 93,
    MenuOptionsSaveDataClearHighscores = 94,
    MenuOptionsSaveDataClearMilestones = 95,
    MenuOptionsSaveDataClearOptions = 96,
    MenuOptionsSaveDataClearSaves = 97,
    MenuOptionsSaveDataClearCraftingRecipes = 98,
    MenuOptionsSaveDataClearBindings = 99,
    MenuOptionsConfirmImportGlobalData = 100,
    MenuPauseGhostKeepSave = 101,
    MenuPauseReturnToTitleScreen = 102,
    MenuPauseReturnToTitleScreenChallenge = 103,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 104,
    MenuPauseReturnToTitleScreenMultiplayer = 105,
    MultiplayerFailedToConnect = 106,
    MultiplayerRestartServerAfterLoadingSave = 107,
    MultiplayerDisconnect = 108,
    MultiplayerDisconnectRejoin = 109,
    MultiplayerServerHasUnpublishedMods = 110,
    SteamworksURLOpenedInBrowser = 111,
    SteamworksWorkshopOpenedInBrowser = 112,
    SteamworksModWithNameAlreadyExists = 113,
    SteamworksModImportSaveGameFailure = 114,
    SteamworksModImportedSaveGame = 115,
    SteamworksOpenFolderFailure = 116,
    SteamworksModPublishModJsonUpdateFailed = 117,
    SteamworksNotAvailableOnSteamDeck = 118,
    UiSaveDrop = 119
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
