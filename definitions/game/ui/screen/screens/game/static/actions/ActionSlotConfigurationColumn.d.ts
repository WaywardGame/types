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
import { Quality } from "@wayward/game/game/IObject";
import { type IUsableActionPossibleUsing } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import type Item from "@wayward/game/game/item/Item";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import type { MilestoneManager } from "@wayward/game/game/milestones/MilestoneManager";
import Button from "@wayward/game/ui/component/Button";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import ChoiceList, { Choice } from "@wayward/game/ui/component/ChoiceList";
import Component from "@wayward/game/ui/component/Component";
import HorizontalLine from "@wayward/game/ui/component/HorizontalLine";
import RangeChoiceList from "@wayward/game/ui/component/RangeChoiceList";
import Text, { Heading, Paragraph } from "@wayward/game/ui/component/Text";
import ItemDropdown from "@wayward/game/ui/component/dropdown/ItemDropdown";
import type { IItemDropApi, ItemSlot, IItemSlotEvents } from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import ItemComponent from "@wayward/game/ui/screen/screens/game/component/ItemComponent";
import type { IItemComponentHandlerDescription } from "@wayward/game/ui/screen/screens/game/component/item/ItemComponentHandler";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum ActionSlotConfigurationColumnClasses {
    Main = "game-action-configuration-drawer-configuration-column",
    Content = "game-action-configuration-drawer-configuration-column-content",
    ModeChoice = "game-action-configuration-drawer-configuration-column-mode-choice",
    ModeConfiguration = "game-action-configuration-drawer-configuration-column-mode-configuration",
    ModeConfigurationExactItem = "game-action-configuration-drawer-configuration-column-mode-configuration-exact-item",
    ExactItemSlot = "game-action-configuration-drawer-configuration-column-mode-exact-item-slot",
    ExactItemName = "game-action-configuration-drawer-configuration-column-mode-exact-item-name",
    CloseNoAction = "game-action-configuration-drawer-configuration-column-close-no-action",
    Hints = "game-action-configuration-drawer-hints",
    Hint = "game-action-configuration-drawer-hint",
    HintLabel = "game-action-configuration-drawer-hint-label",
    HintBinding = "game-action-configuration-drawer-hint-binding",
    DiscoveryHint = "game-action-configuration-drawer-footer-discovery-hint"
}
declare enum Mode {
    None = 0,
    Exact = 1,
    Best = 2,
    Hovered = 3
}
export interface IActionSlotConfigurationColumnEvents extends Events<Component> {
    clear(): any;
    change(): any;
}
export default class ActionSlotConfigurationColumn extends Component {
    event: IEventEmitter<this, IActionSlotConfigurationColumnEvents>;
    private readonly using;
    private action?;
    autoUse: boolean;
    useOnHoveredTile: boolean;
    private number;
    readonly title: Heading;
    readonly configurationColumnContents: Component<HTMLElement>;
    readonly modeChoiceUseNone: Choice<Mode.None>;
    readonly modeChoiceUseExact: ActionSlotModeChoiceUseExact;
    readonly exactItemSlot: ActionSlotConfigurationUseExactSlot;
    readonly exactItemName: Text;
    readonly modeChoiceUseBest: Choice<Mode.Best>;
    readonly modeChoiceUseHovered: Choice<Mode.Best>;
    private readonly itemDropdownAnyOption;
    readonly itemTypeDropdown: ItemDropdown.DiscoveredTypes<"Any">;
    readonly itemQualityChoiceList: RangeChoiceList<Quality>;
    readonly modeChoiceList: ChoiceList<Choice<Mode>, false>;
    readonly hr0: HorizontalLine;
    readonly targetHoveredTileCheckButton: CheckButton;
    readonly autoUseCheckButton: CheckButton;
    readonly hr1: HorizontalLine;
    readonly clearSlotButton: Button;
    readonly hr2: HorizontalLine;
    readonly bindingsButton: Button;
    readonly hintUse: Paragraph;
    readonly hintAssign: Paragraph;
    readonly hintToggleAutoUse: Paragraph;
    private get mode();
    constructor();
    getUsing(): IUsableActionPossibleUsing;
    shouldAutoUse(): boolean;
    shouldUseOnHoveredTile(): boolean;
    shouldUseHovered(): boolean;
    setAction(action: UsableAction | undefined, isItemAction: boolean): this;
    setSlot(number: number, action: UsableAction | undefined, using: IUsableActionPossibleUsing, autoUse: boolean, useHovered: boolean, useOnHoveredTile: boolean): this;
    private refresh;
    private setMode;
    private ensureModeValidity;
    protected onUpdateMilestone(manager: MilestoneManager, milestone: Milestone): void;
    private onChangeItemType;
    private onChangeQualities;
    private onChangeItem;
    private editBindings;
    private clearSlot;
    private setUseOnMove;
    private setUseOnHoveredTile;
    private onDropIntoUseExact;
    private onDropFromUseExact;
}
interface ActionSlotModeChoiceUseExactEvents extends Events<Choice<Mode>>, IItemSlotEvents {
}
declare class ActionSlotModeChoiceUseExact extends Choice<Mode> {
    event: IEventEmitter<this, ActionSlotModeChoiceUseExactEvents>;
    constructor();
}
interface IActionSlotConfigurationUseExactSlotEvents extends Events<ItemComponent> {
    slot(item?: Item): any;
}
declare class ActionSlotConfigurationUseExactSlot extends ItemComponent {
    event: IEventEmitter<this, IActionSlotConfigurationUseExactSlotEvents>;
    slottedItem?: Item;
    constructor(handler: IItemComponentHandlerDescription);
    protected onDropFrom(api: IItemDropApi, intoSlot?: ItemSlot): boolean;
}
export {};
