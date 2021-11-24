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
import FlowField from "game/entity/flowfield/FlowField";
import type { DebugRendererDelegate } from "game/entity/flowfield/IFlowFieldDebugRenderer";
import { MoveType } from "game/entity/IEntity";
import type Player from "game/entity/player/Player";
import type Island from "game/island/Island";
import { Direction } from "utilities/math/Direction";
import type { IVector3 } from "utilities/math/IVector";
export default class FlowFieldManager {
    private readonly island;
    private readonly size;
    delegate: DebugRendererDelegate;
    flowFields: Record<string, FlowField>;
    playerIds: number[];
    private _flowFieldPlayers;
    constructor(island: Island, size: number);
    private get flowFieldPlayers();
    /**
     * Remove the player from the flow field when they leave the game
     * Using preRemove because we are relying on the player id
     */
    protected onPlayerIdChanged(player: Player, currentId: number, newId: number, isAbsentPlayer: boolean): void;
    protected onMoveToIsland(player: Player, oldIsland: Island): void;
    delete(): void;
    setDelegate(delegate: DebugRendererDelegate): void;
    getWidth(): number;
    getHeight(): number;
    isInFlowField(point: IVector3): boolean;
    isPlayerInFlowField(player: Player): boolean;
    getMoveDirection(x: number, y: number, z: number, moveType: MoveType): Direction;
    getOpposingMoveDirection(x: number, y: number, z: number, moveType: MoveType): Direction;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
    setPlayers(flowFieldPlayers: Player[]): void;
    update(): void;
    reset(): void;
    private getDirection;
    private getFlowField;
    private getFlowFields;
}
