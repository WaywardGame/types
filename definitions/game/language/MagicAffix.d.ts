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
import type { ItemType } from "@wayward/game/game/item/IItem";
import type MagicalPropertyManager from "@wayward/game/game/magic/MagicalPropertyManager";
import Translation from "@wayward/game/language/Translation";
declare namespace MagicAffix {
    function get(id: number, itemType: ItemType, magic?: MagicalPropertyManager): Translation | undefined;
}
export default MagicAffix;
