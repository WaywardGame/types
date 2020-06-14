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
import { InspectType } from "game/inspection/IInspection";
import { Context, InfoProvider } from "game/inspection/InfoProvider";
import Inspection from "game/inspection/Inspection";
import Translation from "language/Translation";
import { ITileEvent } from "tile/ITileEvent";
import { IVector3 } from "utilities/math/IVector";
declare class TileEventInspection extends Inspection<ITileEvent> {
    static getFromTile(position: IVector3): TileEventInspection[];
    constructor(tileEvent: ITileEvent, inspectType?: InspectType);
    getId(): string;
    get(context: Context): Array<Translation | InfoProvider>;
    onRemove(_: any, event: ITileEvent): void;
}
declare module TileEventInspection {
    class Minor extends TileEventInspection {
        static getFromTile(position: IVector3): Minor[];
        constructor(tileEvent: ITileEvent);
    }
}
export default TileEventInspection;
