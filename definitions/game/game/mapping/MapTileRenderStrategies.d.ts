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
import type { IMapTileRenderStrategy } from "@wayward/game/game/mapping/IMapTile";
import { MapTile } from "@wayward/game/game/mapping/IMapTile";
declare const mapTileRenderStrategies: Record<MapTile, IMapTileRenderStrategy>;
export default mapTileRenderStrategies;
