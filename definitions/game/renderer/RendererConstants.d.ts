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
import Vector2 from "@wayward/game/utilities/math/Vector2";
export declare namespace RendererConstants {
    const emptyUint8Array: Uint8Array | null;
    const tileSize = 16;
    const inverseTileSize: number;
    const subTileSize: number;
    const inverseSubTileSize: number;
    function roundToNearestPixel(value: number): number;
    function getPixelOffset(pixels: number): number;
    const fourPixelOffset: number;
    const negativeFivePixelOffset: number;
    const cameraPositionOffset: Vector2;
    const defaultFadeInTime = 2000;
    const texCordsPerSprite = 6;
    function createTexCordArray(capacity: number): Float32Array;
}
