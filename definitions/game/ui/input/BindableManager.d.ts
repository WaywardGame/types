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
import type { BindableTranslation } from "@wayward/game/language/dictionary/Misc";
import type Translation from "@wayward/game/language/Translation";
import Bindable from "@wayward/game/ui/input/Bindable";
import type { Binding } from "@wayward/game/ui/input/Bindings";
export declare const defaultBindings: Record<Bindable, Binding[]>;
export interface IManagedBindable {
    position: number;
    translation: Translation;
    defaultBindings: Binding[];
    manager?: BindableManager;
}
export default abstract class BindableManager {
    static MANAGERS: Map<string, BindableManager>;
    static registerManager(name: string, manager: BindableManager): boolean;
    static deregisterManager(name: string): boolean;
    static setNeedsUpdate(markBindingsCacheInvalid?: boolean): void;
    private static readonly cacheInvalidatedCallbacks;
    static onCacheInvalidated(callback: () => unknown): void;
    private static BINDABLES;
    private static BINDABLES_BY_VALUE;
    private static needsUpdate;
    static getNames(): ReadonlyArray<keyof typeof Bindable>;
    static getAll(): readonly Bindable[];
    static getName(bindable: Bindable): keyof typeof Bindable | undefined;
    static get(name: keyof typeof Bindable): Bindable | undefined;
    static getDefaultBindings(bindable: Bindable): Binding[] | undefined;
    static getTranslation(bindable: Bindable, which?: BindableTranslation): Translation;
    private static getInfo;
    private static update;
    private bindables;
    private bindablesByValue;
    protected setBindables(bindables: Record<string, IManagedBindable>): void;
    protected addBindables(bindables: Record<string, number>): void;
    protected clearBindables(): void;
    protected getName(bindable: Bindable): string | undefined;
    protected get(name: string): IManagedBindable | undefined;
}
