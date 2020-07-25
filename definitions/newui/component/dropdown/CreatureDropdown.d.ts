/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { CreatureType } from "entity/creature/ICreature";
import { IDropdownOption } from "newui/component/Dropdown";
import EnumDropdown from "newui/component/dropdown/EnumDropdown";
export default class CreatureDropdown<OTHER_OPTIONS extends string = never> extends EnumDropdown<typeof CreatureType, OTHER_OPTIONS> {
    constructor(defaultOption: OTHER_OPTIONS | CreatureType, options: Iterable<IDropdownOption<OTHER_OPTIONS>>);
}
