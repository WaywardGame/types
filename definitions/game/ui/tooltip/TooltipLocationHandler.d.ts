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
import type Tooltip from "ui/tooltip/Tooltip";
import type { IVector2 } from "utilities/math/IVector";
export declare enum TooltipAnchorType {
    Off = 0,
    Aligned = 1
}
export declare enum TooltipAnchorSideHorizontal {
    Right = 0,
    Left = 1
}
export declare enum TooltipAnchorSideVertical {
    Top = 0,
    Bottom = 1
}
export declare type TooltipAnchorTypeString = Lowercase<keyof typeof TooltipAnchorType>;
export declare type TooltipAnchorSideStringHorizontal = Lowercase<keyof typeof TooltipAnchorSideHorizontal>;
export declare type TooltipAnchorSideStringVertical = Lowercase<keyof typeof TooltipAnchorSideVertical>;
export declare type TooltipAnchorStringHorizontalSimple = `${TooltipAnchorTypeString} ${TooltipAnchorSideStringHorizontal}` | "center";
export declare type TooltipAnchorStringHorizontal = `${"sticky " | ""}${TooltipAnchorStringHorizontalSimple}`;
export declare type TooltipAnchorStringVerticalSimple = `${TooltipAnchorTypeString} ${TooltipAnchorSideStringVertical}` | "center";
export declare type TooltipAnchorStringVertical = `${"sticky " | ""}${TooltipAnchorStringVerticalSimple}`;
export declare type TooltipAnchorStringSimple = TooltipAnchorStringHorizontalSimple | TooltipAnchorStringVerticalSimple;
export declare type TooltipAnchorString = TooltipAnchorStringHorizontal | TooltipAnchorStringVertical;
export interface ITooltipLocationPreference {
    xAnchor: ITooltipLocationHorizontalAnchor;
    xRefSelector: string;
    yAnchor: ITooltipLocationVerticalAnchor;
    yRefSelector: string;
}
export interface ITooltipLocationHorizontalAnchor {
    type: TooltipAnchorTypeString | "center";
    side: TooltipAnchorSideStringHorizontal | "center";
    sticky: boolean;
}
export interface ITooltipLocationVerticalAnchor {
    type: TooltipAnchorTypeString | "center";
    side: TooltipAnchorSideStringVertical | "center";
    sticky: boolean;
}
export declare enum TooltipLocationAlignment {
    Left = 0,
    Center = 1,
    Right = 2
}
export interface ITooltipLocation extends IVector2 {
    mouse: boolean;
    padX: boolean;
    alignment?: Lowercase<keyof typeof TooltipLocationAlignment>;
}
export default class TooltipLocationHandler {
    readonly locationPreference: ITooltipLocationPreference[];
    private readonly _tooltip;
    get tooltip(): Tooltip | undefined;
    constructor(tooltip: Tooltip);
    isMouse(): boolean;
    reset(): this;
    add(xAnchor: TooltipAnchorStringHorizontal, yAnchor: TooltipAnchorStringVertical): this;
    add(xAnchor: TooltipAnchorStringHorizontal, xRefSelector: string, yAnchor: TooltipAnchorStringVertical): this;
    add(xAnchor: TooltipAnchorStringHorizontal, yAnchor: TooltipAnchorStringVertical, yRefSelector: string): this;
    add(xAnchor: TooltipAnchorStringHorizontal, xRefSelector: string, yAnchor: TooltipAnchorStringVertical, yRefSelector: string): this;
    private parseAnchor;
    private location;
    get(): ITooltipLocation;
    update(): void;
    private readonly refCache;
    private resolveAnchorRef;
}
