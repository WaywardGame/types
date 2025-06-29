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
 * This should be the last packet the player receives before they are caught up
 * Tell the server to mark us as ready
 */
export default class CaughtUpPacket extends ClientPacket {
    getDebugInfo(): string;
    process(): void;
}
