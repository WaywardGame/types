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
import Player from "entity/player/Player";
import { ITile } from "tile/ITerrain";
export interface IFlowField {
    getZ(): number;
    delete(): void;
    getFieldValue(x: number, y: number): number;
    getHashCodes(): string[];
    reset(): void;
    updateField(plys: Player[]): void;
    updateTile(gridIndex: number, tile: ITile): void;
}
export default IFlowField;
