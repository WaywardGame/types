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
import { IInput } from "ui/input/IInput";
export declare type Macro = IInput[];
export declare module Macro {
    function is(value: unknown): value is Macro;
    function of(inputOrMacro: IInput | Macro): Macro;
    function hash(macro: Macro, resolveModifiers?: boolean): string;
    function translate(macro: Macro, simplifyModifierCatalysts?: boolean): TranslationImpl;
}
declare module Macros {
    function getCurrent(): Macro;
    function getTouch(): Macro;
    function reset(): void;
    function setIsolated(_isolated?: boolean): void;
    function handleInput(input: IInput, api: IBindHandlerApi): Macro | undefined;
}
export default Macros;
