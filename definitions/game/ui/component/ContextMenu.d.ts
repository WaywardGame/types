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
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
export declare type IOptionDescription = {
    translation: TranslationGenerator;
    create?(option: Button): Button;
} & ({
    submenu(): ContextMenu;
} | {
    onActivate(): any;
});
export declare type ContextMenuOptionKeyValuePair<O extends number | string | symbol = number | string | symbol> = [O, IOptionDescription];
export declare type ContextMenuOptionDescription<O extends number | string | symbol = number | string | symbol> = ContextMenuOptionKeyValuePair<O> | typeof ContextMenu.Divider;
export declare type ContextMenuDescriptions<O extends number | string | symbol = number | string | symbol> = Array<ContextMenuOptionDescription<O>>;
export interface IContextMenuEvents extends Events<Component> {
    chosen(choice: ContextMenuOption): any;
    becomeActive(): any;
}
declare class ContextMenu<O extends number | string | symbol = number | string | symbol> extends Component {
    event: IEventEmitter<this, IContextMenuEvents>;
    private activeOption;
    private readonly descriptions;
    private readonly options;
    constructor(...descriptions: Array<ContextMenuOptionKeyValuePair<O> | typeof ContextMenu.Divider | undefined>);
    describeOption<NO extends number | string | symbol>(id: NO, description: IOptionDescription): ContextMenu<O | NO>;
    describeDivider(): this;
    describeOptions<NO extends number | string | symbol>(...descriptions: Array<ContextMenuOptionKeyValuePair<NO> | typeof ContextMenu.Divider | undefined>): ContextMenu<O | NO>;
    addAllDescribedOptions(): this;
    addOptions(...options: ArrayOfIterablesOr<O | typeof ContextMenu.Divider>): this;
    disableOptions(...options: ArrayOfIterablesOr<O>): this;
    removeOptions(...options: ArrayOfIterablesOr<O>): this;
    setPosition(): this;
    setPosition(x: number, y: number, right?: true): this;
    hideAndRemove(): Promise<void>;
    private getDescription;
}
declare module ContextMenu {
    const Divider: unique symbol;
}
export default ContextMenu;
interface IContextMenuOptionEvents extends Events<Button> {
    chosen(choice?: ContextMenuOption): any;
    becomeActive(): any;
}
export declare class ContextMenuOption extends Button {
    event: IEventEmitter<this, IContextMenuOptionEvents>;
    private submenu?;
    private readonly submenuDescription?;
    private isActive;
    constructor(description: IOptionDescription);
    hideSubmenu(): void;
    hideAndRemove(): Promise<void>;
    onSelected(): void;
    onUnselected(): void;
    protected showSubmenu(generator: () => ContextMenu): void;
}
