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
import type { IActionApi } from "game/entity/action/IAction";
import { ActionType } from "game/entity/action/IAction";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import type { ItemType } from "game/item/IItem";
import Item from "game/item/Item";
export default function consumeItemType(action: IActionApi<Player | NPC>, item: Item | ItemType, actionType?: ActionType): boolean;
