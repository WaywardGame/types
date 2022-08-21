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
import type { ActionDisplayLevel } from "game/entity/action/IAction";
import { ActionType } from "game/entity/action/IAction";
import type Bindable from "ui/input/Bindable";
import type { IUiActionRequirements, IUiActionUsing, ReturnableUiActionUsability, UiActionIconReference } from "ui/screen/screens/game/static/actions/UiAction";
import { UiActionGenerator } from "ui/screen/screens/game/static/actions/UiActionRegistrar";
export interface IUiActionDynamicDefinition {
    icon?: UiActionIconReference;
    bindable: Bindable;
    displayLevel?: ActionDisplayLevel;
}
export interface IUiActionsDynamicConfig<DEFINITION extends IUiActionDynamicDefinition, REQUIREMENTS extends IUiActionRequirements> {
    id: string;
    record: PartialRecord<ActionType, DEFINITION>;
    getDynamic(actions: Set<ActionType>): any;
    requirements?(action: ActionType, definition?: DEFINITION): REQUIREMENTS;
    isUsable(action: ActionType, using: IUiActionUsing<REQUIREMENTS>): ReturnableUiActionUsability;
    execute(action: ActionType, using: IUiActionUsing<REQUIREMENTS>): any;
}
export default class UiActionsDynamic<DEFINITION extends IUiActionDynamicDefinition, REQUIREMENTS extends IUiActionRequirements> extends UiActionGenerator {
    constructor(config: IUiActionsDynamicConfig<DEFINITION, REQUIREMENTS>);
}
