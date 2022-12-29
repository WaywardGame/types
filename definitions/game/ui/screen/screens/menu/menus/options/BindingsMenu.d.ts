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
import Menu from "ui/screen/screens/menu/component/Menu";
export default class BindingsMenu extends Menu {
    private readonly modBindingsTab;
    private readonly bindCatcher;
    private readonly bindSections;
    private readonly filterInput;
    constructor();
    onShow(): void;
    protected onGoBackFrom(): void;
    private filterBindRows;
    private filterToBindables;
    private getSelector;
}
