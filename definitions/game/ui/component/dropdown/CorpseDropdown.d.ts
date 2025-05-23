/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { CreatureType } from "@wayward/game/game/entity/creature/ICreature";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IDropdownOption } from "@wayward/game/ui/component/Dropdown";
import EnumDropdown from "@wayward/game/ui/component/dropdown/EnumDropdown";
export default class CorpseDropdown<OTHER_OPTIONS extends string = never> extends EnumDropdown<typeof CreatureType, OTHER_OPTIONS> {
    constructor(defaultOption: OTHER_OPTIONS | CreatureType, options: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected getTranslation(id: CreatureType): TranslationImpl;
}
