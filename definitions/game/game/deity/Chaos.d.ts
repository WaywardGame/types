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
import type { CreatureZone } from "@wayward/game/game/entity/creature/zone/CreatureZone";
export declare enum ChaosEffect {
    ChangeCreatureSet = 0,
    LowerTier = 1,
    RaiseTier = 2,
    ChangeLayer = 3,
    ChangeBiome = 4
}
export declare const CHAOS_EFFECTS: Record<ChaosEffect, (zone: CreatureZone) => boolean | void>;
declare namespace Chaos {
    function apply(zone: CreatureZone, effect: ChaosEffect): boolean | void;
}
export default Chaos;
