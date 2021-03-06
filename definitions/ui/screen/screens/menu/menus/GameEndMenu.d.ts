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
import { PlayerState } from "game/entity/player/IPlayer";
import { IHighscore } from "save/data/ISaveDataGlobal";
import Menu from "ui/screen/screens/menu/component/Menu";
export interface IGameEndData {
    state: PlayerState.Won | PlayerState.Dead;
    highscore: IHighscore;
}
export default class GameEndMenu extends Menu {
    private readonly highscore;
    private gameEndData;
    constructor();
    setGameEndData(gameEndData: IGameEndData): this;
    protected onShow(): void;
    private getHeading;
    private getTagline;
    private getContinueButtonText;
    private continue;
    private exitToMenu;
    private share;
}
