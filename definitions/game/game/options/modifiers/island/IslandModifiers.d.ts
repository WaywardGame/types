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
import type Island from "game/island/Island";
import GameplayModifiersManager, { GameplayModifiersCollection } from "game/options/modifiers/GameplayModifiersManager";
import type IslandModifier from "game/options/modifiers/island/IslandModifier";
import { IslandModifierType } from "game/options/modifiers/island/IslandModifier";
import type Tooltip from "ui/tooltip/Tooltip";
export declare const EXCLUSIVE_MODIFIERS: IslandModifierType[][];
declare class IslandModifiersManager extends GameplayModifiersManager<IslandModifier> {
    constructor();
    createCollection(island: Island): IslandModifiersCollection;
}
declare const _default: IslandModifiersManager;
export default _default;
export declare class IslandModifiersCollection extends GameplayModifiersCollection<IslandModifier> {
    getTooltip(type: IslandModifierType, tooltip: Tooltip): Tooltip;
}
