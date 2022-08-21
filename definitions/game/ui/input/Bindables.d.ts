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
import type Bindable from "ui/input/Bindable";
import { BindableType } from "ui/input/Bindable";
import type { Binding } from "ui/input/Bindings";
declare module Bindables {
    function register(index: number, defaultBinding: Binding[]): void;
    function deregister(index: number): void;
    function getType(bindable: Bindable): BindableType | undefined;
}
export default Bindables;
