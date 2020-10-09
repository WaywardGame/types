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
import { PacketType } from "multiplayer/packets/IPacket";
import PlayerTargetedPacket from "multiplayer/packets/PlayerTargetedPacket";
export default abstract class PlayerTargetedClientPacket extends PlayerTargetedPacket {
    setPlayer(): void;
    getType(): PacketType;
    protected preWriteData(): void;
    protected preReadData(): void;
}
