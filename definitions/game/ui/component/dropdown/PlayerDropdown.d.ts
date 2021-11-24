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
import type { IDropdownOption } from "ui/component/Dropdown";
import EnumDropdown from "ui/component/dropdown/EnumDropdown";
export default class PlayerDropdown<OTHER_OPTIONS extends string = never> extends EnumDropdown<Record<string, string>, OTHER_OPTIONS> {
    constructor(defaultOption: string | OTHER_OPTIONS, options?: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    protected getTranslation(playerIdentifier: string): import("../../../language/impl/TranslationImpl").default;
}
