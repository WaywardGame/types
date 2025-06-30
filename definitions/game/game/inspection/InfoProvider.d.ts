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
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type { ISerializedTranslation } from "@wayward/game/language/ITranslation";
import type UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import type { IRefreshable } from "@wayward/game/ui/component/Refreshable";
import Text from "@wayward/game/ui/component/Text";
import type { ISerializedImagePath } from "@wayward/game/ui/util/ImagePath";
import ImagePath from "@wayward/game/ui/util/ImagePath";
import BaseObserver from "@wayward/game/utilities/Observer";
import type { IStringSection } from "@wayward/game/utilities/string/Interpolator";
import type { IEventSubscriberEvents } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IInfoProviderEvents extends IEventSubscriberEvents {
    /**
     * Should be emitted when the info provider is starting to initialize its component.
     */
    init(component: Component): any;
    /**
     * Emitted when the info provider finishes initializing (will still be called when it cancels initialization)
     */
    initDone(): any;
    /**
     * Emitted when the info provider finishes initializing its content (does not get called if initialization is cancelled)
     */
    initContent(component: Component): any;
    /**
     * Should be emitted when the info provider skipped initializing
     */
    initSkip(): any;
    /**
     * Should be emitted when the info provider has detected an update and its contents will need to be refreshed.
     */
    refresh(): any;
    /**
     * Should be emitted when the info provider should be removed.
     */
    requestRemove(): any;
    /**
     * Emitted when the info provider has been removed.
     */
    remove(): any;
    /**
     * Should be emitted when the info provider's display level changes.
     */
    updateDisplayLevel(displayLevels: Set<InfoDisplayLevel>, classes: Set<string>, oldClasses: Set<string>): any;
    /**
     * Emitted when the info provider's display level is overridden.
     */
    refreshDisplayLevel(): any;
    /**
     * Should be emitted when the info provider has detected an update and it needs to check whether to have contents.
     */
    recheckHasContent(): any;
}
export interface IIcon {
    path: string | ImagePath | ISerializedImagePath;
    width: number;
    height: number;
    imageWidth?: number;
    imageHeight?: number;
    scale?: string | number;
}
export interface ISerializedIcon extends IIcon {
    path: string | ISerializedImagePath;
}
export declare abstract class InfoProvider extends EventEmitter.Host<IInfoProviderEvents> implements IRefreshable {
    private static bus?;
    static multiTextParagraph: string;
    static create(...translations: TranslationGenerator[]): SimpleInfoProvider;
    static dynamic<T>(observer: BaseObserver<T>, supplier: (value: T) => InfoProvider | undefined): SimpleInfoProvider;
    static of(...classes: string[]): SimpleInfoProvider;
    static header(...classes: string[]): SimpleInfoProvider;
    static title(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static subtitle(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static description(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static text(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static list(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static textlist(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static ofComponent(componentSupplier: () => Component): InfoProvider;
    private displayLevel?;
    protected component?: Component;
    protected context?: InfoProviderContext;
    private componentClass?;
    private listeningForRequestRemove?;
    abstract get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    abstract getClass(context: InfoProviderContext): string[];
    getDefaultDisplayLevel(_context: InfoProviderContext): InfoDisplayLevel | Set<InfoDisplayLevel>;
    setDisplayLevel(...displayLevel: Array<InfoDisplayLevel | undefined>): this;
    getDisplayLevel(context: InfoProviderContext): Set<InfoDisplayLevel>;
    setComponent(componentClass: Class<Component>): this;
    private componentInitializer?;
    setComponentInitializer(initializer: (componenent: Component) => any): this;
    private icon?;
    getIcon(): IIcon | string | undefined;
    setIcon(icon?: IIcon | string): this;
    hasContent(_context: InfoProviderContext): boolean;
    init(): void;
    readonly subscribeRefreshOn: BaseObserver.IRegistrar<this>;
    private dirty;
    /**
     * Call when this info provider should be refreshed.
     */
    refresh(): this;
    /**
     * Call when this info provider should recheck whether it has contents.
     */
    recheckHasContent(): this;
    /**
     * Call when this info provider should refresh its display level.
     */
    refreshDisplayLevel(): this;
    /**
     * Call when this info provider should be removed.
     */
    remove(): this;
    private _shouldDisplayWhenEmpty;
    protected shouldDisplayWhenEmpty(): boolean;
    setShouldDisplayWhenEmpty(shouldDisplayWhenEmpty?: boolean): this;
    initComponent(context: InfoProviderContext, component?: Component<HTMLElement>, partial?: boolean): {
        component: Component;
        fullInit(): void;
    };
    protected initChildTextComponent(text: TranslationGenerator): Text;
    /**
     * Initialise this InfoProvider and append it to a component. The InfoProvider will be disposed on removal.
     */
    appendTo(place: Component): Component;
}
export declare namespace InfoProvider {
    class Observer<T> extends BaseObserver<T> {
        subscribeRefreshOn: BaseObserver.IRegistrar<this>;
    }
}
export declare class SimpleInfoProvider extends InfoProvider {
    private readonly classes;
    private readonly childClasses;
    private readonly contents;
    private childComponentClass;
    private validWhen?;
    constructor(...translations: Array<TranslationGenerator | InfoProvider>);
    get(): Array<TranslationImpl | ISerializedTranslation | UiTranslation | (() => TranslationImpl | IStringSection[] | ISerializedTranslation | UiTranslation | undefined) | InfoProvider>;
    add(...translations: Array<TranslationGenerator | InfoProvider | Falsy>): this;
    onlyIfHasContents(): this | undefined;
    addInfoGetter(provider: () => InfoProvider | undefined): this;
    setValidWhen(predicate: () => any): this;
    getClass(): string[];
    addClasses(...classes: string[]): this;
    getChildClass(): string[];
    addChildClasses(...classes: string[]): this;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    setChildComponent(componentClass: Class<Text>): this;
}
