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
import type { IUsableActionDefinition, IUsableActionPossibleUsing, IUsableActionRequirements } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import Component from "@wayward/game/ui/component/Component";
import Input from "@wayward/game/ui/component/Input";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type ActionsConfigurationDrawer from "@wayward/game/ui/screen/screens/game/static/actions/ActionsDrawer";
import ActionsList from "@wayward/game/ui/screen/screens/game/static/actions/ActionsList";
import SelectionHandler from "@wayward/game/ui/screen/screens/menu/component/SelectionHandler";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum ActionsSelectorClasses {
    Main = "actions-selector",
    ColumnsContainer = "game-action-configuration-drawer-columns-container-actions",
    FilterSortContainer = "game-action-configuration-drawer-actions-filter-sort-container",
    Filter = "game-action-configuration-drawer-actions-filter"
}
export interface ActionsSelectorDefinition {
    getUsing(): IUsableActionPossibleUsing;
    getAction(): UsableAction | undefined;
}
export interface ActionsSelectorEvents extends Events<Component> {
    submit(): any;
    choose(action: UsableAction | undefined, isItemAction: boolean): any;
}
export default class ActionsSelector extends Component {
    event: IEventEmitter<this, ActionsSelectorEvents>;
    readonly actionsFilterSort: Component<HTMLElement>;
    readonly actionsColumnsContainer: Component<HTMLElement>;
    readonly filterInput: Input;
    readonly actionsColumn: ActionsList;
    readonly itemActionsColumn: ActionsList;
    private slottedActionButton?;
    private slottedItemActionButton?;
    private cursor?;
    private lastFilter?;
    private get selectedColumn();
    private get selectedActionButton();
    get action(): UsableAction<IUsableActionRequirements, IUsableActionDefinition> | undefined;
    private readonly host;
    private using?;
    constructor(host: ActionsConfigurationDrawer);
    listen(): this;
    unlisten(): this;
    setSlot(number: number, action: UsableAction | undefined, using: IUsableActionPossibleUsing): void;
    setUsing(using?: IUsableActionPossibleUsing): void;
    isFocused(): boolean;
    protected onMenuCancel(): boolean;
    protected onNext(): boolean;
    protected onPrevious(): boolean;
    protected onLeft(): boolean;
    protected onSelectionChange(handler: SelectionHandler, component?: Component): void;
    private selectNext;
    private selectPrevious;
    private unselectHighlightAction;
    private selectHighlightAction;
    protected onEnterBind(api: IBindHandlerApi | Input, event?: KeyboardEvent): boolean;
    private chooseSelected;
    private chooseAction;
    private filter;
}
