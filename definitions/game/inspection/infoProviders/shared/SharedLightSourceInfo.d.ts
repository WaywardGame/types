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
import Doodad from "game/doodad/Doodad";
import { ActionType } from "game/entity/action/IAction";
import { CreationId } from "game/IGame";
import UseInfo from "game/inspection/infoProviders/UseInfo";
import Item from "game/item/Item";
declare const _default: UseInfo<{
    lightSource: number;
    objectType: CreationId.Item;
    value?: Item | undefined;
    type: import("game/item/IItem").ItemType;
    description: import("game/item/IItem").IItemDescription;
    quality: import("../../../IObject").Quality;
    action: ActionType.StartFire | ActionType.Ignite | ActionType.Equip;
    union: import("game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.StartFire | ActionType.Ignite | ActionType.Equip>;
    details: Set<symbol>;
} | {
    lightSource: number;
    objectType: CreationId.Doodad;
    value?: Doodad | undefined;
    type: import("../../../doodad/IDoodad").DoodadType;
    description: import("../../../doodad/IDoodad").IDoodadDescription;
    quality: import("../../../IObject").Quality;
    action: ActionType.StartFire | ActionType.Ignite | ActionType.Equip;
    union: import("game/inspection/infoProviders/UseInfo").IUseInfoBase<Doodad, ActionType.StartFire | ActionType.Ignite | ActionType.Equip>;
    details: Set<symbol>;
}, ActionType.StartFire | ActionType.Ignite | ActionType.Equip, {}, Doodad | Item>;
export default _default;
