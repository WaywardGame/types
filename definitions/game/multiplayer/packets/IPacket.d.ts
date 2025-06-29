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
import type { MultiplayerSyncCheck } from "@wayward/game/multiplayer/IMultiplayer";
import type { ConnectionState } from "@wayward/game/multiplayer/networking/IConnection";
export declare const reservedBytes = 5;
export declare enum PacketType {
    Client = 0,
    Server = 1,
    Shared = 2
}
export interface ISynchronizationCheckData {
    packetNumber?: number;
    beforeEnabledSyncChecksHash?: number;
    afterEnabledSyncChecksHash?: number;
    beforeSyncChecksHash?: number;
    afterSyncChecksHash?: number;
}
export interface ISyncCheck {
    id: MultiplayerSyncCheck;
    value: string | number;
}
export type SyncChecks = ISyncCheck[];
export interface IHashedSyncCheck {
    hashServer: number;
    hashClient: number;
    syncCheck: SyncChecks;
    type: "enabled" | "universal";
}
export interface IPacket<T = any> {
    getAllowedStates(): ConnectionState;
    getArrayBuffer(id?: number): ArrayBufferLike;
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
    Uint16Array = 5,
    Float64 = 6,
    Uint32NumberArray = 7,
    String = 8,
    Generic = 9,
    Item = 10,
    MovementIntent = 11,
    Vector2Array = 12
}
export interface INetworkedProperty {
    key: string;
    type: NetworkPropertyType;
    optional: boolean;
}
export declare function NetworkProperty(type: NetworkPropertyType): PropertyDecorator;
export declare function OptionalNetworkProperty(type: NetworkPropertyType): PropertyDecorator;
