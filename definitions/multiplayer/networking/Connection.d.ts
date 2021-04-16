/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { IMatchmakingInfo, MatchmakingMessageData } from "multiplayer/matchmaking/IMatchmaking";
import { ConnectionState, IConnection } from "multiplayer/networking/IConnection";
import { IPacket } from "multiplayer/packets/IPacket";
export declare abstract class Connection implements IConnection {
    abstract name: string;
    playerIdentifier: string | undefined;
    playerSteamId: string | undefined;
    matchmakingIdentifier: string;
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
    private readonly _queuedData;
    private _timeoutId;
    private _keepAliveTimeoutId;
    constructor(matchmakingInfo: IMatchmakingInfo | undefined);
    close(): void;
    addConnectionTimeout(): void;
    addTimeout(milliseconds: number, callback: () => void): void;
    clearTimeout(): boolean;
    addKeepAliveTimeout(): void;
    sendKeepAlive(): void;
    getState(): ConnectionState;
    setState(state: ConnectionState): void;
    serializePacket(packet: IPacket): ArrayBuffer;
    /**
     * Queues a packet to be sent soon
     * Note: packets are serialized when queued
     */
    queuePacket(packet: IPacket): void;
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
     * Sends data to the connection w/ flow control
     */
    private _queueData;
    /**
     * Sends queued data to the connection w/ flow control
     */
    private _processQueuedData;
    abstract isConnected(): boolean;
    abstract send(data: ArrayBuffer | Uint8Array): void;
    abstract processMatchmakingMessage(message: MatchmakingMessageData): Promise<boolean>;
    private _clearKeepAliveInterval;
}
