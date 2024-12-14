/*!
 * Copyright 2011-2024 Unlok
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
}
export default Errors;
export declare function ensureExhaustive(value: never): never;
