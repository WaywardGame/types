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
import Creature from "entity/creature/Creature";
import Entity from "entity/Entity";
import Human from "entity/Human";
import NPC from "entity/npc/NPC";
import Player from "entity/player/Player";
import EventEmitter from "event/EventEmitter";
import { TextContext } from "language/Translation";
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { IRefreshable } from "newui/component/Refreshable";
import Text from "newui/component/Text";
export declare enum InfoClass {
    Title = "title",
    Description = "description",
    List = "list"
}
export interface IInspector {
    asEntity?: Entity;
    asCreature?: Creature;
    asHuman?: Human;
    asNPC?: NPC;
    asPlayer?: Player;
    getInspectionId(): string;
}
export declare class InfoProviderContext {
    readonly textContext: TextContext;
    readonly inspector: IInspector;
    static readonly UI: new (inspector: IInspector) => InfoProviderContext;
    static readonly RAW: new (inspector: IInspector) => InfoProviderContext;
    constructor(textContext: TextContext, inspector: IInspector);
}
export interface IInfoProviderEvents {
    /**
     * Should be emitted when the info provider is initialized.
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
    updateDisplayLevel(displayLevel: InfoDisplayLevel, className: string, oldClassName?: string): any;
}
export declare enum InfoDisplayLevel {
    NonVerbose = -2,
    NonExtra = -1,
    Always = 0,
    Extra = 1,
    Verbose = 2
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
    abstract get(context: InfoProviderContext): ArrayOr<TranslationGenerator | InfoProvider>;
    abstract getClass(): string[];
    getDefaultDisplayLevel(_context: InfoProviderContext): InfoDisplayLevel;
    setDisplayLevel(displayLevel: InfoDisplayLevel): this;
    getDisplayLevel(context: InfoProviderContext): InfoDisplayLevel;
    getColor(): string | undefined;
    getIcon(): IIcon | undefined;
    hasContent(_context: InfoProviderContext): boolean;
    init(): void;
    /**
     * Call when this info provider should be refreshed.
     */
    refresh(): this;
    /**
     * Call when this info provider should be removed.
     */
    remove(): this;
    initComponent(component?: Component<HTMLElement>): Component<HTMLElement>;
    protected initChildTextComponent(text: TranslationGenerator): Text;
}
export declare class SimpleInfoProvider extends InfoProvider {
    private readonly classes;
    private readonly contents;
    private componentClass;
    private childComponentClass;
    constructor(...translations: Array<TranslationGenerator | InfoProvider>);
    get(): (import("../../language/Translation").default | import("../../language/Translation").ISerializedTranslation | import("../../language/dictionary/UiTranslation").default | (() => import("../../language/Translation").default | import("../../language/Translation").ISerializedTranslation | Iterable<import("../../utilities/string/Interpolator").IStringSection> | import("../../language/dictionary/UiTranslation").default | undefined) | InfoProvider)[];
    add(...translations: Array<TranslationGenerator | InfoProvider>): this;
    getClass(): string[];
    addClasses(...classes: string[]): this;
    initComponent(): Component<HTMLElement>;
    protected initChildTextComponent(text: TranslationGenerator): Text;
    setComponent(componentClass: Class<Component>): this;
    setChildComponent(componentClass: Class<Text>): this;
}
