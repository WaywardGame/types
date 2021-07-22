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
import { CreatureType } from "game/entity/creature/ICreature";
import { IDropdownOption } from "ui/component/Dropdown";
import EnumDropdown from "ui/component/dropdown/EnumDropdown";
export default class CorpseDropdown<OTHER_OPTIONS extends string = never> extends EnumDropdown<typeof CreatureType, OTHER_OPTIONS> {
    constructor(defaultOption: OTHER_OPTIONS | CreatureType, options: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected getTranslation(id: CreatureType): import("language/Translation").default;
}
