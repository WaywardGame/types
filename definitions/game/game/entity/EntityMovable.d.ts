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
import type { SfxType } from "audio/IAudio";
import type { IEventEmitter } from "event/EventEmitter";
import Entity from "game/entity/Entity";
import type { IEntityConstructorOptions, IEntityEvents, IMoveToOptions } from "game/entity/IEntity";
import { DamageType, MoveType } from "game/entity/IEntity";
import { MovingClientSide } from "game/entity/IHuman";
import type { IMovementTime } from "game/IGame";
import type { IslandId } from "game/island/IIsland";
import type Tile from "game/tile/Tile";
import type { IRendererOrigin } from "renderer/context/RendererOrigin";
import FieldOfView from "renderer/fieldOfView/FieldOfView";
import type { CanASeeBType } from "renderer/fieldOfView/IFieldOfView";
import type { Direction } from "utilities/math/Direction";
import type { IVector2 } from "utilities/math/IVector";
import type Vector2 from "utilities/math/Vector2";
import type { IVector4 } from "utilities/math/Vector4";
export interface IEntityMovableEvents extends IEntityEvents {
    /**
     * Called before moving.
     * Can be called twice for humans
     * @param isMoving True the second time it's called, right as the entity is about to actually move
     */
    preMove(fromTile: Tile, toTile: Tile, isMoving: boolean): boolean | undefined | void;
    /**
     * Called after moving.
     */
    postMove(fromTile: Tile, toTile: Tile): void;
}
/**
 * Entity class that allows movement
 */
export default abstract class EntityMovable<TypeType extends number = number, TagType = unknown, CounterType = unknown> extends Entity<TypeType, TagType, CounterType> implements IRendererOrigin {
    event: IEventEmitter<this, IEntityMovableEvents>;
    /**
     * Not guaranteed to be synced between the server and client for Human entities
     */
    fromX?: number;
    fromY?: number;
    isMoving?: boolean;
    /**
     * Only used for Human entities
     */
    movementCompleteZ?: number;
    anim?: number;
    moveType?: MoveType;
    stopNextMovement?: boolean;
    /**
     * undefined = Vector2.ZERO for this
     */
    direction?: Vector2;
    /**
     * undefined = Direction.None for this
     */
    facingDirection?: Direction.Cardinal;
    /**
     * The state of what the client thinks is happening to this entity (regarding movement)
     */
    movingClientside: MovingClientSide;
    movingOptions?: IMoveToOptions;
    allowSmartMovementClientside?: boolean;
    attackAnimationType?: DamageType;
    attackAnimationTime?: IMovementTime;
    protected _movementTime?: {
        start: number;
        end: number;
    };
    constructor(entityOptions?: IEntityConstructorOptions<TypeType>);
    /**
     * Called when the entity is about to move to another tile.
     * This should update relevant properties on the tile and return true
     * @param fromTile Tile the entity was on
     * @param toTile Tile the entity is moving onto
     * @returns False to block the move
     */
    protected abstract updateTile(fromTile: Tile, toTile: Tile): boolean;
    get asEntityMovable(): EntityMovable<TypeType, TagType>;
    /**
     * Regular entities don't have a direction so this will be the same as getTile()
     */
    get facingTile(): Tile;
    canSeeObject(type: CanASeeBType, object: IVector4 & {
        fromX: number;
        fromY: number;
    }, fieldOfView?: FieldOfView, customRadius?: number): boolean;
    canSeeTile(type: CanASeeBType, tile: Tile, fieldOfView?: FieldOfView, customRadius?: number): boolean;
    canSeePosition(type: CanASeeBType, islandId: IslandId, x: number, y: number, z: number, fieldOfView?: FieldOfView | undefined, customRadius?: number): boolean;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    getMovementDelay(): number;
    moveTo(tile: Tile, options?: IMoveToOptions): boolean;
    /**
     * Faces the target tile
     */
    updateDirection(tile: Tile): void;
    /**
     * Faces the target and animates a bump into effect
     */
    animateBumpTowards(tile: Tile): void;
    protected setMoving(fromX: number, fromY: number, toZ?: number, options?: IMoveToOptions): void;
    animateAttack(damageType: DamageType[] | undefined): void;
    getMovementPoint(timeStamp: number): IVector2;
    /**
     * Gets movement progress and moves the state machine forward when the movement is completed
     */
    getMovementProgress(timeStamp: number): number;
    protected onMovementCompleted(): void;
    get isFlying(): boolean;
    getMoveType(): MoveType;
    setMoveType(moveType: MoveType): void;
}
