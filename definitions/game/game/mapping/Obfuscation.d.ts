/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import type { CanvasImage } from "game/mapping/Background";
import type { DrawnMapTheme } from "game/mapping/IMapRender";
export default class Obfuscation {
    private readonly seed?;
    private readonly canvas;
    constructor(radius: number, seed?: Uint16Array | undefined);
    obfuscate(mapImage: CanvasImage, obfuscation: number, theme: DrawnMapTheme): Promise<HTMLCanvasElement>;
    private render;
}
