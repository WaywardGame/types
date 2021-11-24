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
import { QuestRequirement } from "game/entity/player/quest/requirement/Requirement";
import type { ItemType, ItemTypeGroup } from "game/item/IItem";
declare const _default: QuestRequirement<[(ItemType | ItemTypeGroup)[], number], {
    dismantled: number;
}>;
export default _default;
