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
import EventEmitter from "event/EventEmitter";
import type { EmitterOrBus, Event } from "event/EventManager";
import { ActionDisplayLevel } from "game/entity/action/IAction";
import ContextMenu from "ui/component/ContextMenu";
import type UiAction from "ui/screen/screens/game/static/actions/UiAction";
import type { ActionId, IUiActionPossibleUsing, IUiActionRequirements } from "ui/screen/screens/game/static/actions/UiAction";
export default class UiActionRegistrar {
    readonly actions: Array<[string, UiAction]>;
    readonly actionIndices: Record<string, number>;
    readonly actionIds: string[];
    byId(id?: string): UiAction | undefined;
    filter(filter: (action: UiAction, id: string) => any): UiActionRegistrar;
    private contextMenuInitializer?;
    setContextMenuInitializer(initializer?: (menu: ContextMenu) => any): this;
    add(registrar: UiActionRegistrar): this;
    add<REQUIREMENTS extends IUiActionRequirements>(id: string | number, action: UiAction<REQUIREMENTS>): this;
    showContextMenu(provided: IUiActionPossibleUsing, contextMenu?: ContextMenu<ActionId>, context?: ActionDisplayLevel, initialiser?: (contextMenu: ContextMenu<ActionId>) => any): ContextMenu<string | number | symbol>;
    createContextMenu(provided: IUiActionPossibleUsing, contextMenu?: ContextMenu<ActionId>, context?: ActionDisplayLevel, initialiser?: (contextMenu: ContextMenu<ActionId>) => any): ContextMenu;
    private getTooltipLocation;
}
export interface IUiActionGeneratorEvents {
    stopPersisting(): any;
}
export interface IUiActionGeneratorPersistenceFactory<HOST> {
    when<E extends EmitterOrBus, K extends Event<E>>(emitter: E, event: K): {
        until<E extends EmitterOrBus, K extends Event<E>>(emitter: E, event: K): HOST;
    };
}
export declare type UiActionGeneratorRegistrationHandler<ARGS extends any[]> = (registrar: UiActionRegistrar, ...args: ARGS) => any;
export interface IUiActionGeneratorFactory {
    create<ARGS extends any[]>(id: string, registrationHandler: UiActionGeneratorRegistrationHandler<ARGS>): UiActionGenerator<ARGS>;
    create<ARGS extends any[]>(registrationHandler: UiActionGeneratorRegistrationHandler<ARGS>): UiActionGenerator<ARGS>;
}
export declare class UiActionGenerator<ARGS extends any[] = []> extends EventEmitter.Host<IUiActionGeneratorEvents> {
    static persisting(initializer: (persist: IUiActionGeneratorPersistenceFactory<IUiActionGeneratorFactory>) => IUiActionGeneratorFactory): IUiActionGeneratorFactory;
    static persisting(initializer: (persist: IUiActionGeneratorPersistenceFactory<IUiActionGeneratorFactory>) => UiActionGenerator): UiActionGenerator;
    static singleton<REQUIREMENTS extends IUiActionRequirements>(id: string | number, action: UiAction<REQUIREMENTS>): UiActionGenerator<[]>;
    private readonly id?;
    private readonly registrationHandler;
    private get log();
    constructor(id: string, registrationHandler: UiActionGeneratorRegistrationHandler<ARGS>);
    constructor(registrationHandler: UiActionGeneratorRegistrationHandler<ARGS>);
    register(registrar: UiActionRegistrar, ...args: ARGS): void;
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
    get(...args: ARGS): UiActionRegistrar;
    /**
     * Forcibly regenerates and returns a new action registrar from this generator.
     * If this generator is marked for persistence, the generated registrar will be cached and accessible thereafter by `get()`.
     */
    generate(...args: ARGS): UiActionRegistrar;
    private activePersistences;
    /**
     * Marks this generator for persistence when the "when" event occurs,
     * and unmarks this generator for persistence when the "until" event occurs.
     *
     * This method can be called multiple times to add multiple ranges where persistence is active.
     * Intersecting persistences don't cancel each other.
     */
    persist(initializer: (persist: IUiActionGeneratorPersistenceFactory<this>) => this): this;
    /**
     * Removes persistence from this generator. All prior "when" and "until" persistence ranges will be removed.
     */
    disablePersistence(): void;
}
