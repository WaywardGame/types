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
import EventEmitter from "event/EventEmitter";
import type { EmitterOrBus, Event } from "event/EventManager";
import { ActionDisplayLevel } from "game/entity/action/IAction";
import type { ActionId, IUsableActionPossibleUsing, IUsableActionRequirements } from "game/entity/action/usable/IUsableAction";
import type UsableAction from "game/entity/action/usable/UsableAction";
import ContextMenu from "ui/component/ContextMenu";
export default class UsableActionRegistrar {
    private readonly id;
    readonly actions: Array<[string, UsableAction]>;
    readonly actionIndices: Record<string, number>;
    readonly actionIds: string[];
    constructor(id: string);
    byId(id?: ActionId): UsableAction | undefined;
    filter(filter: (action: UsableAction, id: string) => any): UsableActionRegistrar;
    private contextMenuInitializer?;
    setContextMenuInitializer(initializer?: (menu: ContextMenu) => any): this;
    add(registrar: UsableActionRegistrar): this;
    add<REQUIREMENTS extends IUsableActionRequirements>(id: string | number, action: UsableAction<REQUIREMENTS>): this;
    showContextMenu(provided: IUsableActionPossibleUsing, contextMenu?: ContextMenu<ActionId>, context?: ActionDisplayLevel, initialiser?: (contextMenu: ContextMenu<ActionId>) => any): ContextMenu<string | number | symbol>;
    createContextMenu(provided: IUsableActionPossibleUsing, contextMenu?: ContextMenu<ActionId>, context?: ActionDisplayLevel, initialiser?: (contextMenu: ContextMenu<ActionId>) => any): ContextMenu;
}
export interface IUsableActionGeneratorEvents {
    stopPersisting(): any;
}
export interface IUsableActionGeneratorPersistenceFactory<HOST> {
    when<E extends EmitterOrBus, K extends Event<E>>(emitter: E, event: K): {
        until<E extends EmitterOrBus, K extends Event<E>>(emitter: E, event: K): HOST;
    };
}
export type UsableActionGeneratorRegistrationHandler<ARGS extends any[]> = (registrar: UsableActionRegistrar, ...args: ARGS) => any;
export interface IUsableActionGeneratorFactory {
    create<ARGS extends any[]>(id: string, registrationHandler: UsableActionGeneratorRegistrationHandler<ARGS>): UsableActionGenerator<ARGS>;
    create<ARGS extends any[]>(registrationHandler: UsableActionGeneratorRegistrationHandler<ARGS>): UsableActionGenerator<ARGS>;
}
export declare class UsableActionGenerator<ARGS extends any[] = []> extends EventEmitter.Host<IUsableActionGeneratorEvents> {
    static persisting(initializer: (persist: IUsableActionGeneratorPersistenceFactory<IUsableActionGeneratorFactory>) => IUsableActionGeneratorFactory): IUsableActionGeneratorFactory;
    static persisting(initializer: (persist: IUsableActionGeneratorPersistenceFactory<IUsableActionGeneratorFactory>) => UsableActionGenerator): UsableActionGenerator;
    static singleton<REQUIREMENTS extends IUsableActionRequirements>(id: string | number, action: UsableAction<REQUIREMENTS>): UsableActionGenerator<[]>;
    private readonly id?;
    private readonly registrationHandlers;
    private get log();
    constructor(id: string, registrationHandler: UsableActionGeneratorRegistrationHandler<ARGS>);
    constructor(registrationHandler: UsableActionGeneratorRegistrationHandler<ARGS>);
    add(registrationHandler: UsableActionGeneratorRegistrationHandler<ARGS>): this;
    add(generator: UsableActionGenerator<ARGS>): this;
    remove(registrationHandler: UsableActionGeneratorRegistrationHandler<ARGS>): this;
    remove(generator: UsableActionGenerator<ARGS>): this;
    register(registrar: UsableActionRegistrar, ...args: ARGS): void;
    private contextMenuInitializer?;
    /**
     * Initializes any context menus originating from registrars generated by this generator.
     * Note: Overrides any initializers set by default on the registration handler.
     */
    setContextMenuInitializer(initializer?: (menu: ContextMenu) => any): this;
    private cachedRegistrar;
    /**
     * Returns an action registrar created by this generator. If there is not a cached registrar, generates a new one.
     * Does not cache the generator unless this generator is marked for persistence.
     */
    get(...args: ARGS): UsableActionRegistrar;
    /**
     * Forcibly regenerates and returns a new action registrar from this generator.
     * If this generator is marked for persistence, the generated registrar will be cached and accessible thereafter by `get()`.
     */
    private generate;
    private existingPersistenceId?;
    /**
     * Marks this generator for persistence when the "when" event occurs,
     * and unmarks this generator for persistence when the "until" event occurs.
     *
     * This method can be called multiple times to add multiple ranges where persistence is active.
     * Intersecting persistences don't cancel each other.
     */
    persist(initializer: (persist: IUsableActionGeneratorPersistenceFactory<this>) => this): this;
    /**
     * Removes persistence from this generator. All prior "when" and "until" persistence ranges will be removed.
     */
    disablePersistence(): void;
}
