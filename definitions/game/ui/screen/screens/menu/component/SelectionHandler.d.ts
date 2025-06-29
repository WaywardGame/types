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
import Component from "@wayward/game/ui/component/Component";
import type Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export interface ISelectionHandlerEvents {
    select(selection?: Component): any;
}
export default class SelectionHandler extends EventEmitter.Host<ISelectionHandlerEvents> {
    private readonly getMenu;
    private changingSelection;
    constructor(getMenu: () => Menu | undefined);
    focus(component: Component): void;
    deselect(): void;
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
