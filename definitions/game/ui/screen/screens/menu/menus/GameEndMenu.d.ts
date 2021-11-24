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
import { PlayerState } from "game/entity/player/IPlayer";
import type { IHighscore } from "save/data/ISaveDataGlobal";
import Menu from "ui/screen/screens/menu/component/Menu";
export interface IGameEndData {
    state: PlayerState.Won | PlayerState.Dead;
    highscore: IHighscore;
}
export default class GameEndMenu extends Menu {
    private readonly highscore;
    private readonly respawnButton;
    private readonly rejoinAsNewPlayerButton;
    private gameEndData;
    constructor();
    setGameEndData(gameEndData: IGameEndData): this;
    protected onShow(): void;
    private getHeading;
    private getTagline;
    private getContinueButtonText;
    private continue;
    private respawnInCasualMode;
    private rejoinAsNewPlayer;
    private exitToMenu;
    private share;
}