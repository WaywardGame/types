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
import UiTranslation from "language/dictionary/UiTranslation";
import type { ISerializedTranslation } from "language/ITranslation";
import Translation from "language/Translation";
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
import type { IRefreshable } from "ui/component/Refreshable";
import Text from "ui/component/Text";
import type { IDialogDescription } from "ui/screen/screens/game/Dialogs";
import { DialogId, Edge } from "ui/screen/screens/game/Dialogs";
import type { IDialog } from "ui/screen/screens/game/IGameScreenApi";
import type { IDraggableEvents } from "ui/util/Draggable";
import Draggable from "ui/util/Draggable";
import Log from "utilities/Log";
import type { IStringSection } from "utilities/string/Interpolator";
/**
 * The positions of each edge of the dialog. Stored as percentages.
 */
export interface IDialogEdges {
    [Edge.Top]: number;
    [Edge.Right]: number;
    [Edge.Bottom]: number;
    [Edge.Left]: number;
}
/**
 * An enum for every position that a dialog handle can be in.
 */
declare enum HandlePosition {
    Top = 0,
    TopRight = 1,
    Right = 2,
    BottomRight = 3,
    Bottom = 4,
    BottomLeft = 5,
    Left = 6,
    TopLeft = 7,
    Header = 8
}
interface IDialogEvents extends Events<Component> {
    /**
     * This event is handled by the GameScreen.
     * @returns A `IterableOf<Dialog>` containing sibling dialogs. The list may contain this dialog.
     */
    getDialogList(): Iterable<Dialog>;
    /**
     * Emitted when the close button is pressed in the dialog, or when the `close` method is called.
     */
    close(): any;
    /**
     * Emitted when the settings button is pressed in the dialog.
     */
    options(): any;
    /**
     * Emitted when the dialog is resized
     */
    resize(wDiff: number, hDiff: number): any;
    /**
     * Emitted when the dialog is moved
     */
    move(xDiff: number, yDiff: number): any;
    /**
     * Emitted when the dialog panel changes
     * @param id The string or number representing the panel that was switched to
     * @param panel The panel that was switched to
     */
    switchPanel(id: string | number, panel: Component): any;
    /**
     * Emitted after all fields decorated with `@Save` are loaded
     */
    load(): any;
}
export declare enum DialogClasses {
    Wrapper = "dialog-wrapper",
    Main = "dialog",
    Body = "dialog-body",
    Footer = "dialog-footer",
    ScrollableWrapper = "game-dialog-scrollable-wrapper",
    Panel = "game-dialog-panel",
    ButtonClose = "game-dialog-button-close",
    ButtonMinimize = "game-dialog-button-minimize",
    ButtonOptions = "game-dialog-button-options",
    Title = "dialog-title",
    ButtonBack = "game-dialog-button-back",
    Handle = "handle",
    Header = "dialog-header",
    EndsIconsLeft = "dialog-ends-icons-left",
    EndsIconsRight = "dialog-ends-icons-right",
    EndsContent = "dialog-ends-content",
    FooterContent = "dialog-footer-content"
}
export default abstract class Dialog extends Component implements IDialog {
    readonly subId: string;
    private static topOrder;
    private static topDialog;
    static makeTopDialog(element: HTMLElement): void;
    event: IEventEmitter<this, IDialogEvents>;
    readonly id: DialogId;
    readonly log: Log;
    /**
     * The positions of each edge of the dialog. Stored as percentages.
     */
    edges: IDialogEdges;
    private lastSizes;
    private lastPositions;
    protected readonly internalDialog: Component;
    protected readonly body: Component;
    protected readonly header: Header;
    protected get footer(): Footer;
    private _footer?;
    private readonly handles;
    private readonly panels;
    private currentPanel;
    private lastPanel;
    private cachedSnapPositions?;
    private readonly activeReasons;
    protected readonly scrollableHandler: void;
    private get visiblePanel();
    get square(): boolean;
    /**
     * The last edge positions of the dialog. Used when a handle is being moved.
     */
    private lastEdges;
    /**
     * Edge positions of the dialog saved the last time the dialog was resized by the user, with a scale. When the scale returns to
     * the scale of these saved positions, the dialog uses these positions rather than autoresizing.
     */
    private savedEdges?;
    /**
     * The description of how the dialog should be sized. (min, default, and max sizes and the position)
     */
    private description;
    constructor(id: number, subId?: string);
    addScrollableWrapper(type?: "scroll" | "auto", initializer?: (wrapper: Component) => any): Component<HTMLElement>;
    addSettingsPanel(): Component<HTMLElement>;
    showSettingsPanel(): this;
    resetSizeAndPosition(): void;
    /**
     * Closes the dialog.
     *
     * Also the event handler for when the close button is pressed in the dialog's header.
     */
    close(): Promise<boolean>;
    protected onRemove1(): void;
    protected onAppend1(): void;
    addPanel(id: string | number): Component<HTMLElement>;
    showPanel(id: string | number): Component<HTMLElement> | undefined;
    getPanel(id: string | number): Component<HTMLElement> | undefined;
    isPanelVisible(id: string | number): boolean;
    /**
     * Sets the dialog position.
     */
    setSizeAndPosition(description?: IDialogDescription<false> | IDialogDescription<true>): void;
    /**
     * Set the position of an edge.
     */
    setEdgePosition(edge: Edge, position: number, transform?: boolean): void;
    private setTransform;
    /**
     * Makes this dialog the top dialog.
     */
    focus(): void;
    /**
     * Mark that this dialog is "active"
     */
    markActive(reason: any): void;
    /**
     * Mark that this dialog is not "active"
     */
    markInactive(reason: any): void;
    /**
     * Toggle whether this dialog is "active"
     */
    toggleActive(reason: any, active: boolean): void;
    isActive(): boolean;
    /**
     * The name is displayed in the `Move To` context menu option, and in the `Switch With` options
     */
    getName(): Iterable<IStringSection> | Translation | UiTranslation | ISerializedTranslation | undefined;
    /**
     * Event handler for when this dialog is appended
     */
    protected onAppend(): void;
    protected onSelect(_: any, component?: Component): void;
    private hideSettingsPanel;
    private saveEdgesForScale;
    /**
     * Event handler for when a dialog handle starts to be moved.
     */
    private onHandleMoveStart;
    /**
     * Event handler for when a dialog handle finishes being moved.
     */
    private onHandleMoveEnd;
    /**
     * Caches the current edge positions so any resizing/movement knows where it's moving from
     */
    private cacheLastEdges;
    /**
     * Event handler for when a dialog handle moves.
     * @param handle The handle that moved.
     * @param move The amount that the handle has moved since the movement started.
     */
    private onHandleMove;
    private setEdgePositionsFromMovementSquare;
    /**
     * Clamps the movement of this handle to the same x & y, the smoler between the two
     */
    private clampSquareMovement;
    private getEdgeMovement;
    private setEdgePositionsFromMovement;
    /**
     * Event handler for when the header is moved.
     * @param move The amount that the header has moved since the movement started.
     */
    private onHeaderMove;
    /**
     * Returns the new `Edge` position for the given `Axis`.
     * If an `Edge` on this `Axis` (after the movement) is near enough to snap, returns that
     * `Edge` and the snap position. Otherwise, returns the top/left `Edge` (depending on `Axis`)
     * and the new position after the given movement.
     */
    private getNewEdgePositionForAxis;
    /**
     * Returns the closest snap position for both edges on the given axis, and which edge
     * the snap position is for.
     */
    private getSnapPositionForAxis;
    /**
     * Returns the new edge position of the given `Edge`; either the current position plus the given
     * movement, or the nearest snap position.
     */
    private getNewEdgePositionOrSnap;
    /**
     * Takes an edge and the generated edge position, and clamps the new edge position so that the
     * width and height of the dialog are within the described sizes.
     */
    private clampAxisLength;
    /**
     * Returns the distance between `edge1` and `edge2` (percentages) in pixels.
     */
    private getAxisLengthInPixels;
    /**
     * Returns the snap position for a given `Edge`, based on where it's moving to.
     */
    private getSnapPositionForEdge;
    /**
     * Returns the snap positions for the given edge positions, sorted by how close the snap position is.
     */
    private getClosestSnapPositions;
    /**
     * Returns an object for getting all snap positions on each axis.
     * Each axis's list isn't calculated until requested.
     */
    private getSnapPositions;
    /**
     * Gets the snap positions for an axis, which include the positions of the edges of other
     * dialogs and the edges of the screen.
     *
     * For example:
     * - `Axis.X` would return the position of `Edge.Left` and `Edge.Right` of each dialog,
     * and `0` and `100`.
     */
    private getSnapPositionsOfAxis;
    /**
     * Returns the new position of the given `Edge`, after moving the given amount.
     */
    private getNewEdgePosition;
    /**
     * Returns this dialog's positions of the two edges on the given axis.
     */
    private getEdgePositionsOfAxis;
    /**
     * Returns a `IVector2` containing the distance between the two sides.
     */
    private getSize;
    /**
     * Returns the two edges of the dialog closest to the edges of the viewport, and their positions.
     */
    private getEdges;
    /**
     * Returns the edge positions (top/left) that would put a dialog of the given size in the centre of the screen.
     */
    private getCenterEdges;
    /**
     * Resets the position, causing it to be clamped to the viewport, using its current position
     *
     * Also the event handler for when the viewport resizes
     */
    private correctPosition;
    private addHandle;
}
/**
 * A component that emits events for being dragged. Takes a `HandlePosition` to be styled with.
 */
declare class Handle extends Component {
    event: IEventEmitter<this, IDraggableEvents & Events<Component>>;
    get position(): HandlePosition;
    readonly draggable: Draggable;
    constructor(position: HandlePosition, elementType?: string);
}
interface IHeaderEvents extends Events<Handle> {
    close(): any;
}
/**
 * You can drag the header, so it's a `Handle` as well.
 */
export declare class Header extends Handle implements IRefreshable {
    event: IEventEmitter<this, IHeaderEvents>;
    readonly iconsLeft: Component;
    readonly iconsRight: Component;
    readonly backButton: Button;
    readonly optionsButton: Button;
    readonly closeButton: Button;
    readonly text: Text;
    constructor();
    setText(text: TranslationGenerator): void;
    refresh(): this;
    setCloseIcon(icon?: "Minimize" | "Close"): this;
}
export declare class Footer extends Component {
    readonly iconsLeft: Component;
    readonly iconsRight: Component;
    readonly content: Component;
    constructor();
}
export {};
