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
import Button from "@wayward/game/ui/component/Button";
import Input from "@wayward/game/ui/component/Input";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
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
    constructor(inputInitializer?: (input: Input) => any);
    getInputText(): string;
    setInputText(text: string): void;
    configureInput(initializer: (input: Input) => any): this;
    protected onStopEditMode(): void;
    private onInputChange;
    private onInputDone;
}
export {};
