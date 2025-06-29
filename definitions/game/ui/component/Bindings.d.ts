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
import Component from "@wayward/game/ui/component/Component";
import type Text from "@wayward/game/ui/component/Text";
import Bindable from "@wayward/game/ui/input/Bindable";
import { IInput, Modifier } from "@wayward/game/ui/input/IInput";
import { Macro } from "@wayward/game/ui/input/Macros";
export declare enum BindingsClasses {
    Main = "bindings",
    Macro = "bindings-macro",
    Input = "bindings-macro-input",
    InputHoverItem = "bindings-macro-input-hover-item",
    InputIcon = "bindings-macro-input-icon",
    InputIconLabel = "bindings-macro-input-icon-label",
    Modifier = "bindings-macro-input-modifier",
    MacroSeparator = "bindings-macro-separator",
    MacroSeparatorPadded = "bindings-macro-separator-padded"
}
export default class Bindings extends Component {
    readonly bindable: Bindable | null;
    private readonly noBindingsFallback?;
    private readonly simplify?;
    private readonly contextless?;
    static createDisplays(bindable: Bindable | null, sortByComplexity?: true, simplify?: true, contextless?: true): MacroDisplay[];
    static createMacroDisplay(macro: Macro, simplify?: true): MacroDisplay;
    macroDisplays: MacroDisplay[];
    constructor(bindable: Bindable | null, noBindingsFallback?: (() => Text) | undefined, simplify?: true | undefined, contextless?: true | undefined);
    refresh(): this;
    protected onAppend(): void;
    protected onInvalidateBindings(): void;
    protected onInputUp(): void;
    protected onInputUpdate(falling?: true): void;
}
declare class MacroDisplay extends Component {
    readonly bindable: Bindable;
    readonly macro: Macro;
    readonly inputDisplays: InputDisplay[];
    readonly complexity: number;
    constructor(bindable: Bindable, macro: Macro, simplify?: true, contextless?: true);
    private addMacroSeparator;
}
declare class InputDisplay extends Component {
    readonly input: IInput & Partial<IInput.IModifierResolvedInput>;
    readonly modifierDisplays: ModifierDisplay[];
    readonly complexity: number;
    constructor(input: IInput & Partial<IInput.IModifierResolvedInput>, simplify?: true);
}
declare class ModifierDisplay extends Component {
    readonly modifier: Modifier;
    constructor(modifier: Modifier, mode: "kbd" | "icon");
}
export {};
