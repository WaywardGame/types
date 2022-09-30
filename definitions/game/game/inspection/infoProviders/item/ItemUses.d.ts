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
import { CreationId } from "game/IGame";
import Uses from "game/inspection/infoProviders/Uses";
import type { IItemDescription, ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
export default class ItemUses extends Uses<Item> {
    protected getObjectType(): CreationId.Item;
    protected getDescription(type: ItemType): IItemDescription;
    protected getUses(description: IItemDescription): ActionType[];
    protected getUseInfoHandlers(): (import("../UseInfo").default<{
        doodadContainer: import("../../../doodad/IDoodad").IDoodadDescription | undefined;
        civilizationScore: number | undefined;
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Build;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Build>;
        details: Set<symbol>;
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
    } & {
        getCivilizationScore: () => import("../LabelledValue").default | undefined;
    }, Item> | import("../UseInfo").default<{
        onConsume: number | import("game/item/IItem").ConsumeItemStatsTuple;
        skill: import("../../../entity/IHuman").SkillType | undefined;
        itemQuality: import("../../../IObject").Quality | undefined;
        qualityBonus: number;
        skillBonus: number;
        magicalBonus: number;
        stats: import("../../../entity/IStats").Stat[];
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther>;
        details: Set<symbol>;
    }, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther, {
        generateUseConsumeTooltip: () => (tooltip: import("../../../../ui/tooltip/Tooltip").default, stat: import("../../../entity/IStats").Stat, base: number) => import("../../../../ui/tooltip/Tooltip").default;
    }, Item> | import("../UseInfo").default<{
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Craft;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Craft>;
        details: Set<symbol>;
    }, ActionType.Craft, {}, Item> | import("../UseInfo").default<{
        requiredItems: (ItemType | import("game/item/IItem").ItemTypeGroup)[];
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Disassemble;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Disassemble>;
        details: Set<symbol>;
    }, ActionType.Disassemble, {
        getRequiredItems: () => import("../../../../language/impl/TranslationImpl").default[];
    }, Item> | import("../UseInfo").default<{
        dismantle: import("game/item/IItem").IDismantleDescription;
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Dismantle;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Dismantle>;
        details: Set<symbol>;
    }, ActionType.Dismantle, {}, Item> | import("../UseInfo").default<{
        equip: import("../../../entity/IHuman").EquipType;
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Equip;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Equip>;
        details: Set<symbol>;
    }, ActionType.Equip, {
        getMagicalEquipTypes: () => Set<import("../../../magic/MagicalPropertyType").MagicalPropertyType>;
    } & {
        getMagicalPropertyLabels: () => Map<import("../../../magic/MagicalPropertyType").MagicalPropertyType, import("../../../../language/dictionary/UiTranslation").default>;
    } & {
        isMagicalPropertyPercentage: (property: import("../../../magic/MagicalPropertyType").MagicalPropertyType) => boolean;
    } & {
        isMagicalPropertyPercentagePremultiplied: (property: import("../../../magic/MagicalPropertyType").MagicalPropertyType) => boolean;
    } & {
        getAttack: () => import("../MagicalPropertyValue").default | undefined;
    } & {
        getDefense: () => (import("../../../../language/impl/TranslationImpl").default | import("../MagicalPropertyValue").default)[];
    } & {
        formatInsulation: (insulation?: number | undefined, type?: import("../../../temperature/ITemperature").TempType | undefined) => import("../LabelledValue").default;
    } & {
        getInsulationOfType: (type: import("../../../temperature/ITemperature").TempType) => import("../LabelledValue").default | undefined;
    } & {
        getInsulation: () => (import("../LabelledValue").default | undefined)[];
    } & {
        getMagicEffect: (magic: import("../../../magic/MagicalPropertyManager").MagicalPropertyEntry) => import("../LabelledValue").default;
    } & {
        getMagic: () => import("../LabelledValue").default[];
    }, Item> | import("../UseInfo").default<{
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Offer;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Offer>;
        details: Set<symbol>;
    }, ActionType.Offer, {}, Item> | import("../UseInfo").default<{
        ranged: import("game/item/IItem").IRanged;
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Cast | ActionType.Fire;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Cast | ActionType.Fire>;
        details: Set<symbol>;
    }, ActionType.Cast | ActionType.Fire, {}, Item> | import("../UseInfo").default<{
        civilizationScore: number | undefined;
        growingSpeed: number | undefined;
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.SetDown;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.SetDown>;
        details: Set<symbol>;
    }, ActionType.SetDown, {
        getCivilizationScore: () => import("../LabelledValue").default | undefined;
    } & {
        getGrowingSpeed: () => import("../LabelledValue").default | undefined;
    }, Item> | import("../UseInfo").default<{
        attack: number;
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Shoot;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Shoot>;
        details: Set<symbol>;
    }, ActionType.Shoot, {}, Item> | import("../UseInfo").default<{
        stoke: number;
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.StokeFire;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.StokeFire>;
        details: Set<symbol>;
    }, ActionType.StokeFire, {}, Item> | import("../UseInfo").default<{
        telescopy: number;
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Equip;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Equip>;
        details: Set<symbol>;
    }, ActionType.Equip, {}, Item> | import("../UseInfo").default<import("../UseInfo").IUseInfoBase<Item, ActionType.Throw>, ActionType.Throw, {}, Item> | import("../UseInfo").default<{
        damage: number;
        objectType: CreationId.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: import("../../../IObject").Quality;
        action: ActionType.Build;
        union: import("../UseInfo").IUseInfoBase<Item, ActionType.Build>;
        details: Set<symbol>;
    }, ActionType.Build, {}, Item> | import("../UseInfo").default<import("../UseInfo").IUseInfoBase<Item, ActionType.StartFire | ActionType.Ignite | ActionType.Equip>, ActionType.StartFire | ActionType.Ignite | ActionType.Equip, {}, Item>)[];
}
