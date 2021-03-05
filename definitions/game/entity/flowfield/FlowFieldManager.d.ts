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
import FlowField from "game/entity/flowfield/FlowField";
import { DebugRendererDelegate } from "game/entity/flowfield/IFlowFieldDebugRenderer";
import { MoveType } from "game/entity/IEntity";
import Player from "game/entity/player/Player";
import { Direction } from "utilities/math/Direction";
import { IVector3 } from "utilities/math/IVector";
export default class FlowFieldManager {
    private readonly size;
    delegate: DebugRendererDelegate;
    flowFields: Record<string, FlowField>;
    private flowFieldPlayers;
    constructor(size: number);
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
