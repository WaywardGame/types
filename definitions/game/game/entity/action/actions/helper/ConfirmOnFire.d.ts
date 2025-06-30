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
import type { IActionConfirmerApi } from "@wayward/game/game/entity/action/IAction";
import type Human from "@wayward/game/game/entity/Human";
import type Tile from "@wayward/game/game/tile/Tile";
import type Message from "@wayward/game/language/dictionary/Message";
import Translation from "@wayward/game/language/Translation";
export default function (action: IActionConfirmerApi<Human>, tile: Tile, thing: Translation | undefined, message: Message): true | Promise<boolean>;
