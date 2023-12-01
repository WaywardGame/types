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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import { Action } from "@wayward/game/game/entity/action/Action";
import type { IActionUsable } from "@wayward/game/game/entity/action/IAction";
import { ActionArgument } from "@wayward/game/game/entity/action/IAction";
import { EquipType } from "@wayward/game/game/entity/IHuman";
export interface IDisplayItemCanUse extends IActionUsable {
    doodad: Doodad;
}
declare const _default: Action<[ActionArgument.ItemNearby, import("../argument/ActionArgumentEnum").default<EquipType, "None" | "DualWield" | "Held" | "Legs" | "Chest" | "Head" | "Waist" | "Feet" | "Neck" | "Hands" | "Back" | "MainHand" | "OffHand">], import("../../Human").default<number, import("../../../reference/IReferenceManager").ReferenceType.NPC | import("../../../reference/IReferenceManager").ReferenceType.Player>, void, IDisplayItemCanUse, [import("../../../item/Item").default, EquipType]>;
export default _default;
