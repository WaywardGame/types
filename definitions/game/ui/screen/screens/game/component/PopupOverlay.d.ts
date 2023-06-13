/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
export declare enum PopupOverlayClasses {
    Main = "popup-overlay",
    Title = "popup-overlay-title",
    TitleWord = "popup-overlay-title-word",
    TitleChar = "popup-overlay-title-char"
}
export default class PopupOverlay extends Component {
    title?: PopupOverlayTitle;
    constructor();
    private translation?;
    setTitle(title: TranslationGenerator | string): this;
    refresh(): this;
    lockHidden(): this;
    show(): this;
}
export declare class PopupOverlayTitle extends Component {
    constructor();
    setText(text: string): void;
}
