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
import { CreationId } from "game/IGame";
import { IObject } from "game/IObject";
import { IReferenceable } from "game/reference/IReferenceManager";
import { ITemperatureSource } from "game/temperature/ITemperature";
import { FireStage } from "game/tile/events/IFire";
import { ITile } from "game/tile/ITerrain";
import { ITileEventDescription, TileEventType } from "game/tile/ITileEvent";
import Translation, { ISerializedTranslation } from "language/Translation";
import { IVector3 } from "utilities/math/IVector";
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
    private _description;
    private _movementFinishTime?;
    constructor(type?: TileEventType, x?: number, y?: number, z?: number);
    toString(): string;
    description(): ITileEventDescription;
    getName(article?: boolean, count?: number): Translation;
    getTile(): ITile;
    getProducedTemperature(): number | undefined;
    updateFire(tile: ITile): void;
    moveTo(x: number, y: number, z: number): void;
    addToTile(tile: ITile): void;
    removeFromTile(updateTile: boolean): void;
    getMovementProgress(timeStamp: number): number;
}
