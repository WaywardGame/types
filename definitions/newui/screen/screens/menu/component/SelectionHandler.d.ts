/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import EventEmitter from "event/EventEmitter";
import Component from "newui/component/Component";
import { IMenu } from "newui/screen/screens/menu/component/IMenu";
export interface ISelectionHandlerEvents {
    select(selection?: Component): any;
}
export default class SelectionHandler extends EventEmitter.Host<ISelectionHandlerEvents> {
    private readonly getMenu;
    private selection?;
    constructor(getMenu: () => IMenu | undefined);
    deselect(blur?: boolean): void;
    select(component?: Component, focus?: boolean): void;
    getSelection(): Component | undefined;
    selectNext(sound?: boolean): void;
    selectPrevious(sound?: boolean): void;
    protected onNext(): boolean;
    protected onPrevious(): boolean;
    protected onUp(): boolean;
    protected onDown(): boolean;
    protected onLeft(): boolean;
    protected onRight(): boolean;
    protected onEnter(): boolean;
    protected onCancel(): boolean;
    private getSelectables;
    private changeSelection;
    private selectUp;
    private selectDown;
    private selectLeft;
    private selectRight;
    private selectDirection;
    private selectEnter;
}
