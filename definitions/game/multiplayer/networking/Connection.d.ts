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
import type { IMatchmakingInfo, MatchmakingMessageData } from "@wayward/game/multiplayer/matchmaking/IMatchmaking";
import type { IConnection } from "@wayward/game/multiplayer/networking/IConnection";
import { ConnectionState } from "@wayward/game/multiplayer/networking/IConnection";
import type { IPacket } from "@wayward/game/multiplayer/packets/IPacket";
import Log from "@wayward/utilities/Log";
export declare abstract class Connection implements IConnection {
    protected readonly log: Log;
    abstract name: string;
    playerIdentifier: string | undefined;
    playerSteamId: string | undefined;
    matchmakingIdentifier: string;
    clientSecret: string;
    pid?: number;
    buffer?: Uint8Array;
    bufferOffset?: number;
    bufferPacketId?: number;
    lastPacketNumberSent?: number;
    lastPacketNumberReceived?: number;
    protected _matchmakingInfo: IMatchmakingInfo | undefined;
    private _state;
    /**
     * Packets are queued while the player is connected.
     * They are dequeued once the client loads the world - catch up logic
     */
    private readonly _queuedPackets;
    /**
     * Data is queued when packets are "sent" the client.
     * Used for flow control
     */
    private _queuedData;
    private _timeoutId;
    private _keepAliveTimeoutId;
    constructor(matchmakingInfo: IMatchmakingInfo | undefined, log: Log);
    get isLocalPlayer(): boolean;
    close(closeImmediately: boolean): void;
    private completeClosing;
    addConnectionTimeout(): void;
    addKeepAliveTimeout(): void;
    addTimeout(milliseconds: number, callback: () => void): void;
    clearTimeout(): boolean;
    /**
     * Sends a ping packet to the server every so often.
     * The server should send back a pong packet.
     */
    sendKeepAlive(): void;
    getState(): ConnectionState;
    setState(state: ConnectionState): void;
    /**
     * Queues a packet to be sent soon
     * Note: packets are serialized when queued
     */
    queuePacket(packet: IPacket): void;
    /**
     * Queues data to be sent soon
     */
    protected queuePacketData(data: ArrayBufferLike, packetNumber?: number): void;
    /**
     * Clears queued packets
     */
    clearQueuedPackets(): void;
    /**
     * Sends a packet to the connection w/ flow control
     */
    sendPacket(packet: IPacket): void;
    /**
     * Sends queued packets w/ flow control
     */
    processQueuedPackets(): void;
    /**
     * Sends queued data to the connection w/ flow control
     */
    private _processQueuedData;
    private _serializePacket;
    abstract readonly maxMessageSize: number;
    abstract get isConnected(): boolean;
    protected abstract onClosing(): void;
    protected abstract onClosed(): void;
    abstract send(data: Uint8Array, byteOffset: number, length?: number): boolean;
    abstract processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
    protected _clearKeepAliveInterval(): void;
}
