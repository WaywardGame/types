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
