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
import Translation from "language/Translation";
import Component from "ui/component/Component";
import type { TranslationGenerator } from "ui/component/IComponent";
import { TooltipLocation } from "ui/component/IComponent";
import Text, { Paragraph } from "ui/component/Text";
import type Bindable from "ui/input/Bindable";
import Vector2 from "utilities/math/Vector2";
export declare enum TooltipClasses {
    Main = "tooltip",
    ForceShown = "tooltip-force-shown",
    Block = "tooltip-block",
    Blocks = "tooltip-blocks",
    Heading = "tooltip-heading",
    Hints = "tooltip-hints",
    Hint = "tooltip-hint"
}
export interface ITooltipEvents extends Events<Component> {
    move(position: Vector2): any;
    setLocation(location: TooltipLocation): any;
}
export default class Tooltip extends Component {
    event: IEventEmitter<this, ITooltipEvents>;
    get location(): TooltipLocation;
    readonly source: Component;
    readonly blocks: Component<HTMLElement>;
    readonly hints: Component<HTMLElement>;
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
    setText(translation: GetterOfOr<Translation | UiTranslation>): this;
    getLastBlock(): TooltipBlock;
    getBlocks(): import("@wayward/goodstream").default<TooltipBlock>;
    addBlock(initializer: (block: TooltipBlock) => any): this;
    addHint(translation: TranslationGenerator, ...bindables: Bindable[]): this;
    /** @deprecated use setText/addBlock */
    addText(initializer: (text: Text) => any): this;
    /** @deprecated use setText/addBlock */
    addText<TEXT extends Text>(initializer: (text: Text) => any, cls?: Class<TEXT>): this;
    /** @deprecated use setText/addBlock */
    addHeading(initializer: (text: Text) => any): this;
    /** @deprecated use setText/addBlock */
    addParagraph(initializer: (text: Paragraph) => any): this;
    /** @deprecated use setText/addBlock */
    addList(...initializers: Array<((text: Text) => any) | undefined | false>): this;
    updatePosition(regenerateBox?: boolean): this;
    private initialPositionAndShownHandledExternally;
    setInitialPositionAndShownHandledExternally(): this;
    protected onShow(): void;
    dump(): this;
    private onMouseMove;
}
export declare class TooltipBlock extends Component {
    constructor();
    setTitle(initializer: (text: Text) => any): this;
}
