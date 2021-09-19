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
import { Stat } from "game/entity/IStats";
import ChallengeModifier from "game/options/modifiers/challenge/ChallengeModifier";
export default class HungerRate extends ChallengeModifier {
    readonly weight = 1;
    readonly options: () => {
        player: {
            stats: Map<Stat, {
                changeTimerMultiplier: number;
            }>;
        };
    };
}
