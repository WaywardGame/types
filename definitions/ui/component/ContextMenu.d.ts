/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Events, IEventEmitter } from "event/EventEmitter";
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import { IContextMenu, TranslationGenerator } from "ui/component/IComponent";
export declare type IOptionDescription = {
    translation: TranslationGenerator;
    create?(option: Button): Button;
} & ({
    submenu(): IContextMenu;
} | {
    onActivate(): any;
});
export declare type ContextMenuOptionKeyValuePair<O extends number | string | symbol = number | string | symbol> = [O, IOptionDescription];
export declare type ContextMenuOptionDescription<O extends number | string | symbol = number | string | symbol> = ContextMenuOptionKeyValuePair<O> | typeof ContextMenu.Divider;
export declare type ContextMenuDescriptions<O extends number | string | symbol = number | string | symbol> = Array<ContextMenuOptionDescription<O>>;
declare class ContextMenu<O extends number | string | symbol = number | string | symbol> extends Component implements IContextMenu<O> {
    event: IEventEmitter<this, Events<IContextMenu>>;
    private activeOption;
    private readonly descriptions;
    private readonly options;
    constructor(...descriptions: Array<ContextMenuOptionKeyValuePair<O> | typeof ContextMenu.Divider | undefined>);
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
    protected showSubmenu(generator: () => IContextMenu): void;
}
