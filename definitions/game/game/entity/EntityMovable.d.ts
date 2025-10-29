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
import type { SfxType } from "@wayward/game/audio/IAudio";
import Entity from "@wayward/game/game/entity/Entity";
import type { IAttackAnimationData, IEntityConstructorOptions, IEntityEvents, IMoveToOptions, IMovingData, ISlippingData } from "@wayward/game/game/entity/IEntity";
import { DamageType, MoveFlag, MoveType, SlippingSpeed } from "@wayward/game/game/entity/IEntity";
import { Delay } from "@wayward/game/game/entity/IHuman";
import type { IslandId } from "@wayward/game/game/island/IIsland";
import type { IItemVehicle } from "@wayward/game/game/item/IItem";
import type { EntityReferenceTypes } from "@wayward/game/game/reference/IReferenceManager";
import type Tile from "@wayward/game/game/tile/Tile";
import type { IRendererOrigin } from "@wayward/game/renderer/context/RendererOrigin";
import { FieldOfView } from "@wayward/game/renderer/fieldOfView/FieldOfView";
import type { CanASeeBType } from "@wayward/game/renderer/fieldOfView/IFieldOfView";
import type { INotificationLocation } from "@wayward/game/renderer/notifier/INotifier";
import type { Direction } from "@wayward/game/utilities/math/Direction";
import type { IVector2, IVector3 } from "@wayward/game/utilities/math/IVector";
import Vector2 from "@wayward/game/utilities/math/Vector2";
import type { IEventEmitter } from "@wayward/utilities/event/EventEmitter";
import type { IRange } from "@wayward/utilities/math/Range";
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
    postMove(fromTile: Tile, toTile: Tile, flags: MoveFlag, skipExtinguishTorches?: boolean): void;
}
/**
 * Entity class that allows movement
 */
export default abstract class EntityMovable<DescriptionType = unknown, TypeType extends number = number, EntityReferenceType extends EntityReferenceTypes = EntityReferenceTypes, TagType = unknown> extends Entity<DescriptionType, TypeType, EntityReferenceType, TagType> implements IRendererOrigin, INotificationLocation {
    event: IEventEmitter<this, IEntityMovableEvents>;
    /**
     * Note: This might not be a whole number.
     */
    fromX?: number;
    /**
     * Note: This might not be a whole number.
     */
    fromY?: number;
    /**
     * Only used for Human entities
     */
    movementCompleteZ?: number;
    anim?: number;
    moveType?: MoveType;
    fastMoving?: boolean;
    shouldSkipNextMovement?: true;
    protected slipping?: ISlippingData;
    protected shouldSkipNextUpdate?: true;
    /**
     * undefined = Vector2.ZERO for this
     */
    direction?: Vector2;
    /**
     * undefined = Direction.None for this
     */
    facingDirection?: Direction.Cardinal;
    /**
     * Used for movement animations.
     * Note: This is clientside only.
     */
    readonly movingData: IMovingData;
    /**
     * Used for attack animations.
     * Note: This is clientside only.
     */
    attackAnimationData?: IAttackAnimationData;
    /**
     * Used for smart vehicle movement (minecarts)
     * Note: This is clientside only.
     */
    allowSmartMovementClientside?: boolean;
    constructor(entityOptions?: IEntityConstructorOptions<TypeType>);
    /**
     * Called when the entity is about to move to another tile.
     * This should update relevant properties on the tile and return true
     * @param fromTile Tile the entity was on
     * @param toTile Tile the entity is moving onto
     * @returns False to block the move
     */
    protected abstract updateTileWhenMoving(fromTile: Tile, toTile: Tile): boolean;
    get asEntityMovable(): EntityMovable<DescriptionType, TypeType, EntityReferenceType, TagType>;
    /**
     * Tile the entity is moving from
     */
    get fromTile(): Tile | undefined;
    /**
     * Regular entities don't have a direction so this will be the same as getTile()
     */
    get facingTile(): Tile;
    facingTileOffset(offset?: number): Tile;
    get slippingData(): ISlippingData | undefined;
    canSeeObject(type: CanASeeBType, object: IRendererOrigin, fieldOfView?: FieldOfView, customRadius?: number): boolean;
    canSeeTile(type: CanASeeBType, tile: Tile, fieldOfView?: FieldOfView, customRadius?: number): boolean;
    canSeePosition(type: CanASeeBType, islandId: IslandId, x: number, y: number, z: number, fieldOfView?: FieldOfView | undefined, customRadius?: number): boolean;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number): void;
    runWhileFacing<T>(lambda: () => T, position: IVector3, direction?: Direction.Cardinal): T;
    getMovementDelay(): number;
    /**
     * Move the entity to the tile
     */
    moveTo(tile: Tile, options?: IMoveToOptions): boolean;
    /**
     * Immediately move the entity to the tile
     */
    setPosition(tile: Tile): void;
    /**
     * Skips the next update for this creature / npc
     */
    skipNextUpdate(): void;
    /**
     * Skips the next movement for this creature / npc
     */
    skipNextMovement(): void;
    overrideNextMovement(tile: Tile): void;
    /**
     * Faces in the direction
     */
    updateDirection(direction: Direction.Cardinal): Direction.Cardinal;
    /**
     * Faces the target tile
     */
    updateDirection(tile: Tile): Direction.Cardinal;
    updateDirection(tile: Tile | Direction): Direction.Cardinal;
    /**
     * Start slipping if the tile is slippable.
     * Stops slipping if above the max slip count or if the tile is not slippable.
     */
    updateSlipping(tile: Tile, moveDirection: Direction.Cardinal, slippingSpeed?: SlippingSpeed): ISlippingData | undefined;
    /**
     * Start slipping the entity
     */
    startSlipping(direction: Direction.Cardinal, speed?: SlippingSpeed): ISlippingData;
    stopSlipping(): void;
    /**
     * Faces the target and animates a bump into effect
     */
    animateBumpTowards(tile: Tile): void;
    /**
     * Animates the entity between a specific set of positions
     */
    animate(fromX: number, fromY: number, toX: number, toY: number, delay: Delay): void;
    setMoving(fromX: number, fromY: number, toZ?: number, options?: IMoveToOptions): void;
    protected setFromPosition(fromX?: number, fromY?: number): void;
    animateAttack(damageType: DamageType[] | undefined): void;
    getMovementPoint(timeStamp: number): IVector2;
    /**
     * Gets movement progress and moves the state machine forward when the movement is completed
     */
    getMovementProgress(timeStamp: number): number;
    /**
     * Returns the Y offset when rendering this entity when it's flying
     */
    getFlyingOffsetY(movementProgress: number): number;
    protected onMovementCompleted(movingData: IMovingData): void;
    get isFlying(): boolean;
    get isFastMoving(): boolean;
    /**
     * Checks if the entity is moving.
     * This is based on the local client state (renderer).
     */
    get isMovingClientside(): boolean;
    getMoveType(): MoveType;
    setMoveType(moveType: MoveType): void;
    canSwapWith(entity: EntityMovable, source: string | undefined): boolean;
    getVehicle(): IItemVehicle | undefined;
    isVehicleAllowedOnTile(tile: Tile): boolean;
    getWanderChance?(defaultChance: number): number | undefined;
    getWanderIdleChance?(defaultChance: number): number | undefined;
    getWanderNewDirectionChance?(defaultChance: number): number | undefined;
    getWanderHomePoint?(): IVector2 | undefined;
    getWanderHomeRadius?(): number | undefined;
    getWanderHomePriority?(): IRange | undefined;
}
