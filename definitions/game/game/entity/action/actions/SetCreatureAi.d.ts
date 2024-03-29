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
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type Creature from "game/entity/creature/Creature";
import type { ICreatureDescription } from "game/entity/creature/ICreature";
import type Human from "game/entity/Human";
import { AiType } from "game/entity/IEntity";
export interface ISetCreatureAiCanUse extends IActionUsable {
    creature: Creature;
}
export declare function hasSkillToSetCreatureAi(human: Human, creatureDescription: ICreatureDescription | undefined, ai: AiType): boolean;
declare const _default: Action<[ActionArgument.Integer32], Human<number>, void, ISetCreatureAiCanUse, [number]>;
export default _default;
