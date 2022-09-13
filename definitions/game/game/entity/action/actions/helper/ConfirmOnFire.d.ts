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
import type { IActionConfirmerApi } from "game/entity/action/IAction";
import type Human from "game/entity/Human";
import type { ITile } from "game/tile/ITerrain";
import type Message from "language/dictionary/Message";
import Translation from "language/Translation";
export default function (action: IActionConfirmerApi<Human>, tile: ITile, thing: Translation | undefined, message: Message): true | Promise<boolean>;