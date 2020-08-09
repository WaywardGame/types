/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { SfxType } from "audio/IAudio";
import EventEmitter from "event/EventEmitter";
import Interrupt from "language/dictionary/Interrupt";
import InterruptChoice from "language/dictionary/InterruptChoice";
import { IComponent } from "newui/component/IComponent";
import { IInterruptMenuFactory } from "newui/INewUi";
import { IBindHandlerApi } from "newui/input/Bind";
import ScreenManager from "newui/screen/ScreenManager";
import SelectionHandler from "newui/screen/screens/menu/component/SelectionHandler";
import TooltipManager from "newui/tooltip/TooltipManager";
import HighlightManager from "newui/util/HighlightManager";
import { InterruptOptions } from "newui/util/IInterrupt";
import InterruptFactory from "newui/util/InterruptFactory";
import ScaleManager from "newui/util/ScaleManager";
import Vector2 from "utilities/math/Vector2";
export interface IUiEvents {
    resize(viewport: Vector2, oldViewport: Vector2): any;
    interrupt(options: Partial<InterruptOptions>): any;
    interruptClose(options: Partial<InterruptOptions>, result?: string | boolean | InterruptChoice): any;
    loadedFromSave(): any;
    toggleShowMoreInformation(showingMoreInformation: boolean): any;
}
export declare class NewUi extends EventEmitter.Host<IUiEvents> {
    readonly tooltips: TooltipManager;
    readonly scale: ScaleManager;
    readonly highlights: HighlightManager;
    readonly screens: ScreenManager;
    readonly selection: SelectionHandler;
    readonly viewport: Vector2;
    get windowWidth(): number;
    get windowHeight(): number;
    private storageElement;
    private readonly dataHosts;
    private hqUnsupportedColors;
    constructor();
    colorSupportsHQFontRendering(colorID?: string | null): boolean;
    /**
     * Returns a new interrupt factory with the given translation data.
     */
    interrupt(interrupt: Interrupt, ...args: any[]): InterruptFactory;
    /**
     * Returns an interrupt factory that can only be used to create menus.
     */
    interrupt(): IInterruptMenuFactory;
    showLoadingInterrupt(interrupt: Interrupt, ...args: any[]): Promise<InterruptChoice | undefined>;
    hideLoadingInterrupt(): Promise<void>;
    /**
     * @param elements The elements to refresh translations inside
     */
    refreshTranslations(...elements: Array<HTMLElement | IComponent | undefined>): void;
    storeElements(...elements: Array<HTMLElement | IComponent>): void;
    /**
     * Registers an object as a "data host", which allows its fields to be saved to `saveData` or `saveDataGlobal`
     */
    registerDataHost(id: string | number, host: any): void;
    playSound(sound: SfxType | "activate" | "select" | "input" | "enable" | "disable"): void;
    shouldShowMoreInformation(): boolean;
    toggleShowMoreInformation(showMoreInformation: boolean): void;
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
    protected onGlobalSlotLoaded(): void;
    protected onMessage(_: any, fullscreen: boolean): void;
    protected onInterruptClosed(): void;
    protected onLanguageChange(_: any, language: string): void;
    protected onFullscreen(): boolean;
    protected onToggleDevMode(): boolean;
    protected onReload(api: IBindHandlerApi): boolean;
    protected onToggleDevTools(): boolean;
    protected onReloadStylesheets(): boolean;
    private cacheHQUnsupportedColors;
}
declare const newui: NewUi;
export default newui;
