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
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { ContextMenuDescriptions } from "@wayward/game/ui/component/ContextMenu";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type Bindable from "@wayward/game/ui/input/Bindable";
import type Screen from "@wayward/game/ui/screen/Screen";
import type GameScreen from "@wayward/game/ui/screen/screens/GameScreen";
import { QuadrantComponentId } from "@wayward/game/ui/screen/screens/game/IGameScreenApi";
import type { QuadrantRegion } from "@wayward/game/ui/screen/screens/game/component/IQuadrantComponent";
import { Quadrant } from "@wayward/game/ui/screen/screens/game/component/IQuadrantComponent";
import StaticComponent from "@wayward/game/ui/screen/screens/game/component/StaticComponent";
import Log from "@wayward/utilities/Log";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
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
    /**
     * Emit this event when the quadrant should be toggled hidden/visible
     */
    toggle(): any;
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
    readonly id: QuadrantComponentId;
    event: IEventEmitter<this, IQuadrantComponentEvents>;
    protected readonly scrollableHandler: void;
    get preferredQuadrant(): Quadrant;
    get quadrant(): Quadrant;
    get quadrantName(): keyof typeof Quadrant;
    readonly log: Log;
    constructor(id: QuadrantComponentId);
    protected registerDataHost(): void;
    abstract getBindable(): Bindable;
    inRegion(region: QuadrantRegion): boolean;
    /**
     * Changes the quadrant of this element, then emits the `ChangeQuadrant` event
     * with the parameters being the new quadrant and the old quadrant.
     *
     * Does not emit the event if the quadrant is not changing.
     */
    setQuadrant(quadrant: Quadrant, trigger?: boolean): this;
    /**
     * The name is displayed in the `Move To` context menu option, and in the `Switch With` options
     */
    getName(): TranslationImpl;
    getScreen(): GameScreen | null;
    getScreen<S extends Screen | undefined = Screen | undefined>(): S | null;
    protected onRemove(): void;
    protected shouldShowContextMenu(api: IBindHandlerApi): boolean;
    protected getContextMenuDescription(api?: IBindHandlerApi): ContextMenuDescriptions;
    private onToggle;
    /**
     * Returns a new context menu using this element's context menu descriptions
     */
    private getContextMenu;
}
export {};
