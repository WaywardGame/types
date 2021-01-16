/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { Events, IEventEmitter } from "event/EventEmitter";
import Component from "newui/component/Component";
import { ITooltip, TooltipLocation } from "newui/component/IComponent";
import Text, { Paragraph } from "newui/component/Text";
export default class Tooltip extends Component implements ITooltip {
    protected readonly source: Component;
    event: IEventEmitter<this, Events<ITooltip>>;
    get location(): TooltipLocation;
    cache: boolean;
    private forceShown;
    private maxWidth;
    private hasSetPosition;
    constructor(source: Component);
    setForceShown(forceShown?: boolean): this;
    wasForceShown(): boolean;
    setLocation(location: TooltipLocation): this;
    /**
     * Sets the max width of this tooltip.
     * @param maxWidth The max-width of the tooltip is this value * ui scale.
     */
    setMaxWidth(maxWidth?: number): this;
    setNoCache(): this;
    addText(initializer: (text: Text) => any): this;
    addText<TEXT extends Text>(initializer: (text: Text) => any, cls?: Class<TEXT>): this;
    addHeading(initializer: (text: Text) => any): this;
    addParagraph(initializer: (text: Paragraph) => any): this;
    addList(...initializers: Array<((text: Text) => any) | undefined | false>): this;
    updatePosition(position?: {
        x: number;
        y: number;
    }, regenerateBox?: boolean): this;
    protected onShow(): void;
    protected onHide(): void;
    private onMouseMove;
}
