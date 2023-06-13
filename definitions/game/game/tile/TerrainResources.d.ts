/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { BiomeType } from "game/biome/IBiome";
import type { ILootItem } from "game/ILoot";
import { ItemType } from "game/item/IItem";
import { TerrainType } from "game/tile/ITerrain";
export interface ITerrainLootItem extends ILootItem {
    tileChange?: TerrainType;
    tileChangeChance?: number;
}
export interface ITerrainLoot {
    items?: ITerrainLootItem[] | OptionalDescriptions<BiomeType, ITerrainLootItem[]>;
    defaultItem?: ItemType;
    disableWaterRouting?: boolean;
}
export declare const resource: OptionalDescriptions<TerrainType, ITerrainLoot>;
export default resource;
