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
import { Milestone } from "game/milestones/IMilestone";
import Dialog from "ui/screen/screens/game/component/Dialog";
export default class MilestonesDialog extends Dialog {
    private readonly milestones;
    private readonly sortRow;
    constructor();
    onMilestoneUpdate(_: any, milestone: Milestone): void;
    private sort;
    private sortMilestones;
    private filter;
    private getFilterString;
}
