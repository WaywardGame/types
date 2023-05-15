/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Button from "ui/component/Button";
import type { IMenuBarButtonDescription } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class MenuBarButton extends Button {
    readonly type: MenuBarButtonType;
    private readonly menuBarButtonDescription;
    private unread?;
    private readonly unreadIndicator;
    constructor(type: MenuBarButtonType, menuBarButtonDescription: IMenuBarButtonDescription);
    setUnread(unread?: boolean | (() => boolean | number)): this;
    refresh(): this;
    private getTooltip;
}
