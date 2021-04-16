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
import { IGameOptions } from "game/options/IGameOptions";
import { CheckButton } from "ui/component/CheckButton";
import ChoiceList, { Choice } from "ui/component/ChoiceList";
import { RangeRow } from "ui/component/RangeRow";
import CustomGameOptionsTab from "ui/screen/screens/menu/menus/newgame/customgameoptions/CustomGameOptionsTab";
export default class TabTime extends CustomGameOptionsTab {
    private readonly options;
    readonly eternalDay: Choice<"day">;
    readonly eternalNight: Choice<"night">;
    readonly choiceListEternalTime: ChoiceList<Choice<"day" | "night">, true>;
    readonly checkButtonTimeFrozen: CheckButton;
    readonly rangeInitialTime: RangeRow;
    readonly rangeDayLength: RangeRow;
    readonly rangeDayPercent: RangeRow;
    private readonly defaultDayLength;
    private readonly defaultDayPercent;
    constructor(options: () => IGameOptions);
}
