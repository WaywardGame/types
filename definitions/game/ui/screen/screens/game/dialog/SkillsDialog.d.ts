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
import { SkillType } from "@wayward/game/game/entity/skill/ISkills";
import { TitleType } from "@wayward/game/game/entity/action/actions/SetTitle";
import { ReferenceType } from "@wayward/game/game/reference/IReferenceManager";
import Translation from "@wayward/game/language/Translation";
import type Component from "@wayward/game/ui/component/Component";
import Bindable from "@wayward/game/ui/input/Bindable";
import { SkillSort } from "@wayward/game/ui/screen/screens/game/dialog/ISkillsDialog";
import UnlockablesDialog, { UnlockablesSection } from "@wayward/game/ui/screen/screens/game/dialog/unlockables/UnlockablesDialog";
import { MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
import type { HighlightSelector, IHighlight } from "@wayward/game/ui/util/IHighlight";
export default class SkillsDialog extends UnlockablesDialog<SkillType, SkillSort> {
    constructor();
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected getUnlockablesName(): Translation;
    protected getUnlockableSection(skill: SkillType): UnlockablesSection;
    protected getUnlockables(): readonly SkillType[];
    protected getSortEnum(): typeof SkillSort;
    protected translateSort(sort: SkillSort): Translation;
    protected getPlayerTitleType(): TitleType;
    protected getDefaultSort(): SkillSort;
    protected getReferenceType(): ReferenceType;
    protected canSetTitle(skill: SkillType): boolean;
    protected getUnlockableTranslator(skill: SkillType): SupplierOr<Translation>;
    protected getProgress(skill: SkillType): number;
    protected getHighlightSelector(skill: SkillType): HighlightSelector | undefined;
    protected getHighlight(skill: SkillType): IHighlight | undefined;
    protected sortUnlockables(sort: SkillSort): ([a]: [SkillType, Component], [b]: [SkillType, Component]) => number;
    protected shouldShowUnlockable(skill: SkillType, filterText: string): boolean;
    protected getFilterString(skill: SkillType): string;
    private getMagicalItems;
    protected updateSkill(_: any, skill: SkillType): void;
}
