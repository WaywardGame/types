/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { EventBus } from "event/EventBuses";
import EventEmitter from "event/EventEmitter";
import type { Emitter, EmitterOrBus, Event, Handler } from "event/EventManager";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import type { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
import type { IRefreshable } from "ui/component/Refreshable";
import Text from "ui/component/Text";
import type { ISerializedImagePath } from "ui/util/ImagePath";
import ImagePath from "ui/util/ImagePath";
export interface IInfoProviderEvents {
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
    static multiTextParagraph: string;
    private static uniqueInitializationId;
    static create(...translations: TranslationGenerator[]): SimpleInfoProvider;
    static dynamic<T>(observer: InfoProvider.Observer<T>, supplier: (value: T) => InfoProvider | undefined): SimpleInfoProvider;
    static of(...classes: string[]): SimpleInfoProvider;
    static title(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static subtitle(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static description(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static text(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static list(...translations: Array<InfoProvider | TranslationGenerator | undefined>): SimpleInfoProvider;
    static ofComponent(componentSupplier: () => Component): InfoProvider;
    private displayLevel?;
    protected component?: Component;
    protected context?: InfoProviderContext;
    private componentClass?;
    abstract get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    abstract getClass(): string[];
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
    private synchronous;
    setSynchronous(): this;
    init(): void;
    private readonly refreshEvents;
    subscribeRefreshOnTick(observer: InfoProvider.Observer<any>): this;
    subscribeRefreshOnTick(predicate: (...params: Parameters<Handler<EventBus.Game, "tickEnd">>) => boolean): this;
    /**
     * Marks this info provider as to subscribe refresh events to the given host.
     * Note: Any existing initialized components will not be retroactively subscribed.
     */
    subscribeRefreshOn<E extends EmitterOrBus>(emitterOrBus: E, ...events: Array<Event<E>>): this;
    subscribeRefreshOn<E extends Emitter, K extends Event<E>>(emitter: WeakRef<E>, ...events: Array<Event<E>>): this;
    /**
     * Marks this info provider as to subscribe refresh events to the given host.
     * Note: Any existing initialized components will not be retroactively subscribed.
     * @param predicate A predicate function for whether or not this info provider should actually refresh when the event is hit
     */
    subscribeRefreshOn<E extends EmitterOrBus, K extends Event<E>>(emitterOrBus: E, ...args: [...events: K[], predicate: (...params: Parameters<Handler<E, K>>) => boolean]): this;
    /**
     * Marks this info provider as to subscribe refresh events to the given host.
     * Note: Any existing initialized components will not be retroactively subscribed.
     * @param observer An observer that will only trigger a refresh if the value has changed
     */
    subscribeRefreshOn<E extends EmitterOrBus>(emitterOrBus: E, ...args: [...events: Array<Event<E>>, observer: InfoProvider.Observer<any>]): this;
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
    onStoppingPlay(): void;
    initComponent(context: InfoProviderContext, component?: Component<HTMLElement>, partial?: boolean, data?: {
        lastInfoSleep: number;
    }): {
        component: Component<HTMLElement>;
        fullInit(): void;
    };
    protected initChildTextComponent(text: TranslationGenerator): Text;
}
export declare namespace InfoProvider {
    class Observer<T> {
        private readonly _observe;
        value: T;
        constructor(_observe: () => T);
        observe(): boolean;
    }
}
export declare class SimpleInfoProvider extends InfoProvider {
    private readonly classes;
    private readonly contents;
    private childComponentClass;
    private validWhen?;
    constructor(...translations: Array<TranslationGenerator | InfoProvider>);
    get(): (import("../../language/impl/TranslationImpl").default | import("../../language/dictionary/UiTranslation").default | import("../../language/ITranslation").ISerializedTranslation | (() => import("../../language/impl/TranslationImpl").default | import("../../language/dictionary/UiTranslation").default | import("../../language/ITranslation").ISerializedTranslation | import("../../utilities/string/Interpolator").IStringSection[] | undefined) | InfoProvider)[];
    add(...translations: Array<TranslationGenerator | InfoProvider | Falsy>): this;
    onlyIfHasContents(): this | undefined;
    addInfoGetter(provider: () => InfoProvider | undefined): this;
    setValidWhen(predicate: () => any): this;
    getClass(): string[];
    addClasses(...classes: string[]): this;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    setChildComponent(componentClass: Class<Text>): this;
}
