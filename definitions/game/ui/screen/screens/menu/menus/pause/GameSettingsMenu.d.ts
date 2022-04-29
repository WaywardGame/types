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
import { RangeRow } from "ui/component/RangeRow";
import ChoiceListTurnMode from "ui/screen/screens/menu/component/ChoiceListTurnModes";
import Menu from "ui/screen/screens/menu/component/Menu";
export default class GameSettingsMenu extends Menu {
    readonly turnMode: ChoiceListTurnMode;
    readonly tickSpeed: RangeRow;
    readonly maxTravelTime: RangeRow;
    constructor();
    protected refresh(): void;
    private updateTurnModes;
    private onChangeTurnMode;
}
