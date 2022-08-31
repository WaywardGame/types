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
import type { InputCatalyst, Modifier } from "ui/input/IInput";
export declare enum InputCatalystType {
    Key = 0,
    MouseButton = 1,
    Scroll = 2,
    Touch = 3
}
export declare enum InputIcon {
    ClickLeft = 0,
    ClickMiddle = 1,
    ClickRight = 2,
    ScrollUp = 3,
    ScrollDown = 4,
    HoverItem = 5,
    Shift = 6,
    Ctrl = 7,
    Alt = 8
}
export declare namespace InputIcon {
    function get(catalyst: InputCatalyst | Modifier): InputIcon | undefined;
}
