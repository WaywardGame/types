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
import Bindable from "@wayward/game/ui/input/Bindable";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import { MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class SkillsDialog extends Dialog {
    private readonly skills;
    private readonly inputFilter;
    private readonly sortRow;
    private sortData;
    constructor();
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected onDialogLoad(): void;
    protected onDialogRemove(): void;
    private updateSkill;
    onPlayerChangeTitle(player: Player): void;
    private sort;
    private sortSkills;
    private filter;
    private shouldShowSkill;
    private getFilterString;
    private getSkillReadout;
    private getMagicalItems;
}
