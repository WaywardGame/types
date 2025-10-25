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
import Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export default class TooltipManager {
    readonly surfaceWrapper: Component<HTMLElement>;
    readonly main: TooltipSurface;
    readonly surfaces: TooltipSurface[];
    private readonly disablers;
    constructor();
    has(host?: HTMLElement): boolean;
    show(host: HTMLElement, initialize?: (tooltip: Tooltip) => any): Tooltip | undefined;
    hide(host?: HTMLElement | undefined): boolean;
    /**
     * Disables tooltips.
     * Note: Multiple things can cause tooltips to be disabled simultaneously; tooltips won't be re-enabled until every
     * disabler has been removed via `enable(disabler)`.
     */
    disable(disabler: any): this;
    /**
     * Removes the given tooltip disabler.
     * Note: Multiple things can cause tooltips to be disabled simultaneously; tooltips won't be re-enabled until *every*
     * disabler has been removed.
     */
    enable(disabler: any): this;
    createSurface(): TooltipSurface;
    protected onInterrupt(): void;
    protected onInterruptClose(): void;
    protected onScreenResize(): void;
    protected onMove(): void;
    protected onToggleMoreInfo(): void;
    protected onToggleStackItemsHint(): void;
    private loop;
}
export interface ITooltipSurfaceEvents {
    remove(): any;
}
export declare class TooltipSurface extends EventEmitter.Host<ITooltipSurfaceEvents> {
    private _host?;
    get host(): HTMLElement | undefined;
    tooltip?: Tooltip;
    readonly surface: Component<HTMLElement>;
    setId(id: string): this;
    hasTooltip(host?: HTMLElement): boolean;
    showTooltip(host: HTMLElement, initialize?: (tooltip: Tooltip) => any): Tooltip | undefined;
    hideTooltip(host?: HTMLElement | undefined): boolean;
    removeTooltip(): void;
    remove(): void;
    private currentAlignment;
    updatePosition(): void;
}
