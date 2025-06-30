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
import type Dictionary from "@wayward/game/language/Dictionary";
import type Component from "@wayward/game/ui/component/Component";
import type { IDropdownOption } from "@wayward/game/ui/component/Dropdown";
import EnumDropdown from "@wayward/game/ui/component/dropdown/EnumDropdown";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type TooltipLocationHandler from "@wayward/game/ui/tooltip/TooltipLocationHandler";
export default abstract class GroupDropdown<ENUM_OBJECT, OTHER_OPTIONS extends string, GROUP extends number, VALUES = ENUM_OBJECT[keyof ENUM_OBJECT]> extends EnumDropdown<ENUM_OBJECT, OTHER_OPTIONS, VALUES> {
    private groups;
    private tooltipSurface?;
    private tooltip?;
    private lastGroupText?;
    private readonly wordToGroups;
    private prefix;
    private regex;
    private regexAll;
    private regexLast;
    constructor(enumObject: ENUM_OBJECT, dictionary: Dictionary | undefined, defaultOption: VALUES | OTHER_OPTIONS, options: SupplierOr<Iterable<IDropdownOption<OTHER_OPTIONS>>>);
    setPrefix(prefix: string): this;
    protected optionMatchesFilterWord(word: string, option: VALUES | OTHER_OPTIONS, text: string): boolean;
    protected abstract getGroups(): Iterable<GROUP>;
    protected abstract getGroupName(group: GROUP): string;
    protected abstract isInGroup(option: ENUM_OBJECT[keyof ENUM_OBJECT], group: GROUP): boolean;
    protected shouldIncludeOtherOptionsInGroupFilter(): boolean;
    protected isMouseWithin(): Component | undefined;
    protected isSelectionWithin(selection?: Component): boolean;
    protected onOpen(): void;
    protected onClose(): void;
    protected onRemove(): void;
    protected onFilterChange(): void;
    protected updateTooltip(): Tooltip | undefined;
    protected onRegenerateBox(): void;
    private getTooltip;
    protected getTooltipLocation(handler: TooltipLocationHandler): void;
    private getGroupMap;
    private addGroup;
}
