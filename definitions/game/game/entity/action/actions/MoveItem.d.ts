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
import { Action } from "game/entity/action/Action";
import type { IActionUsable } from "game/entity/action/IAction";
import { ActionArgument } from "game/entity/action/IAction";
import type Human from "game/entity/Human";
import type MerchantNPC from "game/entity/npc/npcs/Merchant";
import type { IMerchantBuyPrice } from "game/entity/npc/npcs/Merchant";
import type { IContainer } from "game/item/IItem";
import type Item from "game/item/Item";
import Translation from "language/Translation";
export interface IMoveItemBuyItemFromMerchantCanUse extends IActionUsable {
    type: "BuyItemFromMerchant";
    item: Item;
    merchant: MerchantNPC;
    targetContainer: IContainer;
    sellPrice: number;
}
export interface IMoveItemSellItemFromMerchantCanUse extends IActionUsable {
    type: "SellItemToMerchant";
    item: Item;
    merchant: MerchantNPC;
    targetContainer: IContainer;
    buyPrice: IMerchantBuyPrice;
}
export interface IMoveItemSingleItemCanUse extends IActionUsable {
    type: "MoveSingleItem";
    item: Item;
    targetContainer: IContainer;
    containerName: Translation | undefined;
}
export interface IMoveItemMultipleItemsCanUse extends IActionUsable {
    type: "MoveMultipleItems";
    fromContainer: IContainer;
    targetContainer: IContainer;
    containerName: Translation | undefined;
}
export type MoveItemCanUse = IMoveItemBuyItemFromMerchantCanUse | IMoveItemSellItemFromMerchantCanUse | IMoveItemSingleItemCanUse | IMoveItemMultipleItemsCanUse;
declare const _default: Action<[[ActionArgument.ItemNearbyIncludingTradeContainer, ActionArgument.Undefined], [ActionArgument.Container, ActionArgument.Undefined], [ActionArgument.ItemType, ActionArgument.Undefined], [ActionArgument.Quality, ActionArgument.Undefined], [ActionArgument.String, ActionArgument.Undefined]], Human<number>, void, MoveItemCanUse, [(Item | undefined)?, (IContainer | undefined)?, (import("game/item/IItem").ItemType | undefined)?, (import("../../../IObject").Quality | undefined)?, (string | undefined)?]>;
export default _default;
