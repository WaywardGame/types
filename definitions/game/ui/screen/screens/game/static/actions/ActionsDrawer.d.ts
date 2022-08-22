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
import { CheckButton } from "ui/component/CheckButton";
import Component from "ui/component/Component";
import HorizontalLine from "ui/component/HorizontalLine";
import type { IRefreshable } from "ui/component/Refreshable";
import Text, { Heading } from "ui/component/Text";
import { IActionBarSlotData } from "ui/screen/screens/game/static/actions/IActionBar";
declare enum Classes {
    Main = "game-action-configuration-drawer",
    Column = "game-action-configuration-drawer-column",
    ColumnContent = "game-action-configuration-drawer-column-content",
    ColumnsContainer = "game-action-configuration-drawer-columns-container",
    ConfigurationColumn = "game-action-configuration-drawer-configuration-column",
    Hints = "game-action-configuration-drawer-hints",
    Hint = "game-action-configuration-drawer-hint",
    HintLabel = "game-action-configuration-drawer-hint-label",
    HintBinding = "game-action-configuration-drawer-hint-binding",
    ActionButton = "game-action-configuration-drawer-action-button",
    ActionButtonInapplicable = "game-action-configuration-drawer-action-button-inapplicable",
    ActionButtonSlotted = "game-action-configuration-drawer-action-button-slotted",
    ConfigurationColumnTitle = "game-action-configuration-drawer-column-title",
    ConfigurationColumnTitleInapplicable = "game-action-configuration-drawer-column-title-inapplicable"
}
export { Classes as ActionsConfigurationDrawerClasses };
export interface IActionsConfigurationDrawerEvents extends Events<Component> {
    update(): any;
    endConfiguration(): any;
    removeSlot(slot: number): any;
}
export default class ActionsConfigurationDrawer extends Component implements IRefreshable {
    readonly event: IEventEmitter<this, IActionsConfigurationDrawerEvents>;
    readonly minimizeButton: Button;
    readonly columnsContainer: Component<HTMLElement>;
    readonly actionsColumn: Component<HTMLElement>;
    readonly actionsColumnContent: Component<HTMLElement>;
    readonly itemActionsColumn: Component<HTMLElement>;
    readonly itemActionsColumnContent: Component<HTMLElement>;
    readonly configurationColumn: Component<HTMLElement>;
    readonly slotTitle: Heading;
    readonly configurationColumnContents: Component<HTMLElement>;
    readonly hints: Component<HTMLElement>;
    readonly hintUse: Component<HTMLElement>;
    readonly hintToggle: Text;
    readonly editBindingsButton: Button;
    readonly byItemTypeButton: Button;
    readonly useOnMoveCheckButton: CheckButton;
    readonly hr: HorizontalLine;
    readonly removeSlotButton: Button;
    get configuringNumber(): number | undefined;
    get configuringSlotData(): number | undefined;
    private current?;
    constructor();
    open(number: number, slot: IActionBarSlotData): this;
    refresh(): this;
    protected onHide(): void;
    private editBindings;
    private setByItemType;
    private setUseOnMove;
    private removeSlot;
    private generateActionLists;
    private appendActionButton;
    private createActionButton;
    private slottedActionButton?;
    private slottedItemActionButton?;
    private slotButton;
    private selectAction;
    private updateConfigurationColumn;
}
