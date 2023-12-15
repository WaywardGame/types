import type { ChallengeModifierInstance } from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
import ChallengeModifier from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
export default class BiomeArid extends ChallengeModifier {
    readonly weight = 0.5;
    initialize(instance: ChallengeModifierInstance): ChallengeModifierInstance;
}
