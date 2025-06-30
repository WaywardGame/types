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
import { ModType } from "@wayward/game/mod/IModInformation";
import type { ModInformation } from "@wayward/game/mod/ModInformation";
import Component from "@wayward/game/ui/component/Component";
import { EnableDisableAllRow } from "@wayward/game/ui/component/EnableDisableAllRow";
import FilterRow from "@wayward/game/ui/component/FilterRow";
import SortRow from "@wayward/game/ui/component/SortRow";
import WarningRow from "@wayward/game/ui/component/WarningRow";
import Menu, { Tab } from "@wayward/game/ui/screen/screens/menu/component/Menu";
import { ModSort } from "@wayward/game/ui/screen/screens/menu/menus/mods/IModsMenu";
import ModRow from "@wayward/game/ui/screen/screens/menu/menus/mods/ModRow";
export default class ModsMenu extends Menu {
    readonly warningAllModsDisabled: WarningRow;
    readonly rowToggleAllMods: EnableDisableAllRow;
    readonly sections: {
        2: ModSection;
        1: ModSection;
        0: ModSection;
    };
    readonly sortRow: SortRow<ModSort>;
    filter: FilterRow;
    constructor();
    getModRow(mod: ModInformation): ModRow | undefined;
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
