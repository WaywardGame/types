/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Player from "game/entity/player/Player";
import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
export default class UiDataUpdatePacket extends PlayerTargetedServerPacket {
    static create(player: Player, hostId: string | number, updates: Record<string, any>): UiDataUpdatePacket;
    hostId: string | number;
    updates: any;
    process(): void;
}
