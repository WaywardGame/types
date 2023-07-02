/*!
 * Copyright 2011-2023 Unlok
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
import Input from "ui/component/Input";
import type { IRefreshable } from "ui/component/Refreshable";
import Text, { Paragraph } from "ui/component/Text";
import type { IBindHandlerApi } from "ui/input/Bind";
import { IActionBarSlotData } from "ui/screen/screens/game/static/actions/IActionBar";
import { ActionSlotItemMethod } from "ui/screen/screens/game/static/actions/IActionsDrawer";
import SelectionHandler from "ui/screen/screens/menu/component/SelectionHandler";
declare enum Classes {
    Main = "game-action-configuration-drawer",
    Header = "game-action-configuration-drawer-header",
    HeaderTitle = "game-action-configuration-drawer-header-title",
    ButtonClose = "game-action-configuration-drawer-button-close",
    ButtonCloseNoAction = "game-action-configuration-drawer-button-close-no-action",
    Footer = "game-action-configuration-drawer-footer",
    DiscoveryHint = "game-action-configuration-drawer-footer-discovery-hint",
    Column = "game-action-configuration-drawer-column",
    ColumnContent = "game-action-configuration-drawer-column-content",
    ColumnsContainer = "game-action-configuration-drawer-columns-container",
    ActionsColumnsContainer = "game-action-configuration-drawer-columns-container-actions",
    ActionsFilterSortContainer = "game-action-configuration-drawer-actions-filter-sort-container",
    ActionsFilter = "game-action-configuration-drawer-actions-filter",
    ConfigurationColumn = "game-action-configuration-drawer-configuration-column",
    ConfigurationColumnCloseNoAction = "game-action-configuration-drawer-configuration-column-close-no-action",
    Hints = "game-action-configuration-drawer-hints",
    Hint = "game-action-configuration-drawer-hint",
    HintLabel = "game-action-configuration-drawer-hint-label",
    HintBinding = "game-action-configuration-drawer-hint-binding",
    ActionButton = "game-action-configuration-drawer-action-button",
    ActionButtonInapplicable = "game-action-configuration-drawer-action-button-inapplicable",
    ActionButtonSlotted = "game-action-configuration-drawer-action-button-slotted",
    ActionButtonSelected = "game-action-configuration-drawer-action-button-selected",
    ConfigurationColumnTitle = "game-action-configuration-drawer-column-title",
    ConfigurationColumnDescription = "game-action-configuration-drawer-column-description",
    ConfigurationColumnTitleInapplicable = "game-action-configuration-drawer-column-title-inapplicable"
}
export { Classes as ActionsConfigurationDrawerClasses };
export interface IActionsConfigurationDrawerEvents extends Events<Component> {
    update(): any;
    endConfiguration(): any;
}
export default class ActionsConfigurationDrawer extends Component implements IRefreshable {
    readonly event: IEventEmitter<this, IActionsConfigurationDrawerEvents>;
    readonly header: Component<HTMLElement>;
    readonly headerTitle: Text;
    readonly acceptButton: Button;
    readonly columnsContainer: Component<HTMLElement>;
    readonly footer: Component<HTMLElement>;
    readonly discoveryHint: Text;
    readonly actionsFilterSort: Component<HTMLElement>;
    readonly actionsColumnsContainer: Component<HTMLElement>;
    readonly filterInput: Input;
    private lastFilter?;
    private filter;
    readonly actionsColumn: Component<HTMLElement>;
    readonly actionsColumnContent: Component<HTMLElement>;
    readonly itemActionsColumn: Component<HTMLElement>;
    readonly itemActionsColumnContent: Component<HTMLElement>;
    readonly configurationColumn: Component<HTMLElement>;
    readonly hintSelectAction: Paragraph;
    readonly configurationColumnHeaderHorizontalLine: HorizontalLine;
    readonly configurationColumnContents: Component<HTMLElement>;
    readonly itemOrTypeChoiceList: ChoiceList<Choice<ActionSlotItemMethod>, false>;
    private translateUseExact;
    private translateUseByTypeAndQuality;
    private translateUseByType;
    private translateUseAny;
    readonly useOnMoveCheckButton: CheckButton;
    readonly hintDiscoverMore: Paragraph;
    readonly hr1: HorizontalLine;
    readonly clearSlotButton: Button;
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
    get oldUsing(): IActionBarSlotData["using"];
    constructor();
    open(number: number, slot: IActionBarSlotData): Promise<this>;
    refresh(updateSavedUsing?: boolean): this;
    protected onHide(): void;
    private editBindings;
    private setMethod;
    private setUseOnMove;
    private clearSlot;
    protected postExecuteAction(): void;
    private generateActionLists;
    private getRenderInfo;
    private appendActionButton;
    private createActionButton;
    private slottedActionButton?;
    private slottedItemActionButton?;
    private slotButton;
    private selectAction;
    updateConfigurationColumn(): void;
    private getAction;
    private selectedAction?;
    private selectedColumn?;
    private getVisibleActions;
    protected onMenuCancel(): boolean;
    protected onNext(): boolean;
    protected onPrevious(): boolean;
    protected onLeft(): boolean;
    protected onEnterBind(api: IBindHandlerApi | Input, event?: KeyboardEvent): boolean;
    protected onSubmit(): boolean;
    private chooseSelected;
    protected onSelectionChange(handler: SelectionHandler, component?: Component): void;
    private selectNext;
    private selectPrevious;
    private unselectHighlightAction;
    private selectHighlightAction;
}
