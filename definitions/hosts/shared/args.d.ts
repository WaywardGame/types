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
export default class Args {
    readonly all: string[];
    readonly raw: string;
    readonly string: string;
    readonly indicators: string[];
    readonly length: number;
    constructor(args?: string | string[], indicators?: string[]);
    /**
     * @returns whether the arguments contains the `anyOf` switch.
     */
    hasSwitch(...anyOf: Array<string | string[]>): boolean;
    /**
     * @returns the first index of the `anyOf` switch in the arguments.
     */
    getSwitchIndex(...anyOf: Array<string | string[]>): number;
    /**
     * @returns all non-switch arguments directly following the first `anyOf` switch in the arguments, stopping upon reaching the next switch argument.
     */
    getInput(anyOf: string | string[], maxLength?: number): string[];
    /**
     * @returns the non-switch text argument directly following the `anyOf` switch, if it exists.
     */
    getStringInput(anyOf: string | string[]): string | undefined;
}
