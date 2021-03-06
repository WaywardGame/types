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
import { IMultiplayerWorldData } from "multiplayer/IMultiplayer";
import { ConnectionState } from "multiplayer/networking/IConnection";
import ClientPacket from "multiplayer/packets/ClientPacket";
export default class WorldPacket extends ClientPacket {
    data: IMultiplayerWorldData;
    getAllowedStates(): ConnectionState;
    process(): Promise<void>;
    protected getInitialBufferSize(): number;
}
