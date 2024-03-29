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
import type Player from "game/entity/player/Player";
import { Milestone } from "game/milestones/IMilestone";
import Bindable from "ui/input/Bindable";
import Dialog from "ui/screen/screens/game/component/Dialog";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class MilestonesDialog extends Dialog {
    private readonly milestones;
    private readonly sortRow;
    private sortData;
    constructor();
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected onDialogLoad(): void;
    onPlayerChangeTitle(player: Player, milestone?: Milestone): void;
    onMilestoneUpdate(_: any, milestone: Milestone): void;
    private sort;
    private sortMilestones;
    private filter;
    private getFilterString;
}
