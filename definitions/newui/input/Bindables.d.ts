/*!
 * Copyright Unlok, Vaughn Royko 2011-2019
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://waywardgame.github.io/
 */
import Bindable, { BindableType } from "newui/input/Bindable";
import { IInput } from "newui/input/IInput";
declare module Bindables {
    function register(index: number, defaultBinding: IInput[]): void;
    function deregister(index: number): void;
    function getType(bindable: Bindable): BindableType | undefined;
}
export default Bindables;
