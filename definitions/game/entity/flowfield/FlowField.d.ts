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
import { MoveType } from "game/entity/IEntity";
import Player from "game/entity/player/Player";
export default class FlowField {
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
    updateField(flowFieldPlayers: Player[]): void;
    resetPenalty(gridIndex: number): void;
    reset(): void;
}
