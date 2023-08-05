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
import type Player from "game/entity/player/Player";
import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
export default class UiDataUpdatePacket extends PlayerTargetedServerPacket {
    static create(player: Player, updates: Map<string | number, Record<string, any>>): UiDataUpdatePacket;
    updates: Map<string | number, Record<string, any>>;
    getDebugInfo(): string;
    process(): void;
}
