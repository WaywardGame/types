/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Component from "newui/component/Component";
import { ITooltip } from "newui/component/IComponent";
export default class WorldTooltipHandler {
    private readonly gameScreen;
    private lastMousePosition?;
    private position?;
    private tooltip?;
    private inspections?;
    private showExtraInfo;
    constructor(gameScreen: Component);
    setTooltip(): void;
    initializeTooltip(tooltip: ITooltip): ITooltip;
    protected onUpdateZoom(): void;
    private onTooltipMove;
    private refreshTooltip;
    private refreshInspectionsOfType;
    private refreshTooltipExtraInfoAndPosition;
    private initializeTooltipSection;
}
