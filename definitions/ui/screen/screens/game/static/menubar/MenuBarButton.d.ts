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
import Button from "ui/component/Button";
import { IBindHandlerApi } from "ui/input/Bind";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class MenuBarButton extends Button {
    private readonly onActivate;
    private readonly bindable;
    private unread?;
    private readonly unreadIndicator;
    constructor(buttonType: MenuBarButtonType);
    onBindable(api: IBindHandlerApi): boolean;
    setUnread(unread?: boolean | (() => boolean | number)): this;
    refresh(): this;
    private getTooltip;
}
