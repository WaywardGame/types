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
export declare enum InputCatalystType {
    Key = 0,
    MouseButton = 1,
    Scroll = 2
}
interface IInputCatalystValueMap {
    [InputCatalystType.Key]: string;
    [InputCatalystType.MouseButton]: number;
    [InputCatalystType.Scroll]: "Up" | "Down";
}
export interface IInputCatalyst<C extends InputCatalystType> {
    type: C;
    which: IInputCatalystValueMap[C];
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
    function scroll(catalyst: IInputCatalystValueMap[InputCatalystType.Scroll]): InputCatalyst;
    function isType<K extends Array<keyof typeof InputCatalystType>>(catalyst: InputCatalyst, ...types: K): catalyst is IInputCatalystMap[(typeof InputCatalystType)[K[number]]];
    function translate(catalyst: InputCatalyst): Translation;
    function getTranslationId(catalyst: InputCatalyst): string;
    function hash(catalyst: InputCatalyst): string;
    function equals(a: InputCatalyst, b: InputCatalyst): boolean;
    function fromModifier(modifier: Modifier): InputCatalyst[];
}
declare enum ModifierType {
    Shift = 0,
    Alt = 1,
    Ctrl = 2
}
export declare type Modifier = keyof typeof ModifierType;
export declare module Modifier {
    function is(value: unknown): value is Modifier;
    function translate(modifier: Modifier): Translation;
    function getTranslationId(modifier: Modifier): string;
    function setsEqual(modifiersA: Set<Modifier>, modifiersB: Set<Modifier>): boolean;
    function all(): Modifier[];
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
    function scroll(which: IInputCatalystValueMap[InputCatalystType.Scroll], ...modifiers: Modifier[]): IInput;
    function equals(inputA: IInput, inputB: IInput): boolean;
    function modifiersEqual(inputA: IInput, modifiersB: Set<Modifier>): boolean;
    function hash(input: IInput): string;
    function translate(input: IInput): Translation;
}
export {};
