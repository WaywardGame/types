/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import { Milestone } from "game/milestones/IMilestone";
import Button from "newui/component/Button";
import Component from "newui/component/Component";
import { Heading } from "newui/component/Text";
export default class MilestoneModifiers extends Component {
    private readonly milestones;
    readonly buttonMilestoneModifiers: Button;
    readonly wrapperChosenModifiers: Component;
    readonly headerChosenModifiers: Heading;
    readonly wrapperChosenModifiersList: Component;
    private milestoneModifiersMenu;
    constructor(milestones: () => Set<Milestone>);
    reset(): this;
    protected onReturnFromMilestoneModifiersMenu(): void;
    private refresh;
    private getMilestoneModifiersMenu;
}
