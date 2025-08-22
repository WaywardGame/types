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
export declare enum InfoDisplayLevel {
    Always = 0,
    NonVerbose = 1,
    NonExtra = 2,
    Extra = 8,
    Verbose = 16,
    Never = 32
}
declare const enum CompileTimeInfoDisplayLevel {
    A = 0,
    ExtraNonVerbose = 9
}
export declare namespace InfoDisplayLevel {
    type ExtraNonVerbose = CompileTimeInfoDisplayLevel.ExtraNonVerbose;
    const ExtraNonVerbose: ExtraNonVerbose;
    function canDisplay(level: InfoDisplayLevel, ...toDisplay: InfoDisplayLevel[]): boolean;
    function max(level: InfoDisplayLevel | undefined): InfoDisplayLevel | undefined;
    function max(a: InfoDisplayLevel | undefined, b: InfoDisplayLevel | undefined): InfoDisplayLevel | undefined;
    function min(level: InfoDisplayLevel | undefined): InfoDisplayLevel | undefined;
    function min(a: InfoDisplayLevel | undefined, b: InfoDisplayLevel | undefined): InfoDisplayLevel | undefined;
}
export declare enum InfoClass {
    Header = "info-provider-header",
    Title = "info-provider-title",
    Subtitle = "info-provider-subtitle",
    Description = "info-provider-description",
    List = "info-provider-list",
    ListItem = "info-provider-list-item",
    MultiTextParagraph = "info-provider-multi-text-paragraph",
    DisplayRoot = "display-root",
    DisplayLevelExtra = "display-level-extra",
    DisplayLevelVerbose = "display-level-verbose"
}
export {};
