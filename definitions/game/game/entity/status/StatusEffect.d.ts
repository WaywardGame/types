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
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type EntityWithStats from "@wayward/game/game/entity/EntityWithStats";
import type { StatusType } from "@wayward/game/game/entity/IEntity";
import { StatusEffectChangeReason } from "@wayward/game/game/entity/IEntity";
import { MessageType } from "@wayward/game/game/entity/player/IMessageManager";
import type { IGameOptionsStatusEffect } from "@wayward/game/game/options/IGameOptions";
import type Message from "@wayward/game/language/dictionary/Message";
import { StatusEffectTranslation } from "@wayward/game/language/dictionary/Misc";
import type { IModdable } from "@wayward/game/mod/ModRegistry";
import type StatusEffectRenderer from "@wayward/game/renderer/StatusEffectRenderer";
import type { IHighlight } from "@wayward/game/ui/util/IHighlight";
import type ImagePath from "@wayward/game/ui/util/ImagePath";
import type { IRGB } from "@wayward/utilities/Color";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
export interface IStatusEffectIconDescription {
    /**
     * A custom path for the icon, if necessary.
     */
    path?: string | ImagePath;
    /**
     * The frames of the status effect icon animation. Defaults to `3`.
     */
    frames?: number;
}
export type StatusEffectClass = Class<StatusEffect, [StatusType, EntityWithStats]> & IModdable;
export declare enum StatusEffectBadness {
    Neutral = 0,
    Bad = 1,
    Good = 2
}
export declare enum StatusEffectParticleEvent {
    /**
     * Particle effect for when a turn passes
     */
    Turn = 0,
    /**
     * Particle effect for when the status effect has a "tick". A status effect tick is controlled by the effect rate.
     */
    Tick = 1,
    /**
     * Particle effect for when the status effect passes.
     */
    Passed = 2
}
export declare enum UiStatusType {
    Cut = -100000
}
export declare const badnessMessageType: Record<StatusEffectBadness, MessageType>;
export interface IStatusEffectEvents {
    deregister(): any;
    refreshed(reason?: StatusEffectChangeReason): any;
}
export default abstract class StatusEffect extends EventEmitter.Host<IStatusEffectEvents> {
    readonly type: StatusType;
    static update(effect: StatusEffect): void;
    private registered;
    private readonly _entity;
    constructor(type: StatusType, entity?: EntityWithStats);
    protected get entity(): EntityWithStats;
    getOptions(): IGameOptionsStatusEffect;
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
    getRenderer(): StatusEffectRenderer | undefined;
    getDefaultRenderer(): StatusEffectRenderer | undefined;
    /**
     * Gets the particle events for the given
     * @param _event The event that could cause particles, IE `turn` or `tick`.
     * @returns A 2-value tuple describing the particle effect, or `undefined` if there should be no particles.
     * ### Particle tuple parameters:
     * @param countOrChance If a number less than `1`, the chance of the particle effect happening. Greater than `1` increases the number of particles.
     * @param color The color of the particle effect
     */
    getParticles(_event: StatusEffectParticleEvent): [number, IRGB] | undefined;
    getIcon(): IStatusEffectIconDescription | undefined;
    getHighlight(): IHighlight | undefined;
    isActive(): number;
    add(reason?: StatusEffectChangeReason, level?: number): this;
    remove(reason?: StatusEffectChangeReason): this;
    toggle(has: boolean, reason?: StatusEffectChangeReason): this;
    /**
     * Returns the "level" of this status effect. Higher levels mean greater effects. A level of `0` means no effect.
     */
    getLevel(): number;
    getBadness(): StatusEffectBadness;
    getTranslation(which?: StatusEffectTranslation.Adjective | StatusEffectTranslation.Name): TranslationImpl;
    getDescription(): TranslationImpl;
    refresh(): void;
    protected getEffectRate(): number;
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
    protected onTick(): void;
    protected damageEntity(damage: number, deathMessage: Message, blood?: boolean): number | undefined;
    /**
     * Creates particle events from the 2-value tuple provided.
     * ### Particle tuple parameters:
     * @param countOrChance If a number less than `1`, the chance of the particle effect happening. Greater than `1` increases the number of particles.
     * @param color The color of the particle effect
     */
    protected createParticles([countOrChance, color]?: [number, IRGB] | [0]): void;
    private setupRegistration;
}
