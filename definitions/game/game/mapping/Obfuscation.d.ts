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
import type { CanvasImage } from "@wayward/game/game/mapping/Background";
import type { DrawnMapTheme } from "@wayward/game/game/mapping/IMapRender";
export default class Obfuscation {
    private readonly seed?;
    private readonly canvas;
    constructor(radius: number, seed?: (Uint16Array | number) | undefined);
    obfuscate(mapImage: CanvasImage, obfuscation: number, theme: DrawnMapTheme): Promise<HTMLCanvasElement>;
    private render;
}
