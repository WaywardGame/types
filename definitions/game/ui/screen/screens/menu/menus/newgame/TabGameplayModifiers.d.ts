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
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import ChoiceList, { Choice } from "@wayward/game/ui/component/ChoiceList";
import { Paragraph } from "@wayward/game/ui/component/Text";
import { Tab } from "@wayward/game/ui/screen/screens/menu/component/Menu";
import MilestoneModifiers from "@wayward/game/ui/screen/screens/menu/component/MilestoneModifiers";
import type NewGameMenu from "@wayward/game/ui/screen/screens/menu/menus/NewGameMenu";
export default class TabGameplayModifiers extends Tab {
    readonly buttonMilestoneModifiers: MilestoneModifiers;
    readonly paragraphRemainingMilestonesInMode: Paragraph;
    readonly choiceClientsInheritHostModifiers: Choice<undefined>;
    readonly choiceCustomModifiers: Choice<undefined>;
    readonly choiceListClientsModifiers: ChoiceList<Choice<string | number | undefined>, false>;
    private readonly menuRef;
    get menu(): NewGameMenu | undefined;
    constructor(menu: NewGameMenu);
    resetMilestoneModifiers(milestoneModifiers?: Iterable<Milestone>): this;
    private onShow;
    private getMilestonesAvailable;
}
