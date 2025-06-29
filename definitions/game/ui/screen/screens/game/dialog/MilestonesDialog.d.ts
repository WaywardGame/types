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
import { TitleType } from "@wayward/game/game/entity/action/actions/SetTitle";
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import Translation from "@wayward/game/language/Translation";
import type Component from "@wayward/game/ui/component/Component";
import Bindable from "@wayward/game/ui/input/Bindable";
import { MilestoneSort } from "@wayward/game/ui/screen/screens/game/dialog/IMilestonesDialog";
import UnlockablesDialog, { UnlockablesSection } from "@wayward/game/ui/screen/screens/game/dialog/unlockables/UnlockablesDialog";
import { MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
export declare enum MilestonesDialogClasses {
    Main = "game-dialog-milestones"
}
export default class MilestonesDialog extends UnlockablesDialog<Milestone, MilestoneSort> {
    constructor();
    refreshNotUnlockableWarning(): void;
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected getUnlockablesName(): Translation;
    protected getPlayerTitleType(): TitleType;
    protected getReferenceType(): ReferenceType;
    protected getSortEnum(): typeof MilestoneSort;
    protected getDefaultSort(): MilestoneSort;
    protected getUnlockables(): Milestone[];
    protected getUnlockableTranslator(milestone: Milestone): SupplierOr<Translation>;
    protected translateSort(sort: MilestoneSort): Translation;
    protected getUnlockableSection(milestone: Milestone): UnlockablesSection;
    protected getProgress(milestone: Milestone): number;
    protected sortUnlockables(sort: MilestoneSort): ([a]: [Milestone, Component], [b]: [Milestone, Component]) => number;
    protected getFilterString(milestone: Milestone): string;
    onMilestoneUpdate(_: any, milestone: Milestone): void;
}
