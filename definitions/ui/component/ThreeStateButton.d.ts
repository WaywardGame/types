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
import { Events, IEventEmitter } from "event/EventEmitter";
import Button from "ui/component/Button";
import { TranslationGenerator } from "ui/component/IComponent";
import { IRefreshableValue } from "ui/component/Refreshable";
import { Paragraph } from "ui/component/Text";
import { ThreeStateButtonState } from "./IThreeStateButton";
interface IThreeStateButtonEvents extends Events<Button> {
    /**
     * @param state The state this button is changing to.
     * @param oldState The state this button is changing from.
     * @returns `false` to cancel the change.
     */
    willChange(state: ThreeStateButtonState, oldState?: ThreeStateButtonState): boolean | undefined;
    /**
     * @param state The new state of this button.
     */
    change(state: ThreeStateButtonState): any;
}
export declare class ThreeStateButton extends Button implements IRefreshableValue<ThreeStateButtonState> {
    event: IEventEmitter<this, IThreeStateButtonEvents>;
    protected refreshMethod: () => ThreeStateButtonState;
    private _state;
    get state(): ThreeStateButtonState;
    private updateDescriptionOnChange;
    constructor();
    setState(state: ThreeStateButtonState, triggerEvent?: boolean): this;
    trySetState(state: ThreeStateButtonState, triggerEvent?: boolean): boolean;
    toggleState(): void;
    refresh(): this;
    setRefreshMethod(refreshMethod: () => ThreeStateButtonState): this;
    setText(text: TranslationGenerator): this;
    addDescription(initializer: (paragraph: Paragraph) => any): this;
    setUpdateDescriptionOnChange(update?: boolean): this;
    protected playSound(): void;
}
export {};
