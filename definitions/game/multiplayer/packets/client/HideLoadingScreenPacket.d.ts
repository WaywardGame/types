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
import type { Load } from "@wayward/game/game/meta/Loading";
import ClientPacket from "@wayward/game/multiplayer/packets/ClientPacket";
export default class HideLoadingScreenPacket extends ClientPacket {
    load: Load;
    getDebugInfo(): string;
    isSyncCheckEnabled(): boolean;
    process(): void;
}
