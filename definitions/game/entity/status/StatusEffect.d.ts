/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import EventEmitter from "event/EventEmitter";
import Entity from "game/entity/Entity";
import { StatusEffectChangeReason, StatusType } from "game/entity/IEntity";
import { MessageType } from "game/entity/player/IMessageManager";
import { IGameOptionsStatusEffect } from "game/options/IGameOptions";
import Message from "language/dictionary/Message";
import Translation from "language/Translation";
import { IModdable } from "mod/ModRegistry";
import StatusEffectRenderer from "renderer/StatusEffectRenderer";
import { IHighlight } from "ui/component/IComponent";
import { IRGB } from "utilities/Color";
export interface IStatusEffectIconDescription {
    /**
     * A custom path for the icon, if necessary.
     */
    path?: string;
    /**
     * The frames of the status effect icon animation. Defaults to `3`.
     */
    frames?: number;
}
export declare type StatusEffectClass = Class<StatusEffect, [StatusType, Entity]> & IModdable;
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
export declare const badnessMessageType: Record<StatusEffectBadness, MessageType>;
export interface IStatusEffectEvents {
    deregister(): any;
    changed(): any;
}
export default abstract class StatusEffect extends EventEmitter.Host<IStatusEffectEvents> {
    readonly type: StatusType;
    protected readonly entity: Entity;
    static getDefaultRenderer(type: StatusType): StatusEffectRenderer | undefined;
    static update(effect: StatusEffect): void;
    private registered;
    constructor(type: StatusType, entity: Entity);
    getOptions(): IGameOptionsStatusEffect;
    register(): void;
    /**
     * Emits the "deregister" event on this entity.
     * @final This method isn't meant to be overridden. If you need to run code on deregistration, subscribe to the "deregister" event.
     */
    deregister(): void;
    getRenderer(): StatusEffectRenderer | undefined;
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
    isActive(): boolean;
    add(reason?: StatusEffectChangeReason): this;
    remove(reason?: StatusEffectChangeReason): this;
    toggle(has: boolean, reason?: StatusEffectChangeReason): this;
    /**
     * Returns the "level" of this status effect. Higher levels mean greater effects. A level of `0` means no effect.
     * The default implementation of this method returns `1` if the effect is active, and `0` if it is not.
     */
    getLevel(): number;
    getBadness(): StatusEffectBadness;
    getTranslation(): Translation;
    getDescription(): Translation;
    refresh(): void;
    protected getEffectRate(): number;
    /**
     * Whether the status effect should pass (be removed from the human).
     */
    protected shouldPass(): boolean;
    /**
     * Event handler for when the status effect passes.
     */
    protected onPassed(): void;
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
