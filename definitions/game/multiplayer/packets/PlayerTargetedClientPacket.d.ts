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
import { PacketType } from "@wayward/game/multiplayer/packets/IPacket";
import PlayerTargetedPacket from "@wayward/game/multiplayer/packets/PlayerTargetedPacket";
export default abstract class PlayerTargetedClientPacket extends PlayerTargetedPacket {
    setPlayer(): void;
    getType(): PacketType;
    protected preWriteData(): void;
    protected preReadData(): void;
}
