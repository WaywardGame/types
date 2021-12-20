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
import type Dictionary from "language/Dictionary";
import type UiTranslation from "language/dictionary/UiTranslation";
import type { ISerializedTranslation } from "language/ITranslation";
import type Translation from "language/Translation";
import type Component from "ui/component/Component";
import type { IStringSection } from "utilities/string/Interpolator";
export interface IComponentEvents {
    show(): any;
    hide(): any;
    toggleVisible(visible: boolean): any;
    append(to: HTMLElement | Component): any;
    remove(): any;
    removeForAppend(): any;
    addChild(child: HTMLElement | Component): any;
    removeChild(): any;
    inputChange(event: Event): any;
    /**
     * @returns `false` to cancel removal.
     */
    willRemove(): boolean | void;
    regenerateBox(box: IBox): any;
    enter(reason: "mouse" | "focus"): any;
    leave(reason: "mouse" | "focus"): any;
    focus(): any;
    blur(): any;
    removeContextMenu(): any;
}
export declare type AppendStrategy = "append" | "prepend" | {
    after: Component | string;
} | {
    before: Component | string;
} | {
    sorted(a: Component, b: Component): number;
};
export declare module AppendStrategy {
    const Append = "append";
    const Prepend = "prepend";
    function after(component: Component | string): {
        after: string | Component<HTMLElement>;
    };
    function before(component: Component | string): {
        before: string | Component<HTMLElement>;
    };
    /**
     * A strategy that will use a sorting function in order to find the position the component should be placed.
     * This strategy assumes that the parent's children are already sorted.
     */
    function sorted<C extends Component>(sortFunction: SortingFunction<C>): {
        sorted(a: Component, b: Component): number;
    };
}
export declare enum Namespace {
    SVG = "http://www.w3.org/2000/svg"
}
export declare enum SelectableLayer {
    Screen = 0,
    Menu = 1,
    Dialog = 2,
    Interactable = 3,
    SubInteractable = 4
}
export interface IBaseTranslationData {
    dictionary: Dictionary;
    entry: number;
    index: number | "random";
    args?: any[] | (NullaryFunction[]);
    properties?: string[];
    shouldTrim?: false;
}
export declare type TranslationData = IBaseTranslationData | (Partial<IBaseTranslationData> & {
    entry: UiTranslation;
});
export declare type TextOrTranslationData = string | UiTranslation | TranslationData;
export declare enum TooltipLocation {
    AboveLeft = 0,
    AboveRight = 1,
    TopLeft = 2,
    TopRight = 3,
    CenterLeft = 4,
    CenterRight = 5,
    BottomLeft = 6,
    BottomRight = 7,
    BeneathLeft = 8,
    BeneathRight = 9,
    Mouse = 10
}
export interface IDisableable {
    disabled: boolean;
    setDisabled(disabled: boolean): this;
}
export declare type TranslationGenerator<ENUM extends number = UiTranslation, A extends any[] = []> = Translation | ENUM | ISerializedTranslation | ((...args: A) => Iterable<IStringSection> | Translation | ENUM | ISerializedTranslation | undefined);
export declare type HighlightSelector = [HighlightType, GetterOfOr<string | number>];
export interface IHighlight {
    selectors: HighlightSelector[];
    iterations?: number;
    class?: string;
}
export declare module IHighlight {
    function itemById(id: number): HighlightSelector;
}
export declare enum HighlightType {
    Stat = 0,
    MenuBarButton = 1,
    Selector = 2,
    Skill = 3
}
export interface IBox {
    left: number;
    top: number;
    width: number;
    height: number;
    readonly bottom: number;
    readonly right: number;
}
