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
import { IRefreshable } from "ui/component/Refreshable";
import { Tab } from "ui/screen/screens/menu/component/Menu";
export default class TabVideo extends Tab implements IRefreshable {
    private readonly refreshables;
    private readonly checkButtonFullscreen;
    private readonly inputUiScale;
    constructor();
    refresh(): this;
    protected onViewportResize(): void;
    private toggleAllTooltips;
    private addRefreshable;
    private onFullscreen;
    private onPixelFont;
    private onDisableUIEffects;
    private onDitherFOW;
    private onDefaultCursor;
    private onSkipArticle;
    private getUiScaleTooltip;
    private onPowerPreferenceSelect;
    private getPowerPreferenceDropdownData;
}
