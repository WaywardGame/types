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
declare namespace DebugShared {
    const SYMBOL_JIT: unique symbol;
    export interface JIT<A extends any[] = []> {
        (): any;
        (...args: A): any;
        [SYMBOL_JIT]: true;
    }
    export function isJIT(value: unknown): value is JIT;
    export function JIT<A extends any[]>(debug: JIT, fn: (debug: any, ...args: A) => any): JIT<A>;
    export function JIT<A extends any[]>(fn: (...args: A) => any): JIT<A>;
    export {};
}
export default DebugShared;
