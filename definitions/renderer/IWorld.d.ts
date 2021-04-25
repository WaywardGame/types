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
import { TileUpdateType } from "game/IGame";
import { ITile } from "game/tile/ITerrain";
import IWorldLayer from "renderer/IWorldLayer";
import { ISerializable } from "save/ISerializer";
export interface IWorld extends ISerializable {
    width: number;
    height: number;
    layers: Record<number, IWorldLayer>;
    delete(): void;
    toLocal(world: number, local: number): number;
    addLayer(level: number): void;
    load(): void;
    isLoaded(): boolean;
    updateAll(): void;
    setupExploredMap(): void;
    updateTile(x: number, y: number, z: number, tile: ITile, tileUpdateType: TileUpdateType): void;
}
export declare type TerrainData = number;
export default IWorld;
