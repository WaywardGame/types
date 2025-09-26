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
import type Bindable from "@wayward/game/ui/input/Bindable";
import { BindableMouseTargetingContext, BindableType, BindableTypeContext } from "@wayward/game/ui/input/Bindable";
import type { Binding } from "@wayward/game/ui/input/Bindings";
declare namespace Bindables {
    function onRegistrationsChanged(callback: () => unknown): void;
    function register(index: number, defaultBinding: Binding[]): void;
    function deregister(index: number): void;
    function getType(bindable: Bindable): BindableType | undefined;
    function getContext(bindable: Bindable): BindableTypeContext;
    function getMouseContext(bindable: Bindable): BindableMouseTargetingContext | undefined;
}
export default Bindables;
