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
import Menu from "ui/screen/screens/menu/component/Menu";
export default class PauseMenu extends Menu {
    private readonly modesButton;
    private readonly multiplayerButton;
    private readonly optionsRow;
    private readonly multiplayerRow;
    private readonly pauseButton;
    private readonly gameIcons;
    private multiplayerOptionsMenu;
    constructor();
    showMultiplayerOptionsMenu(): this;
    protected onShow(): void;
    private showWModesMenu;
    private getHeadingText;
    private getParagraphText;
    private onQuitButtonClick;
}
