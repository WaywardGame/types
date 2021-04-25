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
import Button from "ui/component/Button";
import Input from "ui/component/Input";
interface IInputButtonEvents extends Events<Button> {
    change(text: string): any;
    done(text: string): any;
    escape(): any;
}
export default class InputButton extends Button {
    event: IEventEmitter<this, IInputButtonEvents>;
    private readonly inputElement;
    private _editMode;
    get editMode(): boolean;
    set editMode(mode: boolean);
    constructor(inputInitializer: (input: Input) => any);
    getInputText(): string;
    setInputText(text: string): void;
    focusInput(): void;
    protected onStopEditMode(): void;
    private onInputChange;
    private onInputDone;
}
export {};
