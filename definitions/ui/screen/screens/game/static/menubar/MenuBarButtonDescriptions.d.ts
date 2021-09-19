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
import { IHasImagePath } from "game/IObject";
import { IModdable } from "mod/ModRegistry";
import Button from "ui/component/Button";
import { ITooltip } from "ui/component/IComponent";
import Bindable from "ui/input/Bindable";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
export interface IMenuBarButtonDescription extends IModdable, IHasImagePath {
    imageWidth?: number;
    imageHeight?: number;
    /**
     * Sorts this menu bar button into a group of other similar menu bar buttons.
     *
     * Internally, `MenuBarButtonGroup.Meta` and `MenuBarButtonGroup.World` are used. Not providing a group
     * adds it to an unsorted group.
     */
    group?: string | number;
    /**
     * Adds the bindable's current bind translation to the tooltip automatically.
     */
    bindable?: Bindable;
    /**
     * What should happen when this button is clicked.
     */
    onActivate(): any;
    onCreate?(button: Button): any;
    onDispose?(button: Button): any;
    tooltip?(tooltip: ITooltip, button: Button, addBindLabel: (tooltip: ITooltip) => void): ITooltip;
}
export declare enum MenuBarButtonGroup {
    Meta = 0,
    World = 1
}
declare const menuBarButtonDescriptions: Descriptions<MenuBarButtonType, IMenuBarButtonDescription>;
export default menuBarButtonDescriptions;
