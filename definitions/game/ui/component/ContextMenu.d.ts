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
import type { IIcon } from "game/inspection/InfoProvider";
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
import { Heading } from "ui/component/Text";
import type Bindable from "ui/input/Bindable";
import type Tooltip from "ui/tooltip/Tooltip";
export interface IContextMenuOptionCheckbox {
    checked: boolean;
    onToggle(): any;
}
export declare type IContextMenuOptionDescription = {
    bindable?: Bindable;
    icon?: IIcon;
    translation: TranslationGenerator;
    tooltip?: (tooltip: Tooltip) => any;
    create?(option: ContextMenuOption): ContextMenuOption;
    submenu?(): ContextMenu;
    onActivate?(): any;
    checkbox?: IContextMenuOptionCheckbox;
    disabled?: boolean;
} & ({
    submenu(): ContextMenu;
} | {
    onActivate(): any;
} | {
    checkbox: IContextMenuOptionCheckbox;
});
export declare type ContextMenuOptionKeyValuePair<O extends number | string | symbol = number | string | symbol> = [O, IContextMenuOptionDescription];
export declare type ContextMenuOptionDescription<O extends number | string | symbol = number | string | symbol> = ContextMenuOptionKeyValuePair<O> | typeof ContextMenu.Divider;
export declare type ContextMenuDescriptions<O extends number | string | symbol = number | string | symbol> = Array<ContextMenuOptionDescription<O>>;
export interface IContextMenuEvents extends Events<Component> {
    chosen(choice: ContextMenuOption): any;
    becomeActive(): any;
}
declare class ContextMenu<O extends number | string | symbol = number | string | symbol> extends Component {
    event: IEventEmitter<this, IContextMenuEvents>;
    private activeOption?;
    private readonly descriptions;
    readonly options: Map<O, ContextMenuOption>;
    readonly content: Component<HTMLElement>;
    constructor(...descriptions: Array<ContextMenuOptionKeyValuePair<O> | typeof ContextMenu.Divider | undefined>);
    getActiveMenu(): ContextMenu;
    isFacingLeft(): boolean;
    isSubmenu(): boolean;
    getBindables(): import("@wayward/goodstream").default<Bindable>;
    describeOption<NO extends number | string | symbol>(id: NO, description: IContextMenuOptionDescription): ContextMenu<O | NO>;
    describeDivider(): this;
    describeOptions<NO extends number | string | symbol>(...descriptions: Array<ContextMenuOptionKeyValuePair<NO> | typeof ContextMenu.Divider | undefined>): ContextMenu<O | NO>;
    addAllDescribedOptions(): this;
    addOptions(...options: ArrayOfIterablesOr<O | typeof ContextMenu.Divider>): this;
    disableOptions(...options: ArrayOfIterablesOr<O>): this;
    removeOptions(...options: ArrayOfIterablesOr<O>): this;
    private title?;
    setTitle(initializer?: (title: Heading) => any): this;
    private offsetX;
    private offsetY;
    setOffset(x?: number, y?: number): this;
    setPosition(): this;
    setPosition(x: number, y: number, parentFacingLeft?: true): this;
    private hiding;
    hideAndRemove(): Promise<void>;
    private getDescription;
    protected onAppend(): void;
}
declare module ContextMenu {
    const Divider: unique symbol;
}
export default ContextMenu;
interface IContextMenuOptionEvents extends Events<Button> {
    chosen(choice?: ContextMenuOption): any;
    becomeActive(): any;
    dispose(): any;
}
export declare class ContextMenuOption extends Button {
    private readonly optionDescription;
    event: IEventEmitter<this, IContextMenuOptionEvents>;
    submenu?: ContextMenu;
    private readonly submenuDescription?;
    private isActive;
    readonly bindable?: Bindable;
    get contextMenu(): ContextMenu<string | number | symbol> | undefined;
    constructor(optionDescription: IContextMenuOptionDescription);
    bindEvents(): void;
    setRequiresClick(requiresClick?: boolean): this;
    hideSubmenu(): void;
    hideAndRemove(): Promise<void>;
    onSelected(): void;
    onUnselected(): void;
    protected showSubmenu(generator: () => ContextMenu): void;
}
