/*!
 * Copyright Unlok, Vaughn Royko 2011-2020
 * http://www.unlok.ca
 *
 * Credits & Thanks:
 * http://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import { DrawnMapTheme } from "game/mapping/IMapRender";
export default class MapBackground {
    private readonly seed?;
    private readonly canvas;
    constructor(radius: number, seed?: number | undefined);
    render(mapImage: CanvasImageSource, theme: DrawnMapTheme): Promise<HTMLCanvasElement>;
    private renderBackground;
}
