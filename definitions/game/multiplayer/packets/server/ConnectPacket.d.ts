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
import type { IPlayerOptions } from "game/IGame";
import { ConnectionState } from "multiplayer/networking/IConnection";
import ServerPacket from "multiplayer/packets/ServerPacket";
export default class ConnectPacket extends ServerPacket {
    playerOptions: IPlayerOptions;
    getAllowedStates(): ConnectionState;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
