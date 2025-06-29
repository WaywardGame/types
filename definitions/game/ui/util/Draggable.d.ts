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
import type Component from "@wayward/game/ui/component/Component";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import Bindable from "@wayward/game/ui/input/Bindable";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import { type Events, type IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export type IDraggableInputEvent = (MouseEvent & Partial<Record<Exclude<keyof TouchEvent, keyof MouseEvent>, undefined>> & Partial<Record<Exclude<keyof IBindHandlerApi, keyof MouseEvent>, undefined>>) | (TouchEvent & Partial<Record<Exclude<keyof MouseEvent, keyof TouchEvent>, undefined>> & Partial<Record<Exclude<keyof IBindHandlerApi, keyof TouchEvent>, undefined>>) | (IBindHandlerApi & Partial<Record<Exclude<keyof MouseEvent, keyof IBindHandlerApi>, undefined>> & Partial<Record<Exclude<keyof TouchEvent, keyof IBindHandlerApi>, undefined>>);
export interface IDraggableEvents extends Events<Component> {
    moveStart(mouse: Vector2): false | void;
    move(offset: Vector2, mouse: Vector2): any;
    moveEnd(offset: Vector2, mouse: Vector2, bindable?: Bindable): any;
    moveCancel(): any;
    holdingNotMoving(time: number): any;
}
export type WithDraggableEvents<EVENTS_OF> = Events<EVENTS_OF> & IDraggableEvents;
export interface IDraggableComponent extends Component {
    event: IEventEmitter<this, IDraggableEvents>;
}
export default class Draggable {
    static isDragging: boolean;
    private static readonly draggables;
    static get(host: IDraggableComponent): Draggable;
    private mouseStartPosition?;
    private dragStage;
    private dragStartTime?;
    private readonly hostRef;
    get host(): IDraggableComponent;
    private constructor();
    private stickyDistance;
    setStickyDistance(stickyDistance: number): this;
    private delay;
    setDelay(delay: number): this;
    private filter?;
    setInputFilter(filter?: (input: IDraggableInputEvent) => any): this;
    private bindables;
    private bindablePriority?;
    /**
     * Sets this draggable to be dragged on a bindable press/release instead of mouse/touch.
     * Incompatible with `setInputFilter`
     */
    setBindable(bindables: ArrayOr<Bindable>, priority?: number): this;
    stopDragging(): void;
    private removeBindHandlers;
    /** @deprecated don't touch this */
    dragStart(event: IDraggableInputEvent): boolean;
    /** @deprecated don't touch this */
    cancelDrag(event?: IDraggableInputEvent): boolean;
    private drag;
    /** @deprecated don't touch this */
    dragEnd(event?: IDraggableInputEvent): boolean;
    private onInputLoop;
    private getMousePosition;
}
