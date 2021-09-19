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
import UseInfo from "game/inspection/infoProviders/UseInfo";
import Item from "game/item/Item";
declare const _default: UseInfo<{
    damage: number;
    objectType: import("../../../../IGame").CreationId.Item;
    value?: Item | undefined;
    type: import("../../../../item/IItem").ItemType;
    description: import("../../../../item/IItem").IItemDescription;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Build;
    union: import("game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Build>;
    details: Set<symbol>;
}, ActionType.Build, {}, Item>;
export default _default;
