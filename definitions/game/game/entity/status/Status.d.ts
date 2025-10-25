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
import type EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import { StatusChangeReason } from "@wayward/game/game/entity/IEntity";
import type { IStatusDescription, IStatusIconDescription, StatusParticle, StatusType } from "@wayward/game/game/entity/status/IStatus";
import { StatusParticleEvent } from "@wayward/game/game/entity/status/IStatus";
import { StatusThreatLevel } from "@wayward/game/game/entity/status/IStatus";
import IStatusContext from "@wayward/game/game/entity/status/IStatusContext";
import type { StatusEffectList } from "@wayward/game/game/entity/status/StatusEffectList";
import type { IGameOptionsStatus } from "@wayward/game/game/options/IGameOptions";
import type Message from "@wayward/game/language/dictionary/Message";
import { StatusTranslation } from "@wayward/game/language/dictionary/Misc";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type StatusRenderer from "@wayward/game/renderer/StatusRenderer";
import type { IHighlight } from "@wayward/game/ui/util/IHighlight";
import type { IRGB } from "@wayward/utilities/Color";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
export type StatusClass = Class<Status, [StatusType, EntityWithStats?]> & IModdable;
export interface IStatusEvents {
    tick(): any;
    deregister(): any;
    refreshed(reason?: StatusChangeReason): any;
    levelChange(level: number, oldLevel: number): any;
    effectsChange(): any;
}
export default class Status extends EventEmitter.Host<IStatusEvents> {
    readonly type: StatusType;
    static getOptions(type: StatusType, entity?: EntityWithStats): IGameOptionsStatus;
    static update(status: Status): void;
    private registered;
    private readonly _entity;
    get context(): IStatusContext;
    constructor(type: StatusType, entity?: EntityWithStats);
    get description(): IStatusDescription | undefined;
    get entity(): EntityWithStats;
    getOptions(): IGameOptionsStatus;
    register(): void;
    /**
     * Registers this status effect
     */
    private reregister;
    /**
     * Emits the "deregister" event on this entity.
     * @final This method isn't meant to be overridden. If you need to run code on deregistration, subscribe to the "deregister" event.
     */
    private deregister;
    getRenderer(): StatusRenderer | undefined;
    /**
     * Gets the particle events for the given
     * @param event The event that could cause particles, IE `turn` or `tick`.
     * @returns A 2-value tuple describing the particle effect, or `undefined` if there should be no particles.
     * ### Particle tuple parameters:
     * @param countOrChance If a number less than `1`, the chance of the particle effect happening. Greater than `1` increases the number of particles.
     * @param color The color of the particle effect
     */
    getParticles(event: StatusParticleEvent): StatusParticle | undefined;
    getIcon(displayIndex?: number): IStatusIconDescription | undefined;
    getHighlight(): IHighlight | undefined;
    isActive(): boolean;
    add(reason?: StatusChangeReason, level?: number, force?: boolean, oldLevel?: number): this;
    remove(reason?: StatusChangeReason): this;
    toggle(level: number, reason?: StatusChangeReason): this;
    toggle(has: boolean, reason?: StatusChangeReason): this;
    /**
     * Returns the "level" of this status effect. Higher levels mean greater effects. A level of `0` means no effect.
     */
    getLevel(): number;
    getThreatLevel(): StatusThreatLevel;
    getTranslation(which?: StatusTranslation, level?: number): TranslationImpl | undefined;
    refresh(): void;
    getEffects(): StatusEffectList;
    getInterval(): number | false;
    /**
     * Whether the status effect should pass (be removed from the human).
     */
    protected shouldPass(): boolean;
    /**
     * Event handler for when the status effect passes.
     */
    protected onPassed(level: number): void;
    /**
     * Event handler for every tick that the human has the status effect.
     */
    protected onTick?(): void;
    damageEntity(damage: number, deathMessage: Message, blood?: boolean): number | undefined;
    /**
     * Creates particle events from the 2-value tuple provided.
     * ### Particle tuple parameters:
     * @param countOrChance If a number less than `1`, the chance of the particle effect happening. Greater than `1` increases the number of particles.
     * @param color The color of the particle effect
     */
    protected createParticles([countOrChance, color]?: [number, IRGB] | [0]): void;
    private setupRegistration;
}
