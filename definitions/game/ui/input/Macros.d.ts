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
import type { IBindHandlerApi } from "@wayward/game/ui/input/Bind";
import type Bindable from "@wayward/game/ui/input/Bindable";
import type { Binding } from "@wayward/game/ui/input/Bindings";
import { IInput } from "@wayward/game/ui/input/IInput";
import type { IStringSection } from "@wayward/game/utilities/string/Interpolator";
export interface IMacroSection extends IStringSection {
    macro: Macro;
    macroSimplify?: true;
}
export declare namespace IMacroSection {
    function create(macro: Macro, simplify?: boolean): IMacroSection;
}
export type Macro = IInput[];
export declare namespace Macro {
    function is(value: unknown): value is Macro;
    function of(inputOrMacro: IInput | Macro): Macro;
    function hash(macro: Macro): string;
    function translate(macro: Macro, simplify?: true): TranslationImpl;
}
declare namespace Macros {
    interface IEvents {
        update(): any;
        inputUp(): any;
    }
    const event: import("@wayward/utilities/event/EventEmitter").IEventEmitter<typeof Macros, IEvents>;
    function getCurrent(): Macro;
    function getTouch(): Macro;
    function reset(): void;
    function setHandled(input: IInput): void;
    function setIsolated(_isolated?: boolean): void;
    function didRequestIsolation(): boolean;
    function handleInput(input: IInput, api: IBindHandlerApi): Macro | undefined;
    function currentMatch(bindables?: readonly Bindable[], extraInputs?: IInput[]): IBindableMatch | undefined;
    function setBindablesSupplier(get: () => readonly Bindable[]): void;
    interface IBindableMatch {
        matches?: Set<Bindable>;
        mayMatch?: Set<Bindable>;
    }
    function match(binding: Binding, ...bindables: Bindable[]): IBindableMatch | undefined;
    function setBindingsResolver(get: (bindable: Bindable) => readonly Binding[]): void;
    function setBindingsHashFunction(hashFunction: (binding: Binding) => string): void;
    function mergeMatches(...matches: Array<IBindableMatch | undefined>): IBindableMatch | undefined;
}
export default Macros;
