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
import { BlockRow } from "ui/component/BlockRow";
import Component from "ui/component/Component";
import { EnableDisableAllRow } from "ui/component/EnableDisableAllRow";
import FilterRow from "ui/component/FilterRow";
import Menu from "ui/screen/screens/menu/component/Menu";
import MilestoneModifierCheckButton from "ui/screen/screens/menu/component/MilestoneModifierCheckButton";
export default class MilestoneModifiersMenu extends Menu {
    private readonly milestones;
    private static readonly importButtonInputId;
    protected readonly filter: FilterRow;
    protected readonly buttonImport: Component<HTMLElement>;
    protected readonly rowImportExport: BlockRow;
    protected readonly rowBatchEnablingAndDisabling: EnableDisableAllRow;
    private readonly modifierCheckButtons;
    constructor(milestones: Set<Milestone>, allowHostMilestones: boolean);
    createModifierCheckButton(milestone: Milestone): MilestoneModifierCheckButton;
    protected onShow(): void;
    private updateFilter;
    private exportModifiers;
    private importModifiers;
}
