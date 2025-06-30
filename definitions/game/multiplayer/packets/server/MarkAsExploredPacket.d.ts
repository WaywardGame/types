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
import PlayerTargetedServerPacket from "@wayward/game/multiplayer/packets/PlayerTargetedServerPacket";
/**
 * Tells the server to mark points as explored
 */
export default class MarkAsExploredPacket extends PlayerTargetedServerPacket {
    points: Uint16Array;
    z: number;
    getDebugInfo(): string;
    isSyncCheckEnabled(): boolean;
    process(): void;
}
