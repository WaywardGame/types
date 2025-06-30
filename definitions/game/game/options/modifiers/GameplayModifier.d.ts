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
import type { IHasImagePath } from "@wayward/game/game/IObject";
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import type TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type Translation from "@wayward/game/language/Translation";
import { RandomReference } from "@wayward/game/utilities/random/RandomReference";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { LegacySeededGenerator } from "@wayward/utilities/random/generators/LegacySeededGenerator";
import type { PCGSeededGenerator } from "@wayward/utilities/random/generators/PCGSeededGenerator";
import { RandomInstance } from "@wayward/utilities/random/IRandom";
import type { Random } from "@wayward/utilities/random/Random";
export interface IGameplayModifierInstanceEvents {
    initialize(): any;
    changeOptions(): any;
    uninitialize(): any;
}
export declare abstract class GameplayModifierInstance<ID extends number, INSTANCE_ARGS extends any[] = [], DATA = any> extends EventEmitter.Host<IGameplayModifierInstanceEvents> {
    readonly id: ID;
    readonly random: Random;
    protected readonly args: INSTANCE_ARGS;
    constructor(id: ID, random: Random, ...args: INSTANCE_ARGS);
    options: IGameOptionsPartial;
    setOptions(options: IGameOptionsPartial): this;
    addOptions(options: IGameOptionsPartial): this;
    private titleInitializer?;
    getTitle(): TranslationImpl;
    protected abstract getDefaultTitle(): Translation;
    setTitle(initializer: (defaultTitle: Translation) => Translation): this;
    getData(): DATA | undefined;
    setData(data?: DATA): this;
    clearData(): this;
    initialize?(): void;
    uninitialize?(): void;
}
export type GetModifierInstance<MODIFIER extends GameplayModifier<number, GameplayModifierInstance<number, any[]>, any[]>> = MODIFIER extends GameplayModifier<number, infer INSTANCE, any[]> ? INSTANCE : never;
export type GetModifierId<MODIFIER extends GameplayModifier<number, GameplayModifierInstance<number, any[]>, any[]>> = MODIFIER extends GameplayModifier<infer ID, any, any[]> ? ID : never;
export type GetModifierInstanceArgs<MODIFIER extends GameplayModifier<number, GameplayModifierInstance<number, any[]>, any[]>> = MODIFIER extends GameplayModifier<number, any, infer INSTANCE_ARGS> ? INSTANCE_ARGS : never;
export default abstract class GameplayModifier<ID extends number, INSTANCE extends GameplayModifierInstance<ID, any[]> = GameplayModifierInstance<ID, any[]>, INSTANCE_ARGS extends any[] = []> implements IHasImagePath {
    readonly id: ID;
    readonly random: RandomInstance | RandomReference;
    private readonly _args;
    readonly imagePath?: string;
    constructor(id: ID, random?: RandomInstance | RandomReference);
    abstract instantiate(type: ID, ...args: INSTANCE_ARGS): INSTANCE | undefined;
    abstract initialize(instance: INSTANCE, ...args: INSTANCE_ARGS): INSTANCE | undefined;
    uninitialize(instance: INSTANCE): void;
    protected getRandom(): Random<LegacySeededGenerator | PCGSeededGenerator>;
}
