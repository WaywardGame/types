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
import "@wayward/game/IGlobal";
import type { ActionArguments, ActionArgumentTupleTypes, ActionType, IActionUsable } from "@wayward/game/game/entity/action/IAction";
import type Entity from "@wayward/game/game/entity/Entity";
import type { IPromptDescriptionBase } from "@wayward/game/game/meta/prompt/IPrompt";
import type { ModRegistrationTime } from "@wayward/game/mod/BaseMod";
import BaseMod from "@wayward/game/mod/BaseMod";
import type InterModRegistry from "@wayward/game/mod/InterModRegistry";
import type { ModInformation } from "@wayward/game/mod/ModInformation";
import type { IOverrideDescription, PromptConstructorFunction } from "@wayward/game/mod/ModRegistry";
import Register from "@wayward/game/mod/ModRegistry";
import Log from "@wayward/utilities/Log";
declare abstract class Mod extends BaseMod {
    constructor(mod: ModInformation);
    /**
     * Called when the mod is initialized (when it's enabled via the Mod Manager)
     */
    onInitialize(): void;
    /**
     * Called before the mod is uninitialized (when it's disabled via the Mod Manager)
     */
    onUninitialize(): void;
    /**
     * Called after the mod is uninitialized
     */
    onUninitialized(): void;
    /**
     * Called when the mod is loaded.
     * This will be called after a player starts a game (ran before resources & the world are setup)
     */
    onLoad(): void;
    /**
     * Called when the mod is unloaded
     */
    onUnload(): void;
}
type RegisterKeys = keyof Omit<typeof Register, ("registry" | "bulk")>;
declare module "@wayward/game/game/entity/action/Action" {
    interface Action<A extends ActionArguments, T extends ActionType = ActionType, E extends Entity = Entity, R = void, CU extends IActionUsable = IActionUsable, AV extends any[] = ActionArgumentTupleTypes<A>> {
        modRegistration(name: string): this;
    }
}
declare namespace Mod {
    type RegisterHelper = {
        [K in keyof typeof Register as K extends RegisterKeys ? K : never]: ({
            prompt<DESCRIPTION extends IPromptDescriptionBase<any[]>>(name: string, construct: PromptConstructorFunction<DESCRIPTION>): Registration<DESCRIPTION>;
            interModRegistry<T>(name: string): Registration<InterModRegistry<T>>;
            override<OBJECT extends object, PROPERTY extends keyof OBJECT>(time: ModRegistrationTime.Initialize | ModRegistrationTime.Load, overrider: () => IOverrideDescription<OBJECT, PROPERTY>): OBJECT;
        } extends infer OVERRIDES ? K extends keyof OVERRIDES ? OVERRIDES[K] : (ReturnType<typeof Register[K]> extends <K extends string | number | symbol>(target: Record<K, infer V>, key: K) => void ? V : never) extends infer T ? (Parameters<typeof Register[K]> extends [string, ...infer PARAMS] ? {
            (name: string): PartialRegistration<T, PARAMS>;
            (...params: Parameters<typeof Register[K]>): Registration<T>;
        } : {
            (...params: Parameters<typeof Register[K]>): Registration<T>;
        }) : never : never);
    };
    export interface Registration<T> {
        value: T;
    }
    export interface PartialRegistration<T, PARAMS extends any[]> extends Registration<T> {
        define(...params: PARAMS): void;
    }
    /**
     * Create registrations for your mod. This must be called in the top-level scope of your mod script — ie,
     * do not call this in your mod class when reacting to events or injections, that kind of thing.
     */
    export const register: RegisterHelper;
    /**
     * Injects the decorated field with this mod's instance.
     */
    export function instance<M extends Mod>(): <K extends string | number | symbol, T extends Record<K, M extends (new (index: number) => infer I) ? I : Mod>>(target: T, key: K) => void;
    /**
     * Injects the decorated field with a mod instance.
     * @param name Given a mod name, the decorated field will be injected with the enabled/loaded instance of the mod by that name.
     */
    export function instance<M extends Mod>(name: string): <K extends string | number | symbol, T extends Record<K, M extends (new (index: number) => infer I) ? I : Mod>>(target: T, key: K) => void;
    /**
     * A function usable exclusively in the *top level* of a mod script, or within synchronous code called by the top level of the mod script.
     * Returns a container for the mod's instance, its `ModInformation`, or `undefined` if it can't be found or this is used in the wrong context.
     */
    export function get<M extends Mod>(): ModInformation & {
        instance: M;
    } | undefined;
    /**
     * Given a mod name, returns a container (its `ModInformation`) for the enabled/loaded instance of the mod by that name,
     * or `undefined` if it can't be found.
     */
    export function get<M extends Mod>(name: string): ModInformation & {
        instance: M;
    } | undefined;
    /**
     * Injects the decorated field with this mod's log.
     */
    export function log(): <K extends string | number | symbol, T extends Record<K, Log>>(target: T, key: K) => void;
    /**
     * Injects the decorated field with a mod's log.
     * @param name Given a mod name, the decorated field will be injected with the log of the enabled/loaded mod by that name.
     */
    export function log(name?: string): <K extends string | number | symbol, T extends Record<K, Log>>(target: T, key: K) => void;
    /**
     * Injects the save data for this mod.
     */
    export function saveData<M extends Mod = Mod>(): <K extends string | number | symbol, T extends Record<K, M extends {
        initializeSaveData(data?: infer D): infer D;
    } ? D : never>>(target: T, key: K) => void;
    /**
     * Injects the save data for a mod by its name or class.
     * @param name Given a mod name, the decorated field will be injected with save data from the enabled/loaded instance of
     * the mod by that name.
     */
    export function saveData<M extends Mod = Mod>(name: string): <K extends string | number | symbol, T extends Record<K, M extends {
        initializeSaveData(data?: infer D): infer D;
    } ? D : never>>(target: T, key: K) => void;
    /**
     * Injects the global data for this mod.
     */
    export function globalData<M extends Mod = Mod>(): <K extends string | number | symbol, T extends Record<K, M extends {
        initializeGlobalData(data?: infer D): infer D;
    } ? D : never>>(target: T, key: K) => void;
    /**
     * Injects the global data for a mod by its name or class.
     * @param name Given a mod name, the decorated field will be injected with global data from the enabled/loaded instance of
     * the mod by that name.
     */
    export function globalData<M extends Mod = Mod>(name: string): <K extends string | number | symbol, T extends Record<K, M extends {
        initializeGlobalData(data?: infer D): infer D;
    } ? D : never>>(target: T, key: K) => void;
    export {};
}
export default Mod;
