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
import type { MatchmakingMessageData } from "@wayward/game/multiplayer/matchmaking/IMatchmaking";
import type { IPacket } from "@wayward/game/multiplayer/packets/IPacket";
export declare enum ConnectionState {
    Connecting = 1,
    Connected = 2,
    QueuingPackets = 4,
    CatchingUp = 8,
    Ready = 16,
    Closing = 32,
    Closed = 64,
    All = 127
}
export interface IConnection {
    name: string;
    maxMessageSize: number;
    playerIdentifier: string | undefined;
    clientSecret: string;
    playerSteamId: string | undefined;
    matchmakingIdentifier: string;
    pid?: number;
    buffer?: Uint8Array;
    bufferOffset?: number;
    bufferPacketId?: number;
    lastPacketNumberSent?: number;
    lastPacketNumberReceived?: number;
    readonly isConnected: boolean;
    readonly isLocalPlayer: boolean;
    getState(): ConnectionState;
    close(closeImmediately: boolean): void;
    addConnectionTimeout(): void;
    addKeepAliveTimeout(): void;
    addTimeout(milliseconds: number, callback: () => void): void;
    clearTimeout(): boolean;
    processMatchmakingMessage(message: ArrayBuffer | MatchmakingMessageData): Promise<boolean>;
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
     * Sends data to the connection
     * @param data Data to send
     * @returns True when sent, false when it was not sent and should be retried. Throws an error if something very bad happened
     */
    send(data: Uint8Array, byteOffset: number, length?: number): boolean;
    setState(state: ConnectionState): void;
    sendKeepAlive(): void;
}
export interface IQueuedData {
    data: ArrayBufferLike;
    byteOffset: number;
    packetNumber?: number;
    retries?: number;
}
