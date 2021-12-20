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
import type { DrawnMapTheme } from "game/mapping/IMapRender";
export declare type CanvasImage = HTMLImageElement | HTMLCanvasElement | ImageBitmap;
export default class MapBackground {
    private readonly seed?;
    private readonly canvas;
    constructor(radius: number, seed?: number | undefined);
    render(mapImage: CanvasImage, theme: DrawnMapTheme): Promise<HTMLCanvasElement>;
    private lastTheme?;
    private renderBackground;
}
