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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import { TileUpdateType } from "@wayward/game/game/IGame";
import type Island from "@wayward/game/game/island/Island";
import type Tile from "@wayward/game/game/tile/Tile";
import WorldZ from "@wayward/utilities/game/WorldZ";
import { WorldLayer } from "@wayward/game/renderer/world/WorldLayer";
import { type ISerializable, type ISerializer } from "@wayward/game/save/serializer/ISerializer";
export interface IWorldEvents {
    updateTile(tile: Tile, tileUpdateType: TileUpdateType): any;
}
export default class World extends EventEmitter.Host<IWorldEvents> implements ISerializable {
    readonly island: Island;
    readonly layers: Map<WorldZ, WorldLayer>;
    width: number;
    height: number;
    private _batchTileUpdate;
    private _layerUpdatesSuspended;
    private _loaded;
    private _setupTiles;
    constructor(island: Island);
    /**
     * Called after the island map size is configured
     */
    initialize(): void;
    addLayer(z: WorldZ): void;
    load(): void;
    unload(): void;
    updateAll(): void;
    get loaded(): boolean;
    toLocal(world: number, local: number): number;
    suspendLayerUpdates(): void;
    resumeLayerUpdates(): void;
    updateTile(tile: Tile, tileUpdateType: TileUpdateType, updateNeighbors?: boolean, skipFlowFieldUpdate?: boolean): void;
    updateTileLayer(tile: Tile, updateNeighbors: boolean | undefined, flushTileImmediately: boolean): void;
    startUpdateTileBatch(): void;
    endUpdateTileBatch(): void;
    serializeObject(_serializer: ISerializer): this;
    deserializeObject(serializer: ISerializer): boolean | undefined;
}
