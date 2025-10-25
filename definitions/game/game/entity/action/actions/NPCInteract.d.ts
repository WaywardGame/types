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
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
export interface INPCInteractUsable extends IActionUsable {
    /**
     * Whether this interaction is only usable when used directly — ie, via a dedicated UsableAction rather than in MoveTo
     */
    onlyDirect?: boolean;
}
declare const _default: Action<[ActionArgument.NPCNearby, [arg1: ActionArgument.Undefined, ActionArgument.Integer32]], ActionType.NPCInteract, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, INPCInteractUsable, [import("../../npc/NPC").default, (number | undefined)?]>;
export default _default;
