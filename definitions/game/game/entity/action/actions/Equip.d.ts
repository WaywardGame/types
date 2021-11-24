/*!
 * Copyright 2011-2021 Unlok
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
declare const _default: Action<[ActionArgument.ItemNearby, ActionArgument.EquipType, [ActionArgument.Boolean, ActionArgument.Undefined], [ActionArgument.Boolean, ActionArgument.Undefined]], import("../../player/Player").default, void, [import("../../../item/Item").default, import("game/entity/IHuman").EquipType, (boolean | undefined)?, (boolean | undefined)?]>;
export default _default;