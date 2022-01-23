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
import type { IEventEmitter } from "event/EventEmitter";
import Component from "ui/component/Component";
import type { ContextMenuDescriptions } from "ui/component/ContextMenu";
import type { IBindHandlerApi } from "ui/input/Bind";
import { Quadrant } from "ui/screen/screens/game/component/IQuadrantComponent";
import QuadrantComponent from "ui/screen/screens/game/component/QuadrantComponent";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
import type { ISortableComponent, WithSortableEvents } from "ui/util/Sortable";
import Sortable from "ui/util/Sortable";
/**
 * Never change this!
 */
declare const ID_SEPARATOR = -1;
declare type Order = Array<MenuBarButtonType | typeof ID_SEPARATOR>;
export default class MenuBar extends QuadrantComponent implements ISortableComponent {
    readonly event: IEventEmitter<this, WithSortableEvents<QuadrantComponent>>;
    static getDefaultOrder(): Order;
    static preferredQuadrant: Quadrant;
    get preferredQuadrant(): Quadrant;
    order?: Order;
    readonly sortable: Sortable;
    constructor();
    getSortableID(child: Component): -1 | MenuBarButtonType;
    /**
     * Removes any existing groups of menubar buttons, then initializes new ones from the `MenuBarButtonType` enum.
     */
    refresh(): void;
    protected getContextMenuDescription(api: IBindHandlerApi): ContextMenuDescriptions;
    private getMissingMenuBarButtons;
    private registerButtonBindHandlers;
}
export {};
