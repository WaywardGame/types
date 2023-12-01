/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IGameOptions } from "@wayward/game/game/options/IGameOptions";
import { CheckButton } from "@wayward/game/ui/component/CheckButton";
import ChoiceList, { Choice } from "@wayward/game/ui/component/ChoiceList";
import { RangeRow } from "@wayward/game/ui/component/RangeRow";
import CustomGameOptionsTab from "@wayward/game/ui/screen/screens/menu/menus/newgame/customgameoptions/CustomGameOptionsTab";
export default class TabTime extends CustomGameOptionsTab {
    private readonly options;
    readonly eternalDay: Choice<"day">;
    readonly eternalNight: Choice<"night">;
    readonly choiceListEternalTime: ChoiceList.Optional<Choice<"day" | "night">>;
    readonly checkButtonTimeFrozen: CheckButton;
    readonly rangeInitialTime: RangeRow;
    readonly rangeDayLength: RangeRow;
    readonly rangeDayPercent: RangeRow;
    private readonly defaultDayLength;
    private readonly defaultDayPercent;
    constructor(options: () => IGameOptions);
}
