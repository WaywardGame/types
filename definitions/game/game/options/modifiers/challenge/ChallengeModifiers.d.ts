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
import GameplayModifiersManager, { GameplayModifiersCollection } from "@wayward/game/game/options/modifiers/GameplayModifiersManager";
import type ChallengeModifier from "@wayward/game/game/options/modifiers/challenge/ChallengeModifier";
import { Challenge } from "@wayward/game/game/options/modifiers/challenge/IChallenge";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
export declare const EXCLUSIVE_MODIFIERS: Challenge[][];
declare class ChallengeModifiersManager extends GameplayModifiersManager<ChallengeModifier> {
    constructor();
    toString(): string;
    createCollection(seed?: number): ChallengeModifiersCollection;
}
declare const _default: ChallengeModifiersManager;
export default _default;
export declare class ChallengeModifiersCollection extends GameplayModifiersCollection<ChallengeModifier> {
    getTooltip(challenge: Challenge, tooltip: Tooltip): Tooltip;
}
