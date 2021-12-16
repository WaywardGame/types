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
    MenuLoadGameExportType = 48,
    MenuLoadGameImportSaveFailure = 49,
    MenuLoadGameMissingMod = 50,
    MenuLoadGameOldBuildTime = 51,
    MenuLoadGamePublishError = 52,
    MenuMainWelcomeToVersion = 53,
    MenuMainOldVersionWarning = 54,
    MenuModsConfirmPublish = 55,
    MenuModsConfirmPublishUpdate = 56,
    MenuModsModEnableMultipleLanguages = 57,
    MenuModsModEnableUseLanguage = 58,
    MenuModsPublishedReminderRequiredModsOnWorkshop = 59,
    MenuModsPublishError = 60,
    MenuModsPublishUpdateError = 61,
    MenuModsInfoMissingDependencies = 62,
    MenuModsConfirmEnableDisabledDependencies = 63,
    MenuModsConfirmDisableDependents = 64,
    MenuModsConfirmUninstallMod = 65,
    MenuModsUnloadableSaveGameMod = 66,
    MenuModsSubmenuEditInternalModsModsListChangeReload = 67,
    MenuMultiplayerCannotJoinFailedToLoadMods = 68,
    MenuNewGameTooManySaves = 69,
    MenuCustomGameOptionsConfirmImport = 70,
    MenuCustomGameOptionsImportFailure = 71,
    MenuMilestoneModifiersConfirmImport = 72,
    MenuMilestoneModifiersImportFailure = 73,
    MenuOptionsReloadGame = 74,
    MenuOptionsConfirmUnlockMilestones = 75,
    MenuOptionsConfirmUnlockRecipes = 76,
    MenuOptionsSaveDataClearAll = 77,
    MenuOptionsSaveDataClearCharacters = 78,
    MenuOptionsSaveDataClearHighscores = 79,
    MenuOptionsSaveDataClearMilestones = 80,
    MenuOptionsSaveDataClearOptions = 81,
    MenuOptionsSaveDataClearSaves = 82,
    MenuOptionsSaveDataClearCraftingRecipes = 83,
    MenuOptionsSaveDataClearBindings = 84,
    MenuOptionsConfirmImportGlobalData = 85,
    MenuPauseGhostKeepSave = 86,
    MenuPauseReturnToTitleScreen = 87,
    MenuPauseReturnToTitleScreenChallenge = 88,
    MenuPauseReturnToTitleScreenChallengeMultiplayer = 89,
    MenuPauseReturnToTitleScreenMultiplayer = 90,
    MultiplayerFailedToConnect = 91,
    MultiplayerRestartServerAfterLoadingSave = 92,
    MultiplayerDisconnect = 93,
    MultiplayerDisconnectRejoin = 94,
    SteamworksURLOpenedInBrowser = 95,
    SteamworksWorkshopOpenedInBrowser = 96,
    SteamworksModWithNameAlreadyExists = 97,
    SteamworksModImportSaveGameFailure = 98,
    SteamworksModImportedSaveGame = 99,
    SteamworksOpenFolderFailure = 100,
    SteamworksModPublishModJsonUpdateFailed = 101,
    UiSaveDrop = 102
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
