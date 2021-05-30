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
import EventEmitter from "event/EventEmitter";
import Doodad from "game/doodad/Doodad";
import { DoodadType } from "game/doodad/IDoodad";
import Entity from "game/entity/Entity";
import Island from "game/Island";
import { IContainer } from "game/item/IItem";
import Item from "game/item/Item";
import { TempType } from "game/temperature/ITemperature";
import { ITile, TerrainType } from "game/tile/ITerrain";
import TileEvent from "game/tile/TileEvent";
import TimeManager from "game/TimeManager";
import { WorldZ } from "game/WorldZ";
import { IRange } from "utilities/math/Range";
import Vector3 from "utilities/math/Vector3";
export declare const TEMPERATURE_INVALID = 255;
declare type ScheduledUpdate = [source: string, x: number, y: number, z: WorldZ, tile?: ITile | undefined, invalidate?: boolean];
export interface ITempManagerEvents {
}
export default class TemperatureManager extends EventEmitter.Host<ITempManagerEvents> {
    private readonly island;
    private cacheCalculated;
    private cacheProduced;
    private processingScheduledUpdates;
    private scheduledUpdates;
    constructor(island: Island);
    /**
     * Returns the current temperature for a container, calculated by combining the tile temperature and the combined temperature of the items inside
     */
    getContainer(container: IContainer, isClientSide: boolean): number;
    /**
     * Returns the produced temperature for this container, calculated by combining the min and max temperatures of the items inside.
     * @param applyInsulation Whether to apply the container's insulation to the produced temperature value. For example,
     * containers with no insulation return the exact temperature they produce, while containers with maximum insulation return
     * `Temperature.Neutral`
     */
    getContainerProducedTemperature(container: IContainer, applyInsulation?: boolean): number;
    /**
     * Get the combined temperature of the items in the container.
     */
    getContainerItemsTemperature(container: IContainer): number;
    private getContainerBaseTemperature;
    private getContainerInsulation;
    /**
     * Returns the current overall temperature for the given tile.
     */
    get(x: number, y: number, z: WorldZ, isClientSide: true): number;
    /**
     * Returns the current overall temperature for the given tile.
     */
    get(x: number, y: number, z: WorldZ, isClientSide: boolean, source: GetterOfOr<string>): number;
    getRange(x: number, y: number, z: WorldZ, isClientSide: boolean): IRange;
    /**
     * Returns the base temperature.
     */
    getBase(): number;
    /**
     * Returns the temperature modifier at the given time.
     */
    getTime(time?: TimeManager): number;
    getBiomeRange(): IRange;
    /**
     * Returns the temperature modifier of the given layer, at the given time.
     */
    getLayer(z: WorldZ, time?: TimeManager): number;
    getLayerRange(z: WorldZ): IRange;
    private resolveTimeModifier;
    /**
     * Returns the temperature of the given tile, produced by combining the temperatures of each type.
     */
    getTile(x: number, y: number, z: WorldZ, isClientSide: boolean): number;
    /**
     * Returns the temperature on the tile of the given type. IE, some things can produce "cold", and some things can produce "heat",
     * and both of them are cached per-tile.
     */
    getOfType(x: number, y: number, z: WorldZ, type: TempType, isClientSide: boolean): number;
    /**
     * Returns the cached calculated temperature for a tile. If a tile has not been calculated yet, this will return `TEMPERATURE_INVALID`.
     */
    getCachedCalculated(x: number, y: number, z: WorldZ, type: TempType): number;
    /**
     * Returns the cached produced temperature on a tile. If the production of a tile has not been calculated yet, this will return `TEMPERATURE_INVALID`.
     */
    getCachedProduced(x: number, y: number, z: WorldZ, type: TempType): number;
    /**
     * Recalculates the *temperature production* of a tile.
     * @param invalidate Whether to invalidate the temperature calculations of surrounding tiles.
     */
    scheduleUpdate(...args: ScheduledUpdate): this;
    private readonly scheduledContainerInvalidations;
    scheduleContainerInvalidation(...containers: Array<IContainer | undefined>): this;
    invalidateAll(): void;
    protected onFireUpdate(object: Doodad | TileEvent, tile: ITile): void;
    protected onDoodadTransformed(object: Doodad, newType: DoodadType, oldType: DoodadType): void;
    protected onCreateOrRemoveObject(_: any, object: Doodad | TileEvent | Entity): void;
    protected onEntityMove(entity: Entity, lastX: number, lastY: number, lastZ: number, lastTile: ITile, x: number, y: number, z: number, tile: ITile): void;
    protected onUpdateTile(_: any, x: number, y: number, z: number, tile: ITile, oldType: TerrainType): void;
    protected onItemContainerAdd(_: any, item: Item, container?: IContainer): void;
    protected onItemContainerRemove(_: any, item: Item, container: IContainer | undefined, containerPosition: Vector3 | undefined): void;
    private runContainerInvalidations;
    protected onItemFireUpdate(item: Item): void;
    protected onPlay(): void;
    protected onTickStart(): void;
    protected onTickEnd(): void;
    private update;
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
}
export {};
