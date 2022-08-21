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
import type { CreationId } from "game/IGame";
import type { IObject } from "game/IObject";
import type { IslandId } from "game/island/IIsland";
import type { IReferenceable } from "game/reference/IReferenceManager";
import type { ITemperatureSource } from "game/temperature/ITemperature";
import { FireStage } from "game/tile/events/IFire";
import type { ITile } from "game/tile/ITerrain";
import type { ITileEventDescription } from "game/tile/ITileEvent";
import { TileEventType } from "game/tile/ITileEvent";
import type { ISerializedTranslation } from "language/ITranslation";
import type { IVector3 } from "utilities/math/IVector";
export interface ITileEventEvents {
    /**
     * Emitted when the fire stage of this tile event changes.
     * Note: The fire stage of tile event is not saved, so when the tile event's fire stage is first checked on load, this event will be
     * emitted.
     */
    fireUpdate(tile: ITile, stage: FireStage | undefined): any;
}
export default class TileEvent extends EventEmitter.Host<ITileEventEvents> implements IReferenceable, IObject<TileEventType>, IVector3, ITemperatureSource {
    static is(value: any): value is TileEvent;
    readonly objectType: CreationId;
    type: TileEventType;
    id: number;
    referenceId?: number;
    z: number;
    x: number;
    y: number;
    renamed?: string | ISerializedTranslation;
    decay?: number;
    fromX: number;
    fromY: number;
    gfx?: number;
    maxDur?: number;
    minDur?: number;
    spread?: number;
    step?: number;
    /**
     * For use with the Fire TileEvent to check if it has a fuel source and should create ash by default.
     * Set to 0 to stop all ash production.
     */
    fuel?: number;
    private fireStage?;
    islandId: IslandId;
    private _description;
    private _movementTime;
    constructor(type?: TileEventType, islandId?: `${number},${number}`, x?: number, y?: number, z?: number);
    get island(): import("../island/Island").default;
    toString(): string;
    description(): ITileEventDescription | undefined;
    getName(article?: false | "definite" | "indefinite", count?: number): import("../../language/impl/TranslationImpl").default;
    getTile(): ITile;
    getProducedTemperature(): number | undefined;
    updateFire(tile: ITile): void;
    moveTo(x: number, y: number, z: number): void;
    addToTile(tile: ITile): void;
    removeFromTile(updateTile: boolean): void;
    getMovementProgress(timeStamp: number): number;
    burn(fire: TileEvent): void;
}
