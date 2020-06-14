/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
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
    Description = "description"
}
export interface IInspector {
    asEntity?: Entity;
    asCreature?: Creature;
    asHuman?: Human;
    asNPC?: NPC;
    asPlayer?: Player;
    getInspectionId(): string;
}
export declare class Context {
    readonly textContext: TextContext;
    readonly inspector: IInspector;
    static readonly UI: new (inspector: IInspector) => Context;
    static readonly RAW: new (inspector: IInspector) => Context;
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
}
export declare enum InfoDisplayLevel {
    NonVerbose = -2,
    NonExtra = -1,
    Always = 0,
    Extra = 1,
    Verbose = 2
}
export declare abstract class InfoProvider extends EventEmitter.Host<IInfoProviderEvents> implements IRefreshable {
    static create(...translations: TranslationGenerator[]): SimpleInfoProvider;
    static of(...classes: string[]): SimpleInfoProvider;
    static title(...translations: TranslationGenerator[]): SimpleInfoProvider;
    static description(...translations: TranslationGenerator[]): SimpleInfoProvider;
    abstract get(context: Context): ArrayOr<TranslationGenerator | InfoProvider>;
    abstract getClass(): string[];
    getDisplayLevel(context: Context): InfoDisplayLevel;
    getColor(): string | undefined;
    hasContent(): boolean;
    init(): void;
    /**
     * Call when this info provider should be refreshed.
     */
    refresh(): this;
    /**
     * Call when this info provider should be removed.
     */
    remove(): this;
    initComponent(component?: Component): Component;
    protected initChildTextComponent(text: TranslationGenerator): Text;
}
export declare class SimpleInfoProvider extends InfoProvider {
    private readonly classes;
    private readonly contents;
    private componentClass;
    private displayLevel;
    constructor(...translations: Array<TranslationGenerator | InfoProvider>);
    get(): (import("../../language/Translation").default | import("../../language/dictionary/UiTranslation").default | import("../../language/Translation").ISerializedTranslation | (() => import("../../language/Translation").default | import("../../language/dictionary/UiTranslation").default | import("../../language/Translation").ISerializedTranslation | Iterable<import("../../utilities/string/Interpolator").IStringSection> | undefined) | InfoProvider)[];
    add(...translations: Array<TranslationGenerator | InfoProvider>): this;
    getClass(): string[];
    addClasses(...classes: string[]): this;
    initComponent(): Component;
    setComponent(componentClass: Class<Component>): this;
    setDisplayLevel(level: InfoDisplayLevel): this;
    getDisplayLevel(): InfoDisplayLevel;
}
