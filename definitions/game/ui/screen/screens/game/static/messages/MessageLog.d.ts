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
import type { IMessage } from "@wayward/game/game/entity/player/IMessageManager";
import { SortDirection } from "@wayward/game/save/ISaveManager";
import Button from "@wayward/game/ui/component/Button";
import Component from "@wayward/game/ui/component/Component";
import Text from "@wayward/game/ui/component/Text";
import type Stream from "@wayward/goodstream/Stream";
export declare const MESSAGE_LOG_LENGTH_MIN = 25;
export declare const MESSAGE_LOG_LENGTH_EXPAND = 25;
export declare const MESSAGE_LOG_LENGTH_MAX: number;
export interface IMessageLogDescription {
    getMessages(): Stream<IMessage>;
    getDirection(): SortDirection;
    /**
     * Provide this method to filter the messages that appear in this message log.
     *
     * Return a **truthy** value to **show** the message, or a **falsy** value to **hide** it.
     */
    filter?(message: IMessage): any;
}
export declare enum MessageLogClasses {
    Main = "message-log",
    Content = "message-log-content",
    Content_Reversed = "message-log-content--reversed",
    Content_Anchored = "message-log-content--anchored",
    TurnGroup = "message-log-turn-group",
    TurnGroupTimestamp = "message-log-turn-group-timestamp",
    TurnGroupTimestampRealtime = "message-log-turn-group-timestamp-realtime",
    TurnGroupTimestampTurn = "message-log-turn-group-timestamp-turn",
    TurnGroupContent = "message-log-turn-group-content",
    Message = "message-log-message",
    ButtonShowNewest = "message-log-button-show-newest"
}
export default class MessageLog extends Component {
    readonly description: IMessageLogDescription;
    readonly content: Component<HTMLElement>;
    readonly buttonShowNewMessages: Button;
    readonly turnGroups: MessageLogTurnGroup[];
    private direction;
    private length;
    private newMessages;
    private scrollingToNewest;
    get messages(): MessageComponent[];
    get isAnchored(): boolean;
    constructor(description: IMessageLogDescription);
    clip(): void;
    reset(refresh?: boolean): void;
    refresh(): void;
    scrollToNewest(behavior?: ScrollBehavior): void;
    protected onFastForwardStart(): void;
    protected onFastForwardEnd(): void;
    protected onClearMessages(): void;
    protected onResize(): void;
    private height;
    private lastScroll;
    private queueUpdateScroll;
    private updateScroll;
    private refreshDirection;
    private refreshMessages;
}
declare class MessageLogTurnGroup extends Component {
    readonly timestampRealTime: Text;
    readonly timestampTurn: Text;
    readonly content: Component<HTMLElement>;
    readonly messages: MessageComponent[];
    readonly turn: number;
    constructor(messages: IMessage[]);
    add(...messages: IMessage[]): number;
}
export declare class MessageComponent extends Component {
    readonly message: IMessage;
    constructor(message: IMessage);
    toString(): string;
}
export {};
