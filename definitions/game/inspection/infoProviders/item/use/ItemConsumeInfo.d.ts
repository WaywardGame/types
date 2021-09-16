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
import { Stat } from "game/entity/IStats";
import UseInfo from "game/inspection/infoProviders/UseInfo";
import Item from "game/item/Item";
import { ITooltip } from "ui/component/IComponent";
declare const _default: UseInfo<{
    onConsume: number | import("../../../../item/IItem").ConsumeItemStatsTuple;
    skill: import("../../../../entity/IHuman").SkillType | undefined;
    itemQuality: import("../../../../IObject").Quality | undefined;
    qualityBonus: number;
    skillBonus: number;
    magicalBonus: number;
    stats: Stat[];
    objectType: import("../../../../IGame").CreationId.Item;
    value?: Item | undefined;
    type: import("../../../../item/IItem").ItemType;
    description: import("../../../../item/IItem").IItemDescription;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.DrinkCure | ActionType.HealOther;
    union: import("game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.DrinkCure | ActionType.HealOther>;
    details: Set<symbol>;
}, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.DrinkCure | ActionType.HealOther, {
    generateUseConsumeTooltip: () => (tooltip: ITooltip, stat: Stat, base: number) => ITooltip;
}, Item>;
export default _default;
