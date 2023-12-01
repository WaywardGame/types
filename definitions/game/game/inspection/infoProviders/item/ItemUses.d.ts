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
import type { IDoodadDescription } from "@wayward/game/game/doodad/IDoodad";
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import { EntityType } from "@wayward/game/game/entity/IEntity";
import type { EquipType, SkillType } from "@wayward/game/game/entity/IHuman";
import type { Stat } from "@wayward/game/game/entity/IStats";
import { InfoDisplayLevel } from "@wayward/game/game/inspection/IInfoProvider";
import { InfoProviderContext } from "@wayward/game/game/inspection/InfoProviderContext";
import type LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import type MagicalPropertyValue from "@wayward/game/game/inspection/infoProviders/MagicalPropertyValue";
import type { IUseInfoBase } from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import Uses from "@wayward/game/game/inspection/infoProviders/Uses";
import type { Quality } from "@wayward/game/game/IObject";
import type { IDismantleDescription, IItemDescription, IRanged, ItemType, ItemTypeGroup } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
import type { MagicalPropertyEntry } from "@wayward/game/game/magic/MagicalPropertyManager";
import type { MagicalPropertyType } from "@wayward/game/game/magic/MagicalPropertyType";
import type { TempType } from "@wayward/game/game/temperature/ITemperature";
import type UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
export default class ItemUses extends Uses<Item> {
    protected getEntityType(): EntityType.Item;
    protected getDescription(type: ItemType): IItemDescription;
    protected getUses(description: IItemDescription): ActionType[];
    protected getUseDisplayLevel(action: ActionType, context: InfoProviderContext): InfoDisplayLevel;
    protected getUseInfoHandlers(): Array<UseInfo<IUseInfoBase<Item, ActionType.Throw>, ActionType.Throw, {}, Item> | UseInfo<{
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Offer;
        union: IUseInfoBase<Item, ActionType.Offer>;
        details: Set<symbol>;
    }, ActionType.Offer, {}, Item> | UseInfo<{
        stoke: number;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.StokeFire;
        union: IUseInfoBase<Item, ActionType.StokeFire>;
        details: Set<symbol>;
    }, ActionType.StokeFire, {}, Item> | UseInfo<{
        equip: EquipType;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Equip;
        union: IUseInfoBase<Item, ActionType.Equip>;
        details: Set<symbol>;
    }, ActionType.Equip, {
        getMagicalEquipTypes: () => Set<MagicalPropertyType>;
    } & {
        getMagicalPropertyLabels: () => Map<MagicalPropertyType, UiTranslation>;
    } & {
        isMagicalPropertyPercentage: (property: MagicalPropertyType) => boolean;
    } & {
        isMagicalPropertyPercentagePremultiplied: (property: MagicalPropertyType) => boolean;
    } & {
        getAttack: () => MagicalPropertyValue | undefined;
    } & {
        getDefense: () => Array<TranslationImpl | MagicalPropertyValue>;
    } & {
        formatInsulation: (insulation?: number | undefined, type?: TempType | undefined) => LabelledValue;
    } & {
        getInsulationOfType: (type: TempType) => LabelledValue | undefined;
    } & {
        getInsulation: () => Array<LabelledValue | undefined>;
    } & {
        getMagicEffect: (magic: MagicalPropertyEntry) => LabelledValue;
    } & {
        getMagic: () => LabelledValue[];
    }, Item> | UseInfo<{
        doodadContainer: IDoodadDescription | undefined;
        civilizationScore: number | undefined;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Build;
        union: IUseInfoBase<Item, ActionType.Build>;
        details: Set<symbol>;
    }, ActionType.Build, {
        getWeightCapacity: () => LabelledValue | undefined;
    } & {
        formatInsulation: (insulation: number, type?: TempType | undefined) => LabelledValue;
    } & {
        getInsulationOfType: (type: TempType) => LabelledValue | undefined;
    } & {
        getInsulation: () => Array<LabelledValue | undefined>;
    } & {
        getPreservationChance: () => LabelledValue | undefined;
    } & {
        getCivilizationScore: () => LabelledValue | undefined;
    } & {
        getMagicalBuildTypes: () => Set<MagicalPropertyType>;
    } & {
        getMagicEffect: (magic: MagicalPropertyEntry) => LabelledValue;
    } & {
        getDoodadSkill: () => LabelledValue[];
    }, Item> | UseInfo<{
        civilizationScore: number | undefined;
        growingSpeed: number | undefined;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.SetDown;
        union: IUseInfoBase<Item, ActionType.SetDown>;
        details: Set<symbol>;
    }, ActionType.SetDown, {
        getCivilizationScore: () => LabelledValue | undefined;
    } & {
        getGrowingSpeed: () => LabelledValue | undefined;
    }, Item> | UseInfo<{
        ranged: IRanged;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Cast | ActionType.Fire;
        union: IUseInfoBase<Item, ActionType.Cast | ActionType.Fire>;
        details: Set<symbol>;
    }, ActionType.Cast | ActionType.Fire, {}, Item> | UseInfo<{
        onConsume: Array<[Stat, number]>;
        skill: SkillType | undefined;
        itemQuality: Quality | undefined;
        qualityBonus: number;
        skillBonus: number;
        magicalBonus: number;
        magicalStatBonuses: OptionalDescriptions<Stat, number>;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther;
        union: IUseInfoBase<Item, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther>;
        details: Set<symbol>;
    }, ActionType.Eat | ActionType.DrinkItem | ActionType.Heal | ActionType.Cure | ActionType.HealOther, {
        generateUseConsumeTooltip: () => (tooltip: Tooltip, stat: Stat, base: number) => Tooltip;
    }, Item> | UseInfo<IUseInfoBase<Item, ActionType.StartFire | ActionType.Ignite | ActionType.Equip>, ActionType.StartFire | ActionType.Ignite | ActionType.Equip, {}, Item> | UseInfo<{
        attack: number;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Shoot;
        union: IUseInfoBase<Item, ActionType.Shoot>;
        details: Set<symbol>;
    }, ActionType.Shoot, {}, Item> | UseInfo<{
        telescopy: number;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Equip;
        union: IUseInfoBase<Item, ActionType.Equip>;
        details: Set<symbol>;
    }, ActionType.Equip, {}, Item> | UseInfo<{
        requiredItems: Array<ItemType | ItemTypeGroup>;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Disassemble;
        union: IUseInfoBase<Item, ActionType.Disassemble>;
        details: Set<symbol>;
    }, ActionType.Disassemble, {
        getRequiredItems: () => TranslationImpl[];
    }, Item> | UseInfo<{
        dismantle: IDismantleDescription;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Dismantle;
        union: IUseInfoBase<Item, ActionType.Dismantle>;
        details: Set<symbol>;
    }, ActionType.Dismantle, {}, Item> | UseInfo<{
        damage: number;
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Build;
        union: IUseInfoBase<Item, ActionType.Build>;
        details: Set<symbol>;
    }, ActionType.Build, {}, Item> | UseInfo<{
        entityType: EntityType.Item;
        value?: Item | undefined;
        type: ItemType;
        description: IItemDescription;
        quality: Quality;
        action: ActionType.Craft;
        union: IUseInfoBase<Item, ActionType.Craft>;
        details: Set<symbol>;
    }, ActionType.Craft, {}, Item>>;
    protected getUse(description: IItemDescription, action: ActionType): TranslationImpl;
}
declare module "@wayward/game/game/inspection/InfoProviderContext" {
    interface InfoProviderContextRegistration {
        ItemUse: ItemUseContext;
    }
}
export declare class ItemUseContext extends InfoProviderContext {
    readonly item?: Item | undefined;
    constructor(item?: Item | undefined);
}
