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
import { TurnMode } from "game/IGame";
import ChoiceList, { Choice } from "newui/component/ChoiceList";
export default class ChoiceListTurnMode extends ChoiceList {
    readonly choiceManual: Choice<undefined>;
    readonly choiceSimulated: Choice<undefined>;
    readonly choiceRealTime: Choice<undefined>;
    constructor();
    setMode(mode: TurnMode): this;
    getMode(): TurnMode;
    getModeChoice(mode: TurnMode): Choice<undefined>;
    setRefreshMethod(refreshMethod: (choiceList: this) => Choice | TurnMode): this;
}
