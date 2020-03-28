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
import { Context } from "game/inspection2/InfoProvider";
import Inspection from "game/inspection2/Inspection";
import Translation from "language/Translation";
import { IVector3 } from "utilities/math/IVector";
export default class TileInspection extends Inspection<IVector3> {
    static getFromTile(position: IVector3): TileInspection;
    constructor(tile: IVector3);
    getTile(): import("../../../tile/ITerrain").ITile;
    get(context: Context): Translation;
    onUpdateTile(_: any, x: number, y: number, z: number): void;
    getId(): string;
}
