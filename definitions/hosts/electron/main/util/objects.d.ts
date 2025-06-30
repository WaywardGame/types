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
import * as jsonc from "jsonc-parser";
/**
 * @param jsonText A JSON file which may contain comments
 * @param edits An array of 2-value tuples containing the path to the JSON value which should be changed, and the new value
 */
export declare function stringifyEdit(jsonText: string, ...edits: Array<jsonc.JSONPath | string>): string;
export declare function merge(a: any, b: any, jsonText: string): string;
export declare function mergedAnything(): number;
