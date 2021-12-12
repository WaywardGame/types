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
import type Player from "game/entity/player/Player";
import type { IPreSerializeCallback } from "save/serializer/ISerializer";
export default class FlowField implements IPreSerializeCallback {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly size: number;
    readonly moveType: MoveType;
    encodedFlowField: Uint32Array | undefined;
    encodedPenaltyField: Uint32Array | undefined;
    private instance;
    private flowField;
    private penaltyField;
    constructor(x: number | undefined, y: number, z: number, size: number, moveType: MoveType);
    toString(): string;
    preSerializeObject(): void;
    load(): void;
    unload(): void;
    getZ(): number;
    getHashCodes(): string[];
    getFieldValue(x: number, y: number): number;
    updateField(flowFieldPlayers: Player[]): void;
    resetPenalty(gridIndex: number): void;
    reset(): void;
    /**
     * The pointer to the views might change when emscripten grows memory
     * So we need to refetch it sometimes
     * The array length is 0 when the view is invalid
     */
    private updateViews;
}
