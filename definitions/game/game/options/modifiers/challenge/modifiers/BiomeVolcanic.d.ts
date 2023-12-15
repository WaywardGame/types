import type { ChallengeModifierInstance } from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
import ChallengeModifier from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
export default class BiomeVolcanic extends ChallengeModifier {
    readonly weight = 0.15;
    initialize(instance: ChallengeModifierInstance): ChallengeModifierInstance;
}
