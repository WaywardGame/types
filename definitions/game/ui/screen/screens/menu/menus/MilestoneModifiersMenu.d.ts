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
import type { Milestone } from "@wayward/game/game/milestones/IMilestone";
import { BlockRow } from "@wayward/game/ui/component/BlockRow";
import Component from "@wayward/game/ui/component/Component";
import { EnableDisableAllRow } from "@wayward/game/ui/component/EnableDisableAllRow";
import FilterRow from "@wayward/game/ui/component/FilterRow";
import Menu from "@wayward/game/ui/screen/screens/menu/component/Menu";
import MilestoneModifierCheckButton from "@wayward/game/ui/screen/screens/menu/component/MilestoneModifierCheckButton";
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
