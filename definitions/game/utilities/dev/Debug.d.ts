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
import DebugShared from "@wayward/utilities/dev/DebugShared";
declare namespace Debug {
    function typeIfRelevant(type: string, name: string): string | undefined;
    function where(thing: unknown): string | undefined;
    type JIT<A extends any[]> = DebugShared.JIT<A>;
    const JIT: typeof DebugShared.JIT;
    const isJIT: typeof DebugShared.isJIT;
}
export default Debug;
