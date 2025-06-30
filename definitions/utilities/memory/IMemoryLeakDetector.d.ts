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
import { ExpectedLifetime } from "@wayward/utilities/memory/ILifetime";
export declare const SYMBOL_MEMORY_LEAK_DETECTOR_PROPERTIES: unique symbol;
export declare const SYMBOL_MEMORY_LEAK_DETECTOR_EXPECTED_LIFETIME: unique symbol;
export declare function DetectMemoryLeaks(expectedLifetime?: ExpectedLifetime): PropertyDecorator;
