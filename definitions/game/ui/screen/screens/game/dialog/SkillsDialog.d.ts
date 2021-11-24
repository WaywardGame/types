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
import Dialog from "ui/screen/screens/game/component/Dialog";
export default class SkillsDialog extends Dialog {
    private readonly skills;
    private readonly inputFilter;
    private readonly sortRow;
    constructor();
    protected onDialogRemove(): void;
    private updateSkill;
    private sort;
    private sortSkills;
    private filter;
    private shouldShowSkill;
    private getFilterString;
    private getSkillReadout;
    private getMagicalItems;
}
