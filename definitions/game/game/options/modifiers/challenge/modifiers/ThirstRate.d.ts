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
import type { ChallengeModifierInstance } from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
import ChallengeModifier from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
export default class ThirstRate extends ChallengeModifier {
    readonly weight = 1;
    initialize(instance: ChallengeModifierInstance): ChallengeModifierInstance;
}
