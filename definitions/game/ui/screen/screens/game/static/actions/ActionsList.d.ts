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
import type { IUsableActionPossibleUsing, IUsableActionRequirements } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type UsableAction from "@wayward/game/game/entity/action/usable/UsableAction";
import Translation from "@wayward/game/language/Translation";
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import HorizontalLine from "@wayward/game/ui/component/HorizontalLine";
import Text, { Heading, Paragraph } from "@wayward/game/ui/component/Text";
export declare enum ActionsListClasses {
    Column = "game-action-configuration-drawer-column",
    ColumnTitle = "game-action-configuration-drawer-column-title",
    ColumnTitleInapplicable = "game-action-configuration-drawer-column-title-inapplicable",
    ColumnDescription = "game-action-configuration-drawer-column-description",
    ColumnContent = "game-action-configuration-drawer-column-content",
    ColumnContentSection = "game-action-configuration-drawer-column-content-section"
}
export interface ActionsListDefinition {
    title: Translation;
    description: Translation;
    type: "none" | "item";
    getActions?(): UsableAction[];
    filter?(action: UsableAction): any;
    isApplicable?(using: IUsableActionPossibleUsing): any;
    getUsing(): IUsableActionPossibleUsing;
    onInitializeButton?(button: ActionButton): any;
}
export default class ActionsList extends Component {
    readonly definition: ActionsListDefinition;
    readonly title: Heading;
    readonly description: Paragraph;
    readonly divider: HorizontalLine;
    readonly content: Component<HTMLElement>;
    readonly contentApplicable: Component<HTMLElement>;
    readonly contentInapplicableHeading: Text;
    readonly contentInapplicable: Component<HTMLElement>;
    readonly buttons: Map<UsableAction<IUsableActionRequirements, import("@wayward/game/game/entity/action/usable/IUsableAction").IUsableActionDefinition<IUsableActionRequirements>>, ActionButton>;
    readonly visible: ActionButton[];
    constructor(definition: ActionsListDefinition);
    getVisibleButton(action: UsableAction): ActionButton | undefined;
    refresh(): void;
    filter(searchString: string): void;
    private createActionButton;
    private getRenderInfo;
}
export declare enum ActionButtonClasses {
    Main = "game-action-configuration-drawer-action-button",
    Inapplicable = "game-action-configuration-drawer-action-button-inapplicable",
    Slotted = "game-action-configuration-drawer-action-button-slotted",
    Selected = "game-action-configuration-drawer-action-button-selected"
}
export declare class ActionButton extends Button {
    readonly action: UsableAction;
    undiscoveredActionIcon?: Component;
    constructor(action: UsableAction);
    setUsing(using: IUsableActionPossibleUsing): this;
    private inapplicable;
    isInapplicable(): boolean;
    setInapplicable(inapplicable?: boolean): this;
    setSelected(selected?: boolean): this;
    setSlotted(slotted?: boolean): this;
    isSlotted(): boolean;
}
