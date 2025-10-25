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
import type Island from "@wayward/game/game/island/Island";
import GameplayModifier, { GameplayModifierInstance } from "@wayward/game/game/options/modifiers/GameplayModifier";
import type { IslandName } from "@wayward/game/language/english/game/islandName/IslandName";
import Translation from "@wayward/game/language/Translation";
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IslandModifierType } from "@wayward/game/game/options/modifiers/island/IIslandModifier";
export declare class IslandModifierInstance extends GameplayModifierInstance<IslandModifierType> {
    /**
     * How much "challenge" this modifier adds (or subtracts!). Defaults to `0`. Added to the result of `apply`.
     */
    challenge: number;
    setChallenge(challenge: number): this;
    addChallenge(challenge: number): this;
    getTooltip(tooltip: Tooltip): Tooltip;
    protected getDefaultTitle(): TranslationImpl;
    private islandNameDescriptorInitializer?;
    getIslandNameDescriptor(version: IslandName): TranslationImpl;
    setIslandNameDescriptor(initializer: (defaultTitle: Translation, version: IslandName) => Translation): this;
}
export default abstract class IslandModifier extends GameplayModifier<IslandModifierType, IslandModifierInstance, [Island]> {
    /**
     * How often this modifier should be chosen compared to the others
     */
    readonly weight: number;
    instantiate(id: IslandModifierType, island: Island): IslandModifierInstance;
}
