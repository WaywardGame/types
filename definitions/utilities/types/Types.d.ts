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
interface PartialUnionizer<TYPES extends any[]> {
    [0]: never;
    [1]: Partial<TYPES[0]>;
    [2]: Partial<TYPES[0]> & Partial<TYPES[1]>;
    [3]: Partial<TYPES[0]> & Partial<TYPES[1]> & Partial<TYPES[2]>;
    [4]: Partial<TYPES[0]> & Partial<TYPES[1]> & Partial<TYPES[2]> & Partial<TYPES[3]>;
    [5]: Partial<TYPES[0]> & Partial<TYPES[1]> & Partial<TYPES[2]> & Partial<TYPES[3]> & Partial<TYPES[4]>;
    [6]: Partial<TYPES[0]> & Partial<TYPES[1]> & Partial<TYPES[2]> & Partial<TYPES[3]> & Partial<TYPES[4]> & Partial<TYPES[5]>;
}
declare global {
    type PartialUnion<TYPES extends any[]> = TYPES[number] & PartialUnionizer<TYPES>[Extract<TYPES["length"], keyof PartialUnionizer<TYPES>>];
    type MappedOmit<T, K extends keyof T> = {
        [P in keyof T as P extends K ? never : P]: T[P];
    };
}
declare const _default: {};
export default _default;
