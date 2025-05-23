/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { IslandId } from "@wayward/game/game/island/IIsland";
import ClientPacket from "@wayward/game/multiplayer/packets/ClientPacket";
export default class LoadIslandPacket extends ClientPacket<Promise<void>> {
    islandId: IslandId;
    getDebugInfo(): string;
    isSyncCheckEnabled(): boolean;
    process(): Promise<void>;
}
