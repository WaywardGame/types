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
import { Events, IEventEmitter } from "event/EventEmitter";
import UiTranslation from "language/dictionary/UiTranslation";
import Translation from "language/Translation";
import { CheckButton } from "ui/component/CheckButton";
import { RangeInput } from "ui/component/RangeInput";
import { RangeInputValueDisplay } from "ui/component/RangeInputValueDisplay";
interface ICheckButtonRangeEvents extends Events<CheckButton> {
    change(value?: number): any;
}
export default class CheckButtonRange extends CheckButton {
    event: IEventEmitter<this, ICheckButtonRangeEvents>;
    readonly rangeInput: RangeInput;
    protected rangeInputValueDisplay: RangeInputValueDisplay | undefined;
    private readonly rangeWrapper;
    private valueWhenDisabled;
    constructor(valueWhenDisabled?: number);
    setValueWhenDisabled(valueWhenDisabled?: number): this;
    editRange(rangeInitializer: (range: RangeInput) => RangeInput): this;
    setDisplayValue(display: boolean | UiTranslation | ((val: number, enabled: boolean) => Translation)): this;
    refresh(): this;
    protected playInputSound(): void;
    private change;
    private updateDisplay;
}
export {};
