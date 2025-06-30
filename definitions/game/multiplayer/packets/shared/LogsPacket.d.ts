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
import PlayerTargetedSharedPacket from "@wayward/game/multiplayer/packets/PlayerTargetedSharedPacket";
import { LogLineType } from "@wayward/utilities/Log";
export default class LogsPacket extends PlayerTargetedSharedPacket {
    logs: string;
    logType: LogLineType;
    getDebugInfo(): string;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
