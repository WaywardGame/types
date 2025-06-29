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
declare namespace JSONHelper {
    function compare(expected: string, actual: string, options?: IOptions): IDifferences;
}
export default JSONHelper;
export interface IDifferences {
    list: Array<{
        address: string;
        expected: any;
        actual: any;
    }>;
    obj?: Partial<Record<"expected" | "actual", Record<string, any> | any[]>>;
}
export interface IOptions {
    arrayMode: "indexed" | "list";
}
