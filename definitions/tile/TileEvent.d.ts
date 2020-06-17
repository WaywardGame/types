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
import { IObject } from "game/IObject";
import { ITemperatureSource } from "game/temperature/ITemperature";
import { ISerializedTranslation } from "language/Translation";
import { FireStage } from "tile/events/IFire";
import { ITileEventDescription, TileEventType } from "tile/ITileEvent";
import { IVector3 } from "utilities/math/IVector";
export interface ITileEventEvents {
    fireUpdate(stage?: FireStage): any;
}
export default class TileEvent extends EventEmitter.Host<ITileEventEvents> implements IObject<TileEventType>, IVector3, ITemperatureSource {
    static is(value: any): value is TileEvent;
    type: TileEventType;
    id: number;
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
    movementFinishTime?: number;
    spread?: number;
    step?: number;
    private _description;
    private fireStage?;
    constructor(type?: TileEventType, x?: number, y?: number, z?: number);
    description(): ITileEventDescription;
    getProducedTemperature(): number | undefined;
    updateFire(): void;
}
