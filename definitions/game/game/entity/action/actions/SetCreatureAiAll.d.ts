/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
declare const _default: import("../Action").Action<[[arg1: import("../IAction").ActionArgument.Undefined, import("../IAction").ActionArgument.Creature], [arg1: import("../IAction").ActionArgument.Undefined, import("../IAction").ActionArgument.ItemInventory], import("../argument/ActionArgumentEnum").default<import("../../ai/AI").AiType, "None" | "Attack" | "Idle" | "Neutral" | "Scared" | "Hostile" | "Fearless" | "HostileFearless" | "Alerted" | "Waiting" | "Hidden" | "Pacified" | "CanSwapWith" | "FollowClose" | "FollowFar" | "Stay" | "AttackAdjacent" | "AttackInSight" | "Defend" | "Heel">], import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, import("@wayward/game/game/entity/action/actions/SetCreatureAi").ISetCreatureAiCanUse, [import("../../creature/Creature").default | undefined, import("../../../item/Item").default | undefined, import("../../ai/AI").AiType]>;
export default _default;
