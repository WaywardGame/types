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
import { EventBus } from "@wayward/game/event/EventBuses";
import type { GameEmitterOrBus, GameEvent, GameEventHandler } from "@wayward/game/event/EventManager";
import type { Emitter } from "@wayward/utilities/event/EventManager";
declare class Observer<T> {
    private readonly _observe;
    value: T;
    constructor(_observe: () => T);
    observe(): boolean;
}
export default Observer;
declare namespace Observer {
    interface IRegistrar<HOST> {
        /**
         * Observes events an on emitter to perform refresh functionality or delete caches for JIT stuff.
         */
        <E extends GameEmitterOrBus>(emitterOrBus: E | undefined, events: GameEvent<E> | Array<GameEvent<E>>, priority?: number): HOST;
        /**
         * Observes events an on emitter (by WeakRef) to perform refresh functionality or delete caches for JIT stuff.
         */
        <E extends Emitter, K extends GameEvent<E>>(emitter: WeakRef<E> | undefined, events: GameEvent<E> | Array<GameEvent<E>>, priority?: number): HOST;
        /**
         * Observes events an on emitter to perform refresh functionality or delete caches for JIT stuff.
         * @param predicate A predicate function that will only allow event triggers if true
         */
        <E extends GameEmitterOrBus, K extends GameEvent<E>>(emitterOrBus: E | undefined, events: K | K[], predicate: (...params: Parameters<GameEventHandler<E, K>>) => boolean, priority?: number): HOST;
        /**
         * Observes events an on emitter (by WeakRef) to perform refresh functionality or delete caches for JIT stuff.
         * @param predicate A predicate function that will only allow event triggers if true
         */
        <E extends Emitter, K extends GameEvent<E>>(emitter: WeakRef<E> | undefined, events: K | K[], predicate: (...params: Parameters<GameEventHandler<E, K>>) => boolean, priority?: number): HOST;
        /**
         * Observes events an on emitter to perform refresh functionality or delete caches for JIT stuff.
         * @param observer An observer that will only allow event triggers if the value has changed
         */
        <E extends GameEmitterOrBus>(emitterOrBus: E | undefined, events: GameEvent<E> | Array<GameEvent<E>>, observer: Observer<any>, priority?: number): HOST;
        /**
         * Observes events an on emitter (by WeakRef) to perform refresh functionality or delete caches for JIT stuff.
         * @param observer An observer that will only allow event triggers if the value has changed
         */
        <E extends Emitter>(emitter: WeakRef<E> | undefined, events: GameEvent<E> | Array<GameEvent<E>>, observer: Observer<any>, priority?: number): HOST;
        tick(observer: Observer<any>): HOST;
        tick(predicate: (...params: Parameters<GameEventHandler<EventBus.LocalIsland, "tickEnd">>) => boolean): HOST;
        start(): void;
        end(): void;
        setDefaultPriority(priority?: number): this;
        inherit(registrar: IRegistrar<any>): void;
    }
    function createRegistrar<HOST>(host: HOST, handler: () => any): IRegistrar<HOST>;
}
