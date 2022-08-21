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
import type { IUiActionDynamicDefinition } from "ui/screen/screens/game/static/actions/actions/UiActionsDynamic";
import UiActionsDynamic from "ui/screen/screens/game/static/actions/actions/UiActionsDynamic";
import type { IUiActionRequirements } from "ui/screen/screens/game/static/actions/UiAction";
export interface IUseNPCAction extends IUiActionDynamicDefinition {
    allowNoNPC?: true;
}
declare const _default: UiActionsDynamic<IUseNPCAction, IUiActionRequirements>;
export default _default;
