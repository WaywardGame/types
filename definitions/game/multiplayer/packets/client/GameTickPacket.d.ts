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
import ClientPacket from "@wayward/game/multiplayer/packets/ClientPacket";
/**
 * Ticks time when the game is in simulated or real-time mode
 */
export default class GameTickPacket extends ClientPacket {
    getDebugInfo(): string;
    process(): void;
}
