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
import type { IHashedSyncCheck } from "@wayward/game/multiplayer/packets/IPacket";
import ServerPacket from "@wayward/game/multiplayer/packets/ServerPacket";
/**
 * The player sends this to the server when they have desynced
 */
export default class DesyncPacket extends ServerPacket {
    packetId: number;
    packetDebugInfo: string;
    hashedSyncCheck: IHashedSyncCheck;
    checkBefore: boolean;
    shouldDisconnect: boolean;
    logs: string;
    getDebugInfo(): string;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
