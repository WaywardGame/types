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
import type Tooltip from "@wayward/game/ui/tooltip/Tooltip";
import type { IVector2 } from "@wayward/game/utilities/math/IVector";
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
export type TooltipAnchorTypeString = Lowercase<keyof typeof TooltipAnchorType>;
export type TooltipAnchorSideStringHorizontal = Lowercase<keyof typeof TooltipAnchorSideHorizontal>;
export type TooltipAnchorSideStringVertical = Lowercase<keyof typeof TooltipAnchorSideVertical>;
export type TooltipAnchorOffset = `+${number}` | `-${number}`;
export type TooltipAnchorStringHorizontalSimple = `${TooltipAnchorTypeString} ${TooltipAnchorSideStringHorizontal}` | "center";
export type TooltipAnchorStringHorizontal = `${"sticky " | ""}${TooltipAnchorStringHorizontalSimple}${"" | ` ${TooltipAnchorOffset}`}`;
export type TooltipAnchorStringVerticalSimple = `${TooltipAnchorTypeString} ${TooltipAnchorSideStringVertical}` | "center";
export type TooltipAnchorStringVertical = `${"sticky " | ""}${TooltipAnchorStringVerticalSimple}${"" | ` ${TooltipAnchorOffset}`}`;
export type TooltipAnchorStringSimple = TooltipAnchorStringHorizontalSimple | TooltipAnchorStringVerticalSimple;
export type TooltipAnchorString = TooltipAnchorStringHorizontal | TooltipAnchorStringVertical;
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
    offset: number;
}
export interface ITooltipLocationVerticalAnchor {
    type: TooltipAnchorTypeString | "center";
    side: TooltipAnchorSideStringVertical | "center";
    sticky: boolean;
    offset: number;
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
    static make(handler: (location: TooltipLocationHandler) => TooltipLocationHandler): (location: TooltipLocationHandler) => TooltipLocationHandler;
    readonly locationPreference: ITooltipLocationPreference[];
    private readonly _tooltip;
    get tooltip(): Tooltip | undefined;
    constructor(tooltip: Tooltip);
    isMouse(): boolean;
    reset(): this;
    /**
     * Add a location fallback by defining an x and y anchor on the source component.
     */
    add(xAnchor: TooltipAnchorStringHorizontal, yAnchor: TooltipAnchorStringVertical): this;
    /**
     * Add a location fallback by defining an x anchor on a selected ancestor component, and a y anchor on the source component.
     */
    add(xAnchor: TooltipAnchorStringHorizontal, xRefSelector: string, yAnchor: TooltipAnchorStringVertical): this;
    /**
     * Add a location fallback by defining an x anchor on the source component, and a y anchor on a selected ancestor component.
     */
    add(xAnchor: TooltipAnchorStringHorizontal, yAnchor: TooltipAnchorStringVertical, yRefSelector: string): this;
    /**
     * Add a location fallback by defining x and y anchors on selected ancestor components.
     */
    add(xAnchor: TooltipAnchorStringHorizontal, xRefSelector: string, yAnchor: TooltipAnchorStringVertical, yRefSelector: string): this;
    private parseAnchor;
    private location;
    get(): ITooltipLocation;
    update(): void;
    private readonly refCache;
    private resolveAnchorRef;
}
