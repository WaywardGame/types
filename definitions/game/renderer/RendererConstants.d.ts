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
import Vector2 from "@wayward/game/utilities/math/Vector2";
export declare const emptyUint8Array: Uint8Array | null;
export declare const tileSize = 16;
export declare const inverseTileSize: number;
export declare const subTileSize: number;
export declare const inverseSubTileSize: number;
export declare function roundToNearestPixel(value: number): number;
export declare function getPixelOffset(pixels: number): number;
export declare const fourPixelOffset: number;
export declare const negativeFivePixelOffset: number;
export declare const cameraPositionOffset: Vector2;
export declare const defaultFadeInTime = 2000;
export declare const texCordsPerSprite = 6;
export declare function createTexCordArray(capacity: number): Float32Array;
