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
import Stream from "@wayward/goodstream/Stream";
import type Human from "game/entity/Human";
import type { IMessage, IMessageHistoryItem, IMessageManager, IPackedMessage } from "game/entity/player/IMessageManager";
import { MessageType, Source } from "game/entity/player/IMessageManager";
import type Player from "game/entity/player/Player";
import type Island from "game/island/Island";
import type Dictionary from "language/Dictionary";
import Message from "language/dictionary/Message";
import type { TranslationArg } from "language/ITranslation";
import Translation from "language/Translation";
import type { IVector4 } from "utilities/math/Vector4";
export declare class MessageManagerNoOp implements IMessageManager {
    private readonly history;
    getMessageHistory(): Stream<IMessage>;
    clear(): this;
    source(): this;
    type(): this;
    ifVisible(): this;
    ifOnIsland(island: Island): this;
    ifIs(player: Player): this;
    ifIsNot(player: Player): this;
    send(): boolean;
    sendPacked(): boolean;
    sentToAll(sentToAll?: boolean): this;
    pruneMessageHistory(isLocalPlayer: boolean): boolean;
    addToHistory(messageHistoryItem: IMessageHistoryItem): void;
    upgrade(): this;
}
export interface IMessageManagerOptions {
    shouldDisplayMessage(message: IMessage, id: number): boolean | undefined;
    onDisplayMessage(message: IMessage): void;
    getMessageStorageMax(isLocalPlayer: boolean): number;
}
export default class MessageManager implements IMessageManager {
    private readonly options;
    /**
     * Runs a callback with the message manager of every player. For sending messages, equivalent to the following:
     * ```ts
     * players.map(player => callback(player.messages)).some(sent => sent)
     * ```
     *
     * Example usage:
     * ```ts
     * MessageManager.toAll(message => message.source(Source.Wellbeing)
     * 	.type(MessageType.Bad)
     * 	.send(Message.EveryoneHasBecomeInfected, reason));
     * ```
     *
     * Note: When this is called from a client, it actually only displays the message to the client and syncs that with the server.
     * When called from the server, it is sent to every client.
     */
    static toAll(callback: (manager: IMessageManager, player: Player) => boolean): boolean;
    private readonly history;
    private lastMessageId;
    private _source;
    private _type;
    private _sentToAll;
    private canSend;
    private readonly _host;
    private get host();
    constructor(host: Player, options: IMessageManagerOptions);
    getMessageHistory(): Stream<IMessage>;
    /**
     * Cuts the message history down to the correct bounds (preferring the more recent messages)
     */
    pruneMessageHistory(isLocalPlayer: boolean): boolean;
    /**
     * Clears the entire message history.
     */
    clear(): this;
    /**
     * Sets the sources of the next message. Removes any existing sources.
     *
     * Includes `Source.All` by default, and NOT `Source.Game`
     */
    source(noGameSource: true, ...sources: Array<Source | false | undefined>): this;
    /**
     * Sets the sources of the next message. Removes any existing sources.
     *
     * Includes `Source.All` and `Source.Game` by default
     */
    source(...sources: Array<Source | false | undefined>): this;
    /**
     * Sets the type of the next message.
     */
    type(type?: MessageType): this;
    /**
     * If the position is not visible to this human, the message won't be sent.
     */
    ifVisible(canSee?: IVector4): this;
    /**
     * If this human is not on the given island, the message won't be sent.
     */
    ifOnIsland(island: Island): this;
    /**
     * If this human is not the given player, the message won't be sent.
     */
    ifIs(human: Human): this;
    /**
     * If this human is the given player, the message won't be sent.
     */
    ifIsNot(human: Human): this;
    /**
     * Sends a message, and adds it to the message history.
     * @param message The message to send.
     * @param args Arguments to interpolate the message with.
     *
     * Note: After sending a message, the message source, type, and human (if any) are reset.
     */
    send(message: Message | Translation, ...args: TranslationArg[]): boolean;
    sendPacked(pack: Partial<IPackedMessage>, ...extraSources: Source[]): boolean;
    addToHistory(messageHistoryItem: IMessageHistoryItem): void;
    /**
     * Signal that the message was sent to everyone
     */
    sentToAll(sentToAll?: boolean): this;
    private reset;
    upgrade(id: `${keyof typeof Dictionary}:${string}`, dictionary: Dictionary, entry: number): this;
}
