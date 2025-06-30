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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type Item from "@wayward/game/game/item/Item";
declare const _default: UseInfo<{
    lightSource: number | undefined;
    entityType: EntityType.Item;
    value?: Item | undefined;
    type: import("@wayward/game/game/item/IItem").ItemType;
    description: Readonly<import("@wayward/game/game/item/IItem").IItemDescription>;
    quality: import("../../../IObject").Quality;
    action: ActionType.StartFire | ActionType.Ignite | ActionType.Equip;
    union: import("@wayward/game/game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.StartFire | ActionType.Ignite | ActionType.Equip>;
    details: Set<symbol>;
} | {
    lightSource: number;
    entityType: EntityType.Doodad;
    value?: Doodad | undefined;
    type: import("../../../doodad/IDoodad").DoodadType;
    description: Readonly<import("../../../doodad/IDoodad").IDoodadDescription>;
    quality: import("../../../IObject").Quality;
    action: ActionType.StartFire | ActionType.Ignite | ActionType.Equip;
    union: import("@wayward/game/game/inspection/infoProviders/UseInfo").IUseInfoBase<Doodad, ActionType.StartFire | ActionType.Ignite | ActionType.Equip>;
    details: Set<symbol>;
}, ActionType.StartFire | ActionType.Ignite | ActionType.Equip, {}, Doodad | Item>;
export default _default;
