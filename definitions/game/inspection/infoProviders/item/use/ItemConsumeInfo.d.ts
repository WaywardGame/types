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
import { Stat } from "game/entity/IStats";
import UseInfo from "game/inspection/infoProviders/UseInfo";
import Item from "game/item/Item";
import { ITooltip } from "ui/component/IComponent";
declare const _default: UseInfo<{
    onConsume: number | import("../../../../item/IItem").ConsumeItemStatsTuple;
    skill: import("../../../../entity/IHuman").SkillType | undefined;
    skillBonus: number;
    magicalBonus: number;
    stats: Stat[];
    objectType: import("../../../../IGame").CreationId.Item;
    value: Item;
    description: import("../../../../item/IItem").IItemDescription;
    action: ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.DrinkCure | ActionType.HealOther;
    union: import("game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.DrinkCure | ActionType.HealOther>;
}, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.DrinkCure | ActionType.HealOther, {
    generateUseConsumeTooltip: () => (tooltip: ITooltip, stat: Stat, base: number) => ITooltip;
}, Item>;
export default _default;
