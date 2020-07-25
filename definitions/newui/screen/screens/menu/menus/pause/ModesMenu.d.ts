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
import { RangeRow } from "newui/component/RangeRow";
import ChoiceListTurnMode from "newui/screen/screens/menu/component/ChoiceListTurnModes";
import Menu from "newui/screen/screens/menu/component/Menu";
export default class ModesMenu extends Menu {
    readonly turnMode: ChoiceListTurnMode;
    readonly tickSpeed: RangeRow;
    constructor();
    protected refresh(): void;
    private updateTurnModes;
    private onChangeTurnMode;
}
