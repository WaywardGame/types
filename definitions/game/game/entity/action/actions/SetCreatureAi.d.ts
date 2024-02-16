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
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import type Creature from "@wayward/game/game/entity/creature/Creature";
import type { ICreatureDescription } from "@wayward/game/game/entity/creature/ICreature";
import type Human from "@wayward/game/game/entity/Human";
import { AiType } from "@wayward/game/game/entity/IEntity";
export interface ISetCreatureAiCanUse extends IActionUsable {
    creature: Creature;
}
export declare function hasSkillToSetCreatureAi(human: Human, creatureDescription: ICreatureDescription | undefined, ai: AiType): boolean;
declare const _default: Action<[import("../argument/ActionArgumentEnum").default<AiType, "Attack" | "Tamed" | "Neutral" | "Random" | "Hostile" | "Scared" | "Hidden" | "Fearless" | "FollowClose" | "Retaliate" | "Fleeing" | "Waiting" | "FollowFar" | "Stay" | "AttackAdjacent" | "AttackInSight" | "Defend" | "Heel">], Human<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, ISetCreatureAiCanUse, [AiType]>;
export default _default;
