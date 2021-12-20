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
import type { PacketTarget } from "multiplayer/IMultiplayer";
import { ConnectionState } from "multiplayer/networking/IConnection";
import IndexedPacket from "multiplayer/packets/IndexedPacket";
import type { IPacket, ISynchronizationCheckData } from "multiplayer/packets/IPacket";
export declare abstract class Packet<T = void> extends IndexedPacket implements IPacket<T> {
    protected synchronizationCheckData: ISynchronizationCheckData;
    private _arrayBuffer;
    getDebugInfo(): string;
    getAllowedStates(): ConnectionState;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    getSynchronizationCheckData(): ISynchronizationCheckData;
    getArrayBuffer(id?: number): ArrayBuffer;
    processData(dataView: DataView): void;
    abstract process(): T;
    send(exclude?: PacketTarget): void;
    sendTo(to: PacketTarget, force?: boolean): void;
    processAndSend(exclude?: PacketTarget): T | undefined;
    protected getInitialBufferSize(): number;
    protected getIndexSize(): number;
    protected preWriteData(): void;
    protected writeData(): void;
    protected preReadData(): void;
    protected readData(): void;
    protected preProcess(): void;
    private readSynchronizationCheck;
    private writeSynchronizationCheck;
}
