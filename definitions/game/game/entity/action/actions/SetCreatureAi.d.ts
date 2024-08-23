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
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { AiType } from "@wayward/game/game/entity/AI";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { ICreatureDescription } from "@wayward/game/game/entity/creature/ICreature";
import type Human from "@wayward/game/game/entity/Human";
export interface ISetCreatureAiCanUse extends IActionUsable {
    creatures: Creature[];
}
export declare function hasSkillToSetCreatureAi(human: Human, creatureDescription: ICreatureDescription | undefined, ai: AiType): boolean;
declare const _default: Action<[[arg1: ActionArgument.Undefined, ActionArgument.Creature], [arg1: ActionArgument.Undefined, ActionArgument.ItemInventory], import("../argument/ActionArgumentEnum").default<AiType, "None" | "Attack" | "Neutral" | "Scared" | "Hostile" | "Fearless" | "HostileFearless" | "Alerted" | "Hidden" | "Waiting" | "CanSwapWith" | "Pacified" | "FollowClose" | "FollowFar" | "Stay" | "AttackAdjacent" | "AttackInSight" | "Defend" | "Heel" | "Unused2">], Human<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, ISetCreatureAiCanUse, [Creature | undefined, import("../../../item/Item").default | undefined, AiType]>;
export default _default;
