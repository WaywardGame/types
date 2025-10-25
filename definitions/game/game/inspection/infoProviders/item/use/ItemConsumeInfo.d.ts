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
import { Stat } from "@wayward/game/game/entity/IStats";
import UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type Item from "@wayward/game/game/item/Item";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
declare const _default: UseInfo<{
    onConsume: [Stat, number][];
    skill: import("../../../../entity/skill/ISkills").SkillType | undefined;
    entityType: import("../../../../entity/IEntity").EntityType.Item;
    value?: Item | undefined;
    type: import("@wayward/game/game/item/IItem").ItemType;
    description: Readonly<import("@wayward/game/game/item/IItem").IItemDescription>;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther;
    union: import("@wayward/game/game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther>;
    details: Set<symbol>;
}, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther, Record<"getSkillBonus", () => number> & Record<"getQualityBonus", () => number> & Record<"getMagicalBonus", () => number> & Record<"getPotencyBonuses", (stat: Stat) => {
    amount: number;
    items: Item[];
} | undefined> & Record<"generateUseConsumeTooltip", () => (tooltip: Tooltip, stat: Stat, base: number) => Tooltip>, Item>;
export default _default;
