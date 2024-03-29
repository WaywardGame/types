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
import { ActionArgument } from "game/entity/action/IAction";
/**
 * Firing a weapon (like a bow)
 */
declare const _default: Action<[ActionArgument.ItemInventory], import("../../Human").default<number>, void, import("game/entity/action/actions/Attack").IAttackCloseUpCanUse | import("game/entity/action/actions/Attack").IAttackThrowItemCanUse | import("game/entity/action/actions/Attack").IAttackRangedWeaponCanUse, [import("../../../item/Item").default]>;
export default _default;
