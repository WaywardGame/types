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
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { AiType } from "@wayward/game/game/entity/ai/AI";
declare const _default: import("@wayward/game/game/entity/action/Action").Action<[[arg1: import("@wayward/game/game/entity/action/IAction").ActionArgument.Undefined, import("@wayward/game/game/entity/action/IAction").ActionArgument.Creature], [arg1: import("@wayward/game/game/entity/action/IAction").ActionArgument.Undefined, import("@wayward/game/game/entity/action/IAction").ActionArgument.ItemInventory], import("../argument/ActionArgumentEnum").default<AiType, "None" | "Attack" | "Idle" | "Neutral" | "Scared" | "Hostile" | "Fearless" | "HostileFearless" | "Alerted" | "Waiting" | "Hidden" | "Pacified" | "CanSwapWith" | "CanSwapLayers" | "FollowClose" | "FollowFar" | "Stay" | "AttackAdjacent" | "AttackInSight" | "Defend" | "Heel">], ActionType.SetCreatureAiAll, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, import("@wayward/game/game/entity/action/actions/SetCreatureAi").ISetCreatureAiCanUse, [import("../../creature/Creature").default | undefined, import("../../../item/Item").default | undefined, AiType]>;
export default _default;
