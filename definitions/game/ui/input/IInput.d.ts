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
import { InputCatalystType } from "ui/input/IIInput";
import type { IStringSection } from "utilities/string/Interpolator";
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
declare type IInputCatalystMap = {
    [C in InputCatalystType]: IInputCatalyst<C>;
};
export declare type InputCatalyst = Value<IInputCatalystMap>;
export declare module InputCatalyst {
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
    function isModifier(catalyst: InputCatalyst, acceptedModifiers?: Set<Modifier>): boolean;
}
declare enum ModifierType {
    Shift = 0,
    Alt = 1,
    Ctrl = 2
}
export declare type Modifier = keyof typeof ModifierType;
export declare module Modifier {
    function is(value: unknown): value is Modifier;
    function translate(modifier: Modifier, simplify?: boolean): TranslationImpl;
    function getTranslationId(modifier: Modifier): string;
    function setsEqual(modifiersA: Set<Modifier>, modifiersB: Set<Modifier>): boolean;
    function all(): readonly Modifier[];
    function fromCatalyst(catalyst: InputCatalyst): Modifier | undefined;
}
export interface IInput {
    catalyst: InputCatalyst;
    modifiers: Set<Modifier>;
}
export declare module IInput {
    function is(value: unknown): value is IInput;
    function create<K extends keyof typeof InputCatalystType, C extends (typeof InputCatalystType)[K]>(type: K, catalyst: IInputCatalystValueMap[C], ...modifiers: Modifier[]): IInput;
    function get(catalyst: InputCatalyst, modifiers: Set<Modifier>): IInput;
    function key(which: IInputCatalystValueMap[InputCatalystType.Key], ...modifiers: Modifier[]): IInput;
    function mouseButton(which: IInputCatalystValueMap[InputCatalystType.MouseButton], ...modifiers: Modifier[]): IInput;
    function touch(which: IInputCatalystValueMap[InputCatalystType.Touch], ...modifiers: Modifier[]): IInput;
    function scroll(which: IInputCatalystValueMap[InputCatalystType.Scroll], ...modifiers: Modifier[]): IInput;
    function equals(inputA: IInput, inputB: IInput): boolean;
    function modifiersEqual(inputA: IInput, modifiersB: Set<Modifier>): boolean;
    function getPrecision(input: IInput): number;
    function hash(input: IInput, resolveModifiers?: boolean): string;
    function translate(input: IInput, simplifyModifierCatalysts?: boolean): TranslationImpl;
    function kbd(translation: TranslationImpl): IStringSection[];
}
export {};
