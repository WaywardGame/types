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
import TranslationImpl from "language/impl/TranslationImpl";
import type Bindable from "ui/input/Bindable";
import { IInput } from "ui/input/IInput";
import { Macro } from "ui/input/Macros";
export declare type Binding = IInput | Macro;
export declare module Binding {
    function is(value: unknown): value is Binding;
    function hash(binding: Binding, resolveModifiers?: boolean): string;
    function translate(binding: Binding, simplifyModifierCatalysts?: boolean): TranslationImpl;
}
declare module Bindings {
    function get(bindable?: Bindable): Binding[];
    function getPrecision(bindable?: Bindable): number;
    function set(bindable: Bindable, ...bindings: Binding[]): void;
    function add(bindable: Bindable, ...bindings: Binding[]): void;
    function reset(bindable: Bindable): void;
    function clear(bindable: Bindable): void;
    function resetAll(): void;
    function translate(bindable?: Bindable, noBindings?: TranslationImpl): TranslationImpl;
    function translate(bindable?: Bindable, noBindings?: TranslationImpl | null): TranslationImpl | undefined;
    function markCacheInvalid(): void;
    function getBoundTo(binding: Binding): Set<Bindable>;
    type IBindableMatch = {
        matches: Set<Bindable>;
        mayMatch: Set<Bindable>;
    } | {
        matches: Set<Bindable>;
        mayMatch: Set<Bindable>;
    } | undefined;
    function match(binding: Binding, ...bindables: Bindable[]): IBindableMatch;
    function mergeMatches(...matches: IBindableMatch[]): IBindableMatch;
}
export default Bindings;
