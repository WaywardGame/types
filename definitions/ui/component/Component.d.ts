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
import EventEmitter, { Events } from "event/EventEmitter";
import ContextMenuExport from "ui/component/ContextMenu";
import { AppendStrategy, IComponent, IHighlight, ITooltip, Namespace, SelectableLayer } from "ui/component/IComponent";
import { IBindHandlerApi } from "ui/input/Bind";
import { AttributeManipulator, ClassManipulator, DataManipulator, StyleManipulator } from "ui/util/ComponentManipulator";
import Rectangle from "utilities/math/Rectangle";
declare const ContextMenu: typeof ContextMenuExport;
declare type ContextMenu = ContextMenuExport;
export default class Component<E extends HTMLElement = HTMLElement> extends EventEmitter.Host<Events<IComponent>> implements IComponent {
    private static readonly map;
    static get<C extends Component = Component>(selector: string, create?: false): C;
    static get<C extends Component = Component>(element: Element, create?: false): C;
    static get<C extends Component = Component>(event: Event, create?: false): C;
    static get<C extends Component = Component>(element?: Element | null | false, create?: false): C | undefined;
    static all(selector: string): import("@wayward/goodstream/Stream").default<Component<HTMLElement>>;
    static findDescendants(inElement: IComponent | HTMLElement, selector: string, includeSelf?: boolean): HTMLElement[];
    static getSelectableLayer(element: IComponent | HTMLElement): number | false;
    static append(elementToMove: string | IComponent | HTMLElement, placeToAppendTo: string | IComponent | HTMLElement, strategy?: AppendStrategy): void;
    static remove(elementToRemove: string | IComponent | HTMLElement): void;
    private static appendRegenerateBoxes;
    private static regenerateAncestorBoxes;
    private static regenerateSiblingBoxes;
    private static regenerateDescendantBoxes;
    get element(): E;
    readonly classes: ClassManipulator<this>;
    readonly attributes: AttributeManipulator<this>;
    readonly data: DataManipulator<this>;
    readonly style: StyleManipulator<this>;
    get dataset(): DOMStringMap;
    get childCount(): number;
    private _element;
    private scrollingChild?;
    private contextMenuGenerator?;
    private tooltipInitializer;
    private highlight;
    private readonly debounces;
    private box?;
    private boxCacheLastScroll?;
    private boxCacheScrollable?;
    get selectable(): SelectableLayer | false;
    /**
     * Alias of `.element.addEventListener`
     */
    get listen(): (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined) => this;
    private addEventListener;
    constructor(elementType?: string, namespace?: Namespace);
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
    setId(id: string): this;
    setSelectable(val: SelectableLayer | false): this;
    setInitialSelection(initialSelection?: boolean): this;
    isFocused(): boolean;
    getAs<C extends Component>(cls: Class<C>): C | undefined;
    registerEventBusSubscriber(...untilEvents: Array<keyof Events<this>>): void;
    deregisterEventBusSubscriber(): void;
    registerBindHandlers(...untilEvents: Array<keyof Events<this>>): void;
    registerBindHandlers(warnIfNoHandlers: false, ...untilEvents: Array<keyof Events<this>>): void;
    deregisterBindHandlers(): void;
    registerHookHost(name?: string, ...untilEvents: Array<keyof Events<this>>): void;
    isVisible(): boolean;
    show(): this;
    hide(): this;
    toggle(visible?: boolean): this;
    exists(): boolean;
    getParent<C extends Component = Component>(): C | null;
    appendTo(where: string | HTMLElement | IComponent, appendStrategy?: AppendStrategy): this;
    append(...elements: ArrayOfIterablesOr<HTMLElement | IComponent | undefined | false>): this;
    append(appendStrategy: AppendStrategy, ...elements: ArrayOfIterablesOr<HTMLElement | IComponent | undefined | false>): this;
    remove(): this;
    contains(what?: string | Element | IComponent | null): boolean;
    dump(filter?: (element: Component) => boolean): this;
    setContents(html: string, escape?: boolean): this;
    store(): this;
    findDescendants<E extends HTMLElement = HTMLElement>(selector: string): NodeListOf<E>;
    closest(selector: string): Element | null;
    matches(selector: string): boolean;
    getIndex(): number | undefined;
    setTooltip(initializer?: (tooltip: ITooltip) => any, _showOnHover?: boolean): this;
    removeTooltip(): void;
    /**
     * Remove the context menu from this element
     */
    setContextMenu(): this;
    /**
     * Set the context menu for this element
     */
    setContextMenu(generator: (contextMenu: ContextMenu) => ContextMenu | undefined, priority?: number): this;
    setHighlight(highlight?: IHighlight): this;
    setStyle(property: string, value: string | number): this;
    getBox(regenIfZero?: boolean, forceRegen?: boolean): Rectangle;
    getOffset(): {
        top: number;
        left: number;
    };
    getNthChild<C extends Component = Component>(nth?: number): C;
    getChildren<C extends Component = Component>(selector?: string): Stream<C>;
    siblings<C extends Component = Component>(selector?: string): Stream<C>;
    scrollTo(child: Component, ms?: number): void;
    scrollTo(child: Component, offsetTop: number, ms?: number): void;
    schedule<A extends any[]>(cb: (this: this, button: this, ...args: A) => any, ...args: A): this;
    schedule(cb?: (this: this, button: this) => any, ...args: any[]): this;
    schedule<A extends any[]>(ms: number, cb: (this: this, button: this, ...args: A) => any, ...args: A): this;
    schedule(ms: number, cb?: (this: this, button: this) => any, ...args: any[]): this;
    schedule<A extends any[]>(ms: number, debounce: number, cb: (this: this, button: this, ...args: A) => any, ...args: A): this;
    schedule(ms: number, debounce: number, cb?: (this: this, button: this) => any, ...args: any[]): this;
    repaint(): void;
    reflow(reason: string): void;
    regenerateBoxes(): void;
    protected onContextMenu(api: IBindHandlerApi): boolean;
    protected onEnter(reason: "mouse" | "focus"): void;
    protected onLeave(reason: "mouse" | "focus"): void;
    private showTooltip;
}
export {};
