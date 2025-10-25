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
import { AiType } from "@wayward/game/game/entity/ai/AI";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { ICreatureDescription } from "@wayward/game/game/entity/creature/ICreature";
import type Human from "@wayward/game/game/entity/Human";
export interface ISetCreatureAiCanUse extends IActionUsable {
    creatures: Creature[];
}
export declare function hasSkillToSetCreatureAi(human: Human, creatureDescription: ICreatureDescription | undefined, ai: AiType): boolean;
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.Creature], [arg1: ActionArgument.Undefined, ActionArgument.ItemInventory], import("../argument/ActionArgumentEnum").default<AiType, "None" | "Attack" | "Idle" | "Neutral" | "Scared" | "Hostile" | "Fearless" | "HostileFearless" | "Alerted" | "Waiting" | "Hidden" | "Pacified" | "CanSwapWith" | "CanSwapLayers" | "FollowClose" | "FollowFar" | "Stay" | "AttackAdjacent" | "AttackInSight" | "Defend" | "Heel">], ActionType.SetCreatureAi, Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, ISetCreatureAiCanUse, [Creature | undefined, import("../../../item/Item").default | undefined, AiType]>;
export default _default;
