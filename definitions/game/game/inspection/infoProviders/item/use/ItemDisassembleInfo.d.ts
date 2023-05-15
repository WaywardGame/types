/*!
 * Copyright 2011-2023 Unlok
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
import type Item from "game/item/Item";
declare const _default: UseInfo<{
    requiredItems: (import("../../../../item/IItem").ItemType | import("../../../../item/IItem").ItemTypeGroup)[];
    entityType: import("../../../../entity/IEntity").EntityType.Item;
    value?: Item | undefined;
    type: import("../../../../item/IItem").ItemType;
    description: import("../../../../item/IItem").IItemDescription;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Disassemble;
    union: import("game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Disassemble>;
    details: Set<symbol>;
}, ActionType.Disassemble, {
    getRequiredItems: () => import("../../../../../language/impl/TranslationImpl").default[];
}, Item>;
export default _default;
