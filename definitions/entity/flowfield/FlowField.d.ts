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
import { MoveType } from "entity/IEntity";
import Player from "entity/player/Player";
import IFlowField from "flowfield/IFlowField";
import { ITile } from "tile/ITerrain";
export default class FlowField implements IFlowField {
    private readonly z;
    private readonly moveType;
    private instance;
    private readonly flowField;
    private readonly penaltyField;
    constructor(size: number, z: number, moveType: MoveType);
    getZ(): number;
    delete(): void;
    getHashCodes(): string[];
    getFieldValue(x: number, y: number): number;
    updateField(plys: Player[]): void;
    updateTile(gridIndex: number, tile: ITile): void;
    reset(): void;
}
