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
import type Creature from "game/entity/creature/Creature";
export interface IReleaseCanUse extends IActionUsable {
    creature: Creature;
}
/**
 * Releases a creature from being tamed
 */
declare const _default: Action<[], import("../../Human").default<number>, void, IReleaseCanUse, []>;
export default _default;
