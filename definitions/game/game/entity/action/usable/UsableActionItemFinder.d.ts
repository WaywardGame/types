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
import type Player from "game/entity/player/Player";
import type { IItemFinderOptions } from "game/item/ItemFinder";
import ItemFinder from "game/item/ItemFinder";
export default class UsableActionItemFinder extends ItemFinder {
    constructor(player: Player, options?: IItemFinderOptions);
}
