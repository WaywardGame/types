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
import Stream from "@wayward/goodstream/Stream";
import type { Events, IEventEmitter } from "event/EventEmitter";
import type { IMessage } from "game/entity/player/IMessageManager";
import type Player from "game/entity/player/Player";
import type { RequirementInstance } from "game/entity/player/quest/quest/Quest";
import type { QuestInstance } from "game/entity/player/quest/QuestManager";
import type { Game } from "game/Game";
import Button from "ui/component/Button";
import Component from "ui/component/Component";
import Contenteditable from "ui/component/Contenteditable";
import type { ContextMenuDescriptions } from "ui/component/ContextMenu";
import type { IBindHandlerApi } from "ui/input/Bind";
import { Quadrant } from "ui/screen/screens/game/component/IQuadrantComponent";
import QuadrantComponent from "ui/screen/screens/game/component/QuadrantComponent";
import type { IPinnedMessage } from "ui/screen/screens/game/IGameScreenApi";
import { MessageTimestamp, PinType } from "ui/screen/screens/game/IGameScreenApi";
import type { IFilters } from "ui/screen/screens/game/IMessages";
import { MessageFilterDefault } from "ui/screen/screens/game/IMessages";
interface IMessagesEvents extends Events<QuadrantComponent> {
    pinQuestRequirement(pin: IPinnedMessage): any;
    unpinQuestRequirement(pin: IPinnedMessage): any;
}
export default class Messages extends QuadrantComponent {
    private static get defaultFilters();
    get preferredQuadrant(): Quadrant;
    static preferredQuadrant: Quadrant;
    event: IEventEmitter<this, IMessagesEvents>;
    readonly sendButton: Button;
    readonly pinnedMessages: Component;
    readonly messagelog: Component;
    readonly input: Contenteditable;
    readonly filter: Button | undefined;
    pinNotesAutomatically: boolean;
    filters: IFilters;
    private selectedFilter?;
    private showSendButton;
    private showOptionsButton;
    private unfocusOnSend;
    private messageTimestamps;
    private maxMessages;
    private readonly pinnedNotes;
    private readonly seenNotes;
    private readonly pinnedQuestRequirements;
    private readonly messagesToDisplay;
    private readonly chatSentHistory;
    private chatHistoryIndex;
    private pushedCurrentToHistory;
    private wasInTopQuadrant;
    constructor();
    getPins(): Stream<IPinnedMessage>;
    getMessageTimestampMode(): MessageTimestamp;
    setMessageTimestampMode(mode: MessageTimestamp): this;
    shouldShowSendButton(): boolean;
    setShouldShowSendButton(shouldShow: boolean): this;
    shouldShowOptionsButton(): boolean;
    setShouldShowOptionsButton(shouldShow: boolean): this;
    shouldUnfocusOnSend(): boolean;
    setShouldUnfocusOnSend(shouldUnfocusOnSend: boolean): this;
    getMaxMessages(): number;
    setMaxMessages(maxMessages: number): this;
    scrollToNewest(): Promise<void>;
    sendPinnedMessage(pinnedMessage: PinnedMessage): PinnedMessage;
    pinQuestRequirement(quest: QuestInstance, requirement?: RequirementInstance): IPinnedMessage | PinnedMessage | undefined;
    unpinMessage(pinnedMessage: PinnedMessage, time?: number): Promise<void>;
    protected onPlay(game: Game, isLoadingSave: boolean): void;
    onDisplayMessage(player: Player, message: IMessage): void;
    onWrittenNote(player: Player, id: number): void;
    onReadNote(player: Player, id: number): void;
    onFocusChat(): boolean;
    getDefaultFilterName(filter: MessageFilterDefault): string;
    private boundScreenEvents;
    protected onAppend(): void;
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
    private pinRequirementsFromQuest;
    private hasIncompletePinnedRequirementFromAnotherQuest;
    private showOptions;
    private scheduleShowMessage;
    private currentTurn?;
    private currentTurnComponent?;
    private getTurnGroup;
    private updateMessages;
    private messages;
    /**
     * Returns the basic context menu of messages, no matter what location it is in
     */
    private getMessagesContextMenu;
    /**
     * Runs a command that the user sent instead of sending it as a message.
     */
    private runCommand;
    /**
     * Returns `true` if the message should not be displayed.
     */
    private isMessageFilteredOut;
    /**
     * Event handler for when the filter button is clicked
     */
    private openFilterMenu;
    /**
     * Changes the message filter
     */
    setFilter(filterName?: string, skipRefresh?: boolean): void;
    getFilter(): string | undefined;
    private refreshLog;
    private onShowDialog;
    private onShowNote;
    private editFilters;
    private onFiltersEdited;
    private onFiltersReset;
}
export declare class PinnedMessage extends Button {
    readonly type: PinType;
    readonly id: any;
    constructor(type: PinType, id: any);
}
export {};
