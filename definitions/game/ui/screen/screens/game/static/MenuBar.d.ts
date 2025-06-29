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
import type { ContextMenuDescriptions } from "@wayward/game/ui/component/ContextMenu";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import Bindable from "@wayward/game/ui/input/Bindable";
import { Quadrant } from "@wayward/game/ui/screen/screens/game/component/IQuadrantComponent";
import QuadrantComponent from "@wayward/game/ui/screen/screens/game/component/QuadrantComponent";
import { MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
import type { ISortableComponent, WithSortableEvents } from "@wayward/game/ui/util/Sortable";
import Sortable from "@wayward/game/ui/util/Sortable";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
/**
 * Never change this!
 */
declare const ID_SEPARATOR = -1;
type Order = Array<MenuBarButtonType | typeof ID_SEPARATOR>;
export default class MenuBar extends QuadrantComponent implements ISortableComponent {
    event: IEventEmitter<this, WithSortableEvents<QuadrantComponent>>;
    static getDefaultOrder(): Order;
    static preferredQuadrant: Quadrant;
    get preferredQuadrant(): Quadrant;
    order?: Order;
    readonly sortable: Sortable;
    constructor();
    getBindable(): Bindable;
    getSortableID(child: Component): -1 | MenuBarButtonType;
    /**
     * Removes any existing groups of menubar buttons, then initializes new ones from the `MenuBarButtonType` enum.
     */
    refresh(): void;
    protected getContextMenuDescription(api: IBindHandlerApi): ContextMenuDescriptions;
    private getMissingMenuBarButtons;
    static registerButtonBindHandlers(until: Promise<any>): void;
    protected onCommitSort(): void;
}
export {};
