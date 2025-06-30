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
import Button from "@wayward/game/ui/component/Button";
import type { IRefreshableValue } from "@wayward/game/ui/component/Refreshable";
import type { Paragraph } from "@wayward/game/ui/component/Text";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum CheckButtonClasses {
    Main = "menu-check-button",
    _HasDescription = "menu-check-button--has-description",
    Description = "menu-check-button-description"
}
interface ICheckButtonEvents extends Events<Button> {
    /**
     * @returns `false` to cancel the change.
     */
    willToggle(checked: boolean): boolean | void;
    toggle(checked: boolean): void;
}
export declare class CheckButton extends Button implements IRefreshableValue<boolean> {
    event: IEventEmitter<this, ICheckButtonEvents>;
    protected refreshMethod: (checkButton: CheckButton) => boolean;
    private _checked;
    get checked(): boolean;
    constructor();
    setChecked(checked: boolean, triggerEvent?: boolean): this;
    shouldDisableButtonButtonsOnUnchecked(): boolean;
    trySetChecked(checked: boolean, triggerEvent?: boolean): boolean;
    toggleChecked(): void;
    refresh(emitEvent?: boolean): this;
    setRefreshMethod(refreshMethod: (checkButton: this) => boolean): this;
    addDescription(initializer: (paragraph: Paragraph) => any): this;
    private enableSound;
    private disableSound;
    setSound(enable?: SfxType | SfxUi, disable?: SfxType | SfxUi): this;
    protected playSound(): void;
}
export {};
