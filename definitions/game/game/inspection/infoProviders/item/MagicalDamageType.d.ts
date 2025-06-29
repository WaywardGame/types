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
import { DamageType } from "@wayward/game/game/entity/IEntity";
import type { IItemDescription } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
declare namespace MagicalDamageType {
    function translate(item?: Item, description?: IItemDescription, defaultDamageType?: DamageType): TranslationImpl;
}
export default MagicalDamageType;
