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
declare namespace Errors {
    function get(error: unknown): Error | undefined;
    function toString(error: unknown): string | undefined;
    function getStack(error: unknown): string | undefined;
    function getName(error: unknown): string | undefined;
    function getMessage(error: unknown): string | undefined;
    /**
     * Returns the callsite stack string starting from the caller of this function.
     * @param skip The number of additional callsite strings to skip
     * @param truncate The maximum number of callsite strings to include
     */
    function stack(skip?: number, truncate?: number, stack?: string): string;
    /**
     * Returns the Error callsite string for the caller of the current function.
     */
    function caller(skip?: number): string;
    /**
     * Returns the filename of the caller of the current function.
     */
    function callerFileBasename(skip?: number): string;
    function anonymisePaths(stack: string, to?: string): string;
}
export default Errors;
export declare function ensureExhaustive(value: never): never;
