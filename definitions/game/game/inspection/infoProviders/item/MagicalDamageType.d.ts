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
import { DamageType } from "game/entity/IEntity";
import type { IItemDescription } from "game/item/IItem";
import type Item from "game/item/Item";
declare namespace MagicalDamageType {
    function translate(item?: Item, description?: IItemDescription, defaultDamageType?: DamageType): import("../../../../language/impl/TranslationImpl").default;
}
export default MagicalDamageType;
