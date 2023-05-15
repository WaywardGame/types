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
import type Entity from "game/entity/Entity";
import type Human from "game/entity/Human";
import { MovingClientSide } from "game/entity/IHuman";
import type Player from "game/entity/player/Player";
import type { IslandId } from "game/island/IIsland";
import type Island from "game/island/Island";
import FieldOfView from "renderer/fieldOfView/FieldOfView";
import type { CanASeeBType, IFieldOfViewOrigin } from "renderer/fieldOfView/IFieldOfView";
import type { IVector4 } from "utilities/math/Vector4";
export interface IRendererOrigin extends IFieldOfViewOrigin {
    readonly fromX?: number;
    readonly fromY?: number;
    readonly movingClientside: MovingClientSide;
    readonly asEntity: Entity;
    readonly asPlayer: Player | undefined;
    readonly asHuman: Human | undefined;
    canSeeObject(type: CanASeeBType, object: IVector4 & {
        fromX: number;
        fromY: number;
    }, fieldOfView: FieldOfView | undefined): boolean;
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
    readonly movingClientside: MovingClientSide;
    readonly asEntity: Entity;
    readonly asPlayer: Player | undefined;
    readonly asHuman: Human | undefined;
    private constructor();
    get island(): Island;
    getMovementProgress(_timeStamp: number): number;
    canSeeObject(type: CanASeeBType, object: IVector4 & {
        fromX: number;
        fromY: number;
    }, fieldOfView: FieldOfView | undefined): boolean;
    canSeePosition(type: CanASeeBType, islandId: IslandId, x: number, y: number, z: number, fieldOfView: FieldOfView | undefined): boolean;
}
