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
import { DoodadType, DoodadTypeGroup } from "game/doodad/IDoodad";
import { IDropdownOption } from "ui/component/Dropdown";
import GroupDropdown from "ui/component/GroupDropdown";
export default class DoodadDropdown<OTHER_OPTIONS extends string = never> extends GroupDropdown<typeof DoodadType, OTHER_OPTIONS, DoodadTypeGroup> {
    constructor(defaultOption: OTHER_OPTIONS | DoodadType, options?: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected getGroupName(group: DoodadTypeGroup): string;
    protected isInGroup(doodad: DoodadType, group: DoodadTypeGroup): boolean;
    protected getGroups(): readonly DoodadTypeGroup[];
}
