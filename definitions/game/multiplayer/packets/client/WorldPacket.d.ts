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
import type { IMultiplayerWorldData } from "@wayward/game/multiplayer/IMultiplayer";
import { ConnectionState } from "@wayward/game/multiplayer/networking/IConnection";
import ClientPacket from "@wayward/game/multiplayer/packets/ClientPacket";
export default class WorldPacket extends ClientPacket<Promise<void>> {
    data: IMultiplayerWorldData;
    getDebugInfo(): string;
    getAllowedStates(): ConnectionState;
    process(): Promise<void>;
    protected getInitialBufferSize(): number;
}
