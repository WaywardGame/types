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
import type { Stat } from "../../game/game/entity/IStats";
import type { IslandId } from "../../game/game/island/IIsland";
import { Direction } from "../../game/utilities/math/Direction";
import type { Random, SeededGenerator } from "../../game/utilities/random/Random";
import type { IDedicatedServerGameOptions, IJoinServerOptions, INewGameOptions, IWaitUntilGameLoadedOptions } from "../interfaces";
import ApplicationDom from "./applicationDom";
import ApplicationLogger from "./applicationLogger";
export default class ApplicationInteractions {
    readonly random: Random<SeededGenerator>;
    readonly logger: ApplicationLogger;
    dom: ApplicationDom;
    protected browser: WebdriverIO.Browser;
    readonly isDedicatedServer: boolean;
    private readonly savedStates;
    constructor(additionalArgs: string[], random: Random<SeededGenerator>);
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
    importGame(savePath: string): Promise<void>;
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
    joinMultiplayerServer(gameCode: string, options: IJoinServerOptions, isDedicatedServer: boolean): Promise<void>;
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
}
