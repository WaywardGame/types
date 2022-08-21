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
    scale?: number;
}
export interface ISerializedIcon extends IIcon {
    path: string | ISerializedImagePath;
}
export declare abstract class InfoProvider extends EventEmitter.Host<IInfoProviderEvents> implements IRefreshable {
    private static uniqueInitializationId;
    static create(...translations: TranslationGenerator[]): SimpleInfoProvider;
    static of(...classes: string[]): SimpleInfoProvider;
    static title(...translations: Array<TranslationGenerator | undefined>): SimpleInfoProvider;
    static description(...translations: Array<TranslationGenerator | undefined>): SimpleInfoProvider;
    static list(...translations: Array<TranslationGenerator | undefined>): SimpleInfoProvider;
    static ofComponent(componentSupplier: () => Component): InfoProvider;
    private displayLevel?;
    protected component?: Component;
    protected context?: InfoProviderContext;
    private componentClass?;
    abstract get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    abstract getClass(): string[];
    getDefaultDisplayLevel(_context: InfoProviderContext): InfoDisplayLevel | Set<InfoDisplayLevel>;
    setDisplayLevel(...displayLevel: InfoDisplayLevel[]): this;
    getDisplayLevel(context: InfoProviderContext): Set<InfoDisplayLevel>;
    setComponent(componentClass: Class<Component>): this;
    private icon?;
    getIcon(): IIcon | string | undefined;
    setIcon(icon?: IIcon | string): this;
    hasContent(_context: InfoProviderContext): boolean;
    private synchronous;
    setSynchronous(): this;
    init(): void;
    private readonly refreshEvents;
    /**
     * Marks this info provider as to subscribe refresh events to the given host.
     * Note: Any existing initialized components will not be retroactively subscribed.
     * @param predicate A predicate function for whether or not this info provider should actually refresh when the event is hit
     */
    subscribeRefreshOn<E extends EmitterOrBus, K extends Event<E>>(emitterOrBus: E, ...args: [...events: K[], predicate: (...params: Parameters<Handler<E, K>>) => boolean]): this;
    /**
     * Marks this info provider as to subscribe refresh events to the given host.
     * Note: Any existing initialized components will not be retroactively subscribed.
     */
    subscribeRefreshOn<E extends EmitterOrBus, K extends Event<E>>(emitterOrBus: E, ...events: K[]): this;
    subscribeRefreshOn<E extends Emitter, K extends Event<E>>(emitter: WeakRef<E>, ...events: K[]): this;
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
export declare class SimpleInfoProvider extends InfoProvider {
    private readonly classes;
    private readonly contents;
    private childComponentClass;
    constructor(...translations: Array<TranslationGenerator | InfoProvider>);
    get(): (import("../../language/ITranslation").ISerializedTranslation | import("../../language/impl/TranslationImpl").default | import("../../language/dictionary/UiTranslation").default | (() => import("../../language/ITranslation").ISerializedTranslation | import("../../language/impl/TranslationImpl").default | Iterable<import("../../utilities/string/Interpolator").IStringSection> | import("../../language/dictionary/UiTranslation").default | undefined) | InfoProvider)[];
    add(...translations: Array<TranslationGenerator | InfoProvider | Falsy>): this;
    onlyIfHasContents(): this | undefined;
    addInfoGetter(provider: () => InfoProvider | undefined): this;
    getClass(): string[];
    addClasses(...classes: string[]): this;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    setChildComponent(componentClass: Class<Text>): this;
}
