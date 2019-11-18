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
import { IInput } from "newui/component/IInput";
import { IRefreshable } from "newui/component/Refreshable";
export declare enum ClearType {
    UseDefault = 0,
    Auto = 1,
    NotDefault = 2,
    Empty = 3
}
export default class Input extends Component implements IRefreshable, IInput {
    event: IEventEmitter<this, Events<IInput>>;
    default: (() => string) | undefined;
    private lastInput;
    get text(): string;
    set text(value: string);
    private keydownEnter;
    private keydownEscape;
    private clearOnBlurWhenEmpty;
    private clearTo;
    private placeholder;
    private shouldBlurOnEnter;
    private shouldBlurOnEnterAndEmpty;
    private shouldNotClearOnEscape;
    get changed(): boolean;
    private readonly input;
    private readonly wrapperButtons;
    constructor();
    addClearButton(): this;
    addResetButton(): this;
    setMaxLength(maxLength?: number): this;
    setClearOnBlurWhenEmpty(clearOnBlurWhenEmpty?: boolean): this;
    setDefault(generator: () => string, apply?: boolean): this;
    setClearTo(clearTo?: () => string): this;
    setClearToEmpty(): this;
    setClearToLastInput(): this;
    setPlaceholder(generator: TranslationGenerator): this;
    /**
     * @deprecated Use `setShouldBlurOnEnterAndEmpty`
     */
    setShouldBlurWhenEnterPressedAndEmpty(shouldBlurOnEnterAndEmpty?: boolean): this;
    setBlurOnEnterAndEmpty(shouldBlurOnEnterAndEmpty?: boolean): this;
    /**
     * @deprecated Use `setShouldBlurOnEnter`
     */
    setBlurWhenEnterPressed(shouldBlurOnEnter?: boolean): this;
    setBlurOnEnter(shouldBlurOnEnter?: boolean): this;
    setNotClearOnEscape(shouldNotClearOnEscape?: boolean): this;
    refresh(): this;
    /**
     * Reset the text of the input to the default, or to the clearTo option if that was provided
     * @param clearType `ClearType.UseDefault` to force using default, `ClearType.NotDefault` to prevent using default, `ClearType.Auto` otherwise. Defaults to `ClearType.Auto`
     */
    clear(clearType?: ClearType): this;
    focus(): void;
    blur(event?: Event): void;
    private keydown;
    private keyup;
    private change;
    private getClearTo;
}
