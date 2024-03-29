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
import type { Stat } from "game/entity/IStats";
import UseInfo from "game/inspection/infoProviders/UseInfo";
import type Item from "game/item/Item";
import type Tooltip from "ui/tooltip/Tooltip";
declare const _default: UseInfo<{
    onConsume: [Stat, number][];
    skill: import("../../../../entity/IHuman").SkillType | undefined;
    itemQuality: import("../../../../IObject").Quality | undefined;
    qualityBonus: number;
    skillBonus: number;
    magicalBonus: number;
    entityType: import("../../../../entity/IEntity").EntityType.Item;
    value?: Item | undefined;
    type: import("game/item/IItem").ItemType;
    description: import("game/item/IItem").IItemDescription;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther;
    union: import("game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther>;
    details: Set<symbol>;
}, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther, {
    generateUseConsumeTooltip: () => (tooltip: Tooltip, stat: Stat, base: number) => Tooltip;
}, Item>;
export default _default;
