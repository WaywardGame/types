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
export interface IEventSubscriptionManager<EVENTS = {}, TARGET extends EventTarget = EventTarget> {
    subscribe<TYPE extends keyof EVENTS>(type: TYPE | TYPE[], listener: (this: TARGET, event: Event & EVENTS[TYPE]) => any): this;
    subscribe(type: string | string[], listener: (this: TARGET, event: Event) => any): this;
    subscribeOnce<TYPE extends keyof EVENTS>(type: TYPE | TYPE[], listener: (this: TARGET, event: Event & EVENTS[TYPE]) => any): this;
    subscribeOnce(type: string | string[], listener: (this: TARGET, event: Event) => any): this;
}
export declare class EventManager<HOST extends object, EVENTS = {}, TARGET extends EventTarget = EventTarget> {
    static readonly global: EventManager<{}, GlobalEventHandlersEventMap>;
    static make<EVENTS>(): EventManager<{}, EVENTS>;
    static emit(target: EventTarget | undefined, event: Event | string, init?: ((event: Event) => any) | object): Event;
    private readonly host;
    private readonly _target;
    private get target();
    constructor(host: HOST, target?: TARGET | WeakRef<TARGET>);
    subscribe<TYPE extends keyof EVENTS>(type: TYPE | TYPE[], listener: (this: TARGET, event: Event & EVENTS[TYPE]) => any): HOST;
    subscribe(type: string | string[], listener: (this: TARGET, event: Event) => any): HOST;
    private readonly subscriptions;
    subscribeOnce<TYPE extends keyof EVENTS>(type: TYPE | TYPE[], listener: (this: TARGET, event: Event & EVENTS[TYPE]) => any): HOST;
    subscribeOnce(type: string | string[], listener: (this: TARGET, event: Event) => any): HOST;
    unsubscribe<TYPE extends keyof EVENTS>(type: TYPE | TYPE[], listener: (this: TARGET, event: Event & EVENTS[TYPE]) => any): HOST;
    unsubscribe(type: string | string[], listener: (this: TARGET, event: Event) => any): HOST;
    waitFor<TYPE extends keyof EVENTS>(type: TYPE | TYPE[]): Promise<Event & EVENTS[TYPE]>;
    waitFor(type: string | string[]): Promise<Event>;
    until(promise: Promise<any> | keyof EVENTS, initialiser?: (manager: IEventSubscriptionManager<EVENTS, TARGET>) => any): HOST;
    private readonly pipeTargets;
    emit<TYPE extends keyof {
        [TYPE in keyof EVENTS as Event extends EVENTS[TYPE] ? TYPE : never]: true;
    }>(type: TYPE): void;
    emit<TYPE extends keyof EVENTS>(type: TYPE, init: Pick<EVENTS[TYPE], Exclude<keyof EVENTS[TYPE], Event>>): void;
    emit<TYPE extends keyof EVENTS>(type: TYPE, initializer: (event: Event) => EVENTS[TYPE]): void;
    emit<EVENT extends Event>(event: EVENT, init: Omit<EVENTS[keyof EVENTS], keyof EVENT>): void;
    emit<EVENT extends EVENTS[keyof EVENTS]>(event: EVENT, initializer?: (event: EVENT) => any): void;
    emit<EVENT extends Event>(event: EVENT, initializer: (event: EVENT) => EVENTS[keyof EVENTS]): void;
    private readonly pipes;
    pipe<TYPE extends keyof EVENTS>(type: TYPE, on: EventManager<any, Record<TYPE, EVENTS[TYPE]>, any>): this;
    private insertPipe;
}
