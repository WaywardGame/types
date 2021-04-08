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
import Uses from "game/inspection/infoProviders/Uses";
import { IItemDescription } from "game/item/IItem";
import Item from "game/item/Item";
export default class ItemUses extends Uses<Item> {
    protected getUses(description: IItemDescription): ActionType[];
    protected getUseInfoHandlers(): (import("../UseInfo").default<{
        doodadDescription: import("../../../doodad/IDoodad").IDoodadDescription;
        objectType: import("../../../IGame").CreationId.Item;
        value: Item;
        description: IItemDescription;
        action: ActionType.Build;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Build>;
    }, ActionType.Build, {
        getWeightCapacity: () => import("../LabelledValue").default | undefined;
    } & {
        formatInsulation: (insulation: number, type?: import("../../../temperature/ITemperature").TempType | undefined) => import("../LabelledValue").default;
    } & {
        getInsulationOfType: (type: import("../../../temperature/ITemperature").TempType) => import("../LabelledValue").default | undefined;
    } & {
        getInsulation: () => (import("../LabelledValue").default | undefined)[];
    } & {
        getPreservationChance: () => import("../LabelledValue").default | undefined;
    }, Item> | import("../UseInfo").default<{
        onConsume: number | import("game/item/IItem").ConsumeItemStatsTuple;
        skill: import("../../../entity/IHuman").SkillType | undefined;
        skillBonus: number;
        magicalBonus: number;
        stats: import("../../../entity/IStats").Stat[];
        objectType: import("../../../IGame").CreationId.Item;
        value: Item;
        description: IItemDescription;
        action: ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.DrinkCure | ActionType.HealOther;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.DrinkCure | ActionType.HealOther>;
    }, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.DrinkCure | ActionType.HealOther, {
        generateUseConsumeTooltip: () => (tooltip: import("../../../../ui/component/IComponent").ITooltip, stat: import("../../../entity/IStats").Stat, base: number) => import("../../../../ui/component/IComponent").ITooltip;
    }, Item> | import("../UseInfo").default<{
        requiredItems: (import("game/item/IItem").ItemType | import("game/item/IItem").ItemTypeGroup)[];
        requiredDoodads: (import("../../../doodad/IDoodad").DoodadType | import("../../../doodad/IDoodad").DoodadTypeGroup)[];
        requiresFire: boolean;
        objectType: import("../../../IGame").CreationId.Item;
        value: Item;
        description: IItemDescription;
        action: ActionType.Disassemble;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Disassemble>;
    }, ActionType.Disassemble, {
        getRequiredItems: () => import("../../../../language/Translation").default[];
    } & {
        getAdditionalRequirements: () => import("../../../../language/Translation").default[];
    }, Item> | import("../UseInfo").default<{
        dismantle: import("game/item/IItem").IDismantleDescription;
        objectType: import("../../../IGame").CreationId.Item;
        value: Item;
        description: IItemDescription;
        action: ActionType.Dismantle;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Dismantle>;
    }, ActionType.Dismantle, {
        getRequired: () => import("../../../../language/Translation").default | undefined;
    }, Item> | import("../UseInfo").default<{
        equip: import("../../../entity/IHuman").EquipType;
        objectType: import("../../../IGame").CreationId.Item;
        value: Item;
        description: IItemDescription;
        action: ActionType.Equip;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Equip>;
    }, ActionType.Equip, {
        getAttack: () => import("../MagicalPropertyValue").default | undefined;
    } & {
        getDefense: () => (import("../../../../language/Translation").default | import("../MagicalPropertyValue").default)[];
    } & {
        formatInsulation: (insulation: number, type?: import("../../../temperature/ITemperature").TempType | undefined) => import("../LabelledValue").default;
    } & {
        getInsulationOfType: (type: import("../../../temperature/ITemperature").TempType) => import("../LabelledValue").default | undefined;
    } & {
        getInsulation: () => (import("../LabelledValue").default | undefined)[];
    } & {
        getMagicEffect: (magic: import("../../../magic/MagicalPropertyManager").MagicalPropertyEntry) => import("../LabelledValue").default;
    } & {
        getMagic: () => import("../LabelledValue").default[];
    }, Item> | import("../UseInfo").default<{
        ranged: import("game/item/IItem").IRanged;
        objectType: import("../../../IGame").CreationId.Item;
        value: Item;
        description: IItemDescription;
        action: ActionType.Cast | ActionType.Fire;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Cast | ActionType.Fire>;
    }, ActionType.Cast | ActionType.Fire, {}, Item> | import("../UseInfo").default<{
        attack: number;
        objectType: import("../../../IGame").CreationId.Item;
        value: Item;
        description: IItemDescription;
        action: ActionType.Shoot;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Shoot>;
    }, ActionType.Shoot, {}, Item> | import("../UseInfo").default<{
        stoke: number;
        objectType: import("../../../IGame").CreationId.Item;
        value: Item;
        description: IItemDescription;
        action: ActionType.StokeFire;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.StokeFire>;
    }, ActionType.StokeFire, {}, Item> | import("../UseInfo").default<{
        telescopy: number;
        objectType: import("../../../IGame").CreationId.Item;
        value: Item;
        description: IItemDescription;
        action: ActionType.Equip;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Equip>;
    }, ActionType.Equip, {}, Item> | import("../UseInfo").default<import("../UseInfo").IUseInfoBase<Item, ActionType.Throw>, ActionType.Throw, {}, Item> | import("../UseInfo").default<import("../UseInfo").IUseInfoBase<Item, ActionType.StartFire | ActionType.Ignite | ActionType.Equip>, ActionType.StartFire | ActionType.Ignite | ActionType.Equip, {}, Item>)[];
}
