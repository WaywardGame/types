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
import type { ConnectionState } from "multiplayer/networking/IConnection";
export declare const reservedBytes = 5;
export declare enum PacketType {
    Client = 0,
    Server = 1,
    Shared = 2
}
export interface ISynchronizationCheckData {
    packetNumber?: number;
    beforeSyncChecks?: ISyncCheck;
    afterSyncChecks?: ISyncCheck;
    beforeSyncChecksHash?: number;
    afterSyncChecksHash?: number;
}
export declare type ISyncCheck = Record<number, Array<number | string>>;
export interface IPacket<T = any> {
    getAllowedStates(): ConnectionState;
    getArrayBuffer(id?: number): ArrayBuffer;
    getRegistrarId(): number;
    getDebugInfo(): string;
    getSynchronizationCheckData(): ISynchronizationCheckData;
    getType(): PacketType;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): T;
    processSerializedData(dataView: DataView): void;
    serializeData(): void;
}
export declare enum NetworkPropertyType {
    Bool = 0,
    Int8 = 1,
    Uint8 = 2,
    Uint8Array = 3,
    Uint16 = 4,
    Float64 = 5,
    Uint32NumberArray = 6,
    String = 7,
    Generic = 8,
    Item = 9,
    MovementIntent = 10,
    Vector2Array = 11
}
export interface INetworkedProperty {
    key: string;
    type: NetworkPropertyType;
    optional: boolean;
}
export declare function NetworkProperty(type: NetworkPropertyType): PropertyDecorator;
export declare function OptionalNetworkProperty(type: NetworkPropertyType): PropertyDecorator;
