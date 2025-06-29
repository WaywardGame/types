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
import type { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import Translation from "@wayward/game/language/Translation";
import UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import Component from "@wayward/game/ui/component/Component";
import type { TranslationGenerator } from "@wayward/game/ui/component/IComponent";
import Text, { Heading } from "@wayward/game/ui/component/Text";
import type Bindable from "@wayward/game/ui/input/Bindable";
import type { TooltipAnchorStringHorizontal, TooltipAnchorStringVertical } from "@wayward/game/ui/tooltip/TooltipLocationHandler";
import TooltipLocationHandler from "@wayward/game/ui/tooltip/TooltipLocationHandler";
import type Stream from "@wayward/goodstream";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export declare enum TooltipClasses {
    Main = "tooltip",
    ForceShown = "tooltip-force-shown",
    ForceShownInvalid = "tooltip-force-shown-invalid",
    Block = "tooltip-block",
    Blocks = "tooltip-blocks",
    Heading = "tooltip-heading",
    Hints = "tooltip-hints",
    Hint = "tooltip-hint",
    Secondary = "tooltip-colored-secondary"
}
export interface ITooltipEvents extends Events<Component> {
    setLocation(): any;
    updatePosition(): any;
}
export default class Tooltip extends Component {
    event: IEventEmitter<this, ITooltipEvents>;
    readonly source: Component;
    readonly blocks: Component<HTMLElement>;
    readonly hints: Component<HTMLElement>;
    readonly location: TooltipLocationHandler;
    private forceShown;
    private maxWidth;
    private hasSetPosition;
    initialized?: Promise<boolean>;
    context?: InfoProviderContext;
    constructor(source: Component | HTMLElement, initialize?: (tooltip: Tooltip) => Promise<boolean>);
    protected onRemove(): void;
    setSecondary(): this;
    setForceShown(forceShown?: boolean): this;
    wasForceShown(): boolean;
    /**
     * Set this tooltip's location by initialising a `TooltipLocationHandler` with multiple location fallbacks.
     */
    setLocation(initializer: (locationHandler: TooltipLocationHandler) => any): this;
    /**
     * Set this tooltip's location by defining an x and y anchor on the source component.
     */
    setLocation(xAnchor: TooltipAnchorStringHorizontal, yAnchor: TooltipAnchorStringVertical): this;
    /**
     * Set this tooltip's location by defining an x anchor on a selected ancestor component, and a y anchor on the source component.
     */
    setLocation(xAnchor: TooltipAnchorStringHorizontal, xRefSelector: string, yAnchor: TooltipAnchorStringVertical): this;
    /**
     * Set this tooltip's location by defining an x anchor on the source component, and a y anchor on a selected ancestor component.
     */
    setLocation(xAnchor: TooltipAnchorStringHorizontal, yAnchor: TooltipAnchorStringVertical, yRefSelector: string): this;
    /**
     * Set this tooltip's location by defining x and y anchors on selected ancestor components.
     */
    setLocation(xAnchor: TooltipAnchorStringHorizontal, xRefSelector: string, yAnchor: TooltipAnchorStringVertical, yRefSelector: string): this;
    /**
     * Set this tooltip's location to the default, determined based on where the source component is. (IE, menu or dialog)
     */
    setLocation(location: "default"): this;
    /**
     * Set this tooltip's location to follow the mouse.
     */
    setLocation(location: "mouse"): this;
    private static readonly defaultLocations;
    static registerDefaultLocation<COMPONENT extends Component>(requiredRefSelector: string, initializer: (handler: TooltipLocationHandler, component?: COMPONENT) => any): void;
    private getDefaultLocation;
    /**
     * Sets the max width of this tooltip.
     * @param maxWidth The max-width of the tooltip is this value * ui scale.
     */
    setMaxWidth(maxWidth?: number | `${number}vw`): this;
    setText(translation: GetterOfOr<Translation | UiTranslation>, ...args: any[]): this;
    private delay?;
    setDelay(delay?: number): this;
    getLastBlock(): TooltipBlock;
    getBlocks(): Stream<TooltipBlock>;
    addBlock(initializer?: (block: TooltipBlock) => any): this;
    addHint(translation: TranslationGenerator, ...bindables: Bindable[]): this;
    updatePosition(regenerateBox?: boolean): this;
    private dumpOnShow;
    setDumpOnShow(dumpOnShow?: boolean): this;
    private showId?;
    reshow(force?: boolean): void;
    private reshowInternal;
    protected onShow(): void;
    dump(): this;
    private onSourceHide;
}
export declare class TooltipBlock extends Component {
    constructor();
    setSecondary(): this;
    setTitle(initializer: (text: Text) => any): this;
    addHeading(initializer: (text: Heading) => any): this;
    addParagraph(initializer: (text: Text) => any): this;
    addText(initializer: (text: Text) => any): this;
    addList(...initializers: Array<((text: Text) => any) | undefined | false>): this;
}
