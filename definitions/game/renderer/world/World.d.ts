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
import EventEmitter from "event/EventEmitter";
import { TileUpdateType } from "game/IGame";
import type Island from "game/island/Island";
import type { ITile } from "game/tile/ITerrain";
import type { WorldZ } from "game/WorldZ";
import WorldLayer from "renderer/world/WorldLayer";
import type { ISerializable, ISerializer } from "save/serializer/ISerializer";
export interface IWorldEvents {
    updateTile(x: number, y: number, z: number, tile: ITile, tileUpdateType: TileUpdateType): any;
}
export default class World extends EventEmitter.Host<IWorldEvents> implements ISerializable {
    readonly island: Island;
    width: number;
    height: number;
    layers: Record<number, WorldLayer>;
    _loaded: boolean;
    private batchTileUpdate;
    private layerUpdatesSuspended;
    constructor(island: Island, width: number, height: number);
    delete(): void;
    get loaded(): boolean;
    toLocal(world: number, local: number): number;
    addLayer(level: WorldZ): void;
    load(): void;
    suspendLayerUpdates(): void;
    resumeLayerUpdates(): void;
    updateTile(x: number, y: number, z: number, tile: ITile, tileUpdateType: TileUpdateType, updateNeighbors?: boolean, flush?: boolean): void;
    updateTileLayer(x: number, y: number, z: number, tile: ITile, updateNeighbors?: boolean, flush?: boolean): void;
    startUpdateTileBatch(): void;
    endUpdateTileBatch(): void;
    serializeObject(_serializer: ISerializer): undefined;
    deserializeObject(serializer: ISerializer): boolean;
}
