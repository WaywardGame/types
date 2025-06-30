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
import { BiomeType } from "@wayward/game/game/biome/IBiome";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IHasImagePath } from "@wayward/game/game/IObject";
import type Island from "@wayward/game/game/island/Island";
import type Item from "@wayward/game/game/item/Item";
export declare enum MapPinType {
    Self = 0,
    Friend = 1,
    Map = 2,
    Lighthouse = 3
}
export declare const ISLANDS_SHOW_TREASURE_MAPS_SKILL_THRESHOLD = 40;
export declare function getMapsForIslandInInventory(player: Player, island: Island): Item[];
export type IIslandRenderStrategy = IHasImagePath;
export declare const islandRenderStrategies: PartialRecord<BiomeType, IIslandRenderStrategy>;
