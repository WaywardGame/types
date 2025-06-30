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
import type Entity from "@wayward/game/game/entity/Entity";
import type Human from "@wayward/game/game/entity/Human";
import type { IMovingData } from "@wayward/game/game/entity/IEntity";
import type Player from "@wayward/game/game/entity/player/Player";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type Island from "@wayward/game/game/island/Island";
import { FieldOfView } from "@wayward/game/renderer/fieldOfView/FieldOfView";
import type { CanASeeBType, IFieldOfViewOrigin } from "@wayward/game/renderer/fieldOfView/IFieldOfView";
export interface IRendererOrigin extends IFieldOfViewOrigin {
    readonly fromX?: number;
    readonly fromY?: number;
    readonly movingData: IMovingData;
    readonly asEntity: Entity;
    readonly asPlayer: Player | undefined;
    readonly asHuman: Human | undefined;
    canSeeObject(type: CanASeeBType, object: IRendererOrigin, fieldOfView: FieldOfView | undefined): boolean;
    canSeePosition(type: CanASeeBType, islandId: IslandId, x: number, y: number, z: number, fieldOfView: FieldOfView | undefined): boolean;
    getMovementProgress(timeStamp: number): number;
}
export declare class RendererOrigin implements IRendererOrigin {
    readonly islandId: IslandId;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    static fromEntity(entity: Entity): IRendererOrigin;
    readonly fromX: number;
    readonly fromY: number;
    readonly movingData: IMovingData;
    readonly asEntity: Entity;
    readonly asPlayer: Player | undefined;
    readonly asHuman: Human | undefined;
    constructor(islandId: IslandId, x: number, y: number, z: number);
    get island(): Island;
    getMovementProgress(_timeStamp: number): number;
    canSeeObject(type: CanASeeBType, object: IRendererOrigin, fieldOfView: FieldOfView | undefined): boolean;
    canSeePosition(type: CanASeeBType, islandId: IslandId, x: number, y: number, z: number, fieldOfView: FieldOfView | undefined): boolean;
}
