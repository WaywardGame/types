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
import type { IConnection } from "@wayward/game/multiplayer/networking/IConnection";
import type { IPacket } from "@wayward/game/multiplayer/packets/IPacket";
import type { IRegistrarItem } from "@wayward/utilities/Registrar";
import Registrar from "@wayward/utilities/Registrar";
export interface IPacketClass extends IRegistrarItem {
    new (connection?: IConnection): IPacket;
}
export declare const packetRegistrar: Registrar<IPacketClass>;
