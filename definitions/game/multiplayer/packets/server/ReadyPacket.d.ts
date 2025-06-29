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
import { ConnectionState } from "@wayward/game/multiplayer/networking/IConnection";
import ServerPacket from "@wayward/game/multiplayer/packets/ServerPacket";
/**
 * The player sends this to the server when they are caught up
 * We can now mark the player as ready
 */
export default class ReadyPacket extends ServerPacket {
    getDebugInfo(): string;
    getAllowedStates(): ConnectionState;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
