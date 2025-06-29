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
import type { IslandModifierInstance } from "@wayward/game/game/options/modifiers/island/IslandModifier";
import IslandModifier from "@wayward/game/game/options/modifiers/island/IslandModifier";
export default class OverrunWithCreature extends IslandModifier {
    readonly weight = 1;
    initialize(instance: IslandModifierInstance, island: Island): IslandModifierInstance;
}
