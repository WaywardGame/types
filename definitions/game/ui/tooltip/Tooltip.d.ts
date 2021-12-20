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
import Component from "ui/component/Component";
import { TooltipLocation } from "ui/component/IComponent";
import Text, { Paragraph } from "ui/component/Text";
import Vector2 from "utilities/math/Vector2";
export interface ITooltipEvents extends Events<Component> {
    move(position: Vector2): any;
    setLocation(location: TooltipLocation): any;
}
export default class Tooltip extends Component {
    event: IEventEmitter<this, ITooltipEvents>;
    get location(): TooltipLocation;
    protected readonly source: Component;
    private forceShown;
    private maxWidth;
    private hasSetPosition;
    constructor(source: Component | HTMLElement);
    protected onRemove(): void;
    protected onHide(): void;
    setSecondary(): this;
    setForceShown(forceShown?: boolean): this;
    wasForceShown(): boolean;
    setLocation(location: TooltipLocation): this;
    /**
     * Sets the max width of this tooltip.
     * @param maxWidth The max-width of the tooltip is this value * ui scale.
     */
    setMaxWidth(maxWidth?: number | `${number}vw`): this;
    addText(initializer: (text: Text) => any): this;
    addText<TEXT extends Text>(initializer: (text: Text) => any, cls?: Class<TEXT>): this;
    addHeading(initializer: (text: Text) => any): this;
    addParagraph(initializer: (text: Paragraph) => any): this;
    addList(...initializers: Array<((text: Text) => any) | undefined | false>): this;
    updatePosition(regenerateBox?: boolean): this;
    private initialPositionAndShownHandledExternally;
    setInitialPositionAndShownHandledExternally(): this;
    protected onShow(): void;
    private onMouseMove;
}
