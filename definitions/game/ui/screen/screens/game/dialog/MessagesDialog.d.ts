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
import Bindable from "@wayward/game/ui/input/Bindable";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import { MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class MessagesDialog extends Dialog {
    constructor();
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected onAppend2(): void;
    protected willRemove(): void;
    private onFocus;
    private onBlur;
}
