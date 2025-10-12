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
import type Doodad from "@wayward/game/game/doodad/Doodad";
import type { DoodadType, IScareRadius } from "@wayward/game/game/doodad/IDoodad";
import { GrowingStage } from "@wayward/game/game/doodad/IDoodad";
import type Human from "@wayward/game/game/entity/Human";
import type Item from "@wayward/game/game/item/Item";
declare namespace DoodadUtilities {
    type DoodadIn = Doodad | DoodadType;
    export function hasGrownEnoughIfCanGrow(doodad: Doodad, requiredGrowthStage: GrowingStage): boolean;
    export function hasGrownEnoughIfCanGrow(doodad: DoodadIn, requiredGrowthStage: GrowingStage): undefined;
    export function wouldWalkingOnDealFireDamage(doodad: DoodadIn, human?: Human): boolean;
    export function wouldWalkingOnDealNormalDamage(doodad: DoodadIn, human?: Human): boolean;
    export function isDangerous(doodad: DoodadIn, human?: Human): boolean;
    export function canCauseStatus(doodad: DoodadIn): boolean;
    export function getScareRadius(doodad: Doodad | Item): IScareRadius;
    export {};
}
export default DoodadUtilities;
