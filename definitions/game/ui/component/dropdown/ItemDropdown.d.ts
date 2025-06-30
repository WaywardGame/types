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
import { ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IDropdownOption } from "@wayward/game/ui/component/Dropdown";
import GroupDropdown from "@wayward/game/ui/component/GroupDropdown";
declare class ItemDropdown<OTHER_OPTIONS extends string = never> extends GroupDropdown<typeof ItemType, OTHER_OPTIONS, ItemTypeGroup, Exclude<ItemType, ItemType.None>> {
    private canRefresh;
    constructor(defaultOption: OTHER_OPTIONS | Exclude<ItemType, ItemType.None>, options?: Iterable<IDropdownOption<OTHER_OPTIONS>>, inherit?: boolean);
    refresh(): this;
    protected getTranslation(id: Exclude<ItemType, ItemType.None>): TranslationImpl;
    protected optionTooltipInitializer: "inherit";
    protected filterEnum(value: ItemType): boolean;
    protected getGroupName(group: ItemTypeGroup): string;
    protected isInGroup(item: ItemType, group: ItemTypeGroup): boolean;
    protected getGroups(): readonly ItemTypeGroup[];
}
declare namespace ItemDropdown {
    class DiscoveredTypes<OTHER_OPTIONS extends string = never> extends ItemDropdown<OTHER_OPTIONS> {
        protected onDiscoveredTypesDropdownAppend(): void;
        private refreshTimeoutId?;
        private queueRefresh;
        protected filterEnum(value: ItemType): boolean;
        protected getGroups(): ItemTypeGroup[];
    }
}
export default ItemDropdown;
