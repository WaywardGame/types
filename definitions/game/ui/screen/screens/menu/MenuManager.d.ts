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
import type Screen from "ui/screen/Screen";
import { MenuId } from "ui/screen/screens/menu/component/IMenu";
import Menu from "ui/screen/screens/menu/component/Menu";
import type { MenuById } from "ui/screen/screens/menu/MenuMap";
export default class MenuManager {
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
    show<MENU extends Menu | MenuId>(menu: MENU, menuInitializer?: (menu: MENU extends MenuId ? MenuById[MENU] : MENU) => any): this;
    back(): this;
    backToFirst(): this;
    /**
     * Gets the menu by the given ID, initializing it if it does not already exist.
     */
    get<ID extends MenuId>(menuId: ID): MenuById[ID];
    removeFromChain(menu: Menu): this;
    /**
     * Sets the visible menu to be the new top menu. (Removes super-menus, keeps sub-menus)
     */
    setTop(): this;
    /**
     * Sets the given menu to be the new top menu. (Removes super-menus, keeps sub-menus)
     */
    setTop(menu: Menu): this;
}