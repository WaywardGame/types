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
import { ModType } from "mod/IModInfo";
import Component from "ui/component/Component";
import { EnableDisableAllRow } from "ui/component/EnableDisableAllRow";
import FilterRow from "ui/component/FilterRow";
import SortRow from "ui/component/SortRow";
import Menu, { Tab } from "ui/screen/screens/menu/component/Menu";
import { ModSort } from "ui/screen/screens/menu/menus/mods/IModsMenu";
import ModRow from "ui/screen/screens/menu/menus/mods/ModRow";
export default class ModsMenu extends Menu {
    readonly rowToggleAllMods: EnableDisableAllRow;
    readonly sections: {
        2: ModSection;
        1: ModSection;
        0: ModSection;
    };
    readonly sortRow: SortRow<ModSort>;
    filter: FilterRow;
    constructor();
    getModRow(index: number): ModRow | undefined;
    setFilter(filter?: string): this;
    protected onOverlayHidden(): Promise<void>;
    protected refreshMods(): void;
    protected onHide(): Promise<void>;
    private modRows;
    private sortMods;
    private setAllModStates;
    private addModSection;
    private updateFilter;
}
declare class ModSection extends Tab {
    readonly disabledSorts: ModSort[];
    defaultSort: ModSort;
    readonly wrapperMods: Component<HTMLElement>;
    readonly modRows: ModRow[];
    readonly wrapperBefore: Component<HTMLElement>;
    readonly wrapperAfter: Component<HTMLElement>;
    constructor(modType: ModType);
    setDisabledSorts(sorts: ModSort[], defaultSort: ModSort): this;
    withBefore(initializer: (component: Component) => any): this;
    withAfter(initializer: (component: Component) => any): this;
}
export {};
