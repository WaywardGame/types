/*!
 * Copyright 2011-2023 Unlok
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
import type Human from "game/entity/Human";
import { EntityType, MoveType } from "game/entity/IEntity";
import type Player from "game/entity/player/Player";
import type Island from "game/island/Island";
import { Direction } from "utilities/math/Direction";
import type { IVector3 } from "utilities/math/IVector";
interface IFlowFieldHuman {
    type: EntityType;
    id: number;
}
export default class FlowFieldManager {
    private readonly island;
    private readonly size;
    delegate: DebugRendererDelegate;
    flowFields: Map<"-1-0" | "-1-1" | "-1-2" | "-1-4" | "-1-8" | "-1-16" | "-1-32" | "-1-64" | "-1-128" | "-1-256" | "-1-512" | "-1-1024" | "-1-15" | "0-0" | "0-1" | "0-2" | "0-4" | "0-8" | "0-16" | "0-32" | "0-64" | "0-128" | "0-256" | "0-512" | "0-1024" | "0-15" | "1-0" | "1-1" | "1-2" | "1-4" | "1-8" | "1-16" | "1-32" | "1-64" | "1-128" | "1-256" | "1-512" | "1-1024" | "1-15", FlowField>;
    humans: IFlowFieldHuman[];
    private _flowFieldHumans;
    constructor(island: Island, size: number);
    private get flowFieldHumans();
    load(): void;
    unload(): void;
    /**
     * Remove the player from the flow field when they leave the game
     * Using preRemove because we are relying on the player id
     */
    protected onPlayerIdChanged(player: Player, currentId: number, newId: number, isAbsentPlayer: boolean): void;
    protected onMoveToIsland(player: Player, oldIsland: Island): void;
    setDelegate(delegate: DebugRendererDelegate): void;
    getWidth(): number;
    getHeight(): number;
    isInFlowField(point: IVector3): boolean;
    isHumanInFlowField(human: Human): boolean;
    getMoveDirection(x: number, y: number, z: number, moveType: MoveType): Direction;
    getOpposingMoveDirection(x: number, y: number, z: number, moveType: MoveType): Direction;
    updateTile(tileX: number, tileY: number, tileZ: number): void;
    setPlayers(flowFieldHumans: Human[]): void;
    update(): void;
    reset(): void;
    private getDirection;
    private getFlowField;
}
export {};
