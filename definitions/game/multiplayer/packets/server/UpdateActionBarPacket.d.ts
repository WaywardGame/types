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
import PlayerTargetedServerPacket from "multiplayer/packets/PlayerTargetedServerPacket";
import type { IActionBarSlotData } from "ui/screen/screens/game/static/actions/IActionBar";
export default class UpdateActionBarPacket extends PlayerTargetedServerPacket {
    slots?: Uint8Array;
    data?: IActionBarSlotData[];
    enabled?: boolean;
    getDebugInfo(): string;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
