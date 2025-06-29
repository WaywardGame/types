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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { IActionConfirmerApi } from "@wayward/game/game/entity/action/IAction";
import type Human from "@wayward/game/game/entity/Human";
export default function (action: IActionConfirmerApi<Human | Doodad>): Promise<boolean>;
