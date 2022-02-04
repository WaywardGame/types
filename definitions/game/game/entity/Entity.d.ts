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
import EventEmitter from "event/EventEmitter";
import type Creature from "game/entity/creature/Creature";
import type { IDamageInfo } from "game/entity/creature/ICreature";
import type Human from "game/entity/Human";
import type { IEntityEvents, IProperties, IStatus, Property, StatusEffectChangeReason } from "game/entity/IEntity";
import { DamageType, EntityType, MoveType, StatusType } from "game/entity/IEntity";
import type { IStats } from "game/entity/IStats";
import type NPC from "game/entity/npc/NPC";
import type Player from "game/entity/player/Player";
import Stats from "game/entity/Stats";
import type StatusEffect from "game/entity/status/StatusEffect";
import type { FireType, TileUpdateType } from "game/IGame";
import type { IInspector } from "game/inspection/IInfoProvider";
import type { IslandId } from "game/island/IIsland";
import type { ItemType, RecipeLevel } from "game/item/IItem";
import type { IReferenceable } from "game/reference/IReferenceManager";
import type { ITemperatureSource } from "game/temperature/ITemperature";
import type { ITile } from "game/tile/ITerrain";
import type { ISerializedTranslation } from "language/ITranslation";
import type Translation from "language/Translation";
import FieldOfView from "renderer/fieldOfView/FieldOfView";
import type { CanASeeBType } from "renderer/fieldOfView/IFieldOfView";
import type { ItemNotifierType, StatNotificationType } from "renderer/notifier/INotifier";
import { Direction } from "utilities/math/Direction";
import type { IVector2, IVector3 } from "utilities/math/IVector";
import Vector2 from "utilities/math/Vector2";
import type { IVector4 } from "utilities/math/Vector4";
export default abstract class Entity extends EventEmitter.Host<IEntityEvents> implements IReferenceable, IInspector, ITemperatureSource, IVector3 {
    readonly stat: Stats<this>;
    entityType: EntityType;
    id: number;
    referenceId?: number;
    renamed?: string | ISerializedTranslation;
    z: number;
    x: number;
    y: number;
    /**
     * Not guaranteed to be synced between the server and client for Player entities
     */
    fromX: number;
    /**
     * Not guaranteed to be synced between the server and client for Player entities
     */
    fromY: number;
    moveType: MoveType | undefined;
    anim: number;
    stopNextMovement: boolean;
    direction: Vector2;
    facingDirection: Direction.Cardinal | Direction.None;
    stats: IStats;
    status: IStatus;
    properties: IProperties | undefined;
    islandId: IslandId;
    attackAnimationType: DamageType | undefined;
    attackAnimationEndTime: number | undefined;
    isMovingClientside: boolean;
    private _movementFinishTime;
    private _inFov;
    private readonly statusHandlers;
    constructor();
    get island(): import("../island/Island").default;
    abstract getName(): Translation;
    toString(): string;
    getInspectionId(): string;
    /**
     * Returns whether the entity has the given `StatusType`
     * @param status The status to check
     */
    hasStatus(status: StatusType): boolean;
    /**
     * Sets whether the entity has the given `StatusType`.
     * Emits `EntityEvent.StatusChange`.
     * @param status The status to change
     * @param hasStatusEffect Whether the entity will have the status
     * @param reason The reason for the change
     */
    setStatus(status: StatusType, hasStatusEffect: boolean, reason: StatusEffectChangeReason): void;
    /**
     * Returns the handler for this status effect, whether or not this entity currently has the effect.
     */
    getStatus<S extends StatusEffect = StatusEffect>(status: StatusType): S | undefined;
    /**
     * Generator for status effects on the entity.
     */
    getStatuses(): StatusEffect[];
    /**
     * Generator for status effects on the entity.
     */
    getActiveStatuses(): StatusEffect[];
    abstract damage(damageInfoOrAmount: IDamageInfo | number): number | undefined;
    getCraftingDifficulty(level: RecipeLevel): number;
    getTile(): ITile;
    getPoint(): IVector3;
    getFacingPoint(): IVector3;
    getFacingTile(): ITile;
    moveTo(x: number, y: number, z: number): boolean;
    isNearby(entity: Entity): boolean;
    /**
     * Faces the target and animates a bump into effect
     */
    animateBumpTowards(x: number, y: number): void;
    animateAttack(damageType: DamageType[] | undefined): void;
    getMovementPoint(timeStamp: number): IVector2;
    getMovementProgress(timeStamp: number): number;
    getMovementFinishTime(_timeStamp: number): number | undefined;
    getMoveType(): MoveType;
    setMoveType(moveType: MoveType): void;
    isInFov(): boolean;
    setInFov(inFov: boolean): void;
    isOnFire(): FireType;
    canSeeObject(type: CanASeeBType, object: IVector4 & {
        fromX: number;
        fromY: number;
    }, fieldOfView?: FieldOfView, customRadius?: number): boolean;
    canSeePosition(type: CanASeeBType, islandId: IslandId, x: number, y: number, z: number, fieldOfView?: FieldOfView | undefined, customRadius?: number): boolean;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    notifyItem(itemNotifierType: ItemNotifierType, type: ItemType): void;
    notifyStat(type: StatNotificationType, value: number): void;
    hasProperty(property: Property): boolean;
    addProperty(property: Property, value: any): void;
    getProperty<T>(property: Property): T | undefined;
    removeProperty(property: Property): boolean;
    getProducedTemperature(): number | undefined;
    abstract readonly tileUpdateType: TileUpdateType;
    get asEntity(): Entity;
    abstract get asCreature(): Creature | undefined;
    abstract get asHuman(): Human | undefined;
    abstract get asNPC(): NPC | undefined;
    abstract get asPlayer(): Player | undefined;
    abstract get asLocalPlayer(): Player | undefined;
    protected abstract getApplicableStatusEffects(): Set<StatusType>;
    refreshStatusEffects(): void;
    private initializeStatusEffects;
    private initializeStatusHandler;
}
