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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type Screen from "@wayward/game/ui/screen/Screen";
import { MenuId } from "@wayward/game/ui/screen/screens/menu/component/IMenu";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
import type { MenuById } from "@wayward/game/ui/screen/screens/menu/MenuMap";
export interface IMenuManagerEvents {
    init(menu: Menu): any;
    show(menu: Menu): any;
    hide(menu: Menu): any;
}
export default class MenuManager extends EventEmitter.Host<IMenuManagerEvents> {
    allowNoMenus: boolean;
    all: Record<number, Menu>;
    chain: Menu[];
    private readonly screenRef;
    get screen(): Screen;
    constructor(screen: Screen, allowNoMenus?: boolean);
    /**
     * Returns the visible menu (top of the chain)
     */
    get visible(): Menu | undefined;
    show<MENU extends Menu | MenuId>(menu: MENU, menuInitializer?: (menu: MENU extends MenuId ? MenuById[MENU] : MENU) => any): void | Promise<void>;
    back(): false | void | Promise<void>;
    backToFirst(): void | Promise<void>;
    /**
     * Gets the menu by the given ID, initializing it if it does not already exist.
     */
    get<ID extends MenuId>(menuId: ID): MenuById[ID];
    removeFromChain(menu: Menu): this;
    clearChain(): this;
    /**
     * Sets the visible menu to be the new top menu. (Removes super-menus, keeps sub-menus)
     */
    setTop(): this;
    /**
     * Sets the given menu to be the new top menu. (Removes super-menus, keeps sub-menus)
     */
    setTop(menu: Menu): this;
    /**
     * Returns a promise that resolves when the given screen is shown.
     */
    await<MENU extends MenuId>(menuId: MENU): Promise<MenuById[MENU]>;
}
