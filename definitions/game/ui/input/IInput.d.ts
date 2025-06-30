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
import { InputCatalystType } from "@wayward/game/ui/input/IIInput";
declare global {
    interface Keyboard {
        getLayoutMap(): Promise<KeyboardLayoutMap>;
    }
    interface KeyboardLayoutMap {
        readonly size: number;
        [Symbol.iterator](): IterableIterator<[string, string]>;
        entries(): IterableIterator<[string, string]>;
        forEach(callbackfn: (value: string, key: string, map: KeyboardLayoutMap) => void, thisArg?: any): void;
        keys(): IterableIterator<string>;
        values(): IterableIterator<string>;
        get(key: string): string | undefined;
        has(key: string): boolean;
    }
    interface Navigator {
        keyboard: Keyboard;
    }
}
export declare function startKeyboardLayoutMonitor(): void;
interface IInputCatalystValueMap {
    [InputCatalystType.Key]: string;
    [InputCatalystType.MouseButton]: number;
    [InputCatalystType.Touch]: "Press";
    [InputCatalystType.Scroll]: "Up" | "Down";
}
export interface IInputCatalyst<C extends InputCatalystType> {
    type: C;
    which: IInputCatalystValueMap[C];
    extra?: any;
}
type IInputCatalystMap = {
    [C in InputCatalystType]: IInputCatalyst<C>;
};
export type InputCatalyst = Value<IInputCatalystMap>;
export declare namespace InputCatalyst {
    function is(value: unknown): value is InputCatalyst;
    function get<K extends keyof typeof InputCatalystType>(type: K, catalyst: IInputCatalystValueMap[(typeof InputCatalystType)[K]]): InputCatalyst;
    function key(catalyst: IInputCatalystValueMap[InputCatalystType.Key]): InputCatalyst;
    function mouseButton(catalyst: IInputCatalystValueMap[InputCatalystType.MouseButton]): InputCatalyst;
    function touch(catalyst: IInputCatalystValueMap[InputCatalystType.Touch]): InputCatalyst;
    function scroll(catalyst: IInputCatalystValueMap[InputCatalystType.Scroll]): InputCatalyst;
    function isType<K extends Array<keyof typeof InputCatalystType>>(catalyst: InputCatalyst, ...types: K): catalyst is IInputCatalystMap[(typeof InputCatalystType)[K[number]]];
    function translate(catalyst: InputCatalyst, simplifyModifierCatalysts?: boolean): TranslationImpl;
    function getTranslationId(catalyst: InputCatalyst, simplifyModifierCatalysts?: boolean): string;
    function hash(catalyst: InputCatalyst, resolveModifiers?: boolean): string;
    function equals(a: InputCatalyst, b: InputCatalyst): boolean;
    function fromModifier(modifier: Modifier): InputCatalyst[];
    function fromEvent(evt: Event, asMouse?: boolean): InputCatalyst | undefined;
    function isModifier(catalyst: InputCatalyst, acceptedModifiers?: Set<Modifier>): boolean;
}
declare enum ModifierType {
    Shift = 0,
    Alt = 1,
    Ctrl = 2
}
export type Modifier = keyof typeof ModifierType;
export declare namespace Modifier {
    function is(value: unknown): value is Modifier;
    function translate(modifier: Modifier): TranslationImpl;
    function hash(...modifiers: Modifier[]): string;
    function getTranslationId(modifier: Modifier): string;
    function setsEqual(modifiersA: Set<Modifier>, modifiersB: Set<Modifier>): boolean;
    function all(): readonly Modifier[];
    function fromCatalyst(catalyst: InputCatalyst): Modifier | undefined;
    /**
     * Most input HTML events contain `ctrlKey`, `shiftKey` and `altKey` properties. This function takes any event, and if it has
     * those properties, it returns a `Set<Modifier>` matching which of those properties is true.
     */
    function fromEvent(evt?: Event, onlyIfNotCatalyst?: boolean): Set<Modifier> | undefined;
}
export interface IInput {
    catalyst: InputCatalyst;
    modifiers: Set<Modifier>;
}
export declare namespace IInput {
    function is(value: unknown): value is IInput;
    function create<K extends keyof typeof InputCatalystType, C extends (typeof InputCatalystType)[K]>(type: K, catalyst: IInputCatalystValueMap[C], ...modifiers: Modifier[]): IInput;
    function get(catalyst: InputCatalyst, modifiers?: Set<"Shift" | "Alt" | "Ctrl">): IInput;
    function key(which: IInputCatalystValueMap[InputCatalystType.Key], ...modifiers: Modifier[]): IInput;
    function mouseButton(which: IInputCatalystValueMap[InputCatalystType.MouseButton], ...modifiers: Modifier[]): IInput;
    function touch(which: IInputCatalystValueMap[InputCatalystType.Touch], ...modifiers: Modifier[]): IInput;
    function scroll(which: IInputCatalystValueMap[InputCatalystType.Scroll], ...modifiers: Modifier[]): IInput;
    function equals(inputA: IInput, inputB: IInput): boolean;
    function modifiersEqual(inputA: IInput, modifiersB: Set<Modifier>): boolean;
    function getPrecision(input: IInput): number;
    /**
     * Given an input with modifiers
     */
    function getModifiersInputs(input: IInput): IInput[];
    function hash(input: IInput, resolveModifiers?: boolean): string;
    interface IModifierResolvedHash {
        hash: string;
        input: IInput | IModifierResolvedInput;
        simplifies: string;
    }
    interface IModifierResolvedInput extends IInput {
        resolvedCatalyst: Modifier;
    }
    function modifiersResolvedHashes(input: IInput): [IModifierResolvedHash, IModifierResolvedHash?];
    /**
     * @deprecated This function returns raw text translations.
     *
     * You might be looking for {@link Macro.translate} — you can call it with a single-`IInput` macro, ie, `[IInput]`,
     * and it will result in the fancy iconography and stuff.
     */
    function translate(input: IInput, resolvedModifierCatalyst?: Modifier): TranslationImpl;
}
export {};
