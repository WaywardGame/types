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
import { Challenge } from "game/options/modifiers/challenge/IChallenge";
import GameplayModifier from "game/options/modifiers/GameplayModifier";
import { ITooltip } from "ui/component/IComponent";
export default abstract class ChallengeModifier extends GameplayModifier<Challenge> {
    /**
     * How often this modifier should be chosen compared to the others
     */
    readonly weight: number;
    /**
     * How much "challenge" this modifier adds (or subtracts!). Defaults to `0`. Added to the result of `apply`.
     */
    challenge: number;
    tooltipArgs?: readonly any[];
    readonly getTooltip: (tooltip: ITooltip) => ITooltip;
}
