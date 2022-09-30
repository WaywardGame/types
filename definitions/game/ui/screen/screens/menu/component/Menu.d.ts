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
import type { Events, IEventEmitter } from "event/EventEmitter";
import { BlockRow } from "ui/component/BlockRow";
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import Text, { Heading, Paragraph } from "ui/component/Text";
import type { IMenuEvents } from "ui/screen/screens/menu/component/IMenu";
import { MenuId } from "ui/screen/screens/menu/component/IMenu";
export default class Menu extends Component {
    event: IEventEmitter<this, IMenuEvents>;
    menuId: MenuId | string;
    canCancel: boolean | undefined;
    get isSubmenu(): boolean;
    readonly buttonBack: BackButton;
    confirmButtons: ConfirmButtonHandler;
    readonly title: Heading;
    readonly description: Text;
    readonly header: BlockRow;
    readonly staticContent: Component<HTMLElement>;
    readonly content: Component;
    tabContainer?: Component;
    readonly tabs: Map<string | number, Tab<string | number | undefined>>;
    constructor(menuId: MenuId | string);
    setTitle(initializer: (title: Heading) => Heading): this;
    setDescription(initializer: (title: Text) => Text): this;
    setIsSubmenu(submenu?: boolean): this;
    protected preShow?(): Promise<void>;
    /**
     * @deprecated Use Menu.showMenu()
     */
    show(): this;
    private willShow;
    showMenu(): Promise<void> | void;
    hide(): this;
    setSectionsForcedOpen(forcedOpen?: boolean): this;
    scrollToTop(): void;
    scrollToTabSection(tabId: string | number): this;
    clearTabs(): void;
    addTabs(...tabs: ArrayOfIterablesOr<Tab>): void;
    getTabs(): import("@wayward/goodstream").default<Tab<string | number | undefined>>;
    addSubtabs(tab: Tab): this;
    /**
     * When called in `show` or after `ComponentEvent.Show`, returns whether the menu was "went back to"
     * from a descendant menu.
     */
    wentBackTo(): boolean;
    protected highlightVisibleTabs(): void;
    protected onShowMenu(): void;
}
interface ITabEvents extends Events<Button> {
    editSubtabs(): any;
}
export declare class Tab<I extends string | number | undefined = string | number | undefined> extends Button {
    event: IEventEmitter<this, ITabEvents>;
    readonly id: I;
    section: MenuSection | undefined;
    private _subtabs;
    get subtabs(): Tab<string | number | undefined>[];
    constructor(id: I);
    private icon?;
    setTabIcon(icon?: string): this;
    setSection(section: MenuSection): this;
    setSubTabs(...tabs: ArrayOfIterablesOr<Tab>): void;
}
export declare class MenuSection extends Component {
    readonly heading: Heading;
    readonly description: Paragraph;
    readonly content: Component<HTMLElement>;
    constructor();
    setTitle(initializer: (title: Heading) => Heading): this;
    setDescription(initializer: (description: Paragraph) => Paragraph): this;
    addContent(...content: ArrayOfIterablesOr<Component | undefined>): this;
    dumpContent(): this;
    setToggle(): this;
}
export declare class BackButton extends Button {
    constructor();
}
export declare class ConfirmButtonHandler {
    readonly buttons: ConfirmButton[];
    readonly heading: Heading;
    private readonly menuRef;
    get menu(): Menu;
    constructor(menu: Menu);
    initialize(initializer: (button: ConfirmButton) => any): this;
    setLabel(initializer: (heading: Heading) => any): this;
}
export declare class ConfirmButton extends Button {
    constructor();
}
export {};
