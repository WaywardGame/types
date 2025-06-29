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
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import Text from "@wayward/game/ui/component/Text";
import ActionSlotConfigurationColumn from "@wayward/game/ui/screen/screens/game/static/actions/ActionSlotConfigurationColumn";
import ActionsSelector from "@wayward/game/ui/screen/screens/game/static/actions/ActionsSelector";
import { IActionBarSlotData } from "@wayward/game/ui/screen/screens/game/static/actions/IActionBar";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
declare enum Classes {
    Main = "game-action-configuration-drawer",
    Header = "game-action-configuration-drawer-header",
    HeaderTitle = "game-action-configuration-drawer-header-title",
    ButtonClose = "game-action-configuration-drawer-button-close",
    ButtonCloseNoAction = "game-action-configuration-drawer-button-close-no-action",
    Footer = "game-action-configuration-drawer-footer",
    ColumnsContainer = "game-action-configuration-drawer-columns-container",
    DiscoveryHint = "game-action-configuration-drawer-footer-discovery-hint"
}
export { Classes as ActionsConfigurationDrawerClasses };
export interface IActionsConfigurationDrawerEvents extends Events<Component> {
    update(): any;
    endConfiguration(): any;
}
export default class ActionsConfigurationDrawer extends Component {
    event: IEventEmitter<this, IActionsConfigurationDrawerEvents>;
    readonly header: Component<HTMLElement>;
    readonly headerTitle: Text;
    readonly acceptButton: Button;
    readonly columnsContainer: Component<HTMLElement>;
    readonly footer: Component<HTMLElement>;
    readonly discoveryHint: Text;
    readonly actionsSelector: ActionsSelector;
    readonly configurationColumn: ActionSlotConfigurationColumn;
    get configuringNumber(): number | undefined;
    get configuringSlotData(): number | undefined;
    private current?;
    private _savedData?;
    get savedData(): IActionBarSlotData | undefined;
    constructor();
    open(number: number, slot: IActionBarSlotData): Promise<this>;
    reset(updateSavedUsing?: boolean): this;
    private refresh;
    protected onHide(): void;
    protected postExecuteAction(): void;
    protected onSubmit(): boolean;
    private onChooseAction;
    private onConfigurationChange;
    private onClear;
}
