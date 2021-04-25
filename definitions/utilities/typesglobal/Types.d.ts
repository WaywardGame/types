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
export default undefined;
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
}
