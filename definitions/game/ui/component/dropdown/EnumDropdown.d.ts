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
import type Dictionary from "@wayward/game/language/Dictionary";
import Translation from "@wayward/game/language/Translation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type Button from "@wayward/game/ui/component/Button";
import type { IDropdownOption } from "@wayward/game/ui/component/Dropdown";
import Dropdown from "@wayward/game/ui/component/Dropdown";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type TooltipLocationHandler from "@wayward/game/ui/tooltip/TooltipLocationHandler";
export default class EnumDropdown<ENUM_OBJECT, OTHER_OPTIONS extends string | never = never, VALUES = ENUM_OBJECT[keyof ENUM_OBJECT]> extends Dropdown<VALUES | OTHER_OPTIONS> {
    protected readonly enumObject: ENUM_OBJECT;
    private readonly dictionary;
    get selectionName(): keyof ENUM_OBJECT | undefined;
    private shouldSort;
    private readonly excluded;
    constructor(enumObject: ENUM_OBJECT, dictionary: Dictionary | undefined, defaultOption: SupplierOr<VALUES>, options?: SupplierOr<Iterable<IDropdownOption<never>>>);
    constructor(enumObject: ENUM_OBJECT, dictionary: Dictionary | undefined, defaultOption: SupplierOr<VALUES | OTHER_OPTIONS>, options: SupplierOr<Iterable<IDropdownOption<OTHER_OPTIONS>>>);
    setNoSort(): this;
    setExcluded(...excluded: VALUES[]): this;
    protected getTranslation(id: VALUES): TranslationImpl;
    protected filterEnum?(id: VALUES): boolean;
    protected getEnumValues(enumObject: any): VALUES[];
    protected getOptions(enumObject: any): Array<[VALUES, (option: Button) => void]>;
    protected getOptionTooltipLocation(handler: TooltipLocationHandler): void;
    protected optionTooltipInitializer?: OptionTooltipInitializer<VALUES> | "inherit";
}
type OptionTooltipInitializer<VALUES> = (tooltip: Tooltip, type: VALUES, translation: Translation) => any;
export {};
