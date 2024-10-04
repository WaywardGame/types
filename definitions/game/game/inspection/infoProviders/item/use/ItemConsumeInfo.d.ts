/*!
 * Copyright 2011-2024 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { SkillType } from "@wayward/game/game/entity/IHuman";
import type { Stat } from "@wayward/game/game/entity/IStats";
import UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type Item from "@wayward/game/game/item/Item";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
declare const _default: UseInfo<{
    onConsume: [Stat, number][];
    skill: SkillType;
    entityType: import("../../../../entity/IEntity").EntityType.Item;
    value?: Item | undefined;
    type: import("@wayward/game/game/item/IItem").ItemType;
    description: Readonly<import("@wayward/game/game/item/IItem").IItemDescription>;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther;
    union: import("@wayward/game/game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther>;
    details: Set<symbol>;
}, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther, {
    getSkillBonus: () => number;
} & {
    getQualityBonus: () => number;
} & {
    getMagicalBonus: () => number;
} & {
    getPotencyBonuses: (stat: Stat) => {
        amount: number;
        items: Item[];
    } | undefined;
} & {
    generateUseConsumeTooltip: () => (tooltip: Tooltip, stat: Stat, base: number) => Tooltip;
}, Item>;
export default _default;
