/*!
 * Copyright 2011-2025 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type Human from "@wayward/game/game/entity/Human";
import { MoveType } from "@wayward/game/game/entity/IEntity";
import type { IPreSerializeCallback } from "@wayward/game/save/serializer/ISerializer";
export default class FlowField implements IPreSerializeCallback {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly mapSize: number;
    readonly size: number;
    readonly moveType: MoveType;
    encodedFlowField: Uint32Array | undefined;
    encodedPenaltyField: Uint32Array | undefined;
    private instance;
    private flowField;
    private penaltyField;
    constructor(x: number | undefined, y: number, z: number, mapSize: number, size: number, moveType: MoveType);
    toString(): string;
    preSerializeObject(): void;
    load(): void;
    unload(): void;
    getZ(): number;
    getFieldValue(x: number, y: number): number;
    updateField(flowFieldHumans: Human[]): void;
    resetPenalty(gridIndex: number): void;
    reset(): void;
    /**
     * The pointer to the views might change when emscripten grows memory
     * So we need to refetch it sometimes
     * The array length is 0 when the view is invalid
     */
    private updateViews;
}
