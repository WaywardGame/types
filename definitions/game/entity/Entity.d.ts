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
import { SfxType } from "audio/IAudio";
import EventEmitter from "event/EventEmitter";
import Creature from "game/entity/creature/Creature";
import { IDamageInfo } from "game/entity/creature/ICreature";
import Human from "game/entity/Human";
import { DamageType, EntityType, IEntityEvents, IProperties, IStatus, MoveType, Property, StatusEffectChangeReason, StatusType } from "game/entity/IEntity";
import { IStats } from "game/entity/IStats";
import NPC from "game/entity/npc/NPC";
import Player from "game/entity/player/Player";
import Stats from "game/entity/Stats";
import StatusEffect from "game/entity/status/StatusEffect";
import { FireType, TileUpdateType } from "game/IGame";
import { IInspector } from "game/inspection/IInfoProvider";
import { ItemType, RecipeLevel } from "game/item/IItem";
import { IReferenceable } from "game/reference/IReferenceManager";
import { ITemperatureSource } from "game/temperature/ITemperature";
import { ITile } from "game/tile/ITerrain";
import Translation, { ISerializedTranslation } from "language/Translation";
import { CanASeeBType } from "renderer/fieldofview/IFieldOfView";
import { ItemNotifierType, StatNotificationType } from "renderer/INotifier";
import { IUnserializedCallback } from "save/ISerializer";
import { Direction } from "utilities/math/Direction";
import { IVector2, IVector3 } from "utilities/math/IVector";
export default abstract class Entity extends EventEmitter.Host<IEntityEvents> implements IReferenceable, IInspector, IUnserializedCallback, ITemperatureSource, IVector3 {
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
    direction: IVector2;
    facingDirection: Direction.Cardinal | Direction.None;
    stats: IStats;
    status: IStatus;
    properties: IProperties | undefined;
    attackAnimationType: DamageType | undefined;
    attackAnimationEndTime: number | undefined;
    private _movementFinishTime;
    private _inFov;
    private readonly statusHandlers;
    private wasUnserialized;
    constructor();
    onUnserialized(): void;
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
    getTileUpdateType(): TileUpdateType;
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
    canSeePosition(type: CanASeeBType, tileX: number, tileY: number, tileZ: number): boolean;
    canSeeObject(type: CanASeeBType, object: IVector3 & {
        fromX: number;
        fromY: number;
    }): boolean;
    queueSoundEffect(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    queueSoundEffectInFront(type: SfxType, delay?: number, speed?: number, noPosition?: boolean): void;
    notifyItem(itemNotifierType: ItemNotifierType, type: ItemType): void;
    notifyStat(type: StatNotificationType, value: number): void;
    hasProperty(property: Property): boolean;
    addProperty(property: Property, value: any): void;
    getProperty<T>(property: Property): T | undefined;
    removeProperty(property: Property): boolean;
    getProducedTemperature(): number | undefined;
    get asEntity(): Entity;
    abstract get asCreature(): Creature | undefined;
    abstract get asHuman(): Human | undefined;
    abstract get asNPC(): NPC | undefined;
    abstract get asPlayer(): Player | undefined;
    protected abstract getApplicableStatusEffects(): Set<StatusType>;
    private initializeStatusEffects;
    private initializeStatusHandlers;
    private initializeStatusHandler;
}
