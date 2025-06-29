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
import type { IGameOptionsPartial } from "@wayward/game/game/options/IGameOptions";
import type GameplayModifier from "@wayward/game/game/options/modifiers/GameplayModifier";
import type { GameplayModifierInstance, GetModifierId, GetModifierInstance, GetModifierInstanceArgs } from "@wayward/game/game/options/modifiers/GameplayModifier";
import type Stream from "@wayward/goodstream";
import EventEmitter from "@wayward/utilities/event/EventEmitter";
import type { StringableObject } from "@wayward/utilities/object/Objects";
export default abstract class GameplayModifiersManager<MODIFIER extends GameplayModifier<number, GameplayModifierInstance<number, any[]>, any[]>, ID extends GetModifierId<MODIFIER> = GetModifierId<MODIFIER>, INSTANCE_ARGS extends GetModifierInstanceArgs<MODIFIER> = GetModifierInstanceArgs<MODIFIER>> {
    private readonly enumObject;
    private readonly classes;
    private _instances;
    protected getInstances(): Map<ID, MODIFIER>;
    constructor(enumObject: any, classes: OptionalDescriptions<ID, Class<MODIFIER, [ID]>>);
    getImage(id: ID): string | undefined;
    getModifierInstance(id: ID): MODIFIER | undefined;
    createCollection(...args: INSTANCE_ARGS): GameplayModifiersCollection<MODIFIER, ID>;
}
export interface IGameplayModifiersCollectionEvents {
    initialize(): any;
    uninitialize(): any;
    change(): any;
}
export declare class GameplayModifiersCollection<MODIFIER extends GameplayModifier<number, GameplayModifierInstance<number, any[]>, any[]>, ID extends GetModifierId<MODIFIER> = GetModifierId<MODIFIER>, INSTANCE extends GetModifierInstance<MODIFIER> = GetModifierInstance<MODIFIER>, INSTANCE_ARGS extends GetModifierInstanceArgs<MODIFIER> = GetModifierInstanceArgs<MODIFIER>> extends EventEmitter.Host<IGameplayModifiersCollectionEvents> {
    protected readonly manager: GameplayModifiersManager<MODIFIER>;
    readonly initializedModifiers: Map<ID, INSTANCE>;
    protected readonly args: INSTANCE_ARGS;
    constructor(manager: GameplayModifiersManager<MODIFIER>, ...args: INSTANCE_ARGS);
    hasAny(): boolean;
    initialize(source: StringableObject, ids: Iterable<ID>, uninitializeExisting?: boolean): INSTANCE[];
    uninitialize(source: StringableObject): void;
    options(): Stream<IGameOptionsPartial>;
    initialized(): IteratorObject<ID>;
}
