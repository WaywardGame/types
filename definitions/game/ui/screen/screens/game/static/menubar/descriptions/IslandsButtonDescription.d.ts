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
import { SkillType } from "game/entity/IHuman";
import { Milestone } from "game/milestones/IMilestone";
import Bindable from "ui/input/Bindable";
import type { IMenuBarButtonDescription } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
import { MenuBarButtonGroup } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
import type MenuBarButton from "ui/screen/screens/game/static/menubar/MenuBarButton";
export default class IslandsButtonDescription implements IMenuBarButtonDescription {
    group: MenuBarButtonGroup;
    imageWidth: number;
    imageHeight: number;
    bindable: Bindable;
    private button?;
    onActivate: () => false | import("../../../DialogManager").default | undefined;
    onCreate(button: MenuBarButton): void;
    onDispose(): void;
    onMilestoneUpdate(_: any, milestone: Milestone): void;
    onSkillGain(_: any, skill: SkillType): void;
    private update;
    private canSailBetweenIslands;
}
