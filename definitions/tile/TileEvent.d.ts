import { IObject } from "game/IObject";
import { TileEventType, ITileEventDescription } from "tile/ITileEvent";
import { ISerializedTranslation } from "language/Translation";
import { IVector3 } from "utilities/math/IVector";
export default class TileEvent implements IObject<TileEventType>, IVector3 {
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
    constructor(type?: TileEventType, x?: number, y?: number, z?: number);
    description(): ITileEventDescription;
}
