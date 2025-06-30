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
import type { Game } from "@wayward/game/game/Game";
import type { IMessage } from "@wayward/game/game/entity/player/IMessageManager";
import type Player from "@wayward/game/game/entity/player/Player";
import type { QuestInstance } from "@wayward/game/game/entity/player/quest/QuestManager";
import type { RequirementInstance } from "@wayward/game/game/entity/player/quest/quest/Quest";
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import Contenteditable from "@wayward/game/ui/component/Contenteditable";
import type { ContextMenuDescriptions } from "@wayward/game/ui/component/ContextMenu";
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import Bindable from "@wayward/game/ui/input/Bindable";
import type { IPinnedMessage } from "@wayward/game/ui/screen/screens/game/IGameScreenApi";
import { MessageTimestamp, PinType } from "@wayward/game/ui/screen/screens/game/IGameScreenApi";
import type { IFilters } from "@wayward/game/ui/screen/screens/game/IMessages";
import { MessageFilterDefault } from "@wayward/game/ui/screen/screens/game/IMessages";
import { Quadrant } from "@wayward/game/ui/screen/screens/game/component/IQuadrantComponent";
import QuadrantComponent from "@wayward/game/ui/screen/screens/game/component/QuadrantComponent";
import QuestDialog from "@wayward/game/ui/screen/screens/game/dialog/QuestDialog";
import MessageLog from "@wayward/game/ui/screen/screens/game/static/messages/MessageLog";
import Stream from "@wayward/goodstream/Stream";
import type { Events, IEventEmitter } from "@wayward/utilities/event/EventEmitter";
interface IMessagesEvents extends Events<QuadrantComponent> {
    pinQuestRequirement(pin: IPinnedMessage): any;
    unpinQuestRequirement(pin: IPinnedMessage): any;
    questShown(quest: QuestInstance): any;
}
export declare enum MessagesClasses {
    Main = "game-messages",
    Content = "game-messages-content"
}
export default class Messages extends QuadrantComponent {
    private static get defaultFilters();
    get preferredQuadrant(): Quadrant;
    static preferredQuadrant: Quadrant;
    event: IEventEmitter<this, IMessagesEvents>;
    readonly content: Component;
    readonly sendButton: Button;
    readonly pinnedMessages: Component;
    readonly messageLog: MessageLog;
    readonly input: Contenteditable;
    readonly filter: Button | undefined;
    pinNotesAutomatically: boolean;
    filters: IFilters;
    private selectedFilter?;
    private showSendButton;
    private showOptionsButton;
    private unfocusOnSend;
    private messageTimestamps;
    private readonly pinnedNotes;
    private readonly seenNotes;
    private readonly pinnedQuestRequirements;
    private readonly pinnedNextQuests;
    private readonly chatSentHistory;
    private chatHistoryIndex;
    private pushedCurrentToHistory;
    constructor();
    getBindable(): Bindable;
    getPins(): Stream<IPinnedMessage>;
    getMessageTimestampMode(): MessageTimestamp;
    setMessageTimestampMode(mode: MessageTimestamp): this;
    shouldShowSendButton(): boolean;
    setShouldShowSendButton(shouldShow: boolean): this;
    shouldShowOptionsButton(): boolean;
    setShouldShowOptionsButton(shouldShow: boolean): this;
    shouldUnfocusOnSend(): boolean;
    setShouldUnfocusOnSend(shouldUnfocusOnSend: boolean): this;
    sendPinnedMessage(pinnedMessage: PinnedMessage): PinnedMessage;
    pinQuestRequirement(quest: QuestInstance, requirement?: RequirementInstance): IPinnedMessage | PinnedMessage | undefined;
    unpinMessage(pinnedMessage: PinnedMessage, time?: number): Promise<void>;
    protected onPlay(game: Game, isLoadingSave: boolean): void;
    onDisplayMessage(player: Player, message: IMessage): void;
    onWrittenNote(player: Player, id: number): void;
    onReadNote(player: Player, id: number): void;
    protected onShowQuest(dialog: QuestDialog, quest: QuestInstance): void;
    onFocusChat(): boolean;
    getDefaultFilterName(filter: MessageFilterDefault): string;
    private boundScreenEvents;
    protected onAppend(): Promise<void>;
    protected onChangeQuadrant(): void;
    /**
     * Event handler for when the text in the chat box should be sent as a message.
     */
    protected sendMessage(): boolean;
    /**
     * Returns the context menu for messages, used by the superclass (quadrant component)
     */
    protected getContextMenuDescription(api: IBindHandlerApi): ContextMenuDescriptions;
    private isInTopQuadrant;
    private isInDialog;
    private addPinnedNote;
    private addPinnedQuestRequirement;
    private onQuestGet;
    private onRequirementComplete;
    private onQuestComplete;
    private addPinnedNextQuest;
    pinRequirementsFromQuest(quest: QuestInstance): void;
    private hasIncompletePinnedRequirementFromAnotherQuest;
    private showOptions;
    /**
     * Returns the basic context menu of messages, no matter what location it is in
     */
    private getMessagesContextMenu;
    /**
     * Runs a command that the user sent instead of sending it as a message.
     */
    private runCommand;
    /**
     * Returns `true` if the message should be displayed.
     */
    private filterMessageSources;
    /**
     * Event handler for when the filter button is clicked
     */
    private openFilterMenu;
    /**
     * Changes the message filter
     */
    setFilter(filterName?: string, skipRefresh?: boolean): void;
    getFilter(): string | undefined;
    private onShowDialog;
    private onShowNote;
    private editFilters;
    private onFiltersEdited;
    private onFiltersReset;
}
export interface PinnedMessageEvents extends Events<Button> {
    unpinning(): any;
}
export declare class PinnedMessage extends Button {
    readonly type: PinType;
    readonly id: any;
    event: IEventEmitter<this, PinnedMessageEvents>;
    constructor(type: PinType, id: any);
}
export {};
