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
    protected writeData(): void;
    protected readData(): void;
    process(): void;
    private writeCurseVisualStateUpdate;
    private readCurseVisualStateUpdate;
    private writeOptionalUint32NumberArray;
    private readOptionalUint32NumberArray;
    private writeNullableInt8;
    private readNullableInt8;
    private writeNullableUint16Vector2;
    private readNullableUint16Vector2;
}
