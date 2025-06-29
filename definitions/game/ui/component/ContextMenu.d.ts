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
import type { IIcon } from "@wayward/game/game/inspection/InfoProvider";
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import Text, { Heading } from "@wayward/game/ui/component/Text";
import Bindable from "@wayward/game/ui/input/Bindable";
import type { ItemComponentHandler } from "@wayward/game/ui/screen/screens/game/component/item/ItemComponentHandler";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type { IDraggableComponent, IDraggableEvents } from "@wayward/game/ui/util/Draggable";
import Draggable from "@wayward/game/ui/util/Draggable";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import type Stream from "@wayward/goodstream";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface IContextMenuOptionCheckbox {
    checked: boolean;
    onToggle(): any;
}
export type IContextMenuOptionDescription = {
    bindable?: Bindable;
    icon?: IIcon;
    translation: TranslationGenerator;
    tooltip?: (tooltip: Tooltip) => any;
    create?(option: ContextMenuOption): ContextMenuOption;
    createText?(text: Text): ContextMenuOption;
    submenu?(): ContextMenu;
    onActivate?(): any;
    checkbox?: IContextMenuOptionCheckbox;
    disabled?: boolean;
    draggable?: {
        display: ItemComponentHandler;
        onDrop(bindable?: Bindable): any;
    };
} & ({
    submenu(): ContextMenu;
} | {
    onActivate(): any;
} | {
    checkbox: IContextMenuOptionCheckbox;
});
export type ContextMenuOptionKeyValuePair<O extends number | string | symbol = number | string | symbol> = [O, IContextMenuOptionDescription];
export type ContextMenuOptionDescription<O extends number | string | symbol = number | string | symbol> = ContextMenuOptionKeyValuePair<O> | typeof ContextMenu.Divider;
export type ContextMenuDescriptions<O extends number | string | symbol = number | string | symbol> = Array<ContextMenuOptionDescription<O>>;
export interface IContextMenuEvents<O extends number | string | symbol = number | string | symbol> extends Events<Component> {
    setPosition(): any;
    interactable(): any;
    chosen(choice: ContextMenuOption<O>): any;
    becomeActive(): any;
    showTooltip(option: ContextMenuOption<O>, tooltip: Tooltip): any;
}
declare class ContextMenu<O extends number | string | symbol = number | string | symbol> extends Component {
    event: IEventEmitter<this, IContextMenuEvents<O>>;
    private activeOption?;
    private contextMenuId?;
    private readonly descriptions;
    readonly options: Map<O, ContextMenuOption<O>>;
    parentMenu?: ContextMenu;
    readonly content: Component<HTMLElement>;
    constructor(...descriptions: Array<ContextMenuOptionKeyValuePair<O> | typeof ContextMenu.Divider | undefined>);
    get id(): string | undefined;
    getActiveMenu(): ContextMenu;
    isFacingLeft(): boolean;
    isSubmenu(): boolean;
    getBindables(): Stream<Bindable>;
    describeOption<NO extends number | string | symbol>(id: NO, description: IContextMenuOptionDescription): ContextMenu<O | NO>;
    describeDivider(): this;
    describeOptions<NO extends number | string | symbol>(...descriptions: Array<ContextMenuOptionKeyValuePair<NO> | typeof ContextMenu.Divider | undefined>): ContextMenu<O | NO>;
    addAllDescribedOptions(): this;
    hasDescribedOptions(): boolean;
    setMenuId(id: string): this;
    addOptions(...options: ArrayOfIterablesOr<O | typeof ContextMenu.Divider>): this;
    disableOptions(...options: ArrayOfIterablesOr<O>): this;
    removeOptions(...options: ArrayOfIterablesOr<O>): this;
    private title?;
    setTitle(initializer?: (title: Heading) => any): this;
    private position?;
    private offsetX;
    private offsetY;
    setOffset(x?: number, y?: number): this;
    getPosition(): IVector2 | undefined;
    setPosition(): this;
    setPosition(x: number, y: number, parentFacingLeft?: true): this;
    isHiding(): boolean;
    private hiding;
    private silent?;
    hideAndRemove(): void;
    protected onRemove(): void;
    private getDescription;
    protected onAppend(): void;
}
declare namespace ContextMenu {
    const Divider: unique symbol;
}
export default ContextMenu;
interface IContextMenuOptionEvents extends Events<Button>, IDraggableEvents {
    chosen(choice?: ContextMenuOption): any;
    becomeActive(): any;
    dispose(): any;
}
export declare class ContextMenuOption<O extends number | string | symbol = number | string | symbol> extends Button implements IDraggableComponent {
    readonly optionId: O;
    readonly optionDescription: IContextMenuOptionDescription;
    event: IEventEmitter<this, IContextMenuOptionEvents>;
    submenu?: ContextMenu;
    private readonly submenuDescription?;
    private isActive;
    readonly bindable?: Bindable;
    readonly draggable?: Draggable;
    get contextMenu(): ContextMenu | undefined;
    get rootMenu(): ContextMenu | undefined;
    constructor(optionId: O, optionDescription: IContextMenuOptionDescription);
    bindEvents(): void;
    setRequiresClick(requiresClick?: boolean): this;
    hideSubmenu(): void;
    hideAndRemove(): Promise<void>;
    onSelected(): void;
    onUnselected(): void;
    protected showSubmenu(generator: () => ContextMenu | undefined): void;
}
