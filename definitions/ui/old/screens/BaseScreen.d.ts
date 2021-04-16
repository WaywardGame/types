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
import { IUiScreen } from "ui/old/IOldUi";
export default class BaseScreen implements IUiScreen {
    element: JQuery;
    visible: boolean;
    constructor();
    selector(): string;
    bindElements(): void;
    unbindElements(): void;
    isVisible(): boolean;
    show(data?: any): void;
    doShow(): void;
    hide(): void;
    doHide(): void;
    onMouseDown(_event: JQueryEventObject): void;
    onMouseUpOrLeave(_event: JQueryEventObject): void;
    onMouseMove(_event: JQueryEventObject): void;
    onMouseScroll(_event: JQueryEventObject): void;
    onKeyDown(_event: JQueryEventObject, _keyCode: number, _blockable: boolean): boolean | undefined;
    onKeyUp(_event: JQueryEventObject, _keyCode: number, _blockable: boolean): boolean | undefined;
    protected onShow(_data?: any): void;
    protected onHide(): void;
}
