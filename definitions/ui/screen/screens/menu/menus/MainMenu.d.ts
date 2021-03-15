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
import Menu from "ui/screen/screens/menu/component/Menu";
export default class MainMenu extends Menu {
    private continueGameButton;
    private multiplayerButton;
    private loadGameButton;
    private newGameButton;
    private playRow1;
    private playRow2;
    private modsButton;
    private newsButton;
    private aboutMenu;
    private newsMenu;
    private isNewVersion;
    constructor();
    protected onBeforeShow(): Promise<void>;
    private updateNewsButton;
    protected onModsSetup(): void;
    private create;
    private checkAndShowGameInterrupts;
    private getAboutMenu;
    private getNewsMenu;
}
