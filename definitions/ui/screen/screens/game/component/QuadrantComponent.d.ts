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
import { Events, IEventEmitter } from "event/EventEmitter";
import Translation from "language/Translation";
import { ContextMenuDescriptions } from "ui/component/ContextMenu";
import StaticComponent from "ui/screen/screens/game/component/StaticComponent";
import { QuadrantComponentId } from "ui/screen/screens/game/IGameScreenApi";
import GameScreen from "ui/screen/screens/GameScreen";
import { Quadrant } from "./IQuadrantComponent";
interface IQuadrantComponentEvents extends Events<StaticComponent> {
    /**
     * @param quadrant The new quadrant of this element
     * @param oldQuadrant The old quadrant of this element
     */
    changeQuadrant(quadrant: Quadrant, oldQuadrant: Quadrant): any;
    /**
     * @param componentId The quadrant component to switch with
     */
    switchWith(componentId: QuadrantComponentId): any;
    /**
     * Emit this event when the quadrant's position or height changes, this means other quadrants should be resized accordingly.
     */
    updatePosition(): any;
}
/**
 * An element that displays in one quadrant of the screen.
 *
 * The current quadrant is stored in a data attribute `[data-quadrant]` as
 * the name of the quadrant (@see `Quadrant`)
 *
 * Changing the quadrant via `Quadrant->setQuadrant` will emit the event `ChangeQuadrant`
 * with the parameters being the new quadrant and the old quadrant.
 *
 * Changing the quadrant will not affect other elements: this is the responsisibility of the parent.
 */
export default abstract class QuadrantComponent extends StaticComponent {
    protected readonly host: GameScreen;
    readonly id: QuadrantComponentId;
    event: IEventEmitter<this, IQuadrantComponentEvents>;
    protected readonly scrollableHandler: void;
    get preferredQuadrant(): Quadrant;
    get quadrant(): Quadrant;
    get quadrantName(): "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight" | "None" | "Top" | "Bottom";
    constructor(host: GameScreen, id: QuadrantComponentId);
    /**
     * Changes the quadrant of this element, then emits the `ChangeQuadrant` event
     * with the parameters being the new quadrant and the old quadrant.
     *
     * Does not emit the event if the quadrant is not changing.
     */
    setQuadrant(quadrant: Quadrant, trigger?: boolean): void;
    /**
     * The ID is used for `Switch With` context menu options
     */
    getID(): QuadrantComponentId;
    /**
     * The name is displayed in the `Move To` context menu option, and in the `Switch With` options
     */
    getName(): Translation;
    protected getContextMenuDescription(): ContextMenuDescriptions;
    /**
     * Returns a new context menu using this element's context menu descriptions
     */
    private getContextMenu;
}
export {};
