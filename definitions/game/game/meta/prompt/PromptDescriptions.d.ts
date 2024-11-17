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
import InterruptChoice from "@wayward/game/language/dictionary/InterruptChoice";
import TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import type Bindable from "@wayward/game/ui/input/Bindable";
import { MenuId } from "@wayward/game/ui/screen/screens/menu/component/IMenu";
import type { HelpArticle } from "@wayward/game/ui/screen/screens/menu/menus/help/IHelpArticle";
type Text = Translation | ISerializedTranslation | string;
export declare const promptGameDialogMessagesEditFiltersSaveOverExisting: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameDialogMessagesEditFiltersResetConfirm: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameMessagesContextMenuClear: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameCannotRunGlError: import("@wayward/game/game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], InterruptChoice.Quit[]>;
export declare const promptGameCannotRunIndexedDbError: import("@wayward/game/game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], InterruptChoice.Quit[]>;
export declare const promptGameConfirmationActionInLavaOrFire: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[{
    WITH?: Text;
    ACTION: Text;
    AMOUNT: number;
    LAVA?: true;
}]>;
export declare const promptGameConfirmationActionIsLava: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[gatherText: Text]>;
export declare const promptGameConfirmationDestroyOnGather: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[growthStage: Text | undefined, objectName: Text]>;
export declare const promptGameConfirmationDroppingContainer: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameConfirmationRestWithEquippedFireSource: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[actionVerb: Text, objectName: Text, actionNoun: Text]>;
export declare const promptGameContainerNotFull: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameDesalinationNoNeed: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[dripstoneOrStill: Text]>;
export declare const promptGameExtinguishWaterStill: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameItemMayBeDestroyedInCraft: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[breakingItemsList: Text]>;
export declare const promptGameItemMayCauseBurns: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameItemsMayBeDestroyedOnUse: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[breakingItemsList: Text]>;
export declare const promptGameLoadFailure: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptGameNoHealingRequired: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameNoSaveOnDeath: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptGamePickUpDoodadWillBeDestroyed: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[doodad: Text]>;
export declare const promptGamePickUpStillWithWater: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[dripstoneOrStill: Text]>;
export declare const promptGameReleaseCreature: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[creatureName: Text]>;
export declare const promptGameUncage: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[creatureName: Text]>;
export declare const promptGameRenameGeneric: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInputDescription<[placeholder?: string | TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
export declare const promptGameRenameCreature: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInputDescription<[baseName?: TranslationImpl | undefined, placeholder?: TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
export declare const promptGameRenameDoodad: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInputDescription<[baseName?: TranslationImpl | undefined, placeholder?: TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
export declare const promptGameRenameItem: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInputDescription<[baseName?: TranslationImpl | undefined, placeholder?: TranslationImpl | undefined, name?: string | ISerializedTranslation | undefined]>;
export declare const promptGameReturnToTitleScreen: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameReturnToTitleScreenChallenge: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameSailAwayEnd: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameSailAwayReturnable: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameShipToIslandPayment: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[npcName: Text, itemName?: Text | undefined]>;
export declare const promptGameSaveError: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptGameSaveFailure: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptGameIslandTravelConfirmation: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[isGhost: boolean]>;
export declare const promptGameWellConvert: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[waterName: Text]>;
export declare const promptGameSolarStillWontWorkInTemperature: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[dripstoneOrSolarStill: Text]>;
export declare const promptGameSolarStillWontWorkInCave: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGameQuestConfirmSkip: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptGamePause: import("@wayward/game/game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Pause, []>;
export declare const promptGameWin: import("@wayward/game/game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.GameEnd, []>;
export declare const promptGameOver: import("@wayward/game/game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.GameEnd, []>;
export declare const promptGameHelp: import("@wayward/game/game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Help, [(HelpArticle | undefined)?]>;
export declare const promptGameMultiplayerOptions: import("@wayward/game/game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Pause, []>;
export declare const promptGameEditBindings: import("@wayward/game/game/meta/prompt/IPrompt").IPromptMenuDescription<MenuId.Bindings, Bindable[]>;
export declare const promptMenuCharacterCreationImportCharacterFailure: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptMenuCharacterSelectionDeleteCharacter: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[name: string]>;
export declare const promptMenuGameEndGhostDeleteSave: import("@wayward/game/game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.NoWarn | InterruptChoice.Yes)[]>;
export declare const promptMenuGameEndWonDeleteSave: import("@wayward/game/game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.NoWarn | InterruptChoice.Yes)[]>;
export declare const promptMenuGameEndReturnToTitleScreen: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuGameEndReturnToTitleScreenChallengeMultiplayer: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number]>;
export declare const promptMenuGameEndReturnToTitleScreenChallenge: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuGameEndReturnToTitleScreenMultiplayer: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number]>;
export declare const promptMenuLoadGameDeleteSave: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[name?: string | undefined]>;
export declare const promptMenuLoadGameDeleteSaves: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[deleteCount: number]>;
export declare const promptMenuLoadGameImportSaveFailure: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[succeeded: Text[], failed: Text[], unknownErrors: boolean]>;
export declare const promptMenuLoadGameExportType: import("@wayward/game/game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.LocalFile | InterruptChoice.SteamWorkshop)[]>;
export declare const promptMenuLoadGameMissingMod: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[missingMods: string[], disabledMods: string[]]>;
export declare const promptMenuLoadGameOldBuildTime: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[saveBuildTime: string, gamebuildTime: string]>;
export declare const promptMenuLoadGamePublishError: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[err: Text]>;
export declare const promptMenuMainWelcomeToVersion: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[versionString: string]>;
export declare const promptMenuMainOldVersionWarning: import("@wayward/game/game/meta/prompt/IPrompt").IPromptChoiceDescription<[lastVersionString: string, thisVersionString: string], [InterruptChoice.ContinueAnyway, InterruptChoice.OpenSaveFolderAndQuit]>;
export declare const promptMenuModsConfirmPublish: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuModsConfirmPublishUpdate: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuModsModEnableMultipleLanguages: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuModsModEnableUseLanguage: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuModsPublishedReminderRequiredModsOnWorkshop: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptMenuModsPublishError: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[error?: string | undefined]>;
export declare const promptMenuModsPublishUpdateError: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[error?: string | undefined]>;
export declare const promptMenuModsInfoMissingDependencies: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[modName: string, dependencies: Text]>;
export declare const promptMenuModsConfirmEnableDisabledDependencies: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[modName: string, dependencies: Text]>;
export declare const promptMenuModsConfirmDisableDependents: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[modName: string, dependents: Text]>;
export declare const promptMenuModsConfirmUninstallMod: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[modName: string]>;
export declare const promptMenuModsUnloadableSaveGameMod: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[folderName: string]>;
export declare const promptMenuModsSubmenuEditInternalModsModsListChangeReload: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuMultiplayerCannotJoinFailedToLoadMods: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[modErrors: Text[]]>;
export declare const promptMenuMultiplayerCannotJoinMissingMods: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[missingMods: Text[]]>;
export declare const promptMenuNewGameTooManySaves: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptMenuCustomGameOptionsConfirmImport: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuCustomGameOptionsImportFailure: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptMenuMilestoneModifiersConfirmImport: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuMilestoneModifiersImportFailure: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptMenuOptionsReloadGame: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsChangeSteamBeta: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsChangeReload: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsConfirmUnlockMilestones: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsConfirmDiscoverActions: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsConfirmUnlockRecipes: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearAll: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearCharacters: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearHighscores: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearMilestones: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearOptions: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearSaves: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearCraftingRecipes: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsSaveDataClearBindings: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuOptionsConfirmImportGlobalData: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuPauseGhostKeepSave: import("@wayward/game/game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.NoWarn | InterruptChoice.Yes)[]>;
export declare const promptMenuPauseReturnToTitleScreen: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMenuPauseReturnToTitleScreenChallenge: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[isGhostAndNotServer: boolean]>;
export declare const promptMenuPauseReturnToTitleScreenChallengeMultiplayer: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number]>;
export declare const promptMenuPauseReturnToTitleScreenMultiplayer: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[playersConnected: number, isGhostAndNotServer: boolean]>;
export declare const promptMultiplayerFailedToConnect: import("@wayward/game/game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], (InterruptChoice.Cancel | InterruptChoice.Retry)[]>;
export declare const promptMultiplayerRestartServerAfterLoadingSave: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[]>;
export declare const promptMultiplayerDisconnect: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[type: TranslationImpl, reason?: TranslationImpl | undefined]>;
export declare const promptMultiplayerDisconnectRejoin: import("@wayward/game/game/meta/prompt/IPrompt").IPromptConfirmDescription<[type: TranslationImpl, reason?: TranslationImpl | undefined]>;
export declare const promptMultiplayerServerHasUnpublishedMods: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<string[]>;
export declare const promptSteamworksURLOpenedInBrowser: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptSteamworksWorkshopOpenedInBrowser: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptSteamworksModWithNameAlreadyExists: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptSteamworksModImportSaveGameFailure: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[modName: string]>;
export declare const promptSteamworksModImportedSaveGame: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[modName: string]>;
export declare const promptSteamworksOpenFolderFailure: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptSteamworksNotAvailableOnSteamDeck: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[]>;
export declare const promptSteamworksModPublishModJsonUpdateFailed: import("@wayward/game/game/meta/prompt/IPrompt").IPromptInfoDescription<[error: string | undefined, publishedFileId: string]>;
export declare const promptUiSaveDrop: import("@wayward/game/game/meta/prompt/IPrompt").IPromptChoiceDescription<any[], never[]>;
export {};
