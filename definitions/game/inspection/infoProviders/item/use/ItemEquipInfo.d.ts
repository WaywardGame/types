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
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import MagicalPropertyValue from "game/inspection/infoProviders/MagicalPropertyValue";
import UseInfo from "game/inspection/infoProviders/UseInfo";
import Item from "game/item/Item";
import { MagicalPropertyEntry } from "game/magic/MagicalPropertyManager";
import { TempType } from "game/temperature/ITemperature";
import Translation from "language/Translation";
declare const _default: UseInfo<{
    equip: import("../../../../entity/IHuman").EquipType;
    objectType: import("../../../../IGame").CreationId.Item;
    value?: Item | undefined;
    type: import("../../../../item/IItem").ItemType;
    description: import("../../../../item/IItem").IItemDescription;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Equip;
    union: import("../../UseInfo").IUseInfoBase<Item, ActionType.Equip>;
    details: Set<symbol>;
}, ActionType.Equip, {
    getAttack: () => MagicalPropertyValue | undefined;
} & {
    getDefense: () => (Translation | MagicalPropertyValue)[];
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
