/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { PacketType } from "@wayward/game/multiplayer/packets/IPacket";
import { Packet } from "@wayward/game/multiplayer/packets/Packet";
export default abstract class ClientPacket<T = void> extends Packet<T> {
    getType(): PacketType;
}
