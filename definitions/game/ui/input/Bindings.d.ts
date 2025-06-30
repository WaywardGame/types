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
import TranslationImpl from "@wayward/game/language/impl/TranslationImpl";
import type Bindable from "@wayward/game/ui/input/Bindable";
import { IInput } from "@wayward/game/ui/input/IInput";
import { Macro } from "@wayward/game/ui/input/Macros";
export type Binding = IInput | Macro;
export declare namespace Binding {
    function is(value: unknown): value is Binding;
    function hash(binding: Binding): string;
    function translate(binding: Binding): TranslationImpl;
}
declare namespace Bindings {
    interface IEvents {
        invalidate(): any;
    }
    const event: import("@wayward/utilities/event/EventEmitter").IEventEmitter<typeof Bindings, IEvents>;
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
    function getBoundToByModifiers(input: IInput): Set<Bindable>;
}
export default Bindings;
