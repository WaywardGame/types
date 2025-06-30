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
export declare class Uint1Array {
    private readonly defaultSet;
    private readonly data;
    constructor(bitCount: number, defaultSet?: boolean, data?: Uint8Array);
    get rawData(): Uint8Array;
    isSet(index: number): boolean;
    set(index: number): void;
    clear(index: number): void;
    reset(overrideSet?: boolean): void;
}
