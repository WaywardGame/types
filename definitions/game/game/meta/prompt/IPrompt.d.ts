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
    GameConfirmationDestroyOnGather = 6,
    GameConfirmationDroppingContainer = 7,
    GameConfirmationRestWithEquippedFireSource = 8,
    GameContainerNotFull = 9,
    GameDangerousStep = 10,
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
    GameRenameCreature = 21,
    GameRenameDoodad = 22,
    GameRenameItem = 23,
    GameReturnToTitleScreen = 24,
    GameReturnToTitleScreenChallenge = 25,
    GameSailAwayEnd = 26,
    GameSailAwayReturnable = 27,
    GameSaveFailure = 28,
    GameIslandTravelConfirmation = 29,
    GameWellConvert = 30,
    GameSolarStillWontWorkInTemperature = 31,
    GameSolarStillWontWorkInCave = 32,
    GamePause = 33,
    GameWin = 34,
    GameOver = 35,
    GameHelp = 36,
    GameMultiplayerOptions = 37,
    MenuCharacterCreationImportCharacterFailure = 38,
    MenuCharacterSelectionDeleteCharacter = 39,
    MenuGameEndGhostDeleteSave = 40,
    MenuGameEndWonDeleteSave = 41,
    MenuGameEndReturnToTitleScreen = 42,
    MenuGameEndReturnToTitleScreenChallengeMultiplayer = 43,
    MenuGameEndReturnToTitleScreenChallenge = 44,
    MenuGameEndReturnToTitleScreenMultiplayer = 45,
    MenuLoadGameDeleteSave = 46,
    MenuLoadGameDeleteSaves = 47,
    MenuLoadGameImportSaveFailure = 48,
    MenuLoadGameExportType = 49,
    MenuLoadGameMissingMod = 50,
    MenuLoadGamePublishError = 51,
    MenuMainWelcomeToVersion = 52,
    MenuMainOldVersionWarning = 53,
    MenuModsConfirmPublish = 54,
    MenuModsConfirmPublishUpdate = 55,
    MenuModsModEnableMultipleLanguages = 56,
    MenuModsModEnableUseLanguage = 57,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 58,
    MenuModsPublishError = 59,
    MenuModsPublishUpdateError = 60,
    MenuModsInfoMissingDependencies = 61,
    MenuModsConfirmEnableDisabledDependencies = 62,
    MenuModsConfirmDisableDependents = 63,
    MenuModsConfirmUninstallMod = 64,
    MenuModsUnloadableSaveGameMod = 65,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 66,
    MenuMultiplayerCannotJoinFailedToLoadMods = 67,
    MenuNewGameTooManySaves = 68,
    MenuCustomGameOptionsConfirmImport = 69,
    MenuCustomGameOptionsImportFailure = 70,
    MenuMilestoneModifiersConfirmImport = 71,
    MenuMilestoneModifiersImportFailure = 72,
    MenuOptionsReloadGame = 73,
    MenuOptionsConfirmUnlockMilestones = 74,
    MenuOptionsConfirmUnlockRecipes = 75,
    MenuOptionsSaveDataClearAll = 76,
    MenuOptionsSaveDataClearCharacters = 77,
    MenuOptionsSaveDataClearHighscores = 78,
    MenuOptionsSaveDataClearMilestones = 79,
    MenuOptionsSaveDataClearOptions = 80,
    MenuOptionsSaveDataClearSaves = 81,
    MenuOptionsSaveDataClearCraftingRecipes = 82,
    MenuOptionsSaveDataClearBindings = 83,
    MenuOptionsConfirmImportGlobalData = 84,
    MenuPauseGhostKeepSave = 85,
    MenuPauseReturnToTitleScreen = 86,
    MenuPauseReturnToTitleScreenChallenge = 87,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 88,
    MenuPauseReturnToTitleScreenMultiplayer = 89,
    MultiplayerFailedToConnect = 90,
    MultiplayerRestartServerAfterLoadingSave = 91,
    MultiplayerDisconnect = 92,
    MultiplayerDisconnectRejoin = 93,
    SteamworksURLOpenedInBrowser = 94,
    SteamworksWorkshopOpenedInBrowser = 95,
    SteamworksModWithNameAlreadyExists = 96,
    SteamworksModImportSaveGameFailure = 97,
    SteamworksModImportedSaveGame = 98,
    SteamworksOpenFolderFailure = 99,
    SteamworksModPublishModJsonUpdateFailed = 100,
    UiSaveDrop = 101
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
    type: PromptType;
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
}[PROMPT["type"]];
export interface IPromptInfoDescription<A extends any[] = []> extends IPromptDescriptionBase<A> {
    type: PromptType.Info;
}
export interface IPromptConfirmDescription<A extends any[] = []> extends IPromptDescriptionBase<A> {
    type: PromptType.Confirm;
    yesTranslation?: TranslationGenerator<InterruptChoice>;
    noTranslation?: TranslationGenerator<InterruptChoice>;
}
declare type Choices<A extends any[]> = ResolvablePromptProperty<A, InterruptChoice[]>;
export interface IPromptChoiceDescription<A extends any[] = [], CHOICES extends Choices<A> = Choices<A>> extends IPromptDescriptionBase<A> {
    type: PromptType.Choice;
    choices: CHOICES;
}
export interface IPromptInputDescription<A extends any[] = []> extends IPromptDescriptionBase<A> {
    type: PromptType.Input;
    configure?(input: Input, ...args: A): any;
    canCancel?: boolean;
}
export interface IPromptMenuDescription<MENU extends MenuId, A extends any[] = []> extends IPromptDescriptionBase<A> {
    type: PromptType.Menu;
    menu: MENU;
    configure?(menu: MenuById[MENU], ...args: A): any;
}
declare class PromptDescriptionFactory {
    private readonly _priority?;
    constructor(_priority?: PromptPriority | undefined);
    priority(priority: PromptPriority): PromptDescriptionFactory;
    info<A extends any[] = []>(): IPromptInfoDescription<A>;
    confirm<A extends any[] = []>(yesTranslation?: TranslationGenerator<InterruptChoice>, noTranslation?: TranslationGenerator<InterruptChoice>): IPromptConfirmDescription<A>;
    choice<A extends any[], CHOICES extends Choices<A>>(choices: CHOICES): IPromptChoiceDescription<A, CHOICES>;
    input<A extends any[] = []>(configure?: IPromptInputDescription<A>["configure"], canCancel?: true): IPromptInputDescription<A>;
    menu<MENU extends MenuId, A extends any[] = []>(menu: MENU, configure?: IPromptMenuDescription<MENU, A>["configure"]): IPromptMenuDescription<MENU, A>;
}
export declare type PromptDescription<A extends any[] = []> = IPromptInfoDescription<A> | IPromptConfirmDescription<A> | IPromptChoiceDescription<A> | IPromptInputDescription<A> | IPromptMenuDescription<MenuId, A>;
export declare const PromptDescription: PromptDescriptionFactory;
export {};
