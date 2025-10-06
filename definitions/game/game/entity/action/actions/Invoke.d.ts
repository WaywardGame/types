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
import type { DeityReal } from "@wayward/game/game/deity/Deity";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
import type { IInvokeUse } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
export interface IInvokeUsable extends IActionUsable, IInvokeUse {
    rune: Item;
}
export declare const DEITY_INVOKE_MILESTONES: Record<DeityReal, Milestone>;
export declare const RUNE_USE_CHANCE = 1;
declare const _default: Action<[ActionArgument.Item], ActionType.Invoke, import("../../player/Player").default, void, IInvokeUsable, [Item]>;
export default _default;
