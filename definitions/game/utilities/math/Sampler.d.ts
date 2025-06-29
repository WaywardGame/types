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
import { Direction } from "@wayward/game/utilities/math/Direction";
export default class Sampler<T> {
    readonly data: readonly T[][];
    rotation: Direction;
    readonly hasContent: boolean;
    readonly width: number;
    readonly height: number;
    mirrored: boolean;
    constructor(data: readonly T[][], rotation?: Direction);
    setRotation(rotation: Direction.Cardinal): this;
    setMirrored(mirrored: boolean): this;
    sample(x: number, y: number): T | undefined;
}
