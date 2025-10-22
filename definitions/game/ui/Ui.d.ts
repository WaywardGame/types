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
import type { SfxUi } from "@wayward/game/audio/IAudio";
import { SfxType } from "@wayward/game/audio/IAudio";
import type { Game } from "@wayward/game/game/Game";
import type { PlayerState } from "@wayward/game/game/entity/player/IPlayer";
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type { Prompt } from "@wayward/game/game/meta/prompt/IPrompt";
import type { Reference } from "@wayward/game/game/reference/IReferenceManager";
import type InterruptChoice from "@wayward/game/language/dictionary/InterruptChoice";
import { TooltipVisibilityOption } from "@wayward/game/save/data/ISaveDataGlobal";
import { Axis } from "@wayward/game/ui/IUi";
import LoadingBridge from "@wayward/game/ui/LoadingBridge";
import PromptsBridge from "@wayward/game/ui/PromptsBridge";
import SaveDropHandler from "@wayward/game/ui/SaveDropHandler";
import ServerJoinHandler from "@wayward/game/ui/ServerJoinHandler";
import Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import InputManager from "@wayward/game/ui/input/InputManager";
import { ScreenId } from "@wayward/game/ui/screen/IScreen";
import ScreenManager from "@wayward/game/ui/screen/ScreenManager";
import ItemStylesheetHandler from "@wayward/game/ui/screen/screens/game/util/item/ItemStylesheet";
import SelectionHandler from "@wayward/game/ui/screen/screens/menu/component/SelectionHandler";
import TooltipManager from "@wayward/game/ui/tooltip/TooltipManager";
import FocusManager from "@wayward/game/ui/util/FocusManager";
import HighlightManager from "@wayward/game/ui/util/HighlightManager";
import HudWidthManager from "@wayward/game/ui/util/HudWidthManager";
import type { InterruptOptions } from "@wayward/game/ui/util/IInterrupt";
import ScaleManager from "@wayward/game/ui/util/ScaleManager";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IUiEvents {
    resize(viewport: Vector2, oldViewport: Vector2): any;
    interrupt(options: Partial<InterruptOptions>, interrupt?: Prompt): string | boolean | InterruptChoice | undefined | void;
    interruptClose(options: Partial<InterruptOptions>, result?: string | boolean | InterruptChoice): any;
    loadedFromSave(): any;
    changeInformationVisibility(informationVisibility: TooltipVisibilityOption): any;
    toggleMoreInfo(moreInfo: boolean): any;
    toggleStackItemsHint(show: boolean): any;
    toggleHealthVignette(healthVignette: boolean): any;
    toggleDeveloperMode(developerMode: boolean): any;
}
export declare class Ui extends EventEmitter.Host<IUiEvents> {
    readonly scale: ScaleManager;
    readonly hudWidth: HudWidthManager;
    readonly highlights: HighlightManager;
    readonly screens: ScreenManager;
    readonly tooltips: TooltipManager;
    readonly selection: SelectionHandler;
    readonly serverJoinHandler: ServerJoinHandler;
    readonly saveDropHandler: SaveDropHandler;
    readonly itemStylesheetHandler: ItemStylesheetHandler;
    readonly focus: FocusManager;
    readonly versionText: Component<HTMLElement> | undefined;
    readonly viewport: Vector2;
    get windowWidth(): number;
    get windowHeight(): number;
    readonly loadingBridge: LoadingBridge;
    readonly promptsBridge: PromptsBridge;
    private storage;
    private readonly dataHosts;
    get input(): typeof InputManager;
    get components(): typeof Component;
    constructor();
    /**
     * @param elements The elements to refresh translations inside
     */
    refreshTranslations(...elements: Array<HTMLElement | Component | undefined>): void;
    isFullscreen(): boolean;
    storeElements(owner: Component, ...components: Component[]): void;
    /**
     * Registers an object as a "data host", which allows its fields to be saved to `saveData` or `saveDataGlobal`
     */
    registerDataHost(id: string | number, host: any): void;
    deregisterDataHost(id: string | number, host: any): boolean;
    playSound(sound: SfxType | SfxUi): void;
    getTooltipVisibility(): TooltipVisibilityOption;
    protected onChangeInformationVisibility(): void;
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
    enableCustomTitleBar(enabled: boolean): void;
    getTitleBarHeight(): 0 | 30;
    /**
     * @param save Whether or not to save the new scale into options. Defaults to true.
     */
    setDialogOpacity(opacity?: number, save?: boolean): void;
    private stylesheetIndex;
    addStylesheet(path: string): void;
    removeStylesheet(path: string): void;
    private getStylesheet;
    private resolvePath;
    reloadStylesheets(): void;
    reloadTextures(): void;
    updateFontStyle(): void;
    updateUIAnimations(): void;
    updateUIOpacity(): void;
    updateAcrylicTransparency(): void;
    updatePowerMode(): void;
    toggleDeveloperMode(enabled: boolean): this;
    protected onGlobalSlotReady(): void;
    /**
     * Screen id used while in game / playing
     */
    get primaryScreenId(): ScreenId;
    protected onPlay(): void;
    protected onStoppingPlay(game: Game, state: PlayerState): Promise<void>;
    protected onStopPlay(game: Game, state: PlayerState): void;
    protected onInterruptClosed(): void;
    protected onLanguageChange(_: any, language: string): void;
    protected onToggleScreen(): void;
    protected onShowMoreInfo(): void;
    protected onUnshowMoreInfo(): void;
    protected onShowStackItemsHint(): void;
    protected onHideStackItemsHint(): void;
    protected onTooltipsToggle(): boolean;
    protected onFullscreen(): boolean;
    protected onToggleDevMode(): boolean;
    protected onReload(api: IBindHandlerApi): boolean;
    protected onReloadWithoutSaving(api: IBindHandlerApi): boolean;
    protected onToggleDevTools(): boolean;
    protected onReloadStylesheets(): boolean;
    protected onReloadTextures(): boolean;
    protected onScaleDown(api: IBindHandlerApi): boolean;
    protected onScaleUp(api: IBindHandlerApi): boolean;
    /**
     * Returns a percentage of the screen based on the given number of pixels on the given `Axis`.
     */
    getPercentageFromPixels(axis: Axis, pixels: number): number;
    /**
     * Returns a number of pixels based on the given percentage of the screen on the given `Axis`.
     */
    getPixelsFromPercentage(axis: Axis, percentage: number): number;
    inspectReference(reference: Reference, context?: InfoProviderContext): boolean;
}
