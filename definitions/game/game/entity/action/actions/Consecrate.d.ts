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
import type { QualityNatural } from "@wayward/game/game/IObject";
import { Quality } from "@wayward/game/game/IObject";
import { DeityReal } from "@wayward/game/game/deity/Deity";
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type Human from "@wayward/game/game/entity/Human";
import { Action } from "@wayward/game/game/entity/action/Action";
import { ActionArgument, ActionType, type IActionTierBreakdown, type IActionUsable } from "@wayward/game/game/entity/action/IAction";
import type { IContainer } from "@wayward/game/game/item/IItem";
import { ItemType } from "@wayward/game/game/item/IItem";
import type Item from "@wayward/game/game/item/Item";
export interface IConsecrateUsable extends IActionUsable {
    altar: Doodad;
    items: Item[];
}
export type ConsecrateRuneGroup = [deity: DeityReal, runes: Item[]];
export interface ConsecrateRuneGroupFriendAndFoe {
    friend: Item[];
    foe: Item[];
}
export type ConsecrateOutcomeRuneQualityCounts = PartialRecord<Quality, {
    quantity: number;
    minProgress: number;
    maxProgress: number;
}>;
declare const _default: Action<[ActionArgument.DoodadNearby], ActionType.Consecrate, import("../../player/Player").default, void, IConsecrateUsable, [Doodad]> & {
    getRunes(container?: IContainer): Item[];
    groupRunes(runes: Item[]): ConsecrateRuneGroup[];
    getReturnDeity(runeGroups: ConsecrateRuneGroup[]): DeityReal | undefined;
    groupRunesFriendAndFoe(runeGroups: ConsecrateRuneGroup[], deity: DeityReal): ConsecrateRuneGroupFriendAndFoe;
    getSacrificedRunes(runes: Item[]): Item[];
    getQualityTier(quality: Quality | undefined): QualityNatural;
    getActionTierBreakdown(altar: Doodad, runes: Item[]): IActionTierBreakdown | undefined;
    getDeityRuneTypes(human: Human, deity: DeityReal): ItemType[];
    calculateValue(human: Human, runes: Item[], deity: DeityReal, calculationType: "min" | "max" | "random"): number;
    calculateValueWithFanaticism(human: Human, runes: Item[], calculationType: "min" | "max" | "random", fanaticism: number): number;
    calculateFanaticismValueModifier(human: Human, runes: Item[], deity: DeityReal): number | undefined;
    resolveRunesForValue(human: Human, value: number, maxValue?: number): ConsecrateOutcomeRuneQualityCounts;
};
export default _default;
