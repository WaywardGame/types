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
import PlayerTargetedServerPacket from "@wayward/game/multiplayer/packets/PlayerTargetedServerPacket";
import type { IContainerSortInfo, IDialogInfo } from "@wayward/game/ui/old/IOldUi";
export declare enum UpdateUiInfoPacketType {
    DialogInfo = 0,
    DialogContainerInfo = 1,
    ContainerSortInfo = 2
}
/**
 * Updates a clients UI data (for old ui)
 */
export default class UpdateUiInfoPacket extends PlayerTargetedServerPacket {
    type: UpdateUiInfoPacketType;
    index: string | number;
    info: IDialogInfo;
    containerSortInfo: IContainerSortInfo;
    getDebugInfo(): string;
    isSyncCheckEnabled(): boolean;
    isAllowedWhenPaused(): boolean;
    process(): void;
}
