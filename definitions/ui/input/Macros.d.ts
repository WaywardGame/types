/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Translation from "language/Translation";
import { IBindHandlerApi } from "ui/input/Bind";
import { IInput } from "ui/input/IInput";
export declare type Macro = IInput[];
export declare module Macro {
    function is(value: unknown): value is Macro;
    function of(inputOrMacro: IInput | Macro): Macro;
    function hash(macro: Macro): string;
    function translate(macro: Macro): Translation;
}
declare module Macros {
    function handleInput(input: IInput, api: IBindHandlerApi): Macro | undefined;
}
export default Macros;
