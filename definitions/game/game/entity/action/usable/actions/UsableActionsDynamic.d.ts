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
import type { IUsableActionPossibleUsing, IUsableActionRequirements, IUsableActionUsing, ReturnableUsableActionUsability, UsableActionIconReference } from "game/entity/action/usable/IUsableAction";
import { UsableActionGenerator } from "game/entity/action/usable/UsableActionRegistrar";
import type { UsableActionTranslator } from "game/entity/action/usable/UsableActionTranslator";
import type Player from "game/entity/player/Player";
import type Bindable from "ui/input/Bindable";
export interface IUsableActionDynamicDefinition {
    icon?: SupplierOr<UsableActionIconReference>;
    bindable: Bindable;
    displayLevel?: ActionDisplayLevel;
    priority?: number;
    discoveredByDefault?: true;
    translate?: (translator: UsableActionTranslator) => UsableActionTranslator;
}
export interface IUsableActionsDynamicConfig<DEFINITION extends IUsableActionDynamicDefinition, REQUIREMENTS extends IUsableActionRequirements> {
    id: string;
    record: PartialRecord<ActionType, DEFINITION | false>;
    getDynamic(actions: Set<ActionType>): any;
    requirements?(action: ActionType, definition?: DEFINITION): REQUIREMENTS;
    isUsable(action: ActionType, player: Player, using: IUsableActionUsing<REQUIREMENTS>, definition?: DEFINITION): ReturnableUsableActionUsability;
    execute(action: ActionType, player: Player, using: IUsableActionUsing<REQUIREMENTS>, definition?: DEFINITION): any;
    priority?(action: ActionType, using: IUsableActionPossibleUsing, definition?: DEFINITION): number | undefined;
}
export default class UsableActionsDynamic<DEFINITION extends IUsableActionDynamicDefinition, REQUIREMENTS extends IUsableActionRequirements> extends UsableActionGenerator {
    constructor(config: IUsableActionsDynamicConfig<DEFINITION, REQUIREMENTS>);
}
