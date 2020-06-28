/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Events, IEventEmitter } from "event/EventEmitter";
import Component from "newui/component/Component";
import { TranslationGenerator } from "newui/component/IComponent";
import { IRefreshable } from "newui/component/Refreshable";
export declare enum ClearType {
    UseDefault = 0,
    Auto = 1,
    NotDefault = 2,
    Empty = 3
}
export interface IInputEvents extends Events<Component> {
    change(text: string): any;
    changeDebounced(text: string): any;
    done(text: string): any;
    enter(): any;
    escape(): any;
    focus(): any;
    blur(): any;
    upArrow(): any;
    downArrow(): any;
    toggleDisabled(disabled: boolean): any;
}
export default class Input extends Component implements IRefreshable {
    event: IEventEmitter<this, IInputEvents>;
    default: (() => string) | undefined;
    private lastInput;
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
    get changed(): boolean;
    private readonly input;
    private readonly wrapperButtons;
    private readonly _disabledReasons;
    get disabled(): boolean;
    constructor(type?: "input" | "textarea");
    setDisabled(val?: boolean, reason?: string): this;
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
    blur(event?: Event): void;
    select(): this;
    private keydown;
    private keyup;
    private change;
    private getClearTo;
}
