/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { ItemType, ItemTypeGroup } from "game/item/IItem";
import type { IDropdownOption } from "ui/component/Dropdown";
import GroupDropdown from "ui/component/GroupDropdown";
export default class ItemDropdown<OTHER_OPTIONS extends string = never> extends GroupDropdown<typeof ItemType, OTHER_OPTIONS, ItemTypeGroup, Exclude<ItemType, ItemType.None>> {
    private canRefresh;
    constructor(defaultOption: OTHER_OPTIONS | Exclude<ItemType, ItemType.None>, options?: Iterable<IDropdownOption<OTHER_OPTIONS>>, inherit?: boolean);
    refresh(): this;
    protected filterEnum(value: ItemType): boolean;
    protected getGroupName(group: ItemTypeGroup): string;
    protected isInGroup(item: ItemType, group: ItemTypeGroup): boolean;
    protected getGroups(): readonly ItemTypeGroup[];
}
