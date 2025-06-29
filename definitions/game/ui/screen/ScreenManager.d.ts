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
import Component from "@wayward/game/ui/component/Component";
import { ScreenId } from "@wayward/game/ui/screen/IScreen";
import Screen from "@wayward/game/ui/screen/Screen";
import type { ScreenById } from "@wayward/game/ui/screen/ScreenMap";
import Stream from "@wayward/goodstream/Stream";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export declare enum ScreenClasses {
    Main = "screen",
    _Top = "screen--top",
    _Obscured = "screen--obscured"
}
export interface IScreenManagerEvents {
    init(screen: Screen): any;
    show(screen: Screen): any;
    hide(screen: Screen): any;
    remove(screen: Screen): any;
}
export default class ScreenManager extends EventEmitter.Host<IScreenManagerEvents> {
    private readonly screens;
    private visible;
    private overlay;
    readonly screenWrapper: Component<HTMLElement>;
    isInterruptVisible(): boolean;
    /**
     * Streams all initialized screens.
     */
    all(): Stream<Screen>;
    /**
     * Returns a screen, or `undefined`, if the screen is not initialized.
     * @param screenId The ID of the screen to return
     */
    get<ID extends ScreenId>(screenId: ID): ScreenById[ID] | undefined;
    /**
     * If the screen by the given ID is not already initialized, initializes it.
     * @param screenId The ID of the screen to initialize
     * @returns The initialized screen
     */
    initialize<ID extends ScreenId>(screenId: ID): ScreenById[ID];
    /**
     * Returns the "top" screen.
     *
     * There are two screen layers:
     * 1. The main layer
     * 2. The overlay layer
     *
     * The overlay layer is always in front of the main layer, therefore if there is no overlay screen visible,
     * this method returns the main layer screen. Otherwise, this method returns the overlay layer screen.
     */
    getTop<S extends Screen = Screen>(): S;
    /**
     * Returns if the given screen id is the "top" screen.
     *
     * There are two screen layers:
     * 1. The main layer
     * 2. The overlay layer
     *
     * The overlay layer is always in front of the main layer, therefore if there is no overlay screen visible,
     * this method returns if the given screen ID is the main layer screen. Otherwise, this method returns
     * if the given screen ID is the overlay layer screen.
     */
    isTop(screenId: ScreenId): boolean;
    /**
     * Returns if the given screen id is a currently visible screen (either the main screen or the overlay screen).
     */
    isVisible(screenId: ScreenId): boolean;
    hasOverlay(): boolean;
    /**
     * Shows a screen
     * @param screenId The id of the screen to show
     */
    show<ID extends ScreenId>(screenId: ID, screenInitializer?: (screen: ScreenById[ID]) => any): ScreenById[ID];
    /**
     * Hides the given screen, or the current screen if none is passed.
     */
    hide(screen: ScreenId | Screen): Promise<void> | void;
    /**
     * Returns a promise that resolves when the given screen is shown.
     */
    await<SCREEN extends ScreenId>(screenId: SCREEN): Promise<ScreenById[SCREEN]>;
    /**
     * Returns the ID of a screen
     */
    private getId;
    /**
     * Hides a screen, then removes it after a small amount of time.
     */
    private hideAndRemove;
    /**
     * Removes a screen, or does nothing if the given screen is not initialized.
     * Note: "hide" event is always emitted before remove since this is only called from hideAndRemove
     */
    private remove;
}
