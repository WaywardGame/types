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
import ServerPacket from "multiplayer/packets/ServerPacket";
/**
 * The player sends this to the server every 5 seconds
 * If the server hasn't received this message for 15 seconds, the player is disconnected
 */
export default class KeepAlivePacket extends ServerPacket {
    getDebugInfo(): string;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
