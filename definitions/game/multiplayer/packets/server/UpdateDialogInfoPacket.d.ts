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
import type { IDialogInfo } from "ui/old/IOldUi";
export default class UpdateDialogInfoPacket extends PlayerTargetedServerPacket {
    index: string | number;
    info: IDialogInfo;
    getDebugInfo(): string;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
