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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument, type IActionUsable } from "@wayward/game/game/entity/action/IAction";
import type Item from "@wayward/game/game/item/Item";
export interface ISacrificeUsable extends IActionUsable {
    altar: Doodad;
    items: Item[];
}
declare const _default: Action<[ActionArgument.Doodad], import("../../player/Player").default, void, ISacrificeUsable, [Doodad]>;
export default _default;
