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
import type ContextMenuExport from "@wayward/game/ui/component/ContextMenu";
import type { AppendStrategy, IComponentEvents, Namespace } from "@wayward/game/ui/component/IComponent";
import { SelectableLayer } from "@wayward/game/ui/component/IComponent";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type Screen from "@wayward/game/ui/screen/Screen";
import type Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import type Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import { AttributeManipulator, ClassManipulator, DataManipulator, StyleManipulator } from "@wayward/game/ui/util/ComponentManipulator";
import type { IHighlight } from "@wayward/game/ui/util/IHighlight";
import Rectangle from "@wayward/game/utilities/math/shapes/Rectangle";
import Stream from "@wayward/goodstream/Stream";
import type { Events } from "@wayward/utilities/event/EventEmitter";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
declare const ContextMenu: typeof ContextMenuExport;
declare type ContextMenu = ContextMenuExport;
declare global {
    interface Node {
        component?: Component;
        originalRemove?: () => void;
    }
}
export default class Component<E extends HTMLElement = HTMLElement> extends EventEmitter.Host<IComponentEvents> {
    static map: WeakMap<Element, Component<HTMLElement>>;
    static get(selector: string): Component | undefined;
    static get(element: Element | Component): Component;
    static get(event: Event): Component;
    static get(element: Element | Component | null | false | undefined): Component | undefined;
    static get(selector: string, create: false | undefined): Component | undefined;
    static get(element: Element | Component, create: false | undefined): Component | undefined;
    static get(event: Event, create: false | undefined): Component | undefined;
    static get(element: Element | Component | null | false | undefined, create: false | undefined): Component | undefined;
    static get<C extends Component>(selector: string): C | undefined;
    static get<C extends Component>(element: Element | C): C;
    static get<C extends Component>(event: Event): C;
    static get<C extends Component>(element: Element | C | null | false | undefined): C | undefined;
    static get<C extends Component>(selector: string, create: false | undefined): C | undefined;
    static get<C extends Component>(element: Element | C, create: false | undefined): C | undefined;
    static get<C extends Component>(event: Event, create: false | undefined): C | undefined;
    static get<C extends Component>(element: Element | C | null | false | undefined, create: false | undefined): C | undefined;
    static all(selector: string): Stream<Component>;
    static findDescendants(inElement: Component | HTMLElement, selector: string, includeSelf?: boolean): HTMLElement[];
    static getSelectableLayer(element: Component | HTMLElement): number | false;
    static append(elementToMove: string | Component | HTMLElement, placeToAppendTo: string | Component | HTMLElement, strategy?: AppendStrategy): void;
    static remove(elementToRemove: string | Component | Element | ChildNode | null, force?: boolean, uncacheSiblingsAndAncestors?: boolean): void;
    private static updateComponentsDueToAppend;
    private static uncacheAncestorBoxes;
    private static uncacheSiblingBoxes;
    private static updateDescendantComponents;
    private static updateComponent;
    /**
     * The element that this `Component` instance wraps.
     */
    get element(): E;
    readonly classes: ClassManipulator<this>;
    readonly attributes: AttributeManipulator<this>;
    readonly data: DataManipulator<this>;
    readonly style: StyleManipulator<this>;
    /**
     * The `dataset` of the internal element.
     */
    get dataset(): DOMStringMap;
    /**
     * The number of child elements of this component.
     */
    get childCount(): number;
    private _element;
    private scrollingChild?;
    private contextMenuGenerator?;
    private tooltipInitializer?;
    private tooltipArgs?;
    private highlight;
    private debounces?;
    private box?;
    private boxCacheLastScroll?;
    private boxCacheScrollable?;
    removed?: boolean | string;
    observing?: boolean;
    rooted: boolean;
    protected parentComponent?: WeakRef<Component>;
    private eventListeners?;
    /**
     * The selectable layer of this element, or `false` if it is not selectable.
     */
    get selectable(): SelectableLayer | false;
    constructor(elementType?: string, namespace?: Namespace);
    /**
     * Alias of `.element.addEventListener`, except it returns `this` instead and prevents memory leaks
     */
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): this;
    addEventListener(type: string, listener: (this: HTMLElement, ev: Event) => any, options?: boolean | AddEventListenerOptions): this;
    removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any): this;
    getAs<C extends Component>(cls: AnyClass<C>): C | undefined;
    cast<C extends Component>(): C;
    matches(selector: string): boolean;
    matches<C extends Component>(selector: string): this is C;
    exists(): boolean;
    /**
     * A cached alias for `element.getBoundingClientRect()`. Boxes are updated or regenerated as ancestors shift.
     */
    getBox(regenIfZero?: boolean, forceRegen?: boolean): Rectangle;
    /**
     * Forcibly regenerates the cached result of {@link Component.getBox} for this component and all descendants.
     */
    regenerateBoxes(descendants?: boolean): void;
    /**
     * Returns an object containing {@link HTMLElement.offsetTop} and {@link HTMLElement.offsetLeft}
     */
    getOffset(): {
        top: number;
        left: number;
    };
    /**
     * Warning: This method will replace the internal element backing this component.
     *
     * Only call this directly after constructing the element.
     */
    setElement(element: E): this;
    /**
     * Warning: This method will replace the internal element backing this component.
     *
     * Only call this directly after constructing the element.
     */
    setElement(elementType?: string, namespace?: Namespace): this;
    /**
     * Sets the ID of this component's element.
     */
    setId(id: string): this;
    setHighlight(highlight?: IHighlight): this;
    isFocused(): boolean;
    setSelectable(val: SelectableLayer | false): this;
    isSelectable(): boolean;
    getSelectionTarget(): Component;
    setInitialSelection(initialSelection?: boolean): this;
    private registered?;
    registerEventBusSubscriber(...untilEvents: Array<keyof Events<this>>): void;
    deregisterEventBusSubscriber(): void;
    registerBindHandlers(...untilEvents: Array<keyof Events<this>>): void;
    registerBindHandlers(warnIfNoHandlers: false, ...untilEvents: Array<keyof Events<this>>): void;
    deregisterBindHandlers(): void;
    protected hasHiddenClass?: boolean;
    /**
     * Returns whether the element is visible.
     */
    isVisible(trustInternalState?: boolean): boolean;
    /**
     * Shows the element.
     */
    show(trustInternalState?: boolean): this;
    /**
     * Hides the element. If a tooltip is shown for this element, hides that as well.
     */
    hide(trustInternalState?: boolean): this;
    /**
     * Toggles the visibility of this element. Internally uses `show` and `hide`.
     * @param visible The new visiblity of this element.
     */
    toggle(visible?: boolean, trustInternalState?: boolean): this;
    setInert(inert?: boolean): this;
    /**
     * Returns this component's parent component, if it exists.
     */
    getParent<C extends Component | undefined = Component | undefined>(): C | null;
    /**
     * Returns this component's containing menu, if it exists.
     */
    getMenu<M extends Menu | undefined = Menu | undefined>(): M | undefined;
    /**
     * Returns this component's containing dialog, if it exists.
     */
    getDialog<D extends Dialog | undefined = Dialog | undefined>(): D | undefined;
    /**
     * Returns this component's containing dialog, if it exists.
     */
    getScreen<S extends Screen | undefined = Screen | undefined>(): S | undefined;
    /**
     * Returns the `nth` child, defaulting to the first child
     */
    getNthChild<C extends Component | undefined = Component | undefined>(nth?: number): C | undefined;
    /**
     * Returns the `nth` child from the end, defaulting to the last child
     */
    getNthChildFromEnd<C extends Component | undefined = Component | undefined>(nth?: number): C | undefined;
    /**
     * Returns a stream of this component's child components. Child elements that don't have associated components will be `undefined`.
     * @param selector A selector that each element must match to be included in the result stream
     */
    getChildren<C extends Component = Component>(selector?: string): Stream<C>;
    /**
     * Returns a stream of this component's sibling components. Child elements that don't have associated components will be `undefined`.
     * @param selector A selector that each element must match to be included in the result stream
     */
    siblings<C extends Component = Component>(selector?: string): Stream<C>;
    /**
     * Returns the index of this component amongst its sibling nodes. If it has no parent, it returns `undefined`.
     */
    getIndex(elementsOnly?: boolean): number | undefined;
    /**
     * Returns whether this component contains the given element.
     */
    contains(what?: string | Node | Component | null): boolean;
    /**
     * An alias for `element.querySelectorAll(selector)`
     */
    querySelectorAll<E extends HTMLElement = HTMLElement>(selector: string): NodeListOf<E>;
    queryX<N extends Node = Node>(selector: string): N | null;
    queryXAll<N extends Node = Node>(selector: string): N[];
    /**
     * An alias for `element.closest(selector)`
     */
    closest(selector: string): Element | undefined;
    /**
     * An alias for `element.closest(selector)`
     */
    furthest(selector: string): HTMLElement | undefined;
    /**
     * Appends this component to another element, by selector, element, or component.
     * @param where A CSS selector, an element, or a component to append this component to.
     * @param appendStrategy Where in the new container to insert this component. See {@link AppendStrategy}
     */
    appendTo(where?: string | HTMLElement | Component | null, appendStrategy?: AppendStrategy): this;
    /**
     * Appends this component to another element, by selector, element, or component.
     * @param where A CSS selector, an element, or a component to append this component to.
     */
    prependTo(where?: string | HTMLElement | Component | null): this;
    /**
     * Appends every element of a list of components/elements.
     * @param elements A varargs list of elements or iterables of elements. Falsy values are skipped
     */
    append(...elements: ArrayOfIterablesOr<HTMLElement | Component | undefined | false>): this;
    /**
     * Appends every element of a list of components/elements.
     * @param appendStrategy Where in this component to insert new components. See {@link AppendStrategy}
     * @param elements A varargs list of elements or iterables of elements. Falsy values are skipped
     */
    append(appendStrategy: AppendStrategy, ...elements: ArrayOfIterablesOr<HTMLElement | Component | undefined | false>): this;
    /**
     * Appends every element of a list of components/elements.
     * @param elements A varargs list of elements or iterables of elements. Falsy values are skipped
     */
    prepend(...elements: ArrayOfIterablesOr<HTMLElement | Component | undefined | false>): this;
    /**
     * Removes this element and all descendants.
     */
    remove(): this;
    /**
     * Removes all children.
     */
    dump(): this;
    /**
     * Removes all children that are not filtered out with the given filter function.
     * @param filter A function that returns `true` if the child should be kept.
     */
    dump(filter?: (element: HTMLElement, component?: Component) => boolean): this;
    /**
     * Moves this element to a hidden element, in order to retain any information the element had.
     * This allows the element to be re-appended later without re-adding event handlers, CSS, or
     * any other data.
     */
    store(owner: Component): this;
    /**
     * Enables a intersection observe on this component and fires an observe event once when the element is first observed
     */
    observe(): void;
    /**
     * Sets the contents of this element using `innerHTML`.
     * @param html The content, an HTML string. Script tags will not be executed, as per the normal functionality of `innerHTML`
     * @param escape Only the text within the HTML will be appended, not the tags.
     */
    setContents(html: string, escape?: boolean): this;
    /**
     * Sets the tooltip options for this element. Setting the tooltip to undefined, or not
     * providing the argument removes the tooltip options.
     */
    setTooltip<ARGS extends any[]>(initializer?: (tooltip: Tooltip, ...args: ARGS) => any, ...args: ARGS): this;
    isShowingTooltip(): boolean;
    refreshTooltip(): void;
    showTooltip(): void;
    removeTooltip(): void;
    /**
     * Removes the context menu from this element.
     */
    setContextMenu(): this;
    /**
     * Sets the context menu for this element.
     */
    setContextMenu(generator: (contextMenu: ContextMenu, api: IBindHandlerApi) => ContextMenu | undefined, priority?: number): this;
    /**
     * Scrolls this element so the given child is at the top of the viewport.
     * @param child The child to scroll to
     * @param ms The time to take, defaulting to 1000 (1 second)
     */
    scrollTo(child?: HTMLElement | Component, ms?: number): void;
    /**
     * Scrolls this element so the given child is at the top of the viewport.
     * @param child The child to scroll to
     * @param offsetTop An offset for the position to scroll to, relative to the position of the child
     * @param ms The time to take, defaulting to 1000 (1 second)
     */
    scrollTo(child: HTMLElement | Component | undefined, offsetTop: number, ms?: number): void;
    /**
     * Triggers a repaint on this element.
     */
    repaint(): void;
    reflow(reason: string): void;
    /**
     * Runs the given callback with the given arguments. `this` and the first argument are this element.
     * @param cb The callback to run.
     * @param args The arguments with which to call the callback.
     */
    schedule<A extends any[]>(cb?: (this: this, component: this, ...args: A) => any, ...args: A): this;
    /**
     * Runs the given callback with the given arguments. `this` and the first argument are this element.
     * @param cb The callback to run.
     * @param args The arguments with which to call the callback.
     */
    schedule(cb?: (this: this, component: this) => any, ...args: any[]): this;
    /**
     * Runs the given callback with the given arguments, after the specified amount of time.
     * `this` and the first argument are this element.
     * @param ms The amount of time to wait before running the callback, in milliseconds.
     * @param cb The callback to run.
     * @param args The arguments with which to call the callback.
     */
    schedule<A extends any[]>(ms: number, cb: (this: this, component: this, ...args: A) => any, ...args: A): this;
    /**
     * Runs the given callback with the given arguments, after the specified amount of time.
     * `this` and the first argument are this element.
     * @param ms The amount of time to wait before running the callback, in milliseconds.
     * @param cb The callback to run.
     * @param args The arguments with which to call the callback.
     */
    schedule(ms: number, cb?: (this: this, component: this) => any, ...args: any[]): this;
    /**
     * Runs the given callback with the given arguments, after the specified amount of time.
     * `this` and the first argument are this element.
     * @param ms The amount of time to wait before running the callback, in milliseconds.
     * @param debounce The span of time to debounce in. (If this callback was scheduled again in this time, skip this earlier call)
     * @param cb The callback to run.
     * @param args The arguments with which to call the callback.
     */
    schedule<A extends any[]>(ms: number, debounce: number, cb: (this: this, component: this, ...args: A) => any, ...args: A): this;
    /**
     * Runs the given callback with the given arguments, after the specified amount of time.
     * `this` and the first argument are this element.
     * @param ms The amount of time to wait before running the callback, in milliseconds.
     * @param debounce The span of time to debounce in. (If this callback was scheduled again in this time, skip this earlier call)
     * @param cb The callback to run.
     * @param args The arguments with which to call the callback.
     */
    schedule(ms: number, debounce: number, cb?: (this: this, component: this) => any, ...args: any[]): this;
    protected onContextMenu(api: IBindHandlerApi): boolean;
    protected entered: boolean;
    protected onEnter(reason: "mouse" | "focus"): void;
    private menuCancelHideTooltip;
    protected onLeave(reason: "mouse" | "focus" | "remove"): void;
    /**
     * @returns a promise that resolves when either the given time has passed, or this component has been removed.
     * Returns `true` if this component exists, `false` if it has been removed.
     */
    sleep(ms: number): Promise<boolean>;
    private _showTooltip;
}
export {};
