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
import { Dictionary } from "language/Dictionaries";
import Component from "ui/component/Component";
import { IDropdownOption } from "ui/component/Dropdown";
import EnumDropdown from "ui/component/dropdown/EnumDropdown";
import Tooltip from "ui/tooltip/Tooltip";
export default abstract class GroupDropdown<ENUM_OBJECT, OTHER_OPTIONS extends string, GROUP extends number, VALUES = ENUM_OBJECT[keyof ENUM_OBJECT]> extends EnumDropdown<ENUM_OBJECT, OTHER_OPTIONS, VALUES> {
    private groups;
    private tooltip?;
    private lastGroupText?;
    private readonly wordToGroups;
    private prefix;
    private regex;
    private regexAll;
    private regexLast;
    constructor(enumObject: ENUM_OBJECT, dictionary: Dictionary, defaultOption: VALUES | OTHER_OPTIONS, options: Iterable<IDropdownOption<OTHER_OPTIONS>>);
    setPrefix(prefix: string): this;
    protected optionMatchesFilterWord(word: string, option: VALUES | OTHER_OPTIONS, text: string): boolean;
    protected abstract getGroups(): Iterable<GROUP>;
    protected abstract getGroupName(group: GROUP): string;
    protected abstract isInGroup(option: ENUM_OBJECT[keyof ENUM_OBJECT], group: GROUP): boolean;
    protected shouldIncludeOtherOptionsInGroupFilter(): boolean;
    protected isMouseWithin(): false | Component<HTMLElement>;
    protected isSelectionWithin(selection?: Component): boolean;
    protected onOpen(): void;
    protected onClose(): void;
    protected onFilterChange(): void;
    protected updateTooltip(): GroupDropdownTooltip;
    protected onRegenerateBox(): void;
    private getTooltip;
    private getGroupMap;
    private addGroup;
}
declare class GroupDropdownTooltip extends Tooltip {
    constructor(source: Component | HTMLElement);
    updatePosition(force?: boolean): this;
    protected onShow(): void;
}
export {};
