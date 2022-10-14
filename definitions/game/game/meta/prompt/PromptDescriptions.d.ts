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
import InterruptChoice from "language/dictionary/InterruptChoice";
import TranslationImpl from "language/impl/TranslationImpl";
import type { ISerializedTranslation } from "language/ITranslation";
import type Translation from "language/Translation";
import type Bindable from "ui/input/Bindable";
import { MenuId } from "ui/screen/screens/menu/component/IMenu";
import type { HelpArticle } from "ui/screen/screens/menu/menus/help/HelpArticleDescriptions";
declare type Text = Translation | ISerializedTranslation | string;
export declare const promptGameDialogMessagesEditFiltersSaveOverExisting: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameDialogMessagesEditFiltersResetConfirm: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameMessagesContextMenuClear: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameCannotRunGlError: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], InterruptChoice.Quit[]>;
export declare const promptGameCannotRunIndexedDbError: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], InterruptChoice.Quit[]>;
export declare const promptGameConfirmationActionInLavaOrFire: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[{
    WITH?: Text | undefined;
    ACTION: Text;
    AMOUNT: number;
    LAVA?: true | undefined;
}]>;
export declare const promptGameConfirmationActionIsLava: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[gatherText: Text]>;
export declare const promptGameConfirmationDestroyOnGather: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[growthStage: Text | undefined, objectName: Text]>;
export declare const promptGameConfirmationDroppingContainer: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameConfirmationRestWithEquippedFireSource: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[actionVerb: Text, objectName: Text, actionNoun: Text]>;
export declare const promptGameContainerNotFull: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameDangerousStep: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[objectName: Text]>;
export declare const promptGameDesalinationNoNeed: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameExtinguishWaterStill: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameItemMayBeDestroyedInCraft: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[breakingItemsList: Text]>;
export declare const promptGameItemMayCauseBurns: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameItemsMayBeDestroyedOnUse: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[breakingItemsList: Text]>;
export declare const promptGameLoadFailure: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptGameNoHealingRequired: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameNoSaveOnDeath: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptGamePickUpStillWithWater: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameReleaseCreature: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[creatureName: Text]>;
export declare const promptGameRenameGeneric: import("game/meta/prompt/IPrompt").IPromptInputDescription<[placeholder?: string | TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
export declare const promptGameRenameCreature: import("game/meta/prompt/IPrompt").IPromptInputDescription<[baseName?: TranslationImpl | undefined, placeholder?: TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
export declare const promptGameRenameDoodad: import("game/meta/prompt/IPrompt").IPromptInputDescription<[baseName?: TranslationImpl | undefined, placeholder?: TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
export declare const promptGameRenameItem: import("game/meta/prompt/IPrompt").IPromptInputDescription<[baseName?: TranslationImpl | undefined, placeholder?: TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
export declare const promptGameReturnToTitleScreen: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameReturnToTitleScreenChallenge: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameSailAwayEnd: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameSailAwayReturnable: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameSaveFailure: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptGameIslandTravelConfirmation: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[isGhost: boolean]>;
export declare const promptGameWellConvert: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[waterName: Text]>;
export declare const promptGameSolarStillWontWorkInTemperature: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameSolarStillWontWorkInCave: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGamePause: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Pause, []>;
export declare const promptGameWin: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.GameEnd, []>;
export declare const promptGameOver: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.GameEnd, []>;
export declare const promptGameHelp: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Help, [(HelpArticle | undefined)?]>;
export declare const promptGameMultiplayerOptions: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Pause, []>;
export declare const promptGameEditBindings: import("game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Bindings, Bindable[]>;
export declare const promptMenuCharacterCreationImportCharacterFailure: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptMenuCharacterSelectionDeleteCharacter: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[name: string]>;
export declare const promptMenuGameEndGhostDeleteSave: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.NoWarn | InterruptChoice.Yes)[]>;
export declare const promptMenuGameEndWonDeleteSave: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.NoWarn | InterruptChoice.Yes)[]>;
export declare const promptMenuGameEndReturnToTitleScreen: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuGameEndReturnToTitleScreenChallengeMultiplayer: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number]>;
export declare const promptMenuGameEndReturnToTitleScreenChallenge: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuGameEndReturnToTitleScreenMultiplayer: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number]>;
export declare const promptMenuLoadGameDeleteSave: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[name?: string | undefined]>;
export declare const promptMenuLoadGameDeleteSaves: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[deleteCount: number]>;
export declare const promptMenuLoadGameImportSaveFailure: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[succeeded: Text[], failed: Text[], unknownErrors: boolean]>;
export declare const promptMenuLoadGameExportType: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.LocalFile | InterruptChoice.SteamWorkshop)[]>;
export declare const promptMenuLoadGameMissingMod: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[missingMods: string[], disabledMods: string[]]>;
export declare const promptMenuLoadGameOldBuildTime: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[saveBuildTime: string, gamebuildTime: string]>;
export declare const promptMenuLoadGamePublishError: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[err: Text]>;
export declare const promptMenuMainWelcomeToVersion: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[versionString: string]>;
export declare const promptMenuMainOldVersionWarning: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<[lastVersionString: string, thisVersionString: string], [InterruptChoice.ContinueAnyway, InterruptChoice.OpenSaveFolderAndQuit]>;
export declare const promptMenuModsConfirmPublish: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuModsConfirmPublishUpdate: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuModsModEnableMultipleLanguages: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuModsModEnableUseLanguage: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuModsPublishedReminderRequiredModsOnWorkshop: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptMenuModsPublishError: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[error?: string | undefined]>;
export declare const promptMenuModsPublishUpdateError: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[error?: string | undefined]>;
export declare const promptMenuModsInfoMissingDependencies: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[modName: string, dependencies: Text]>;
export declare const promptMenuModsConfirmEnableDisabledDependencies: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[modName: string, dependencies: Text]>;
export declare const promptMenuModsConfirmDisableDependents: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[modName: string, dependents: Text]>;
export declare const promptMenuModsConfirmUninstallMod: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[modName: string]>;
export declare const promptMenuModsUnloadableSaveGameMod: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[folderName: string]>;
export declare const promptMenuModsSubmenuEditInternalModsModsListChangeReload: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuMultiplayerCannotJoinFailedToLoadMods: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[modErrors: Text[]]>;
export declare const promptMenuNewGameTooManySaves: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptMenuCustomGameOptionsConfirmImport: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuCustomGameOptionsImportFailure: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptMenuMilestoneModifiersConfirmImport: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuMilestoneModifiersImportFailure: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptMenuOptionsReloadGame: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsChangeReload: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsConfirmUnlockMilestones: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsConfirmDiscoverActions: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsConfirmUnlockRecipes: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearAll: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearCharacters: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearHighscores: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearMilestones: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearOptions: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearSaves: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearCraftingRecipes: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearBindings: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsConfirmImportGlobalData: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuPauseGhostKeepSave: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.NoWarn | InterruptChoice.Yes)[]>;
export declare const promptMenuPauseReturnToTitleScreen: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuPauseReturnToTitleScreenChallenge: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[isGhostAndNotServer: boolean]>;
export declare const promptMenuPauseReturnToTitleScreenChallengeMultiplayer: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number]>;
export declare const promptMenuPauseReturnToTitleScreenMultiplayer: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number, isGhostAndNotServer: boolean]>;
export declare const promptMultiplayerFailedToConnect: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.Retry)[]>;
export declare const promptMultiplayerRestartServerAfterLoadingSave: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMultiplayerDisconnect: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[type: TranslationImpl, reason?: TranslationImpl | undefined]>;
export declare const promptMultiplayerDisconnectRejoin: import("game/meta/prompt/IPrompt").IPromptConfirmDescription<[type: TranslationImpl, reason?: TranslationImpl | undefined]>;
export declare const promptSteamworksURLOpenedInBrowser: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptSteamworksWorkshopOpenedInBrowser: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptSteamworksModWithNameAlreadyExists: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptSteamworksModImportSaveGameFailure: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[modName: string]>;
export declare const promptSteamworksModImportedSaveGame: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[modName: string]>;
export declare const promptSteamworksOpenFolderFailure: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptSteamworksNotAvailableOnSteamDeck: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptSteamworksModPublishModJsonUpdateFailed: import("game/meta/prompt/IPrompt").IPromptInfoDescription<[error: string | undefined, publishedFileId: string]>;
export declare const promptUiSaveDrop: import("game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], never[]>;
export {};
