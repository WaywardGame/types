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
import { ActionType } from "game/entity/action/IAction";
import type { IUsableActionDynamicDefinition } from "game/entity/action/usable/actions/UsableActionsDynamic";
import UsableActionsDynamic from "game/entity/action/usable/actions/UsableActionsDynamic";
import type { IUsableActionRequirement, IUsableActionRequirements } from "game/entity/action/usable/UsableAction";
import type { IGetBestItemsOptions } from "game/item/IItemManager";
import type Item from "game/item/Item";
export interface IUseItemAction extends IUsableActionDynamicDefinition {
    canDamageItem?: true;
    allowProtectedItems?: true;
    allowAnyItems?: true;
    allowNoItem?: true;
    hasNoBestItem?: true;
}
export declare namespace IUseItemAction {
    function getGetItemOptions(actionType: ActionType, useItemAction?: Omit<IUseItemAction, keyof IUsableActionDynamicDefinition>): Partial<IGetBestItemsOptions>;
    function getItemRequirement(actionType: ActionType, useItemAction?: Omit<IUseItemAction, keyof IUsableActionDynamicDefinition>, getItemOptions?: Partial<IGetBestItemsOptions>): IUsableActionRequirement<Item>;
}
declare const _default: UsableActionsDynamic<IUseItemAction, IUsableActionRequirements>;
export default _default;