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
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import type { IUsableActionDynamicDefinition } from "@wayward/game/game/entity/action/usable/actions/UsableActionsDynamic";
import UsableActionsDynamic from "@wayward/game/game/entity/action/usable/actions/UsableActionsDynamic";
import { type ActionId, type IUsableActionItemRequirement, type IUsableActionPossibleUsing, type IUsableActionRequirements } from "@wayward/game/game/entity/action/usable/IUsableAction";
import UsableActionItemFinder from "@wayward/game/game/entity/action/usable/UsableActionItemFinder";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IGetBestItemsOptions } from "@wayward/game/game/item/IItemManager";
import type Item from "@wayward/game/game/item/Item";
export interface IUseItemAction extends IUsableActionDynamicDefinition {
    canDamageItem?: true;
    consumesItem?: true;
    allowAnyItems?: true;
    allowNoItem?: true;
    hasNoBestItem?: true;
    skipUseCheck?: true;
    filterFind?(item: Item, player: Player, provided?: IUsableActionPossibleUsing): boolean;
    validate?(item: Item, player: Player): boolean;
    initialiseFinder?(finder: UsableActionItemFinder): any;
    onFinderTrack?(finder: UsableActionItemFinder): any;
    onFinderDispose?(finder: UsableActionItemFinder): any;
    requiresQuality?: true;
    requiresType?: true;
}
export declare namespace IUseItemAction {
    function getGetItemOptions(actionType: ActionType, useItemAction?: Omit<IUseItemAction, keyof IUsableActionDynamicDefinition>): Partial<IGetBestItemsOptions>;
    function getItemRequirement(actionType: ActionType, useItemAction?: Omit<IUseItemAction, keyof IUsableActionDynamicDefinition>, getItemOptions?: Partial<IGetBestItemsOptions>): IUsableActionItemRequirement;
    function getPriority(action: ActionId, using: IUsableActionPossibleUsing): number | undefined;
}
declare const _default: UsableActionsDynamic<IUseItemAction, IUsableActionRequirements>;
export default _default;
