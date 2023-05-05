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
import LabelledValue from "game/inspection/infoProviders/LabelledValue";
import UseInfo from "game/inspection/infoProviders/UseInfo";
import type Item from "game/item/Item";
import { MagicalPropertyEntry } from "game/magic/MagicalPropertyManager";
import { MagicalPropertyType } from "game/magic/MagicalPropertyType";
import { TempType } from "game/temperature/ITemperature";
declare const _default: UseInfo<{
    doodadContainer: import("../../../../doodad/IDoodad").IDoodadDescription | undefined;
    civilizationScore: number | undefined;
    entityType: import("../../../../entity/IEntity").EntityType.Item;
    value?: Item | undefined;
    type: import("../../../../item/IItem").ItemType;
    description: import("../../../../item/IItem").IItemDescription;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Build;
    union: import("game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Build>;
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
}, Item>;
export default _default;
