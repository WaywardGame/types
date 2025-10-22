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
import type { StatusType } from "@wayward/game/game/entity/status/IStatus";
import type { IGameOptionsStatus } from "@wayward/game/game/options/IGameOptions";
import { CustomModifierDefinition } from "@wayward/game/game/options/modifiers/custom/ICustomModifier";
declare const _default: (status: StatusType) => CustomModifierDefinition<[options: Partial<IGameOptionsStatus>]>;
export default _default;
