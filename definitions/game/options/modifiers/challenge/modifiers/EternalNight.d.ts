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
import ChallengeModifier from "game/options/modifiers/challenge/ChallengeModifier";
import RandomItem from "utilities/random/generators/RandomItem";
export default class EternalNight extends ChallengeModifier {
    readonly weight = 0.5;
    readonly challenge = 150;
    readonly options: {
        time: {
            frozen: boolean;
            initial: number;
        };
        player: {
            inventory: {
                equipment: {
                    type: RandomItem;
                }[];
            };
        };
    };
}
