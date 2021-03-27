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
import EventEmitter from "event/EventEmitter";
import Component from "ui/component/Component";
import { IMenu } from "ui/screen/screens/menu/component/IMenu";
export interface ISelectionHandlerEvents {
    select(selection?: Component): any;
}
export default class SelectionHandler extends EventEmitter.Host<ISelectionHandlerEvents> {
    private readonly getMenu;
    private changingSelection;
    constructor(getMenu: () => IMenu | undefined);
    focus(component: Component): void;
    deselect(): void;
    select(component?: Component, focus?: boolean): void;
    getSelection(): Component<HTMLElement> | undefined;
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
