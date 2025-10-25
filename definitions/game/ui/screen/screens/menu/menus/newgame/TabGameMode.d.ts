/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { GameMode } from "@wayward/game/game/options/IGameOptions";
import ChoiceList, { Choice } from "@wayward/game/ui/component/ChoiceList";
import { Tab } from "@wayward/game/ui/screen/screens/menu/component/Menu";
import CustomGameOptionsMenu from "@wayward/game/ui/screen/screens/menu/menus/newgame/CustomGameOptionsMenu";
import type NewGameMenu from "@wayward/game/ui/screen/screens/menu/menus/NewGameMenu";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export default class TabGameMode extends Tab {
    customGameOptionsMenu?: CustomGameOptionsMenu;
    readonly gameMode: ChoiceList<DifficultyChoice, false>;
    private readonly menuRef;
    get menu(): NewGameMenu;
    constructor(menu: NewGameMenu);
    private getCustomGameOptionsMenu;
    private updateGameMode;
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
