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
import Entity from "@wayward/game/game/entity/Entity";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type { IContainer } from "@wayward/game/game/item/IItem";
export interface IToggleContainerCanUse extends IActionUsable {
    container: IContainer;
    entity: Entity;
}
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.Container, ActionArgument.NPCNearby], [arg1: ActionArgument.Undefined, ActionArgument.Boolean]], ActionType.ToggleContainer, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, IToggleContainerCanUse, [(import("../../npc/NPC").default | IContainer | undefined)?, (boolean | undefined)?]>;
export default _default;
