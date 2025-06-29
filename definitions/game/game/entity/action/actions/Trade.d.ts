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
import { TradeArgument } from "@wayward/game/game/entity/action/actions/trade/TradeArgument";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
declare const _default: Action<[ActionArgument.NPCNearby, [arg1: ActionArgument.Undefined, TradeArgument]], import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, import("@wayward/game/game/entity/action/actions/NPCInteract").INPCInteractUsable, [import("../../npc/NPC").default, (import("@wayward/game/game/entity/action/actions/trade/TradeArgument").ITradeArgument | undefined)?]>;
export default _default;
