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
import type { Events, IEventEmitter } from "event/EventEmitter";
import { GameMode } from "game/options/IGameOptions";
import ChoiceList, { Choice } from "ui/component/ChoiceList";
import ChoiceListTurnMode from "ui/screen/screens/menu/component/ChoiceListTurnModes";
import { Tab } from "ui/screen/screens/menu/component/Menu";
import CustomGameOptionsMenu from "ui/screen/screens/menu/menus/newgame/CustomGameOptionsMenu";
import type NewGameMenu from "ui/screen/screens/menu/menus/NewGameMenu";
export default class TabGameMode extends Tab {
    customGameOptionsMenu: CustomGameOptionsMenu;
    readonly gameMode: ChoiceList<DifficultyChoice, false>;
    readonly turnMode: ChoiceListTurnMode;
    private readonly menuRef;
    get menu(): NewGameMenu;
    constructor(menu: NewGameMenu);
    setupGameMode(): void;
    private getCustomGameOptionsMenu;
    private updateGameMode;
    private onChangeTurnMode;
}
interface IDifficultyChoiceEvents extends Events<Choice> {
    customizeDifficulty(): any;
    updateDailyChallenge(): any;
}
declare class DifficultyChoice extends Choice<GameMode> {
    readonly difficulty: GameMode;
    event: IEventEmitter<this, IDifficultyChoiceEvents>;
    isDailyChallenge: boolean;
    private dailyChallengeButton?;
    constructor(difficulty: GameMode);
    setDailyChallenge(dailyChallenge?: boolean): void;
    private customizeDifficulty;
}
export {};
