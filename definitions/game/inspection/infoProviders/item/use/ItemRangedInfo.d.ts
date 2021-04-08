/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { ActionType } from "game/entity/action/IAction";
import UseInfo from "game/inspection/infoProviders/UseInfo";
import Item from "game/item/Item";
declare const _default: UseInfo<{
    ranged: import("../../../../item/IItem").IRanged;
    objectType: import("../../../../IGame").CreationId.Item;
    value: Item;
    description: import("../../../../item/IItem").IItemDescription;
    action: ActionType.Cast | ActionType.Fire;
    union: import("game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Cast | ActionType.Fire>;
}, ActionType.Cast | ActionType.Fire, {}, Item>;
export default _default;
