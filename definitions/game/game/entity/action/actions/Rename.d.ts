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
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import Creature from "@wayward/game/game/entity/creature/Creature";
declare const _default: Action<[[ActionArgument.ItemNearby, ActionArgument.Doodad, ActionArgument.Creature, ActionArgument.NPC], ActionArgument.String], import("../../Human").default<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, import("@wayward/game/game/entity/action/IAction").IActionUsable, [Creature | import("../../../doodad/Doodad").default | import("../../../item/Item").default | import("../../npc/NPC").default, string]>;
export default _default;
