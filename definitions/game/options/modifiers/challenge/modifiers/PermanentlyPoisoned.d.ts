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
import { StatusType } from "game/entity/IEntity";
import ChallengeModifier from "game/options/modifiers/challenge/ChallengeModifier";
export default class PermanentlyPoisoned extends ChallengeModifier {
    readonly weight = 0.5;
    readonly challenge = 300;
    readonly options: {
        player: {
            statusEffects: Map<StatusType, {
                startWith: boolean;
                passChanceMultiplier: number;
                untreatable: boolean;
                effectMultiplier: number;
                effectRateMultiplier: number;
            }>;
        };
    };
}
