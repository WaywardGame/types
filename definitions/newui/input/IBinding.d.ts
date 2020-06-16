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
export declare enum BindingCatalystType {
    Key = 0,
    MouseButton = 1,
    Scroll = 2
}
interface IBindingCatalystValueMap {
    [BindingCatalystType.Key]: string;
    [BindingCatalystType.MouseButton]: number;
    [BindingCatalystType.Scroll]: "Up" | "Down";
}
export interface IBindingCatalyst<C extends BindingCatalystType> {
    type: C;
    which: IBindingCatalystValueMap[C];
}
declare type IBindingCatalystMap = {
    [C in BindingCatalystType]: IBindingCatalyst<C>;
};
export declare type BindingCatalyst = Value<IBindingCatalystMap>;
export declare module BindingCatalyst {
    function is(value: unknown): value is BindingCatalyst;
    function get<K extends keyof typeof BindingCatalystType>(type: K, catalyst: IBindingCatalystValueMap[(typeof BindingCatalystType)[K]]): BindingCatalyst;
    function key(catalyst: IBindingCatalystValueMap[BindingCatalystType.Key]): BindingCatalyst;
    function mouseButton(catalyst: IBindingCatalystValueMap[BindingCatalystType.MouseButton]): BindingCatalyst;
    function scroll(catalyst: IBindingCatalystValueMap[BindingCatalystType.Scroll]): BindingCatalyst;
    function isType<K extends Array<keyof typeof BindingCatalystType>>(catalyst: BindingCatalyst, ...types: K): catalyst is IBindingCatalystMap[(typeof BindingCatalystType)[K[number]]];
    function translate(catalyst: BindingCatalyst): Translation;
    function getTranslationId(catalyst: BindingCatalyst): string;
    function hash(catalyst: BindingCatalyst): string;
    function equals(a: BindingCatalyst, b: BindingCatalyst): boolean;
    function fromModifier(modifier: Modifier): BindingCatalyst[];
}
declare enum ModifierType {
    Shift = 0,
    Alt = 1,
    Ctrl = 2
}
export declare type Modifier = keyof typeof ModifierType;
export declare module Modifier {
    function translate(modifier: Modifier): Translation;
    function getTranslationId(modifier: Modifier): string;
    function setsEqual(modifiersA: Set<Modifier>, modifiersB: Set<Modifier>): boolean;
    function all(): Modifier[];
}
export interface IBinding {
    catalyst: BindingCatalyst;
    modifiers: Set<Modifier>;
}
export declare module IBinding {
    function create<K extends keyof typeof BindingCatalystType, C extends (typeof BindingCatalystType)[K]>(type: K, catalyst: IBindingCatalystValueMap[C], ...modifiers: Modifier[]): IBinding;
    function get(catalyst: BindingCatalyst, modifiers: Set<Modifier>): IBinding;
    function key(which: IBindingCatalystValueMap[BindingCatalystType.Key], ...modifiers: Modifier[]): IBinding;
    function mouseButton(which: IBindingCatalystValueMap[BindingCatalystType.MouseButton], ...modifiers: Modifier[]): IBinding;
    function scroll(which: IBindingCatalystValueMap[BindingCatalystType.Scroll], ...modifiers: Modifier[]): IBinding;
    function equals(bindingA: IBinding, bindingB: IBinding): boolean;
    function modifiersEqual(bindingA: IBinding, modifiersB: Set<Modifier>): boolean;
    function hash(binding: IBinding): string;
    function translate(binding: IBinding): Translation;
}
export {};
