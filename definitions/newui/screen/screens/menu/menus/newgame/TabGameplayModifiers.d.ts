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
import { Milestone } from "game/milestones/IMilestone";
import ChoiceList, { Choice } from "newui/component/ChoiceList";
import { Tab } from "newui/screen/screens/menu/component/Menu";
import MilestoneModifiers from "newui/screen/screens/menu/component/MilestoneModifiers";
import NewGameMenu from "newui/screen/screens/menu/menus/NewGameMenu";
export default class TabGameplayModifiers extends Tab {
    private readonly menu;
    readonly buttonMilestoneModifiers: MilestoneModifiers;
    readonly choiceClientsInheritHostModifiers: Choice<undefined>;
    readonly choiceCustomModifiers: Choice<undefined>;
    readonly choiceListClientsModifiers: ChoiceList<Choice<string | number | undefined>, false>;
    constructor(menu: NewGameMenu);
    resetMilestoneModifiers(milestoneModifiers?: Iterable<Milestone>): this;
    private onShow;
}
