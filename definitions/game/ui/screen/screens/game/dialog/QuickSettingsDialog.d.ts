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
import Bindable from "ui/input/Bindable";
import Dialog from "ui/screen/screens/game/component/Dialog";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class QuickSettingsDialog extends Dialog implements IRefreshable {
    private readonly refreshables;
    constructor();
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    refresh(): this;
    private addRefreshable;
}
