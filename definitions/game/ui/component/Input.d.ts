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
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
import type { IRefreshable } from "ui/component/Refreshable";
export declare enum InputClasses {
    Main = "input",
    Filter = "input-filter",
    Empty = "input-empty",
    Modified = "input-modified"
}
export declare enum ClearType {
    UseDefault = 0,
    Auto = 1,
    NotDefault = 2,
    Empty = 3
}
export interface IInputEvents extends Events<Component> {
    change(text: string): any;
    done(text: string): any;
    enterBind(): any;
    escape(): any;
    focus(): any;
    blur(): any;
    upArrow(event: KeyboardEvent): any;
    downArrow(event: KeyboardEvent): any;
    toggleDisabled(disabled: boolean): any;
}
export default class Input extends Component implements IRefreshable {
    event: IEventEmitter<this, IInputEvents>;
    default: (() => string) | undefined;
    private lastInput;
    private lastText;
    get text(): string;
    set text(value: string);
    private keydownEnter;
    private keydownEscape;
    private clearToDefaultWhenEmpty;
    private clearTo;
    private placeholder;
    private shouldBlurOnEnter;
    private shouldBlurOnEnterAndEmpty;
    private shouldNotClearOnEscape;
    private shouldSelectOnFocus;
    private shouldSelectOnNextMouseUp;
    private debounce;
    get changed(): boolean;
    protected readonly input: Component;
    private readonly wrapperButtons;
    private readonly _disabledReasons;
    get disabled(): boolean;
    constructor(type?: "input" | "textarea");
    setDisabled(val?: boolean, reason?: string): this;
    isSelectable(): boolean;
    getSelectionTarget(): Component<HTMLElement>;
    addClearButton(): this;
    addResetButton(): this;
    setMaxLength(maxLength?: number): this;
    setClearToDefaultWhenEmpty(setClearToDefaultWhenEmpty?: boolean): this;
    setDefault(generator: () => string, apply?: boolean): this;
    setClearTo(clearTo?: () => string): this;
    setClearToEmpty(): this;
    setClearToLastInput(): this;
    setPlaceholder(generator: TranslationGenerator): this;
    setBlurOnEnterAndEmpty(shouldBlurOnEnterAndEmpty?: boolean): this;
    setBlurOnEnter(shouldBlurOnEnter?: boolean): this;
    setNotClearOnEscape(shouldNotClearOnEscape?: boolean): this;
    setSelectOnFocus(selectOnFocus?: boolean): this;
    setDebounce(debounce?: number): this;
    editInput(consumer: (input: Component) => any): this;
    refresh(): this;
    /**
     * Sets the text in this input
     * @param text The new text
     * @param triggerEvent Whether to trigger the change event for this input (defaults to `true`)
     */
    setText(text: string, triggerEvent?: boolean): this;
    /**
     * Reset the text of the input to the default, or to the clearTo option if that was provided
     * @param clearType `ClearType.UseDefault` to force using default, `ClearType.NotDefault` to prevent using default, `ClearType.Auto` otherwise. Defaults to `ClearType.Auto`
     */
    clear(clearType?: ClearType): this;
    focus(): void;
    blur(_event?: Event): void;
    select(): this;
    private keydown;
    private keyup;
    private change;
    private emitChange;
    private getClearTo;
}
