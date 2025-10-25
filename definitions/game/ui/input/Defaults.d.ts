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
import Bindable from "@wayward/game/ui/input/Bindable";
import type { Binding } from "@wayward/game/ui/input/Bindings";
import type { IInput } from "@wayward/game/ui/input/IInput";
import type { Macro } from "@wayward/game/ui/input/Macros";
interface BindingGenerationContext {
    mouse: typeof IInput.mouseButton;
    touch: typeof IInput.touch;
    key: typeof IInput.key;
    scroll: typeof IInput.scroll;
    macro(...inputs: IInput[]): Macro;
    doublePress(input: IInput): Macro;
}
export default function generateDefaultBindings(context: BindingGenerationContext): Record<Bindable, Binding[]>;
export {};
