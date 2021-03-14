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
import EventEmitter from "event/EventEmitter";
import { InfoDisplayLevel } from "game/inspection/IInfoProvider";
import { InfoProviderContext } from "game/inspection/InfoProviderContext";
import Component from "ui/component/Component";
import { TranslationGenerator } from "ui/component/IComponent";
import { IRefreshable } from "ui/component/Refreshable";
import Text from "ui/component/Text";
export interface IInfoProviderEvents {
    /**
     * Should be emitted when the info provider is starting to initialize its component.
     */
    init(): any;
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
    path: string;
    width: number;
    height: number;
    scale?: number;
}
export declare abstract class InfoProvider extends EventEmitter.Host<IInfoProviderEvents> implements IRefreshable {
    static create(...translations: TranslationGenerator[]): SimpleInfoProvider;
    static of(...classes: string[]): SimpleInfoProvider;
    static title(...translations: TranslationGenerator[]): SimpleInfoProvider;
    static description(...translations: TranslationGenerator[]): SimpleInfoProvider;
    static list(...translations: TranslationGenerator[]): SimpleInfoProvider;
    private displayLevel?;
    protected component?: Component;
    protected context?: InfoProviderContext;
    abstract get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    abstract getClass(): string[];
    getDefaultDisplayLevel(_context: InfoProviderContext): InfoDisplayLevel | Set<InfoDisplayLevel>;
    setDisplayLevel(...displayLevel: InfoDisplayLevel[]): this;
    getDisplayLevel(context: InfoProviderContext): Set<InfoDisplayLevel>;
    getColor(): string | undefined;
    getIcon(): IIcon | undefined;
    hasContent(_context: InfoProviderContext): boolean;
    init(): void;
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
    initComponent(component?: Component<HTMLElement>, context?: InfoProviderContext, partial?: boolean): {
        component: Component<HTMLElement>;
        fullInit(): void;
    };
    protected initChildTextComponent(text: TranslationGenerator): Text;
}
export declare class SimpleInfoProvider extends InfoProvider {
    private readonly classes;
    private readonly contents;
    private componentClass;
    private childComponentClass;
    constructor(...translations: Array<TranslationGenerator | InfoProvider>);
    get(): (TranslationGenerator | InfoProvider)[];
    add(...translations: Array<TranslationGenerator | InfoProvider | Falsy>): this;
    getClass(): string[];
    addClasses(...classes: string[]): this;
    initComponent(): {
        component: Component<HTMLElement>;
        fullInit(): void;
    };
    protected initChildTextComponent(text: TranslationGenerator): Text;
    setComponent(componentClass: Class<Component>): this;
    setChildComponent(componentClass: Class<Text>): this;
}
