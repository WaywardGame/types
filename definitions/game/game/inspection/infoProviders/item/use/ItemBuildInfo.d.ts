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
import LabelledValue from "@wayward/game/game/inspection/infoProviders/LabelledValue";
import UseInfo from "@wayward/game/game/inspection/infoProviders/UseInfo";
import type Item from "@wayward/game/game/item/Item";
import { MagicalPropertyEntry } from "@wayward/game/game/magic/IMagicalProperty";
import MagicalPropertyType from "@wayward/game/game/magic/MagicalPropertyType";
import type { IInsulationResult } from "@wayward/game/game/temperature/ITemperature";
import { TempType } from "@wayward/game/game/temperature/ITemperature";
declare const _default: UseInfo<{
    doodadContainer: import("../../../../doodad/IDoodad").IDoodadDescription | undefined;
    civilizationScore: number | undefined;
    scareRadius: import("../../../../doodad/IDoodad").IScareRadius | undefined;
    entityType: import("../../../../entity/IEntity").EntityType.Item;
    value?: Item | undefined;
    type: import("../../../../item/IItem").ItemType;
    description: Readonly<import("../../../../item/IItem").IItemDescription>;
    quality: import("../../../../IObject").Quality;
    action: ActionType.Build;
    union: import("@wayward/game/game/inspection/infoProviders/UseInfo").IUseInfoBase<Item, ActionType.Build>;
    details: Set<symbol>;
}, ActionType.Build, Record<"getWeightCapacity", () => LabelledValue | undefined> & Record<"formatInsulation", (insulation: IInsulationResult, type?: TempType | undefined) => LabelledValue> & Record<"getInsulationOfType", (type: TempType) => LabelledValue | undefined> & Record<"getInsulation", () => (LabelledValue | undefined)[]> & Record<"getPreservationChance", () => LabelledValue | undefined> & Record<"getCivilizationScore", () => LabelledValue | undefined> & Record<"scareRadius", () => LabelledValue | undefined> & Record<"getMagicalBuildTypes", () => Set<MagicalPropertyType>> & Record<"getMagicEffect", (magic: MagicalPropertyEntry) => LabelledValue> & Record<"getDoodadSkill", () => LabelledValue[]> & Record<"getCraftingBonus", () => LabelledValue | undefined>, Item>;
export default _default;
