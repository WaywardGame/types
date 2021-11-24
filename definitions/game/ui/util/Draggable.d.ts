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
import type { Events, IEventEmitter } from "event/EventEmitter";
import type Component from "ui/component/Component";
import Vector2 from "utilities/math/Vector2";
export interface IDraggableEvents {
    moveStart(mousePosition: Vector2): any;
    move(change: Vector2): any;
    moveEnd(): any;
}
export declare type WithDraggableEvents<EVENTS_OF> = Events<EVENTS_OF> & IDraggableEvents;
export interface IDraggableComponent extends Component {
    event: IEventEmitter<this, Events<Component> & IDraggableEvents>;
}
export default class Draggable {
    private lastMousePosition?;
    private dragStage;
    private readonly hostRef;
    get host(): IDraggableComponent;
    constructor(host: IDraggableComponent);
    private dragStart;
    private drag;
    private dragEnd;
    private getMousePosition;
}
