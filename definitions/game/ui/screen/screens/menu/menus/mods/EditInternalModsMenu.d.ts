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
import { BlockRow } from "@wayward/game/ui/component/BlockRow";
import Input from "@wayward/game/ui/component/Input";
import Menu, { MenuSection, Tab } from "@wayward/game/ui/screen/screens/menu/component/Menu";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
interface IModRootEvents extends Events<BlockRow> {
    change(): any;
}
declare class ModRoot extends BlockRow {
    event: IEventEmitter<this, IModRootEvents>;
    readonly name: Input;
    readonly path: Input;
    constructor(name: string, path: string);
    get isEmpty(): boolean;
    get isValid(): boolean;
    clear(): void;
    private onChange;
}
declare enum InternalModsMenuTabs {
    Roots = 0,
    Mods = 1
}
export default class EditInternalModsMenu extends Menu {
    readonly rootsSection: MenuSection;
    readonly rootsTab: Tab<InternalModsMenuTabs.Roots>;
    readonly rootAddNew: ModRoot;
    readonly modsSection: MenuSection;
    readonly modsTab: Tab<InternalModsMenuTabs.Mods>;
    readonly modAddNew: Input;
    constructor();
    protected goBackFrom(): Promise<void>;
    private addRoot;
    private addInternalMod;
}
export {};
