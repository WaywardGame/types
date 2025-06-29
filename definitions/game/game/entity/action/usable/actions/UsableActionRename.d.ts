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
import { UsableActionGenerator } from "@wayward/game/game/entity/action/usable/UsableActionRegistrar";
import type Player from "@wayward/game/game/entity/player/Player";
import type Item from "@wayward/game/game/item/Item";
import type Tile from "@wayward/game/game/tile/Tile";
export declare function requestRename(player: Player, tile: Tile, item?: Item): Promise<void>;
declare const _default: UsableActionGenerator<[]>;
export default _default;
