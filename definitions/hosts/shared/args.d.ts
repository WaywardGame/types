/*!
 * Copyright 2011-2021 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
export declare function hasSwitch(args: string, name: string, indicators?: string[]): boolean;
export declare function parseArgument(args: string, name: string, indicators?: string[]): string | undefined;
/**
 * @param searchSwitch Returns the arguments after this given switch, up until an argument starts with the switch indicator
 */
export declare function getNextArguments(searchSwitch: string, indicator?: string): string[];
/**
 * @param searchSwitch Returns the argument after this given switch
 * @param orElse What to return if the argument was not passed
 */
export declare function getNextArgument(searchSwitch: string, orElse?: string, indicator?: string): string | undefined;
