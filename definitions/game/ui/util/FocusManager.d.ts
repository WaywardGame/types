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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface IFocusManagerEvents {
    focus(): any;
    blur(): any;
    changeFocusState(focused: boolean): any;
    mouseenter(): any;
    mouseleave(): any;
    changeHoverState(hovered: boolean): any;
    active(): any;
    inactive(): any;
    changeActiveState(active: boolean): any;
}
export default class FocusManager extends EventEmitter.Host<IFocusManagerEvents> {
    private _focused;
    private _hovered;
    get focused(): boolean;
    get hovered(): boolean;
    get active(): boolean;
    constructor();
    private onPageFocus;
    private onPageBlur;
    private onPageMouseEnter;
    private onPageMouseLeave;
}
