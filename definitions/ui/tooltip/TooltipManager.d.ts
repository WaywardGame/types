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
import Component from "ui/component/Component";
import Tooltip from "ui/tooltip/Tooltip";
import Vector2 from "utilities/math/Vector2";
export default class TooltipManager {
    readonly tooltipWrapper: Component;
    readonly tooltipMainWrapper: Component;
    readonly tooltipMouseWrapper: Component;
    private current;
    private readonly disablers;
    constructor();
    show(host: HTMLElement): Tooltip | undefined;
    hide(host?: HTMLElement | undefined): void;
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
    protected onInterrupt(): void;
    protected onInterruptClose(): void;
    protected onScreenResize(): void;
    protected onMove(_: any, position: Vector2): void;
    private loop;
    private remove;
}
