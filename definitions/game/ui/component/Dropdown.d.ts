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
import type { Events, IEventEmitter } from "event/EventEmitter";
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import type Input from "ui/component/Input";
import InputButton from "ui/component/InputButton";
import type { IRefreshableValue } from "ui/component/Refreshable";
import type { IBindHandlerApi } from "ui/input/Bind";
import { InputCatalyst } from "ui/input/IInput";
import { SelectDirection } from "ui/IUi";
interface IDropdownEvents<O = string | number> extends Events<Component> {
    /**
     * @param optionId The new option which is selected.
     */
    selection(optionId: O, isFirstSelection: boolean): any;
    open(): any;
    close(): any;
    filterChange(text: string): any;
    refresh(): any;
}
export type IDropdownOption<OptionId = string | number> = [OptionId, (option: Button) => any];
export interface IDropdownData<OptionId = string | number> {
    defaultOption: OptionId;
    options: Iterable<IDropdownOption<OptionId>>;
}
export default class Dropdown<O = string | number> extends Component implements IRefreshableValue<IDropdownData<O>> {
    event: IEventEmitter<this, IDropdownEvents<O>>;
    readonly options: Map<O, Button>;
    readonly inputButton: InputButton;
    protected optionsWrapper: Component;
    private readonly optionsWrapperWrapper;
    private refreshMethod;
    private visibleOptions;
    private defaultOption?;
    private isOpen;
    private isFirstSelection;
    private lastFilter?;
    private _selection;
    get selection(): O;
    private hovered;
    private shouldRetainLastFilter;
    constructor();
    retainLastFilter(retainLastFilter?: boolean): this;
    open(): void;
    close(input?: InputButton): boolean;
    select(optionId: O | undefined): this;
    selectDefault(): this;
    setRefreshMethod(refresh: () => IDropdownData<O>): this;
    refresh(): this;
    openedDirection(): SelectDirection.Up | SelectDirection.Down;
    protected onNext(): boolean;
    protected onPrevious(): boolean;
    protected onEnterBind(api: IBindHandlerApi | Input, event?: KeyboardEvent): boolean;
    protected onInputRising(_: any, catalyst: InputCatalyst): void;
    protected onCancel(): boolean;
    protected onInterrupt(): void;
    protected onSelectionChange(_: any, selection?: Component): void;
    protected onAppend(): void;
    protected isSelectionWithin(selection?: Component): boolean;
    protected isMouseWithin(): Component<HTMLElement> | undefined;
    protected selectNext(): void;
    protected selectPrevious(): void;
    protected selectionMove(direction: "next" | "prev"): void;
    protected filter(filterBy?: string): this;
    protected optionMatchesFilter(filter: string, filterWords: string[], option: O, button: Button): boolean;
    protected optionMatchesFilterWord(word: string, option: O, text: string): boolean;
    protected onRegenerateBox(): void;
    private updateOptions;
    private updateWrapperPosition;
    private nextOption;
    private previousOption;
}
export {};
