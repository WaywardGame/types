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
import UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type Item from "@wayward/game/game/item/Item";
import { MagicalPropertyEntry } from "@wayward/game/game/magic/IMagicalProperty";
import MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import type { IInsulationResult } from "@wayward/game/game/temperature/ITemperature";
import { TempType } from "@wayward/game/game/temperature/ITemperature";
import UiTranslation from "@wayward/game/language/dictionary/UiTranslation";
declare const _default: UseInfo<{
    equip: import("../../../../entity/IHuman").EquipType;
    entityType: import("../../../../entity/IEntity").EntityType.Item;
    value?: Item | undefined;
    type: import("@wayward/game/game/item/IItem").ItemType;
    description: Readonly<import("@wayward/game/game/item/IItem").IItemDescription>;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Equip;
    union: import("@wayward/game/game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Equip>;
    details: Set<symbol>;
}, ActionType.Equip, Record<"getMagicalEquipTypes", () => Set<MagicalPropertyType>> & Record<"getMagicalPropertyLabels", () => Map<MagicalPropertyType, UiTranslation>> & Record<"isMagicalPropertyPercentage", (property: MagicalPropertyType) => boolean> & Record<"isMagicalPropertyPercentagePremultiplied", (property: MagicalPropertyType) => boolean> & Record<"getAttack", () => import("@wayward/game/game/inspection/InfoProvider").SimpleInfoProvider | undefined> & Record<"getDefense", () => import("../../../../../language/impl/TranslationImpl").default[]> & Record<"formatInsulation", (insulation?: IInsulationResult | undefined, type?: TempType | undefined) => import("../../../../../language/impl/TranslationImpl").default> & Record<"getInsulation", () => (import("../../../../../language/impl/TranslationImpl").default | undefined)[]> & Record<"getMagicEffect", (magic: MagicalPropertyEntry) => import("../../../../../language/impl/TranslationImpl").default> & Record<"getMagic", () => import("../../../../../language/impl/TranslationImpl").default[]>, Item>;
export default _default;
