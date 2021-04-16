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
import { Quadrant } from "ui/screen/screens/game/component/IQuadrantComponent";
import QuadrantComponent from "ui/screen/screens/game/component/QuadrantComponent";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
import MenuBarButton from "ui/screen/screens/game/static/menubar/MenuBarButton";
import GameScreen from "ui/screen/screens/GameScreen";
export default class MenuBar extends QuadrantComponent {
    static preferredQuadrant: Quadrant;
    get preferredQuadrant(): Quadrant;
    private _buttons;
    get buttons(): Map<MenuBarButtonType, MenuBarButton>;
    private readonly groups;
    constructor(host: GameScreen);
    /**
     * Removes any existing groups of menubar buttons, then initializes new ones from the `MenuBarButtonType` enum.
     */
    refresh(): void;
    /**
     * Creates a new menu bar button of the given type, and adds it to a group component. If the group
     * component that the button's description requests does not exist, it's created.
     *
     * Note: Does not check if the button type has already been added.
     */
    private addButton;
}
