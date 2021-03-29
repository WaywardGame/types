/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { MapTile } from "game/mapping/IMapTile";
import { TerrainType } from "game/tile/ITerrain";
import ISerializer, { ISerializable } from "save/ISerializer";
export declare type SavedMapTiles = Array<[terrain: TerrainType | undefined, decoration: MapTile | undefined, x: number, y: number]>;
export default class SavedTilesSerializer implements ISerializable {
    saved: SavedMapTiles;
    serializeObject(serializer: ISerializer): void;
    deserializeObject(serializer: ISerializer): void;
}
