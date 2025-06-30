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
import Button from "@wayward/launcher/ui/component/Button";
import Component from "@wayward/launcher/ui/component/Component";
export declare enum InputButtonClasses {
    Main = "button-input",
    Active = "button-input-active",
    Input = "button-input-input"
}
export default class InputButton extends Button {
    readonly input: Component<HTMLInputElement>;
    constructor();
    setPlaceholder(text: string): this;
    protected shouldSelectInputOnClick(): boolean;
}
