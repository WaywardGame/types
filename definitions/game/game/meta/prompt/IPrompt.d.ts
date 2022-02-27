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
    GameRenameCreature = 25,
    GameRenameDoodad = 26,
    GameRenameItem = 27,
    GameReturnToTitleScreen = 28,
    GameReturnToTitleScreenChallenge = 29,
    GameSailAwayEnd = 30,
    GameSailAwayReturnable = 31,
    GameSaveFailure = 32,
    GameIslandTravelConfirmation = 33,
    GameWellConvert = 34,
    GameSolarStillWontWorkInTemperature = 35,
    GameSolarStillWontWorkInCave = 36,
    GamePause = 37,
    GameWin = 38,
    GameOver = 39,
    GameHelp = 40,
    GameMultiplayerOptions = 41,
    MenuCharacterCreationImportCharacterFailure = 42,
    MenuCharacterSelectionDeleteCharacter = 43,
    MenuGameEndGhostDeleteSave = 44,
    MenuGameEndWonDeleteSave = 45,
    MenuGameEndReturnToTitleScreen = 46,
    MenuGameEndReturnToTitleScreenChallengeMultiplayer = 47,
    MenuGameEndReturnToTitleScreenChallenge = 48,
    MenuGameEndReturnToTitleScreenMultiplayer = 49,
    MenuLoadGameDeleteSave = 50,
    MenuLoadGameDeleteSaves = 51,
    MenuLoadGameExportType = 52,
    MenuLoadGameImportSaveFailure = 53,
    MenuLoadGameMissingMod = 54,
    MenuLoadGameOldBuildTime = 55,
    MenuLoadGamePublishError = 56,
    MenuMainWelcomeToVersion = 57,
    MenuMainOldVersionWarning = 58,
    MenuModsConfirmPublish = 59,
    MenuModsConfirmPublishUpdate = 60,
    MenuModsModEnableMultipleLanguages = 61,
    MenuModsModEnableUseLanguage = 62,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 63,
    MenuModsPublishError = 64,
    MenuModsPublishUpdateError = 65,
    MenuModsInfoMissingDependencies = 66,
    MenuModsConfirmEnableDisabledDependencies = 67,
    MenuModsConfirmDisableDependents = 68,
    MenuModsConfirmUninstallMod = 69,
    MenuModsUnloadableSaveGameMod = 70,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 71,
    MenuMultiplayerCannotJoinFailedToLoadMods = 72,
    MenuNewGameTooManySaves = 73,
    MenuCustomGameOptionsConfirmImport = 74,
    MenuCustomGameOptionsImportFailure = 75,
    MenuMilestoneModifiersConfirmImport = 76,
    MenuMilestoneModifiersImportFailure = 77,
    MenuOptionsReloadGame = 78,
    MenuOptionsConfirmUnlockMilestones = 79,
    MenuOptionsConfirmUnlockRecipes = 80,
    MenuOptionsSaveDataClearAll = 81,
    MenuOptionsSaveDataClearCharacters = 82,
    MenuOptionsSaveDataClearHighscores = 83,
    MenuOptionsSaveDataClearMilestones = 84,
    MenuOptionsSaveDataClearOptions = 85,
    MenuOptionsSaveDataClearSaves = 86,
    MenuOptionsSaveDataClearCraftingRecipes = 87,
    MenuOptionsSaveDataClearBindings = 88,
    MenuOptionsConfirmImportGlobalData = 89,
    MenuPauseGhostKeepSave = 90,
    MenuPauseReturnToTitleScreen = 91,
    MenuPauseReturnToTitleScreenChallenge = 92,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 93,
    MenuPauseReturnToTitleScreenMultiplayer = 94,
    MultiplayerFailedToConnect = 95,
    MultiplayerRestartServerAfterLoadingSave = 96,
    MultiplayerDisconnect = 97,
    MultiplayerDisconnectRejoin = 98,
    SteamworksURLOpenedInBrowser = 99,
    SteamworksWorkshopOpenedInBrowser = 100,
    SteamworksModWithNameAlreadyExists = 101,
    SteamworksModImportSaveGameFailure = 102,
    SteamworksModImportedSaveGame = 103,
    SteamworksOpenFolderFailure = 104,
    SteamworksModPublishModJsonUpdateFailed = 105,
    UiSaveDrop = 106
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
