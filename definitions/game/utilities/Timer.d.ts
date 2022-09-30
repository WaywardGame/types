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
/// <reference types="node" />
import { ExpectedLifetime } from "utilities/memory/ILifetime";
declare module Timer {
    function apply(): void;
    function printActiveTimers(expectedLifetime: ExpectedLifetime): void;
    function clearAllTimers(): void;
    /**
     * Creates a timeout with the provided expected lifetime
     */
    function createTimeout(callback: (...args: any[]) => void, ms: number, expectedLifetime: ExpectedLifetime): NodeJS.Timer;
    /**
     * Creates an interval with the provided expected lifetime
     */
    function createInterval(callback: (...args: any[]) => void, ms: number, expectedLifetime: ExpectedLifetime): NodeJS.Timer;
}
export default Timer;
