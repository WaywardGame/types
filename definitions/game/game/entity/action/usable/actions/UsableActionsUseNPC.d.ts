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
import type { IUsableActionDynamicDefinition } from "@wayward/game/game/entity/action/usable/actions/UsableActionsDynamic";
import UsableActionsDynamic from "@wayward/game/game/entity/action/usable/actions/UsableActionsDynamic";
import type { IUsableActionRequirements, IUsableActionUsing, ReturnableUsableActionUsability } from "@wayward/game/game/entity/action/usable/IUsableAction";
import type Player from "@wayward/game/game/entity/player/Player";
export interface IUseNPCAction extends IUsableActionDynamicDefinition {
    allowNoNPC?: true;
    isUsable?(player: Player, using: IUsableActionUsing<IUsableActionRequirements>): ReturnableUsableActionUsability;
}
declare const _default: UsableActionsDynamic<IUseNPCAction, IUsableActionRequirements>;
export default _default;
