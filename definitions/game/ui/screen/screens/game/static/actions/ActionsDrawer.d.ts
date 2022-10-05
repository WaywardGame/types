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
import ChoiceList, { Choice } from "ui/component/ChoiceList";
import Component from "ui/component/Component";
import HorizontalLine from "ui/component/HorizontalLine";
import type { IRefreshable } from "ui/component/Refreshable";
import Text from "ui/component/Text";
import { IActionBarSlotData } from "ui/screen/screens/game/static/actions/IActionBar";
declare enum Classes {
    Main = "game-action-configuration-drawer",
    Header = "game-action-configuration-drawer-header",
    HeaderTitle = "game-action-configuration-drawer-header-title",
    ButtonClose = "game-action-configuration-drawer-button-close",
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
    ConfigurationColumnDescription = "game-action-configuration-drawer-column-description",
    ConfigurationColumnTitleInapplicable = "game-action-configuration-drawer-column-title-inapplicable"
}
export { Classes as ActionsConfigurationDrawerClasses };
declare enum ItemMethod {
    ExactItem = 0,
    AnyOfTypeAndQuality = 1,
    AnyOfType = 2,
    AnyItem = 3
}
export interface IActionsConfigurationDrawerEvents extends Events<Component> {
    update(): any;
    endConfiguration(): any;
    removeSlot(slot: number): any;
}
export default class ActionsConfigurationDrawer extends Component implements IRefreshable {
    readonly event: IEventEmitter<this, IActionsConfigurationDrawerEvents>;
    readonly header: Component<HTMLElement>;
    readonly headerTitle: Text;
    readonly acceptButton: Button;
    readonly columnsContainer: Component<HTMLElement>;
    readonly actionsColumn: Component<HTMLElement>;
    readonly actionsColumnContent: Component<HTMLElement>;
    readonly itemActionsColumn: Component<HTMLElement>;
    readonly itemActionsColumnContent: Component<HTMLElement>;
    readonly configurationColumn: Component<HTMLElement>;
    readonly configurationColumnContents: Component<HTMLElement>;
    readonly itemOrTypeChoiceList: ChoiceList<Choice<ItemMethod>, false>;
    readonly useOnMoveCheckButton: CheckButton;
    readonly hr1: HorizontalLine;
    readonly removeSlotButton: Button;
    readonly hr2: HorizontalLine;
    readonly editBindingsButton: Button;
    readonly hints: Component<HTMLElement>;
    readonly hintUse: Component<HTMLElement>;
    readonly hintToggle: Text;
    readonly hintToggleUseOnMove: Text;
    get configuringNumber(): number | undefined;
    get configuringSlotData(): number | undefined;
    private current?;
    private savedUsing?;
    constructor();
    open(number: number, slot: IActionBarSlotData): this;
    refresh(): this;
    protected onHide(): void;
    private editBindings;
    private setMethod;
    private setUseOnMove;
    private removeSlot;
    private generateActionLists;
    private appendActionButton;
    private createActionButton;
    private slottedActionButton?;
    private slottedItemActionButton?;
    private slotButton;
    private selectAction;
    updateConfigurationColumn(): void;
    private getAction;
}
