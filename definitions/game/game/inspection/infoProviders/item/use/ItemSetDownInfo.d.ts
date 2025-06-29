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
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type Item from "@wayward/game/game/item/Item";
declare const _default: UseInfo<{
    civilizationScore: number | undefined;
    growingSpeed: number | undefined;
    entityType: import("../../../../entity/IEntity").EntityType.Item;
    value?: Item | undefined;
    type: import("../../../../item/IItem").ItemType;
    description: Readonly<import("../../../../item/IItem").IItemDescription>;
    quality: import("../../../../IObject").Quality;
    action: ActionType.SetDown;
    union: import("@wayward/game/game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.SetDown>;
    details: Set<symbol>;
}, ActionType.SetDown, Record<"getCivilizationScore", () => LabelledValue | undefined> & Record<"getGrowingSpeed", () => LabelledValue | undefined>, Item>;
export default _default;
