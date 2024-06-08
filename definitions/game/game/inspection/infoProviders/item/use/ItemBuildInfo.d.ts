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
import UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type Item from "@wayward/game/game/item/Item";
import { MagicalPropertyEntry } from "@wayward/game/game/magic/MagicalPropertyManager";
import { MagicalPropertyType } from "@wayward/game/game/magic/MagicalPropertyType";
import { TempType } from "@wayward/game/game/temperature/ITemperature";
declare const _default: UseInfo<{
    doodadContainer: import("../../../../doodad/IDoodad").IDoodadDescription | undefined;
    civilizationScore: number | undefined;
    entityType: import("../../../../entity/IEntity").EntityType.Item;
    value?: Item | undefined;
    type: import("../../../../item/IItem").ItemType;
    description: import("../../../../item/IItem").IItemDescription;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Build;
    union: import("@wayward/game/game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Build>;
    details: Set<symbol>;
}, ActionType.Build, {
    getWeightCapacity: () => LabelledValue | undefined;
} & {
    formatInsulation: (insulation: number, type?: TempType | undefined) => LabelledValue;
} & {
    getInsulationOfType: (type: TempType) => LabelledValue | undefined;
} & {
    getInsulation: () => (LabelledValue | undefined)[];
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
} & {
    getCraftingBonus: () => LabelledValue | undefined;
}, Item>;
export default _default;
