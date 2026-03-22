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
import PlayerTargetedServerPacket from "@wayward/game/multiplayer/packets/PlayerTargetedServerPacket";
import type { ICurseVisualExploredStateIslandUpdates } from "@wayward/game/save/clientStore/clientData/ExploredMap";
export default class UpdateCurseVisualStatePacket extends PlayerTargetedServerPacket {
    static create(player: Player, updates: Map<string, ICurseVisualExploredStateIslandUpdates>): UpdateCurseVisualStatePacket;
    updates: Map<string, ICurseVisualExploredStateIslandUpdates>;
    getDebugInfo(): string;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
