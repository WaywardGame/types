/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
declare const _default: import("../Action").Action<[[import("../IAction").ActionArgument.ItemInventory, import("../IAction").ActionArgument.Undefined], import("../argument/ActionArgumentEnum").default<import("../../IEntity").AiType, "Neutral" | "Attack" | "Tamed" | "Random" | "Hostile" | "Scared" | "Hidden" | "Fearless" | "FollowClose" | "Retaliate" | "Fleeing" | "Waiting" | "FollowFar" | "Stay" | "AttackAdjacent" | "AttackInSight" | "Defend" | "Heel">], import("../../Human").default<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, import("@wayward/game/game/entity/action/actions/SetCreatureAi").ISetCreatureAiCanUse, [import("../../../item/Item").default | undefined, import("../../IEntity").AiType]>;
export default _default;
