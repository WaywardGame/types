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
import type { ActionDisplayLevel } from "@wayward/game/game/entity/action/IAction";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { IUsableActionDefinitionBase, IUsableActionPossibleUsing, IUsableActionRequirements, IUsableActionUsing, ReturnableUsableActionUsability, UsableActionIconReference } from "@wayward/game/game/entity/action/usable/IUsableAction";
import { UsableActionGenerator } from "@wayward/game/game/entity/action/usable/UsableActionRegistrar";
import type { UsableActionTranslator } from "@wayward/game/game/entity/action/usable/UsableActionTranslator";
import type Player from "@wayward/game/game/entity/player/Player";
import type Bindable from "@wayward/game/ui/input/Bindable";
export interface IUsableActionDynamicDefinition {
    icon?: SupplierOr<UsableActionIconReference>;
    bindable: Bindable;
    displayLevel?: ActionDisplayLevel;
    priority?: number;
    /**
     * Whether the action is visible in the action drawer by default (without using it normally first).
     */
    discoveredByDefault?: true | (() => boolean);
    translate?: (translator: UsableActionTranslator) => UsableActionTranslator;
    /**
     * By default, actions are assumed to be interacting with the tile in front of them.
     * This recategorises the action as one that either is unrelated to the tile in front, or interacting with the tile below.
     *
     * This affects where the game chooses to path the player to in order to use the action.
     */
    interactionDistance?: IUsableActionDefinitionBase["interactionDistance"];
    /**
     * By default, actions are assumed to be interacting with a tile.
     * This recategorises the action as one that interacts with the entity on the tile, causing it to be followed.
     */
    interactionFollowingEntity?: true;
    /**
     * Whether to target the tile the mouse is over by default.
     */
    targetHoveredTile?: true;
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
