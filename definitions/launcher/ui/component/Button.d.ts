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
import Component from "@wayward/launcher/ui/component/Component";
export declare enum ButtonClasses {
    Main = "button",
    DisplayModeBlock = "button-block",
    DisplayModeIcon = "button-icon",
    DisplayModeButtonList = "button-list",
    NoAction = "button-no-action",
    ListIconsZoom2To3 = "button-list-zoom-2-to-3",
    IconZoom2To3 = "button-icon-zoom-2-to-3",
    HasButtonButtons = "has-button-buttons",
    ButtonButtons = "button-buttons",
    Disabled = "disabled"
}
export default class Button extends Component<HTMLButtonElement | HTMLInputElement> {
    private readonly _disabledReasons;
    get disabled(): boolean;
    wrapperButtons?: Component<HTMLDivElement>;
    description?: Component<HTMLParagraphElement>;
    constructor(elementType?: "button" | "input");
    setDisplayMode(mode: ButtonClasses.DisplayModeButtonList, zoomClass: ButtonClasses.ListIconsZoom2To3): this;
    setDisplayMode(mode: ButtonClasses.DisplayModeBlock | ButtonClasses.DisplayModeIcon | ButtonClasses.DisplayModeButtonList | false): this;
    setActionless(isActionless?: boolean, setDisabled?: boolean): this;
    isButtonList(): boolean;
    setDisabled(val?: boolean, reason?: string): this;
    addButton(initializer: (button: Button) => Button): this;
}
