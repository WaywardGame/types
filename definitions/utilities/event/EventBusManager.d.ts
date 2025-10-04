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
export interface IEventBusRegistrationHandler {
    subscribe: NullaryFunction;
    unsubscribe: NullaryFunction;
}
export declare class EventBusManager<EventBus extends number, EventBuses extends Record<EventBus, any>> {
    readonly eventBuses: EventBuses;
    eventBusRegistrationHandlers: Map<EventBus, IEventBusRegistrationHandler[]>;
    constructor(eventBuses: EventBuses);
    getClass<CLASS>(eventBus: EventBus): CLASS | undefined;
    register<E extends EventBus>(eventBus: E, classOrHost: ReturnType<EventBuses[E]>): void;
    register(eventBus: EventBus): (constructor: AbstractNullaryClass<any>) => any;
    unregister(eventBus: EventBus): boolean;
    private handleEventBusRegistration;
    onEventBusRegistration(eventBus: EventBus, registration: IEventBusRegistrationHandler): () => void;
}
