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
import type { IBindHandlerApi } from "ui/input/Bind";
import type Bindable from "ui/input/Bindable";
import { Binding } from "ui/input/Bindings";
import { IInput } from "ui/input/IInput";
export type Macro = IInput[];
export declare module Macro {
    function is(value: unknown): value is Macro;
    function of(inputOrMacro: IInput | Macro): Macro;
    function hash(macro: Macro): string;
    function translate(macro: Macro): TranslationImpl;
}
declare module Macros {
    interface IEvents {
        update(): any;
        inputUp(): any;
    }
    const event: import("event/EventEmitter").IEventEmitter<typeof Macros, IEvents>;
    function getCurrent(): Macro;
    function getTouch(): Macro;
    function reset(): void;
    function setHandled(): void;
    function setIsolated(_isolated?: boolean): void;
    function didRequestIsolation(): boolean;
    function handleInput(input: IInput, api: IBindHandlerApi): Macro | undefined;
    function currentMatch(bindables?: readonly Bindable[], extraInputs?: IInput[]): IBindableMatch | undefined;
    interface IBindableMatch {
        matches?: Set<Bindable>;
        mayMatch?: Set<Bindable>;
    }
    function match(binding: Binding, ...bindables: Bindable[]): IBindableMatch | undefined;
    function mergeMatches(...matches: Array<IBindableMatch | undefined>): IBindableMatch | undefined;
}
export default Macros;
