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
import { BiomeType } from "game/biome/IBiome";
import type Player from "game/entity/player/Player";
import type { IHasImagePath } from "game/IObject";
import type Island from "game/island/Island";
export declare enum MapPinType {
    Self = 0,
    Friend = 1,
    Map = 2,
    Lighthouse = 3
}
export declare const ISLANDS_SHOW_TREASURE_MAPS_SKILL_THRESHOLD = 40;
export declare function getMapsForIslandInInventory(player: Player, island: Island): import("../../../../../../game/item/Item").default[];
export type IIslandRenderStrategy = IHasImagePath;
export declare const islandRenderStrategies: PartialRecord<BiomeType, IIslandRenderStrategy>;
