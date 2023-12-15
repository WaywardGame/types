import type { ChallengeModifierInstance } from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
import ChallengeModifier from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
export default class BiomeWetlands extends ChallengeModifier {
    readonly weight = 1;
    initialize(instance: ChallengeModifierInstance): ChallengeModifierInstance;
}
