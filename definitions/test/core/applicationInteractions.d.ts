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
/// <reference types="webdriverio/async" />
import type { IInit } from "@wayward/game/Init";
import type { Stat } from "@wayward/game/game/entity/IStats";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import { Direction } from "@wayward/game/utilities/math/Direction";
import type { Random } from "@wayward/game/utilities/random/Random";
import { ApplicationDom } from "@wayward/test/core/applicationDom";
import { ApplicationLogger } from "@wayward/test/core/applicationLogger";
import type { IDedicatedServerGameOptions, INewGameOptions, ITestJoinServerOptions, IWaitUntilGameLoadedOptions } from "@wayward/test/interfaces";
import type { TestRunContext } from "@wayward/test/testRunner";
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
    clickButton(name: string, options?: Partial<{
        force: boolean;
        clickOnce: boolean;
        timeout: number;
    }>): Promise<void>;
    clickYesIfVisible(): Promise<boolean>;
    clickButtonIfVisible(name: string): Promise<boolean>;
    clickUnpauseIconIfVisible(): Promise<void>;
    clickNewGameCheckbox(name: string): Promise<void>;
    clickButtonIfClickable(name: string): Promise<boolean>;
    setNewGameSeed(seed: string | number): Promise<void>;
    setMultiplayerIdentifier(identifier: string): Promise<void>;
    runItemAction(itemId: number, action: string): Promise<void>;
    private importGame;
    /**
     * Executes a Move action
     * @param direction Direction to move
     * @param steps Number of movements (steps)
     * @param verifyMovement True to verify the players position changed. Don't use this if the player is moving into the edge
     */
    moveInDirection(direction: Direction.Cardinal, steps?: number, verifyMovement?: boolean): Promise<void>;
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
    isButtonVisible(text: string): Promise<WebdriverIO.Element[] | undefined>;
    isOverlayVisible(): Promise<WebdriverIO.Element[] | undefined>;
    waitUntilTitleScreenIsVisible(): Promise<void>;
    waitUntilGameEndMenuIsVisible(): Promise<void>;
    waitForVisibleButtonThenClick(name: string, options?: Partial<{
        clickOnce: boolean;
        timeout: number;
    }>): Promise<void>;
    increaseStat(stat: Stat, value: number): Promise<void>;
    randomInput(count: number): Promise<void>;
    pressKey(key: string, modifier?: string): Promise<void>;
    protected screenshot(suffix: string): Promise<void>;
}
