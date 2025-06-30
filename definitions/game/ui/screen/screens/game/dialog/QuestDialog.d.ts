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
import type { QuestInstance } from "@wayward/game/game/entity/player/quest/QuestManager";
import Bindable from "@wayward/game/ui/input/Bindable";
import Dialog from "@wayward/game/ui/screen/screens/game/component/Dialog";
import { MenuBarButtonType } from "@wayward/game/ui/screen/screens/game/static/menubar/IMenuBarButton";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
export interface QuestDialogEvents extends Events<Dialog> {
    showQuest(quest: QuestInstance): any;
}
export default class QuestDialog extends Dialog {
    event: IEventEmitter<this, QuestDialogEvents>;
    private readonly questsActiveWrapper;
    private readonly questsActiveHeading;
    private readonly questsCompletedWrapper;
    private readonly questsCompletedHeading;
    private readonly requirementsHeading;
    private readonly requirements;
    private readonly childQuestsHeading;
    private readonly childQuests;
    private readonly completeQuestButton;
    private readonly activateQuestButton;
    private current;
    constructor();
    getBindable(): Bindable;
    getIcon(): MenuBarButtonType;
    protected onDialogLoad(): void;
    protected onDialogRemove(): void;
    showQuest(id: number, disableAnimations?: boolean): this;
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
