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
import type Entity from "@wayward/game/game/entity/Entity";
import { PacketType } from "@wayward/game/multiplayer/packets/IPacket";
import IndexedPacket from "@wayward/game/multiplayer/packets/IndexedPacket";
export declare abstract class ActionArgumentCustom<T> extends IndexedPacket {
    validateObject(value: unknown): value is T extends object ? Partial<T> : never;
    abstract validate(executor: Entity | undefined, value: unknown): value is T;
    abstract read(executor: Entity | undefined): T;
    abstract write(executor: Entity | undefined, value: T): void;
    protected getIndexSize(): number;
    getType(): PacketType;
    writeTo(packet: IndexedPacket, value: T): void;
    readFrom(packet: IndexedPacket): T;
}
