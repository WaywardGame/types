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
import type Doodad from "game/doodad/Doodad";
import type { DoodadType } from "game/doodad/IDoodad";
import type Creature from "game/entity/creature/Creature";
import type EntityMovable from "game/entity/EntityMovable";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import type Island from "game/island/Island";
import type { IContainer, ItemType } from "game/item/IItem";
import type Item from "game/item/Item";
import type ItemManager from "game/item/ItemManager";
import { TempType } from "game/temperature/ITemperature";
import type { FireStage } from "game/tile/events/IFire";
import type { TerrainType } from "game/tile/ITerrain";
import type Tile from "game/tile/Tile";
import type TileEvent from "game/tile/TileEvent";
import type TimeManager from "game/time/TimeManager";
import { WorldZ } from "game/WorldZ";
import type { IPreSerializeCallback } from "save/serializer/ISerializer";
import type { IVector3 } from "utilities/math/IVector";
import { IRange } from "utilities/math/Range";
export declare const TEMPERATURE_INVALID = 255;
export interface ITemperatureManagerEvents {
}
export default class TemperatureManager extends EventEmitter.Host<ITemperatureManagerEvents> implements IPreSerializeCallback {
    private readonly island;
    encodedCalculatedCache: Map<number, Map<number, Uint32Array>>;
    encodedProducedCache: Map<number, Map<number, Uint32Array>>;
    private readonly containerTemperatureCache;
    private readonly containerTileTemperatureCache;
    private readonly containerItemsTemperatureCache;
    private readonly scheduledUpdates;
    private readonly scheduledContainerInvalidations;
    private cacheCalculated;
    private cacheProduced;
    private temperatureBoundaryMax;
    private temperatureBoundaryMaxVector;
    constructor(island: Island);
    /**
     * Called after the island map size is configured
     */
    initialize(): void;
    /**
     * Clears all container caches
     */
    clearContainerCaches(): void;
    addLayer(z: WorldZ): void;
    delete(): void;
    preSerializeObject(): void;
    /**
     * Clears temperature caching for the container
     */
    clearContainerCache(container: IContainer): void;
    /**
     * Clears temperature caching for the container
     */
    clearContainerCacheByHash(containerHash: string): void;
    /**
     * Returns the current temperature for a container, calculated by combining the tile temperature and the combined temperature of the items inside
     */
    getContainer(container: IContainer, serverSideSource: GetterOfOr<string> | undefined): number;
    /**
     * Returns the produced temperature for this container, calculated by combining the min and max temperatures of the items inside.
     * @param applyInsulation Whether to apply the container's insulation to the produced temperature value. For example,
     * containers with no insulation return the exact temperature they produce, while containers with maximum insulation return
     * `Temperature.Neutral`
     * @returns temperature or undefined if the container/contained items do not produce temperatures
     */
    getContainerProducedTemperature(container: IContainer, containerHash?: string, applyInsulation?: boolean): number | undefined;
    /**
     * Get the combined temperature of the items in the container.
     * @returns temperature or undefined if the container/contained items do not produce temperatures
     */
    getContainerItemsTemperature(container: IContainer, containerHash?: string): number | undefined;
    private getContainerBaseTemperature;
    private getContainerInsulation;
    /**
     * Returns the current overall temperature for the given tile.
     */
    get(tile: Tile, serverSideSource: GetterOfOr<string> | undefined): number;
    getRange(tile: Tile, serverSideSource: GetterOfOr<string> | undefined): IRange;
    /**
     * Returns the base temperature.
     */
    getBase(): number;
    /**
     * Returns the temperature modifier at the given time.
     */
    getTime(time?: TimeManager): number;
    getBiomeRange(): Readonly<IRange>;
    /**
     * Returns the temperature modifier of the given layer, at the given time.
     */
    getLayer(z: WorldZ, time?: TimeManager): number;
    getLayerRange(z: WorldZ): IRange;
    private resolveTimeModifier;
    /**
     * Returns the temperature of the given tile, produced by combining the temperatures of each type.
     */
    private getTile;
    /**
     * Returns the temperature on the tile of the given type. IE, some things can produce "cold", and some things can produce "heat",
     * and both of them are cached per-tile.
     */
    private getOfType;
    /**
     * Returns the cached calculated temperature for a tile. If a tile has not been calculated yet, this will return `TEMPERATURE_INVALID`.
     */
    getCachedCalculated({ x, y, z }: IVector3, type: TempType): number;
    /**
     * Returns the cached produced temperature on a tile. If the production of a tile has not been calculated yet, this will return `TEMPERATURE_INVALID`.
     */
    getCachedProduced({ x, y, z }: IVector3, type: TempType): number;
    /**
     * Recalculates the *temperature production* of a tile.
     * @param invalidate Whether to invalidate the temperature calculations of surrounding tiles.
     */
    private scheduleUpdate;
    private scheduleContainerInvalidation;
    protected onDpodadFireUpdate(object: Doodad, tile: Tile, stage?: FireStage): void;
    protected onTileEventFireUpdate(object: TileEvent, tile: Tile, stage?: FireStage): void;
    protected onDoodadTransformed(object: Doodad, newType: DoodadType, oldType: DoodadType): void;
    protected onItemTransformed(object: Item, newType: ItemType, oldType: ItemType): void;
    protected onPlayerSpawnOrRemove(_: any, player: Player): void;
    protected onPlayerIdChanged(player: Player): void;
    protected onCreateOrRemoveObject(_: any, object: Doodad | TileEvent | Creature | NPC): void;
    protected onEntityMove(object: EntityMovable, lastTile: Tile, tile: Tile): void;
    protected onUpdateTile(island: Island, tile: Tile, oldType: TerrainType): void;
    protected onItemContainerAdd(itemManager: ItemManager, item: Item, container?: IContainer): void;
    protected onItemContainerRemove(itemManager: ItemManager, item: Item, container: IContainer | undefined, containerTile: Tile | undefined): void;
    protected onItemFireUpdate(item: Item): void;
    protected onPlay(): void;
    protected onTickStart(island: Island): void;
    protected onTickEnd(island: Island): void;
    private runContainerInvalidations;
    update(invalidateContainers?: boolean, source?: GetterOfOr<string>): void;
    private processScheduledUpdate;
    private calculateProduced;
    private updateProducedType;
    /**
     * Given a tile, goes through the entire range of tiles that could possibly diffuse their temperature to this tile,
     * and for each of them that are TEMPERATURE_INVALID (ie, not calculated), we run the recalculator on them
     */
    private calculateRange;
    /**
     * Starting from the middle, set the calculated value of the tile to the maximum of all surrounding tiles minus the diffusion rate
     * For each tile where the value is updated, update all surrounding tiles
     * ```
     * - - 0 - -      - - 0 - -      - - 1 - -      - - 1 - -      - - 1 - -      - - 1 - -
     * - 0 0 0 -      - 0 3 0 -      - 0 3 0 -      - 0 3 1 -      - 1 3 1 -      - 1 3 1 -
     * 0 0 5 0 0  =>  0 0 5 0 0  =>  0 0 5 0 0  =>  0 0 5 0 0  =>  0 0 5 0 0  =>  0 0 5 3 0  => ...
     * - 0 0 0 -      - 0 0 0 -      - 0 0 0 -      - 0 0 0 -      - 0 0 0 -      - 0 0 0 -
     * - - 0 - -      - - 0 - -      - - 0 - -      - - 0 - -      - - 0 - -      - - 0 - -
     * ```
     * Note: In this process, we may be encouraged to optimise by skipping tiles we've previously touched, but we actually *don't*
     * want to do this. Imagine the scenario where there's another tile with a producer touching one of our invalidated tiles:
     * ```
     * - - 0 - -      - - 1 - -
     * - 0 0 0 9      - 1 3 7 9  <- this 7 doesn't follow the pattern because it's touching a producer of 9
     * 0 0 5 0 0  =>  0 0 5 0 0
     * - 0 0 0 -      - 0 0 0 -
     * - - 0 - -      - - 0 - -
     * ```
     * When this happens, if we allow the tiles to continue updating each other, it'll progress as such:
     * ```
     * - - 1 - -      - - 1 - -      - - 1 - -      - - 1 - -      - - 1 - -      - - 1 - -
     * - 1 3 7 9      - 1 3 7 9      - 1 3 7 9      - 1 3 7 9      - 1 3 7 9      - 1 3 7 9
     * 0 0 5 5 0  =>  0 0 5 5 7  =>  0 0 5 5 7  =>  0 0 5 5 7  =>  0 0 5 5 7  =>  0 0 5 5 7
     * - 0 0 0 -      - 0 0 0 -      - 0 0 3 -      - 0 3 3 -      - 0 3 3 -      - 1 3 3 -
     * - - 0 - -      - - 0 - -      - - 0 - -      - - 0 - -      - - 1 - -      - - 1 - -
     *
     *       - - 1 - -      - - 3 - -      - - 3 - -
     *       - 1 5 7 9      - 1 5 7 9      - 3 5 7 9
     *   =>  0 0 5 5 7  =>  0 0 5 5 7  =>  0 0 5 5 7 => ...
     *       - 1 3 3 -      - 1 3 3 -      - 1 3 3 -
     *       - - 1 - -      - - 1 - -      - - 1 - -
     * ```
     * By not cascading updates if a tile's value wasn't actually updated, the algorithm actually makes itself more efficient.
     */
    private recalculate;
    private calculateTile;
    private getTileMax;
    private getProduced;
    private doesProduceTemperature;
    private generateEmptyTempCache;
}
