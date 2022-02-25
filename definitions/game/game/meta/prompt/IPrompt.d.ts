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
    GameConfirmationDestroyOnGather = 9,
    GameConfirmationDroppingContainer = 10,
    GameConfirmationRestWithEquippedFireSource = 11,
    GameContainerNotFull = 12,
    GameDangerousStep = 13,
    GameDesalinationNoNeed = 14,
    GameExtinguishWaterStill = 15,
    GameItemMayBeDestroyedInCraft = 16,
    GameItemMayCauseBurns = 17,
    GameItemsMayBeDestroyedOnUse = 18,
    GameLoadFailure = 19,
    GameNoHealingRequired = 20,
    GameNoSaveOnDeath = 21,
    GamePickUpStillWithWater = 22,
    GameReleaseCreature = 23,
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
    GamePause = 36,
    GameWin = 37,
    GameOver = 38,
    GameHelp = 39,
    GameMultiplayerOptions = 40,
    MenuCharacterCreationImportCharacterFailure = 41,
    MenuCharacterSelectionDeleteCharacter = 42,
    MenuGameEndGhostDeleteSave = 43,
    MenuGameEndWonDeleteSave = 44,
    MenuGameEndReturnToTitleScreen = 45,
    MenuGameEndReturnToTitleScreenChallengeMultiplayer = 46,
    MenuGameEndReturnToTitleScreenChallenge = 47,
    MenuGameEndReturnToTitleScreenMultiplayer = 48,
    MenuLoadGameDeleteSave = 49,
    MenuLoadGameDeleteSaves = 50,
    MenuLoadGameExportType = 51,
    MenuLoadGameImportSaveFailure = 52,
    MenuLoadGameMissingMod = 53,
    MenuLoadGameOldBuildTime = 54,
    MenuLoadGamePublishError = 55,
    MenuMainWelcomeToVersion = 56,
    MenuMainOldVersionWarning = 57,
    MenuModsConfirmPublish = 58,
    MenuModsConfirmPublishUpdate = 59,
    MenuModsModEnableMultipleLanguages = 60,
    MenuModsModEnableUseLanguage = 61,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 62,
    MenuModsPublishError = 63,
    MenuModsPublishUpdateError = 64,
    MenuModsInfoMissingDependencies = 65,
    MenuModsConfirmEnableDisabledDependencies = 66,
    MenuModsConfirmDisableDependents = 67,
    MenuModsConfirmUninstallMod = 68,
    MenuModsUnloadableSaveGameMod = 69,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 70,
    MenuMultiplayerCannotJoinFailedToLoadMods = 71,
    MenuNewGameTooManySaves = 72,
    MenuCustomGameOptionsConfirmImport = 73,
    MenuCustomGameOptionsImportFailure = 74,
    MenuMilestoneModifiersConfirmImport = 75,
    MenuMilestoneModifiersImportFailure = 76,
    MenuOptionsReloadGame = 77,
    MenuOptionsConfirmUnlockMilestones = 78,
    MenuOptionsConfirmUnlockRecipes = 79,
    MenuOptionsSaveDataClearAll = 80,
    MenuOptionsSaveDataClearCharacters = 81,
    MenuOptionsSaveDataClearHighscores = 82,
    MenuOptionsSaveDataClearMilestones = 83,
    MenuOptionsSaveDataClearOptions = 84,
    MenuOptionsSaveDataClearSaves = 85,
    MenuOptionsSaveDataClearCraftingRecipes = 86,
    MenuOptionsSaveDataClearBindings = 87,
    MenuOptionsConfirmImportGlobalData = 88,
    MenuPauseGhostKeepSave = 89,
    MenuPauseReturnToTitleScreen = 90,
    MenuPauseReturnToTitleScreenChallenge = 91,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 92,
    MenuPauseReturnToTitleScreenMultiplayer = 93,
    MultiplayerFailedToConnect = 94,
    MultiplayerRestartServerAfterLoadingSave = 95,
    MultiplayerDisconnect = 96,
    MultiplayerDisconnectRejoin = 97,
    SteamworksURLOpenedInBrowser = 98,
    SteamworksWorkshopOpenedInBrowser = 99,
    SteamworksModWithNameAlreadyExists = 100,
    SteamworksModImportSaveGameFailure = 101,
    SteamworksModImportedSaveGame = 102,
    SteamworksOpenFolderFailure = 103,
    SteamworksModPublishModJsonUpdateFailed = 104,
    UiSaveDrop = 105
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
