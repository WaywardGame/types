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
import Component from "newui/component/Component";
import { IComponent } from "newui/component/IComponent";
import Tooltip from "newui/tooltip/Tooltip";
import Vector2 from "utilities/math/Vector2";
export default class TooltipManager {
    readonly tooltipWrapper: Component;
    readonly tooltipMainWrapper: Component;
    readonly tooltipMouseWrapper: Component;
    private host;
    private tooltip;
    private readonly disablers;
    constructor();
    show(host: IComponent): Tooltip | undefined;
    hide(host?: Component | undefined, forceRemove?: boolean): void;
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
    protected onScreenResize(): void;
    protected onMove(_: any, position: Vector2): void;
    private loop;
}
