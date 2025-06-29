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
/**
 * Formats a JSON string with custom pretty-printing rules.
 * This function first stringifies the data with tabs as indentation, then applies several formatting improvements:
 *
 * 1. Removes unnecessary tabbing before values in arrays
 * 2. Reduces multiple spaces between comma-separated values to a single space
 * 3. Removes unnecessary whitespace after opening brackets
 * 4. Ensures consistent spacing after commas in arrays and objects
 *
 * @param data - The data to be stringified. Can be any JSON-serializable value
 * @returns A formatted JSON string with customized pretty-printing
 *
 * @example
 * const data = { arr: [1, 2, 3], obj: { a: 1 } };
 * console.log(prettyJsonStringify(data));
 * // Output:
 * // {
 * //     "arr": [1, 2, 3],
 * //     "obj": {
 * //         "a": 1
 * //     }
 * // }
 */
export default function prettyJsonStringify(data: any): string;
