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
import Component from "ui/component/Component";
import { IDisableable, TranslationGenerator } from "ui/component/IComponent";
import Text, { Paragraph } from "ui/component/Text";
interface IButtonEvents extends Events<Component> {
    activate(): void;
    toggleDisabled(disabled: boolean): any;
}
export default class Button extends Component implements IDisableable {
    event: IEventEmitter<this, IButtonEvents>;
    readonly text: Text;
    description?: Paragraph;
    wrapperButtons?: Component;
    private _activated;
    private readonly _disabledReasons;
    get disabled(): boolean;
    constructor(elementType?: string, listen?: boolean);
    setActionless(isActionless?: boolean): this;
    setButtonList(isButtonList?: boolean): this;
    isButtonList(): boolean;
    setDisabled(val?: boolean, reason?: string): this;
    activate(playSound?: boolean): void;
    addButton(initializer: (button: Button) => Button): this;
    addDescription(initializer: (description: Paragraph) => any): this;
    setText(text?: TranslationGenerator): this;
    getText(): TranslationGenerator | undefined;
    getTextAsString(): string;
    refreshText(): this;
    protected playSound(): void;
    private _onActivate;
}
export {};
