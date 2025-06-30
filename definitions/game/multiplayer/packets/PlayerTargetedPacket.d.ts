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
import type Player from "@wayward/game/game/entity/player/Player";
import { Packet } from "@wayward/game/multiplayer/packets/Packet";
export default abstract class PlayerTargetedPacket extends Packet {
    pid: number;
    player: Player;
    abstract setPlayer(): void;
    preProcess(): void;
}
