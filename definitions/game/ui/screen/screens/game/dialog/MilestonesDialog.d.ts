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
import type Player from "@wayward/game/game/entity/player/Player";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import Bindable from "@wayward/game/ui/input/Bindable";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import { MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class MilestonesDialog extends Dialog {
    private readonly milestones;
    private readonly sortRow;
    private readonly sectionUnlocked;
    private readonly sectionUnlockableInMode;
    private readonly sectionNotUnlockableInMode;
    private readonly sectionHidden;
    private readonly noticeMilestonesHidden;
    private sortData;
    constructor();
    private getHiddenMilestoneCount;
    private getMilestoneSectionComponent;
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected onDialogLoad(): void;
    onPlayerChangeTitle(player: Player): void;
    private hadMilestoneUpdate;
    onMilestoneUpdate(_: any, milestone: Milestone): void;
    protected onTickEnd(): void;
    private sortHash?;
    private sort;
    private sortMilestones;
    private filter;
    private getFilterString;
}
