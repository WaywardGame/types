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
import { TranslationGenerator } from "ui/component/IComponent";
import { IRefreshableValue } from "ui/component/Refreshable";
import { Paragraph } from "ui/component/Text";
interface ICheckButtonEvents extends Events<Button> {
    /**
     * @returns `false` to cancel the change.
     */
    willToggle(checked: boolean): boolean | void;
    toggle(checked: boolean): void;
}
export declare class CheckButton extends Button implements IRefreshableValue<boolean> {
    event: IEventEmitter<this, ICheckButtonEvents>;
    protected refreshMethod: () => boolean;
    private _checked;
    get checked(): boolean;
    constructor();
    setChecked(checked: boolean, triggerEvent?: boolean): this;
    shouldDisableButtonButtonsOnUnchecked(): boolean;
    trySetChecked(checked: boolean, triggerEvent?: boolean): boolean;
    toggleChecked(): void;
    refresh(): this;
    setRefreshMethod(refreshMethod: () => boolean): this;
    setText(text: TranslationGenerator): this;
    addDescription(initializer: (paragraph: Paragraph) => any): this;
    protected playSound(): void;
}
export {};
