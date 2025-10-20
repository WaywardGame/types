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
import { Milestone } from "@wayward/game/game/milestones/IMilestone";
import Bindable from "@wayward/game/ui/input/Bindable";
import type DialogManager from "@wayward/game/ui/screen/screens/game/DialogManager";
import type { IMenuBarButtonDescription } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
import { MenuBarButtonGroup } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
import type MenuBarButton from "@wayward/game/ui/screen/screens/game/static/menubar/MenuBarButton";
export default class IslandsButtonDescription implements IMenuBarButtonDescription {
    group: MenuBarButtonGroup;
    imageWidth: number;
    imageHeight: number;
    bindable: Bindable;
    private button?;
    onActivate: () => DialogManager | undefined;
    onCreate(button: MenuBarButton): void;
    onDispose(): void;
    onMilestoneUpdate(_: any, milestone: Milestone): void;
    onSkillGain(_: any, skill: SkillType): void;
    private update;
    private canSailBetweenIslands;
}
