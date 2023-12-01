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
import { ActionType } from "@wayward/game/game/entity/action/IAction";
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import MagicalPropertyValue from "@wayward/game/game/inspection/infoProviders/MagicalPropertyValue";
import UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type Item from "@wayward/game/game/item/Item";
import { MagicalPropertyEntry } from "@wayward/game/game/magic/MagicalPropertyManager";
import { MagicalPropertyType } from "@wayward/game/game/magic/MagicalPropertyType";
import { TempType } from "@wayward/game/game/temperature/ITemperature";
import UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
declare const _default: UseInfo<{
    equip: import("../../../../entity/IHuman").EquipType;
    entityType: import("../../../../entity/IEntity").EntityType.Item;
    value?: Item | undefined;
    type: import("../../../../item/IItem").ItemType;
    description: import("../../../../item/IItem").IItemDescription;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Equip;
    union: import("@wayward/game/game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Equip>;
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
    getDefense: () => (import("../../../../../language/impl/TranslationImpl").default | MagicalPropertyValue)[];
} & {
    formatInsulation: (insulation?: number | undefined, type?: TempType | undefined) => LabelledValue;
} & {
    getInsulationOfType: (type: TempType) => LabelledValue | undefined;
} & {
    getInsulation: () => (LabelledValue | undefined)[];
} & {
    getMagicEffect: (magic: MagicalPropertyEntry) => LabelledValue;
} & {
    getMagic: () => LabelledValue[];
}, Item>;
export default _default;
