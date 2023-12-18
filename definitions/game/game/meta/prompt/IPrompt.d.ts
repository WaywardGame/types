/*!
 * Copyright 2011-2023 Unlok
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
    GameSaveFailure = 31,
    GameIslandTravelConfirmation = 32,
    GameWellConvert = 33,
    GameSolarStillWontWorkInTemperature = 34,
    GameSolarStillWontWorkInCave = 35,
    GameShipToIslandPayment = 36,
    GameQuestConfirmSkip = 37,
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
    MenuMultiplayerCannotJoinMissingMods = 75,
    MenuNewGameTooManySaves = 76,
    MenuCustomGameOptionsConfirmImport = 77,
    MenuCustomGameOptionsImportFailure = 78,
    MenuMilestoneModifiersConfirmImport = 79,
    MenuMilestoneModifiersImportFailure = 80,
    MenuOptionsReloadGame = 81,
    MenuOptionsChangeReload = 82,
    MenuOptionsConfirmUnlockMilestones = 83,
    MenuOptionsConfirmDiscoverActions = 84,
    MenuOptionsConfirmUnlockRecipes = 85,
    MenuOptionsSaveDataClearAll = 86,
    MenuOptionsSaveDataClearCharacters = 87,
    MenuOptionsSaveDataClearHighscores = 88,
    MenuOptionsSaveDataClearMilestones = 89,
    MenuOptionsSaveDataClearOptions = 90,
    MenuOptionsSaveDataClearSaves = 91,
    MenuOptionsSaveDataClearCraftingRecipes = 92,
    MenuOptionsSaveDataClearBindings = 93,
    MenuOptionsConfirmImportGlobalData = 94,
    MenuPauseGhostKeepSave = 95,
    MenuPauseReturnToTitleScreen = 96,
    MenuPauseReturnToTitleScreenChallenge = 97,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 98,
    MenuPauseReturnToTitleScreenMultiplayer = 99,
    MultiplayerFailedToConnect = 100,
    MultiplayerRestartServerAfterLoadingSave = 101,
    MultiplayerDisconnect = 102,
    MultiplayerDisconnectRejoin = 103,
    MultiplayerServerHasUnpublishedMods = 104,
    SteamworksURLOpenedInBrowser = 105,
    SteamworksWorkshopOpenedInBrowser = 106,
    SteamworksModWithNameAlreadyExists = 107,
    SteamworksModImportSaveGameFailure = 108,
    SteamworksModImportedSaveGame = 109,
    SteamworksOpenFolderFailure = 110,
    SteamworksModPublishModJsonUpdateFailed = 111,
    SteamworksNotAvailableOnSteamDeck = 112,
    UiSaveDrop = 113
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
