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
import { ConnectionState } from "multiplayer/networking/IConnection";
import { IRandomHistory } from "utilities/random/Random";
export declare const reservedBytes = 5;
export declare enum PacketType {
    Client = 0,
    Server = 1,
    Shared = 2
}
export interface ISynchronizationCheckData {
    packetNumber?: number;
    afterRandomHistory?: IRandomHistory[];
    beforeSyncChecks?: ISyncCheck;
    afterSyncChecks?: ISyncCheck;
}
export declare type ISyncCheck = Record<number, Array<number | string>>;
export interface IPacket {
    getAllowedStates(): ConnectionState;
    getArrayBuffer(id?: number): ArrayBuffer;
    getRegistrarId(): number;
    getDebugInfo(): string;
    getSynchronizationCheckData(): ISynchronizationCheckData;
    getType(): PacketType;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): any;
    processData(dataView: DataView): void;
}
export declare enum NetworkPropertyType {
    Bool = 0,
    Int8 = 1,
    Uint8 = 2,
    Uint16 = 3,
    Float64 = 4,
    Uint32NumberArray = 5,
    String = 6,
    Container = 7,
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
