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
import * as chalk from "ansicolor";
export declare function isDirectory(directory: string): Promise<boolean>;
export declare function readJson<T = unknown>(path: string): Promise<T>;
export declare class TemplateWriter {
    private files;
    constructor();
    /**
     * @param mode What to do if the file already exists
     * @param report Whether to report the changes to the file
     */
    add(file: string | false | 0 | undefined | null, contents: string, mode: "notexist" | "replace" | "ignore", report?: boolean): this;
    /**
     * @param mode What to do if the file already exists
     * @param report Whether to report the changes to the file
     */
    addJSON(file: string | false | 0 | undefined | null, contents: any, mode: "notexist" | "replace" | "mergebefore" | "mergeafter" | "ignore", report?: string | boolean | undefined): this;
    /**
     * @param report What to report on success, `false` or `undefined` to skip
     */
    updateJSON(file: string | false | 0 | undefined | null, contents: any, report: string | undefined | false): this;
    message(file: string, message: string, color?: keyof typeof chalk): string;
    create(): Promise<[boolean, string[] | any]>;
}
