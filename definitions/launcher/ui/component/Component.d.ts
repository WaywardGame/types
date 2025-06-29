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
import { EventManager } from "@wayward/launcher/utilities/EventManager";
export declare enum Classes {
    Secondary = "secondary"
}
declare global {
    interface Element {
        component?: WeakRef<Component<this>>;
    }
}
export interface IComponentEvents extends HTMLElementEventMap {
}
export type ComponentElement<COMPONENT extends Component> = COMPONENT["element"];
export type ComponentEventManager<HOST extends Component, EVENTS> = EventManager<HOST, EVENTS, ComponentElement<HOST>>;
export type ComponentEvents<COMPONENT extends Component = Component> = COMPONENT["event"] extends EventManager<any, infer SUPER_EVENTS, any> ? SUPER_EVENTS : never;
export default class Component<ELEMENT extends Element = Element> {
    readonly element: ELEMENT;
    static create(this: typeof Component): Component<HTMLDivElement>;
    static create<TYPE_NAME extends keyof HTMLElementTagNameMap>(this: typeof Component, type: TYPE_NAME): Component<HTMLElementTagNameMap[TYPE_NAME]>;
    static byId<ELEMENT extends Element = Element>(id: string, create?: boolean): Component<ELEMENT> | undefined;
    get classes(): ClassManager<this & Component<HTMLElement>>;
    get attributes(): AttributeManager<this & Component<HTMLElement>>;
    get style(): StyleManager<this & Component<HTMLElement>>;
    get text(): TextManager<this & Component<HTMLElement>>;
    readonly event: EventManager<this & Component<HTMLElement>, IComponentEvents, ELEMENT>;
    constructor(element: ELEMENT);
    tweak<ARGS extends readonly any[]>(tweaker?: (self: this, ...args: ARGS) => any, ...args: ARGS): this;
    parent(): Component | undefined;
    hasContents(): boolean;
    children<CHILD extends Component>(): Generator<CHILD, void>;
    append(...elements: Array<Component | Node | undefined>): this;
    prepend(...elements: Array<Component | Node | undefined>): this;
    appendTo(componentOrParentNode?: ParentNode | Component): this;
    prependTo(componentOrParentNode?: ParentNode | Component): this;
    insertToBefore(componentOrParentNode?: ParentNode | Component, pivot?: ChildNode | Component): this;
    insertToAfter(componentOrParentNode?: ParentNode | Component, pivot?: ChildNode | Component): this;
    remove(): void;
    removeContents(): this;
    exists(): boolean;
    index(): number;
    contains(...nodes: Array<Component | Node | undefined | null>): boolean;
    isFocused(): boolean;
    focus(): void;
    blur(): void;
}
export interface IBasicClassManager<HOST extends Component<HTMLElement>> {
    add(...classes: string[]): HOST;
    remove(...classes: string[]): HOST;
}
export declare class ClassManager<HOST extends Component<HTMLElement>> implements IBasicClassManager<HOST> {
    private readonly host;
    constructor(host: HOST);
    all(): string[];
    add(...classes: string[]): HOST;
    remove(...classes: string[]): HOST;
    removeWhere(filter: (cls: string) => any): HOST;
    toggle(...classes: string[]): HOST;
    toggle(present: boolean, ...classes: string[]): HOST;
    has(...classes: string[]): boolean;
    some(...classes: string[]): boolean;
    until(promise: Promise<any>): IBasicClassManager<HOST>;
    until(promise: Promise<any>, consumer: (manipulator: IBasicClassManager<HOST>) => any): HOST;
}
export declare class AttributeManager<HOST extends Component<HTMLElement>> {
    private readonly host;
    constructor(host: HOST);
    get(name: string): string | null | undefined;
    add(name: string): HOST;
    toggle(present: boolean, name: string, value?: string): HOST;
    set(name: string, value?: string): HOST;
    remove(name: string): HOST;
}
export declare class StyleManager<HOST extends Component<HTMLElement>> {
    private readonly host;
    constructor(host: HOST);
    set(name: string, value?: string): HOST;
    remove(name: string): HOST;
}
export declare class TextManager<HOST extends Component<HTMLElement>> {
    private readonly host;
    constructor(host: HOST);
    get(): string | null | undefined;
    set(text?: string): HOST;
    add(text: string): HOST;
    remove(): HOST;
}
