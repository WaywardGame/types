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
import { SfxType } from "audio/IAudio";
import EventEmitter from "event/EventEmitter";
import type { PlayerState } from "game/entity/player/IPlayer";
import type { Game } from "game/Game";
import type { Prompt } from "game/meta/prompt/IPrompt";
import type InterruptChoice from "language/dictionary/InterruptChoice";
import Component from "ui/component/Component";
import type { IBindHandlerApi } from "ui/input/Bind";
import LoadingBridge from "ui/LoadingBridge";
import PromptsBridge from "ui/PromptsBridge";
import SaveDropHandler from "ui/SaveDropHandler";
import ScreenManager from "ui/screen/ScreenManager";
import SelectionHandler from "ui/screen/screens/menu/component/SelectionHandler";
import ServerJoinHandler from "ui/ServerJoinHandler";
import TooltipManager from "ui/tooltip/TooltipManager";
import HighlightManager from "ui/util/HighlightManager";
import type { InterruptOptions } from "ui/util/IInterrupt";
import ScaleManager from "ui/util/ScaleManager";
import Vector2 from "utilities/math/Vector2";
export interface IUiEvents {
    resize(viewport: Vector2, oldViewport: Vector2): any;
    interrupt(options: Partial<InterruptOptions>, interrupt?: Prompt): string | boolean | InterruptChoice | undefined | void;
    interruptClose(options: Partial<InterruptOptions>, result?: string | boolean | InterruptChoice): any;
    loadedFromSave(): any;
    toggleShowMoreInformation(showingMoreInformation: boolean): any;
    toggleHealthVignette(healthVignette: boolean): any;
    toggleDeveloperMode(developerMode: boolean): any;
}
export declare class Ui extends EventEmitter.Host<IUiEvents> {
    readonly scale: ScaleManager;
    readonly highlights: HighlightManager;
    readonly screens: ScreenManager;
    readonly tooltips: TooltipManager;
    readonly selection: SelectionHandler;
    readonly serverJoinHandler: ServerJoinHandler;
    readonly saveDropHandler: SaveDropHandler;
    readonly viewport: Vector2;
    get windowWidth(): number;
    get windowHeight(): number;
    readonly loadingBridge: LoadingBridge;
    readonly promptsBridge: PromptsBridge;
    private storage;
    private readonly dataHosts;
    constructor();
    /**
     * @param elements The elements to refresh translations inside
     */
    refreshTranslations(...elements: Array<HTMLElement | Component | undefined>): void;
    storeElements(owner: Component, ...components: Component[]): void;
    /**
     * Registers an object as a "data host", which allows its fields to be saved to `saveData` or `saveDataGlobal`
     */
    registerDataHost(id: string | number, host: any): void;
    playSound(sound: SfxType | "activate" | "select" | "input" | "enable" | "disable"): void;
    shouldShowMoreInformation(): boolean;
    toggleShowMoreInformation(showMoreInformation: boolean): void;
    /**
     * Toggle health vignette
     */
    toggleHealthVignette(healthVignette: boolean): void;
    /**
     * Toggles fullscreen
     */
    toggleFullscreen(): void;
    /**
     * @param fullscreen Whether or not fullscreen is enabled
     */
    toggleFullscreen(fullscreen?: boolean): void;
    /**
     * @param save Whether or not to save the new scale into options. Defaults to true.
     */
    setDialogOpacity(opacity?: number, save?: boolean): void;
    addStylesheet(path: string): void;
    removeStylesheet(path: string): void;
    reloadStylesheets(): void;
    updateFontStyle(): void;
    updateUIAnimations(): void;
    updateUIOpacity(): void;
    toggleDeveloperMode(enabled: boolean): this;
    protected onGlobalSlotLoaded(): void;
    protected onPlay(): void;
    protected onStopPlay(game: Game, state: PlayerState): Promise<void>;
    protected onInterruptClosed(): void;
    protected onLanguageChange(_: any, language: string): void;
    protected onFullscreen(): boolean;
    protected onToggleDevMode(): boolean;
    protected onReload(api: IBindHandlerApi): boolean;
    protected onToggleDevTools(): boolean;
    protected onReloadStylesheets(): boolean;
}
