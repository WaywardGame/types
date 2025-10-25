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
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import type { IDropdownOption } from "@wayward/game/ui/component/Dropdown";
import EnumDropdown from "@wayward/game/ui/component/dropdown/EnumDropdown";
export default class SkillDropdown<OTHER_OPTIONS extends string = never> extends EnumDropdown<typeof SkillType, OTHER_OPTIONS> {
    constructor(defaultOption: OTHER_OPTIONS | SkillType, options: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected filterEnum(id: SkillType): boolean;
}
