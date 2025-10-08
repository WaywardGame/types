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
import { ActionArgument, ActionType } from "@wayward/game/game/entity/action/IAction";
/**
 * Firing a weapon (like a bow)
 */
declare const _default: Action<[ActionArgument.ItemInventory], ActionType.Fire, import("../../Human").default<unknown, number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player, unknown>, void, import("@wayward/game/game/entity/action/actions/Attack").IAttackCloseUpCanUse | import("@wayward/game/game/entity/action/actions/Attack").IAttackThrowItemCanUse | import("@wayward/game/game/entity/action/actions/Attack").IAttackRangedWeaponCanUse, [import("../../../item/Item").default]>;
export default _default;
