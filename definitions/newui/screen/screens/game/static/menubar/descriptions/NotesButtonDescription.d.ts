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
import Bindable from "newui/input/Bindable";
import MenuBarButton from "newui/screen/screens/game/static/menubar/MenuBarButton";
import { IMenuBarButtonDescription, MenuBarButtonGroup } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
export default class NotesButtonDescription implements IMenuBarButtonDescription {
    group: MenuBarButtonGroup;
    imageWidth: number;
    imageHeight: number;
    bindable: Bindable;
    private button?;
    tooltip: IMenuBarButtonDescription["tooltip"];
    onActivate: () => import("newui/screen/screens/GameScreen").default;
    onCreate(button: MenuBarButton): void;
    onDispose(): void;
    protected onUnreadsChanged(): void;
}
