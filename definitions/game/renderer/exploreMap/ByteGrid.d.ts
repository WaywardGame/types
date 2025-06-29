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
import type IByteGrid from "@wayward/game/renderer/fieldOfView/IByteGrid";
export default class ByteGrid implements IByteGrid {
    readonly width: number;
    readonly height: number;
    readonly size: number;
    readonly data: Uint8Array;
    constructor(width: number, height: number);
    get(x: number, y: number): number;
    set(x: number, y: number, value: number): void;
    rawSet(i: number, value: number): void;
    clear(): void;
}
