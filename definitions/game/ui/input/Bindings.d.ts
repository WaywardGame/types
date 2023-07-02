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
import TranslationImpl from "language/impl/TranslationImpl";
import type Bindable from "ui/input/Bindable";
import { IInput } from "ui/input/IInput";
import { Macro } from "ui/input/Macros";
export type Binding = IInput | Macro;
export declare module Binding {
    function is(value: unknown): value is Binding;
    function hash(binding: Binding): string;
    function translate(binding: Binding): TranslationImpl;
}
declare module Bindings {
    interface IEvents {
        invalidate(): any;
    }
    const event: import("event/EventEmitter").IEventEmitter<typeof Bindings, IEvents>;
    function get(bindable?: Bindable): Binding[];
    function getModifierCatalystsResolved(bindable?: Bindable): Binding[];
    function getPrecision(bindable?: Bindable): number;
    function set(bindable: Bindable, ...bindings: Binding[]): void;
    function add(bindable: Bindable, ...bindings: Binding[]): void;
    function reset(bindable: Bindable): void;
    function clear(bindable: Bindable): void;
    function resetAll(): void;
    function translate(bindable?: Bindable, noBindings?: TranslationImpl, simplify?: true, contextless?: true): TranslationImpl;
    function translate(bindable?: Bindable, noBindings?: TranslationImpl | null, simplify?: true, contextless?: true): TranslationImpl | undefined;
    function markCacheInvalid(updateBindableManagers?: boolean): void;
    function getBoundTo(binding: Binding): Set<Bindable>;
}
export default Bindings;
