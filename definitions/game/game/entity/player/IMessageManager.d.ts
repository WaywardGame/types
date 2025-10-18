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
import type Human from "@wayward/game/game/entity/Human";
import type Island from "@wayward/game/game/island/Island";
import type Dictionary from "@wayward/game/language/Dictionary";
import type { ISerializedTranslation, TranslationArg } from "@wayward/game/language/ITranslation";
import type Translation from "@wayward/game/language/Translation";
import type Message from "@wayward/game/language/dictionary/Message";
import type { IVector4 } from "@wayward/game/utilities/math/Vector4";
import type { IStringSection } from "@wayward/game/utilities/string/Interpolator";
import type Stream from "@wayward/goodstream";
export declare const CHAT_MESSAGE_MAX_LENGTH = 512;
export declare enum Source {
    /**
     * Every message
     */
    All = 0,
    /**
     * Messages referring to the actions you just took
     */
    Action = 1,
    /**
     * Messages pertaining to your allies (tamed creatures, NPCs, and other players (including in PVP))
     */
    Allies = 2,
    /**
     * Messages sent by a player
     */
    Chat = 3,
    /**
     * Messages pertaining to creatures or combat
     */
    Combat = 4,
    /**
     * Messages in response to a command
     */
    Command = 5,
    /**
     * Messages about creatures and creature actions
     */
    Creature = 6,
    /**
     * Messages referring to your equipment. Tools, armour, things breaking, etc.
     */
    Equipment = 7,
    /**
     * Any non-chat message
     */
    Game = 8,
    /**
     * Messages about item interactions of any kind
     */
    Item = 9,
    /**
     * Messages about the metagame — saving the game, exiting the game, pausing/unpausing, etc.
     */
    Meta = 10,
    /**
     * Messages pertaining to milestones
     */
    Milestone = 11,
    /**
     * Messages pertaining to multiplayer
     */
    Multiplayer = 12,
    /**
     * Messages regarding item gathering, harvesting and carving
     */
    Resource = 13,
    /**
     * Messages pertaining to skills that are raised
     */
    Skill = 14,
    /**
     * Messages pertaining to your wellbeing — stats, status effects, etc.
     */
    Wellbeing = 15,
    /**
     * "You felt your X increasing" messages
     */
    Stat = 16,
    /**
     * Messages for events that happen without direct player action that don't belong to other categories, such as happenings from tile events
     */
    Events = 17,
    /**
     * Trading-related messages
     */
    Trading = 18,
    /**
     * Messages from curse events
     */
    Curse = 19
}
export interface IMessage {
    id: number;
    source: Source[];
    time: number;
    turn: number;
    type?: MessageType;
    message: ISerializedTranslation;
}
export interface IPackedMessage {
    message: Message;
    args?: () => ArrayOr<TranslationArg>;
    type?: MessageType;
    sources?: Source | Source[];
}
export interface IMessageManager {
    getMessageHistory(): Stream<IMessage>;
    clear(): this;
    source(noGameSource: true, ...sources: Array<Source | false | undefined>): this;
    source(...sources: Array<Source | false | undefined>): this;
    type(type?: MessageType): this;
    ifVisible(canSee?: IVector4): this;
    ifOnIsland(island: Island): this;
    send(message: Message | Translation, ...args: TranslationArg[]): boolean;
    sendPacked(pack?: Message | Partial<IPackedMessage>, ...extraSources: Source[]): boolean;
    pruneMessageHistory(isLocalPlayer: boolean): boolean;
    ifIs(human: Human): this;
    ifIsNot(human: Human): this;
    addToHistory(messageHistoryItem: IMessageHistoryItem): void;
    /**
     * Signal that the message was sent to everyone
     */
    sentToAll(sentToAll?: boolean): this;
    upgrade(id: `${keyof typeof Dictionary}:${string}`, dictionary: Dictionary, entry: number, upgrader?: Translation.ITranslationUpgrader): this;
}
export interface IMessageHistoryItem {
    id: number;
    source: string[];
    time: number;
    turn: number;
    type?: MessageType;
    message: ISerializedTranslation | IStringSection[];
}
export declare enum MessageType {
    None = 0,
    Bad = 1,
    Good = 2,
    Miss = 3,
    Attack = 4,
    Stat = 5,
    Skill = 6,
    Warning = 7,
    Evil = 8
}
