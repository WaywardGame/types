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
import type { IInit } from "@wayward/game/Init";
import type { Stat } from "@wayward/game/game/entity/IStats";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import { Prompt } from "@wayward/game/game/meta/prompt/IPrompt";
import { Direction } from "@wayward/game/utilities/math/Direction";
import { ApplicationDom } from "@wayward/test/core/applicationDom";
import { ApplicationLogger } from "@wayward/test/core/applicationLogger";
import type { IDedicatedServerGameOptions, INewGameOptions, ITestJoinServerOptions, IWaitUntilGameLoadedOptions } from "@wayward/test/interfaces";
import { type TestRunContext } from "@wayward/test/testRunner";
import type { Random } from "@wayward/utilities/random/Random";
export default class ApplicationInteractions {
    protected readonly testContext: TestRunContext;
    readonly appId: string;
    readonly random: Random;
    readonly logger: ApplicationLogger;
    dom: ApplicationDom;
    protected browser: WebdriverIO.Browser | undefined;
    protected nodeJsInit: IInit | undefined;
    readonly isDedicatedServer: boolean;
    userDataDirectory: string;
    private returnToTitleScreenCount;
    private readonly savedStates;
    constructor(testContext: TestRunContext, appId: string, additionalArgs: string[], random: Random);
    waitForInitialStartup(expectedInitialScreen: "title" | "mp_gameplay_modifiers"): Promise<void>;
    waitUntilLoadingIsFinished(options?: Partial<IWaitUntilGameLoadedOptions>): Promise<void>;
    playDedicatedServer(options: IDedicatedServerGameOptions): Promise<void>;
    playNewGame(options: INewGameOptions): Promise<void>;
    private setupCommonOptions;
    unlockMilestoneModifiers(): Promise<void>;
    playImportedGame(savePath: string): Promise<void>;
    playContinueGame(options?: Partial<IWaitUntilGameLoadedOptions>): Promise<void>;
    quitGame(): Promise<void>;
    clickOptions(): Promise<void>;
    clickNewGame(): Promise<void>;
    clickLoadGame(): Promise<void>;
    clickConfirm(): Promise<void>;
    clickNewCharacter(): Promise<void>;
    clickContinueGame(): Promise<void>;
    clickMultiplayer(): Promise<void>;
    clickJoinServer(): Promise<void>;
    clickDailyChallenge(): Promise<void>;
    clickBack(timeout?: number): Promise<void>;
    clickButton(buttonText: string, options?: Partial<{
        force: boolean;
        selector: string;
        clickOnce: boolean;
        timeout: number;
        logFailure: boolean;
    }>): Promise<void>;
    clickYesIfVisible(): Promise<boolean>;
    clickButtonIfVisible(name: string): Promise<boolean>;
    isShowingPrompt(prompt: Prompt): Promise<boolean>;
    dismissPrompt(prompt: Prompt): Promise<void>;
    dismissPromptIfShown(prompt: Prompt): Promise<void>;
    /**
     * Checks for a pause icon / if the game is caused
     */
    ensureUnpaused(): Promise<void>;
    clickNewGameCheckbox(name: string): Promise<void>;
    clickButtonIfClickable(name: string): Promise<boolean>;
    setNewGameSeed(seed: string | number): Promise<void>;
    setMultiplayerIdentifier(identifier: string): Promise<void>;
    private importGame;
    /**
     * Executes a ascend/descend action
     */
    ascendDescend(): Promise<void>;
    /**
     * Executes a Move action
     * @param direction Direction to move. Direction.None to Idle
     * @param steps Number of movements (steps)
     * @param verifyMovement True to verify the players position changed. Don't use this if the player is moving into the edge
     */
    moveInDirection(direction: Direction.Cardinal | Direction.None, steps?: number, verifyMovement?: boolean): Promise<void>;
    waitUntilCanMove(): Promise<void>;
    setSail(): Promise<void>;
    waitForGameEndScreen(isWinner: boolean): Promise<void>;
    returnToTitleScreen(): Promise<void>;
    getServerGameCode(): Promise<string>;
    joinMultiplayerServer(gameCode: string, options: ITestJoinServerOptions, isDedicatedServer: boolean): Promise<void>;
    pauseGame(): Promise<void>;
    unpauseGame(): Promise<void>;
    moveToIslandId(islandId: IslandId): Promise<void>;
    verifyIslandReferences(islandId: IslandId): Promise<void>;
    getGameStateAsJson(): Promise<string>;
    saveStateAndVerifyWithPrevious(): Promise<void>;
    clearSavedStates(): void;
    waitUntilPauseMenuIsShown(): Promise<void>;
    waitUntilGameIsLoaded(options?: Partial<IWaitUntilGameLoadedOptions>): Promise<void>;
    isTitleScreenVisible(): Promise<WebdriverIO.Element[] | undefined>;
    isButtonVisible(text: string, logNotVisible?: boolean): Promise<WebdriverIO.Element[] | undefined>;
    isOverlayVisible(): Promise<WebdriverIO.Element[] | undefined>;
    waitUntilTitleScreenIsVisible(): Promise<void>;
    waitUntilGameEndMenuIsVisible(): Promise<void>;
    waitForVisibleButtonThenClick(name: string, options?: Partial<{
        clickOnce: boolean;
        timeout: number;
        logFailure: boolean;
    }>): Promise<void>;
    increaseStat(stat: Stat, value: number): Promise<void>;
    randomMovement(count: number): Promise<void>;
    pressKey(key: string, modifier?: string, duration?: number): Promise<void>;
    screenshot(suffix: string): Promise<void>;
    /**
     * Runs a garbage collection and counts the number of objects remaining for the specified item
     */
    garbageCollectAndCount(objectIdentifier: string): Promise<number>;
}
