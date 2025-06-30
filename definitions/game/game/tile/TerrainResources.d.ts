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
import { DoodadType } from "@wayward/game/game/doodad/IDoodad";
import type { ILootItem } from "@wayward/game/game/ILoot";
import { ItemType } from "@wayward/game/game/item/IItem";
import { TerrainType } from "@wayward/game/game/tile/ITerrain";
export interface ITerrainLootItem extends ILootItem {
    tileChange?: TerrainType;
    tileChangeChance?: number;
}
export interface ITerrainLoot {
    items?: ITerrainLootItem[] | OptionalDescriptions<BiomeType, ITerrainLootItem[]>;
    defaultItem?: ItemType;
    disableWaterRouting?: boolean;
    /**
     * Set to a doodad type to allow gathering from the terrain as a doodad (in its ripening stage) like in the case of grass.
     */
    doodadGather?: DoodadType;
    /**
     * When set, the terrain will change to this type when the tile is gathered from as a doodad (via doodadGather).
     */
    doodadTileChange?: TerrainType;
}
export declare const resource: OptionalDescriptions<TerrainType, ITerrainLoot>;
export default resource;
