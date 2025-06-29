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
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type { DialogId } from "@wayward/game/ui/screen/screens/game/Dialogs";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
type Zoom = [index: number, zoom: number];
declare class CanvasZoomReference {
    private readonly reference;
    readonly default: Zoom;
    readonly min: Zoom;
    readonly max: Zoom;
    constructor(zoomLevels: Iterable<number>);
    getZoomIndex(realZoom: number): number;
    getRealZoom(zoomIndex: number): number;
    hasDecimalZoomLevels(): boolean;
}
export declare class Canvas extends Component<HTMLCanvasElement> {
    readonly context: CanvasRenderingContext2D | null;
    constructor();
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    clear(): this;
    draw(image: HTMLImageElement | HTMLCanvasElement, drawPosition: IVector2, drawSize?: IVector2, sourcePosition?: IVector2, sourceSize?: IVector2, angleRadians?: number, scale?: IVector2): this;
    fill(pattern: CanvasPattern, drawPosition?: IVector2, drawSize?: IVector2, scale?: IVector2): this;
    fillText(text: string, position: Vector2, maxWidth?: number): void;
}
export interface ICanvasDialogEvents extends Events<Dialog> {
    resetView(): any;
}
export default class CanvasDialog extends Dialog {
    event: IEventEmitter<this, ICanvasDialogEvents>;
    protected readonly canvas: Canvas;
    protected viewOffset: Vector2;
    protected viewZoom: number;
    protected viewAngle: number;
    protected readonly viewScale: Vector2;
    protected actualViewAngle: number;
    protected readonly actualViewScale: Vector2;
    protected actualViewOffset: Vector2;
    protected actualViewZoom: number;
    private mouseStartPosition?;
    private viewOffsetStartPosition?;
    private viewVelocity;
    private viewAnimating?;
    private animatingFullReset;
    private hovering;
    protected loading: boolean;
    protected canZoom: boolean;
    protected zoomReference: CanvasZoomReference;
    private mapAlwaysOpaque?;
    private useOnlyIntegerZoomLevels?;
    protected readonly mainPanel: Component<HTMLElement>;
    protected uiSurface: Component<HTMLElement>;
    protected buttonSurface: Component<HTMLElement>;
    protected drawer: Component<HTMLElement>;
    constructor(id: DialogId);
    protected onCanvasDialogRemove(): void;
    setZoomLevels(levels: Iterable<number>): this;
    get isHovering(): boolean;
    getMousePosition(): Vector2;
    isDragging(): boolean;
    private setDragging;
    setHoveringClickable(hoveringClickable?: boolean): void;
    protected onLoadCanvasDialog(): Promise<void>;
    protected initializeSettingsPanel(component: Component): void;
    protected canHideDrawer(): boolean;
    protected onMouseMove(): void;
    protected onZoom(api: IBindHandlerApi): boolean;
    protected onShow(): void;
    protected onResize(): void;
    protected render(animationId?: number): void;
    protected draw(): void;
    protected updateView(isDragging: boolean): void;
    private dragStart;
    private drag;
    private dragEnd;
    private removeDragEventListeners;
    protected onCanvasClick(): void;
    private getAbsoluteMousePosition;
    protected rotateClockwise(): void;
    protected rotateCounterClockwise(): void;
    protected flipHorizontal(): void;
    protected flipVertical(): void;
    protected resetView(animate?: boolean, resetOffset?: boolean, resetZoom?: boolean, resetAngle?: boolean, resetScale?: boolean): void;
    protected resetViewZoom(): void;
    protected resetViewOffset(): void;
}
export {};
