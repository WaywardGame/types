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
import type { StatusChangeReason } from "@wayward/game/game/entity/IEntity";
import Status from "@wayward/game/game/entity/status/Status";
export default class Frenzied extends Status {
    isActive(): boolean;
    add(reason?: StatusChangeReason, level?: number, force?: boolean, oldLevel?: number): this;
}
