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
import BaseMod from "@wayward/game/mod/BaseMod";
import type { ModInformation } from "@wayward/game/mod/ModInformation";
import Log from "@wayward/utilities/Log";
declare abstract class Mod extends BaseMod {
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
declare namespace Mod {
    /**
     * Injects the decorated field with this mod's instance.
     */
    function instance<M extends Mod>(): <K extends string | number | symbol, T extends Record<K, M extends (new (index: number) => infer I) ? I : Mod>>(target: T, key: K) => void;
    /**
     * Injects the decorated field with a mod instance.
     * @param name Given a mod name, the decorated field will be injected with the enabled/loaded instance of the mod by that name.
     */
    function instance<M extends Mod>(name: string): <K extends string | number | symbol, T extends Record<K, M extends (new (index: number) => infer I) ? I : Mod>>(target: T, key: K) => void;
    /**
     * A function usable exclusively in the *top level* of a mod script, or within synchronous code called by the top level of the mod script.
     * Returns a container for the mod's instance, its `ModInformation`, or `undefined` if it can't be found or this is used in the wrong context.
     */
    function get<M extends Mod>(): ModInformation & {
        instance: M;
    } | undefined;
    /**
     * Given a mod name, returns a container (its `ModInformation`) for the enabled/loaded instance of the mod by that name,
     * or `undefined` if it can't be found.
     */
    function get<M extends Mod>(name: string): ModInformation & {
        instance: M;
    } | undefined;
    /**
     * Injects the decorated field with this mod's log.
     */
    function log(): <K extends string | number | symbol, T extends Record<K, Log>>(target: T, key: K) => void;
    /**
     * Injects the decorated field with a mod's log.
     * @param name Given a mod name, the decorated field will be injected with the log of the enabled/loaded mod by that name.
     */
    function log(name?: string): <K extends string | number | symbol, T extends Record<K, Log>>(target: T, key: K) => void;
    /**
     * Injects the save data for this mod.
     */
    function saveData<M extends Mod = Mod>(): <K extends string | number | symbol, T extends Record<K, M extends {
        initializeSaveData(data?: infer D): infer D;
    } ? D : never>>(target: T, key: K) => void;
    /**
     * Injects the save data for a mod by its name or class.
     * @param name Given a mod name, the decorated field will be injected with save data from the enabled/loaded instance of
     * the mod by that name.
     */
    function saveData<M extends Mod = Mod>(name: string): <K extends string | number | symbol, T extends Record<K, M extends {
        initializeSaveData(data?: infer D): infer D;
    } ? D : never>>(target: T, key: K) => void;
    /**
     * Injects the global data for this mod.
     */
    function globalData<M extends Mod = Mod>(): <K extends string | number | symbol, T extends Record<K, M extends {
        initializeGlobalData(data?: infer D): infer D;
    } ? D : never>>(target: T, key: K) => void;
    /**
     * Injects the global data for a mod by its name or class.
     * @param name Given a mod name, the decorated field will be injected with global data from the enabled/loaded instance of
     * the mod by that name.
     */
    function globalData<M extends Mod = Mod>(name: string): <K extends string | number | symbol, T extends Record<K, M extends {
        initializeGlobalData(data?: infer D): infer D;
    } ? D : never>>(target: T, key: K) => void;
}
export default Mod;
