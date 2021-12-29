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
import type Dictionary from "language/Dictionary";
import type Button from "ui/component/Button";
import type { IDropdownOption } from "ui/component/Dropdown";
import Dropdown from "ui/component/Dropdown";
export default class EnumDropdown<ENUM_OBJECT, OTHER_OPTIONS extends string | never = never, VALUES = ENUM_OBJECT[keyof ENUM_OBJECT]> extends Dropdown<VALUES | OTHER_OPTIONS> {
    protected readonly enumObject: ENUM_OBJECT;
    private readonly dictionary;
    get selectionName(): keyof ENUM_OBJECT | undefined;
    private shouldSort;
    private readonly excluded;
    constructor(enumObject: ENUM_OBJECT, dictionary: Dictionary, defaultOption: SupplierOr<VALUES>, options?: SupplierOr<Iterable<IDropdownOption<never>>>);
    constructor(enumObject: ENUM_OBJECT, dictionary: Dictionary, defaultOption: SupplierOr<VALUES | OTHER_OPTIONS>, options: SupplierOr<Iterable<IDropdownOption<OTHER_OPTIONS>>>);
    setNoSort(): this;
    setExcluded(...excluded: VALUES[]): this;
    protected getTranslation(id: VALUES): import("../../../language/impl/TranslationImpl").default;
    protected filterEnum?(id: VALUES): boolean;
    protected getOptions(enumObject: any): [VALUES, (option: Button) => Button][];
}
