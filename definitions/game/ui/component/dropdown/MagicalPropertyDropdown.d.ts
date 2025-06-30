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
import { MagicalPropertyIdentity, type MagicalPropertyIdentityHash } from "@wayward/game/game/magic/IMagicalProperty";
import MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IDropdownOption } from "@wayward/game/ui/component/Dropdown";
import GroupDropdown from "@wayward/game/ui/component/GroupDropdown";
export default class MagicalPropertyDropdown<OTHER_OPTIONS extends string = never> extends GroupDropdown<typeof MagicalPropertyType, OTHER_OPTIONS | MagicalPropertyIdentityHash, MagicalPropertyType, MagicalPropertyType> {
    private readonly developer;
    static getDeveloperMagicalPropertyTranslation(identity: MagicalPropertyIdentity): TranslationImpl;
    constructor(defaultOption: OTHER_OPTIONS | MagicalPropertyType, options?: Iterable<IDropdownOption<OTHER_OPTIONS>>, developer?: boolean);
    protected getTranslation(type: MagicalPropertyType): TranslationImpl;
    protected optionTooltipInitializer: "inherit";
    protected shouldIncludeOtherOptionsInGroupFilter(): boolean;
    protected sortAllOptions([o1]: IDropdownOption<MagicalPropertyType | OTHER_OPTIONS | MagicalPropertyIdentityHash>, [o2]: IDropdownOption<MagicalPropertyType | OTHER_OPTIONS | MagicalPropertyIdentityHash>): number;
    protected filterEnum(type: MagicalPropertyType): boolean;
    protected getGroupName(group: MagicalPropertyType): string;
    protected isInGroup(magic: MagicalPropertyType | OTHER_OPTIONS | MagicalPropertyIdentityHash, group: MagicalPropertyType): boolean;
    protected getGroups(): readonly MagicalPropertyType[];
}
