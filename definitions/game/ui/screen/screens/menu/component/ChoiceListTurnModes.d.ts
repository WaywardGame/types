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
import { TurnMode } from "@wayward/game/game/IGame";
import ChoiceList, { Choice } from "@wayward/game/ui/component/ChoiceList";
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
