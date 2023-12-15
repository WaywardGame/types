import type { ChallengeModifierInstance } from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
import ChallengeModifier from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
export default class BiomeIceCap extends ChallengeModifier {
    readonly weight = 0.25;
    initialize(instance: ChallengeModifierInstance): ChallengeModifierInstance;
}
