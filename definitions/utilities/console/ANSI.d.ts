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
declare const colors: {
    default: number;
    dim: number;
    veryDim: number;
    bright: number;
    selected: {
        startCode: string;
        resetCode: string;
    };
    bold: {
        startCode: string;
        resetCode: string;
    };
    error: number;
    warning: number;
    important: number;
    notice: number;
    file: number;
    number: number;
    boolean: number;
    function: number;
    string: number;
    symbol: number;
};
interface ANSITagFunction {
    startCode: string;
    resetCode: string;
    (strings: TemplateStringsArray, ...values: Array<string | number>): string;
    (...strings: Array<string | number>): string;
}
declare enum CursorStyle {
    Configured = 0,
    BlinkingBlock = 1,
    SteadyBlock = 2,
    BlinkingUnderline = 3,
    SteadyUnderline = 4,
    BlinkingBar = 5,
    SteadyBar = 6
}
type ANSIColours = {
    [NAME in keyof typeof colors]: ANSITagFunction;
};
type ANSICursorStyles = {
    -readonly [NAME in Exclude<keyof typeof CursorStyle, number> as `cursor${NAME}`]: string;
};
interface ANSI extends ANSIColours, ANSICursorStyles {
}
declare class ANSI {
    readonly CursorStyle: typeof CursorStyle;
    readonly resetForeground: string;
    readonly resetBackground: string;
    readonly cursorHide: string;
    readonly cursorShow: string;
    readonly clear = "\u001Bc\u001B[EJ\u001B[2J";
    constructor();
    strip(str: string): string;
    unstrip(str: string): string;
    trimResetsFromEnd(str: string): string;
    slice(str: string, start: number, end?: number): string;
    /**
     * Maps a coloured index into a plain index
     */
    mapIndex(str: string, colouredIndex: number): number;
    /**
     * Maps a plain index into a coloured index
     */
    mapPlainIndex(str: string, plainIndex: number): number;
}
declare const _default: ANSI;
export default _default;
