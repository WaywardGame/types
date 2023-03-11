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
import type { IEventEmitter } from "event/EventEmitter";
import { StatusType } from "game/entity/IEntity";
import type { IStatus, StatusEffectChangeReason, IEntityConstructorOptions } from "game/entity/IEntity";
import type { IStatEvents, IStats } from "game/entity/IStats";
import type { IStatHost } from "game/entity/Stats";
import Stats from "game/entity/Stats";
import type StatusEffect from "game/entity/status/StatusEffect";
import type { IEntityMovableEvents } from "game/entity/EntityMovable";
import EntityMovable from "game/entity/EntityMovable";
export interface IEntityWithStatsEvents extends IEntityMovableEvents, IStatEvents {
    /**
     * Called when this entity gets or loses a status effect
     * @param entity The object this event is emitted from
     * @param status The type of status effect that was gained or lost
     * @param level Whether the entity now has the status effect
     * @param reason The reason for the change
     */
    statusChange(status: StatusType, level: number, reason: StatusEffectChangeReason): void;
}
/**
 * Entity class that includes stats/status system.
 * Note: We're assuming something with stats is also movable!
 */
export default abstract class EntityWithStats<TypeType extends number = number, TagType = unknown> extends EntityMovable<TypeType, TagType> implements IStatHost {
    event: IEventEmitter<this, IEntityWithStatsEvents>;
    stats: IStats;
    status: IStatus;
    readonly stat: Stats<this>;
    private readonly statusHandlers;
    constructor(entityOptions?: IEntityConstructorOptions<TypeType>);
    protected getApplicableStatusEffects(): Set<StatusType> | undefined;
    get asEntityWithStats(): EntityWithStats<TypeType, TagType>;
    /**
     * Returns whether the entity has the given `StatusType`
     * @param status The status to check
     */
    hasStatus(status: StatusType): number;
    /**
     * Sets whether the entity has the given `StatusType`.
     * Emits `EntityEvent.StatusChange`.
     * @param status The status to change
     * @param level Whether the entity will have the status.
     *              If given false/0, removes the status. If given true/1+, raises the status to the given level.
     * @param reason The reason for the change
     * @param force Forces the status to be set to the given value, even if the current effect is being lowered.
     */
    setStatus(status: StatusType, level: number | boolean, reason: StatusEffectChangeReason, force?: boolean): boolean;
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
    refreshStatusEffects(): void;
    private initializeStatusEffects;
    private initializeStatusHandler;
}
