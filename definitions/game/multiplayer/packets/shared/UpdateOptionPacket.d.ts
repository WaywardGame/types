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
import PlayerTargetedSharedPacket from "multiplayer/packets/PlayerTargetedSharedPacket";
import type { IOptions } from "save/data/ISaveDataGlobal";
export default class UpdateOptionPacket extends PlayerTargetedSharedPacket {
    id: keyof IOptions;
    value: boolean | number;
    isAllowedWhenPaused(): boolean;
    process(): void;
}