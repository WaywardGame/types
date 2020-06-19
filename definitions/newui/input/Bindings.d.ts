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
import Translation from "language/Translation";
import Bindable from "newui/input/Bindable";
import { IBinding } from "newui/input/IBinding";
declare module Bindings {
    function get(bindable: Bindable): IBinding[];
    function set(bindable: Bindable, ...bindings: IBinding[]): void;
    function add(bindable: Bindable, ...bindings: IBinding[]): void;
    function reset(bindable: Bindable): void;
    function clear(bindable: Bindable): void;
    function translate(bindable: Bindable): Translation;
    function getBoundTo(binding: IBinding): Set<Bindable>;
}
export default Bindings;