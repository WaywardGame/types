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
import type { MapTile } from "game/mapping/IMapTile";
import type { TerrainType } from "game/tile/ITerrain";
import type { ISerializer, ISerializable } from "save/serializer/ISerializer";
export declare type SavedMapTiles = Array<[terrain: TerrainType | undefined, decoration: MapTile | undefined, x: number, y: number]>;
export default class SavedTilesSerializer implements ISerializable {
    saved: SavedMapTiles;
    serializeObject(serializer: ISerializer): undefined;
    deserializeObject(serializer: ISerializer): boolean;
}
