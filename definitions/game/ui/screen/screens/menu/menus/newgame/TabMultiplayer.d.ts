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
import { CheckButton } from "ui/component/CheckButton";
import ChoiceList, { Choice } from "ui/component/ChoiceList";
import { RangeRow } from "ui/component/RangeRow";
import { Tab } from "ui/screen/screens/menu/component/Menu";
import type NewGameMenu from "ui/screen/screens/menu/menus/NewGameMenu";
export default class TabMultiplayer extends Tab {
    readonly choiceSingleplayer: Choice<undefined>;
    readonly choiceMultiplayer: Choice<undefined>;
    readonly multiplayerMode: ChoiceList<Choice<string | number | undefined>, false>;
    readonly choiceLobbyPublic: Choice<undefined>;
    readonly choiceLobbyFriends: Choice<undefined>;
    readonly choiceLobbyPrivate: Choice<undefined>;
    readonly lobbyType: ChoiceList<Choice<string | number | undefined>, false>;
    readonly inputPVP: CheckButton;
    readonly inputGhostData: CheckButton;
    readonly maxPlayersRow: RangeRow;
    readonly tickSpeedRow: RangeRow;
    private readonly menuRef;
    get menu(): NewGameMenu;
    constructor(menu: NewGameMenu);
    private onChangeMultiplayerMode;
}
