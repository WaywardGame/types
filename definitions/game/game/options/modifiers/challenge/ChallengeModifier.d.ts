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
import type { Challenge } from "@wayward/game/game/options/modifiers/challenge/IChallenge";
import GameplayModifier, { GameplayModifierInstance } from "@wayward/game/game/options/modifiers/GameplayModifier";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
export declare class ChallengeModifierInstance extends GameplayModifierInstance<Challenge> {
    /**
     * How much "challenge" this modifier adds (or subtracts!). Defaults to `0`. Added to the result of `apply`.
     */
    challenge: number;
    setChallenge(challenge: number): this;
    addChallenge(challenge: number): this;
    getTooltip(tooltip: Tooltip): Tooltip;
    protected getDefaultTitle(): TranslationImpl;
}
export default abstract class ChallengeModifier extends GameplayModifier<Challenge, ChallengeModifierInstance> {
    /**
     * How often this modifier should be chosen compared to the others
     */
    readonly weight: number;
    instantiate(id: Challenge): ChallengeModifierInstance;
}
