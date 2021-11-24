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
import type { IRefreshable } from "ui/component/Refreshable";
import { Tab } from "ui/screen/screens/menu/component/Menu";
export default class TabVideo extends Tab implements IRefreshable {
    private readonly refreshables;
    private readonly checkButtonFullscreen;
    private readonly inputUiScale;
    constructor();
    refresh(): this;
    protected onViewportResize(): void;
    private addRefreshable;
    private onFullscreen;
    private onDitherFOW;
    private onDefaultCursor;
    private getUiScaleTooltip;
}