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
import type { SfxType, SfxUi } from "@wayward/game/audio/IAudio";
import { SelectDirection } from "@wayward/game/ui/IUi";
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import type Input from "@wayward/game/ui/component/Input";
import InputButton from "@wayward/game/ui/component/InputButton";
import type { IRefreshableValue } from "@wayward/game/ui/component/Refreshable";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import { InputCatalyst } from "@wayward/game/ui/input/IInput";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum DropdownClasses {
    Main = "menu-dropdown",
    ContentWrapper = "menu-dropdown-content-wrapper",
    ContentWrapper_DisabledHidden = "menu-dropdown-content-wrapper--disabled-hidden",
    Content = "menu-dropdown-content"
}
interface IDropdownEvents<O = string | number> extends Events<Component> {
    /**
     * @param optionId The new option which is selected.
     */
    selection(optionId: O, isFirstSelection: boolean): any;
    usingSearch(search: string): any;
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
    private using?;
    private readonly _options;
    get options(): Map<O, Button>;
    readonly inputButton: DropdownInputButton;
    protected _optionsWrapper: Component;
    private get optionsWrapper();
    private readonly _optionsWrapperWrapper;
    private get optionsWrapperWrapper();
    private refreshMethod;
    private visibleOptions;
    private defaultOption?;
    private isOpen;
    private isFirstSelection;
    private lastFilter?;
    private _selection;
    get selection(): typeof this._selection;
    get selectedOption(): O;
    private hovered;
    private shouldRetainLastFilter;
    constructor();
    private sound?;
    setSound(sound?: SfxType | SfxUi): this;
    setDisabledHidden(hidden?: boolean): this;
    private searchValidOption;
    setSearchValidOption(searchValidOption?: boolean): this;
    use(dropdown?: Dropdown<O>): this;
    retainLastFilter(retainLastFilter?: boolean): this;
    open(): void;
    close(input?: InputButton): boolean;
    private isOptionIdDifferent;
    select(optionId: O | {
        matching: string;
    } | undefined, force?: boolean, emit?: boolean): this;
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
    private readonly id;
    private readonly contentsHiddenReasons;
    markHidden(reason: string): void;
    markUnhidden(reason: string): void;
    private readonly usedReasons;
    markUsed(reason: string): void;
    markUnused(reason: string): void;
    private updateOptionsWrapperVisibility;
    protected onAppend(): void;
    protected onShowDropdown(): void;
    protected onHideDropdown(): void;
    protected isSelectionWithin(selection?: Component): boolean;
    protected isMouseWithin(): Component | undefined;
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
interface IDropdownInputButtonEvents extends Events<InputButton> {
    nextOption(): any;
    prevOption(): any;
}
declare class DropdownInputButton extends InputButton {
    event: IEventEmitter<this, IDropdownInputButtonEvents>;
    constructor(inputInitializer: (input: Input) => any);
    protected playSound(): void;
    protected onStopEditMode(): void;
    protected onNextOption(api: IBindHandlerApi): boolean;
    protected usePreviousOption(api: IBindHandlerApi): boolean;
}
export {};
