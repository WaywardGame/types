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
import Bindable from "ui/input/Bindable";
import Dialog from "ui/screen/screens/game/component/Dialog";
import { MenuBarButtonType } from "ui/screen/screens/game/static/menubar/IMenuBarButton";
export default class QuestDialog extends Dialog {
    private readonly questsActiveWrapper;
    private readonly questsActiveHeading;
    private readonly questsCompletedWrapper;
    private readonly questsCompletedHeading;
    private readonly requirementsHeading;
    private readonly requirements;
    private readonly childQuestsHeading;
    private readonly childQuests;
    private readonly completeQuestButton;
    private current;
    constructor();
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected onDialogRemove(): void;
    showQuest(id: number): this;
    protected onSwitchPanel(panelId: string | number): void;
    private onQuestOrRequirementComplete;
    private refreshFooter;
    private addRequirementRow;
    private addQuest;
    private getQuest;
    private getPins;
    private getTitle;
    private getDescription;
}
