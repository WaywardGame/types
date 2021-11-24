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
import type { IConnection } from "multiplayer/networking/IConnection";
import type { IPacket } from "multiplayer/packets/IPacket";
import type { IRegistrarItem } from "utilities/Registrar";
import Registrar from "utilities/Registrar";
export interface IPacketClass extends IRegistrarItem {
    new (connection?: IConnection): IPacket;
}
export declare const registrar: Registrar<IPacketClass>;
