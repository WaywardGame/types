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
import { Events, IEventEmitter } from "event/EventEmitter";
import { BlockRow } from "ui/component/BlockRow";
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import { IComponent } from "ui/component/IComponent";
import Text, { Heading } from "ui/component/Text";
import { IMenu, MenuId } from "ui/screen/screens/menu/component/IMenu";
export default class Menu extends Component implements IMenu {
    event: IEventEmitter<this, Events<IMenu>>;
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
    show(): this;
    scrollToTop(): void;
    scrollToTabSection(tabId: string | number): this;
    clearTabs(): void;
    addTabs(...tabs: ArrayOfIterablesOr<Tab>): void;
    getTabs(): import("@wayward/goodstream/Stream").default<Tab<string | number | undefined>>;
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
    setActive(active?: boolean): this;
    setInactive(): this;
    setSection(section: MenuSection): this;
    setSubTabs(...tabs: ArrayOfIterablesOr<Tab>): void;
}
export declare class MenuSection extends Component {
    readonly heading: Heading;
    readonly content: Component;
    constructor();
    setTitle(initializer: (title: Heading) => Heading): this;
    addContent(...content: ArrayOfIterablesOr<IComponent | undefined>): this;
    dumpContent(): this;
}
export declare class BackButton extends Button {
    constructor();
}
export declare class ConfirmButtonHandler {
    private readonly menu;
    readonly buttons: ConfirmButton[];
    readonly heading: Heading;
    constructor(menu: Menu);
    initialize(initializer: (button: ConfirmButton) => any): this;
    setLabel(initializer: (heading: Heading) => any): this;
}
export declare class ConfirmButton extends Button {
    constructor();
}
export {};
