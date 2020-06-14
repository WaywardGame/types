/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import EventEmitter from "event/EventEmitter";
import { TileUpdateType } from "game/IGame";
import { WorldZ } from "game/WorldZ";
import IWorld from "renderer/IWorld";
import IWorldLayer from "renderer/IWorldLayer";
import ISerializer from "save/ISerializer";
import { ITile } from "tile/ITerrain";
export interface IWorldEvents {
    updateTile(x: number, y: number, z: number, tile: ITile, tileUpdateType: TileUpdateType): any;
}
export default class World extends EventEmitter.Host<IWorldEvents> implements IWorld {
    width: number;
    height: number;
    layers: Record<number, IWorldLayer>;
    private loaded;
    private batchTileUpdate;
    constructor(width: number, height: number);
    delete(): void;
    toLocal(world: number, local: number): number;
    addLayer(level: WorldZ): void;
    load(): void;
    isLoaded(): boolean;
    updateAll(): void;
    setupExploredMap(): void;
    updateTile(x: number, y: number, z: number, tile: ITile, tileUpdateType: TileUpdateType, flush?: boolean): void;
    startUpdateTileBatch(): void;
    endUpdateTileBatch(): void;
    serializeObject(serializer: ISerializer): void;
    deserializeObject(serializer: ISerializer): void;
}
